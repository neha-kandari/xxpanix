import React, { useState, useCallback, useRef } from 'react'
import { createIntersectionObserver } from '../utils/performance'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  sizes?: string
  priority?: boolean
  placeholder?: string
  onLoad?: () => void
  onError?: () => void
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  sizes = '100vw',
  priority = false,
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzMzMzMzMyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmaWxsPSIjNjY2NjY2IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iMC4zZW0iIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCI+TG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
  onLoad,
  onError,
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [hasError, setHasError] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  // Intersection observer for lazy loading
  const observerCallback = useCallback((entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true)
      }
    })
  }, [])

  React.useEffect(() => {
    if (priority) return

    const observer = createIntersectionObserver(observerCallback, {
      rootMargin: '100px', // Load image 100px before it comes into view
    })

    if (observer && imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (observer && imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [observerCallback, priority])

  const handleLoad = useCallback(() => {
    setIsLoaded(true)
    onLoad?.()
  }, [onLoad])

  const handleError = useCallback(() => {
    setHasError(true)
    onError?.()
  }, [onError])

  // Generate srcset for responsive images
  const generateSrcSet = (baseSrc: string) => {
    const extensions = ['webp', 'avif']
    const sizes = [320, 640, 768, 1024, 1280, 1920]
    
    return extensions.map(ext => {
      const srcset = sizes.map(size => {
        const optimizedSrc = baseSrc.replace(/\.(png|jpg|jpeg|gif)$/i, `_${size}w.${ext}`)
        return `${optimizedSrc} ${size}w`
      }).join(', ')
      
      return { type: `image/${ext}`, srcset }
    })
  }

  // Check if image is a GIF (don't convert GIFs to WebP as they lose animation)
  const isGif = src.toLowerCase().endsWith('.gif')
  const srcSets = isGif ? [] : generateSrcSet(src)

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder while loading */}
      {!isLoaded && (
        <img
          src={placeholder}
          alt=""
          className="absolute inset-0 w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {/* Main image */}
      {isInView && (
        <picture>
          {/* Modern formats with srcset */}
          {srcSets.map((srcSet, index) => (
            <source
              key={index}
              type={srcSet.type}
              srcSet={srcSet.srcset}
              sizes={sizes}
            />
          ))}
          
          {/* Fallback image */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={handleLoad}
            onError={handleError}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        </picture>
      )}
      
      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-800 text-white">
          <span className="text-sm">Failed to load image</span>
        </div>
      )}
      
      {/* Loading overlay */}
      {isInView && !isLoaded && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      )}
    </div>
  )
}

export default OptimizedImage