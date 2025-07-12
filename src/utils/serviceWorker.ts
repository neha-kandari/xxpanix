// Service Worker Registration and Management
export const isServiceWorkerSupported = () => {
  return 'serviceWorker' in navigator
}

export const registerServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    console.log('Service workers are not supported in this browser')
    return null
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    })

    console.log('Service Worker registered successfully:', registration)

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing
      if (newWorker) {
        newWorker.addEventListener('statechange', () => {
          if (newWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // New service worker is available
              console.log('New service worker available')
              showUpdateNotification()
            } else {
              // Service worker is ready for the first time
              console.log('Service worker is ready')
            }
          }
        })
      }
    })

    // Listen for service worker messages
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event.data && event.data.type === 'CACHE_UPDATED') {
        console.log('Cache updated:', event.data.payload)
      }
    })

    return registration
  } catch (error) {
    console.error('Service Worker registration failed:', error)
    return null
  }
}

export const unregisterServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      await registration.unregister()
      console.log('Service Worker unregistered successfully')
      return true
    }
    return false
  } catch (error) {
    console.error('Service Worker unregistration failed:', error)
    return false
  }
}

export const updateServiceWorker = async () => {
  if (!isServiceWorkerSupported()) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      await registration.update()
      console.log('Service Worker update triggered')
      return true
    }
    return false
  } catch (error) {
    console.error('Service Worker update failed:', error)
    return false
  }
}

export const skipWaiting = () => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'SKIP_WAITING'
    })
  }
}

export const clearCache = () => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'CLEAR_CACHE'
    })
  }
}

export const preloadResources = (resources: string[]) => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'PRELOAD_RESOURCES',
      resources
    })
  }
}

// Show update notification to user
const showUpdateNotification = () => {
  // Create a simple notification
  const notification = document.createElement('div')
  notification.id = 'sw-update-notification'
  notification.innerHTML = `
    <div style="
      position: fixed;
      top: 20px;
      right: 20px;
      background: #333;
      color: white;
      padding: 16px;
      border-radius: 8px;
      z-index: 10000;
      max-width: 300px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.3);
    ">
      <p style="margin: 0 0 12px 0; font-size: 14px;">
        A new version is available!
      </p>
      <div style="display: flex; gap: 8px;">
        <button onclick="updateApp()" style="
          background: #007bff;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        ">
          Update
        </button>
        <button onclick="dismissUpdate()" style="
          background: transparent;
          color: #ccc;
          border: 1px solid #555;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          font-size: 12px;
        ">
          Later
        </button>
      </div>
    </div>
  `

  document.body.appendChild(notification)

  // Add global functions for buttons
  ;(window as any).updateApp = () => {
    skipWaiting()
    window.location.reload()
  }

  ;(window as any).dismissUpdate = () => {
    const notification = document.getElementById('sw-update-notification')
    if (notification) {
      notification.remove()
    }
  }

  // Auto-dismiss after 10 seconds
  setTimeout(() => {
    const notification = document.getElementById('sw-update-notification')
    if (notification) {
      notification.remove()
    }
  }, 10000)
}

// Get service worker status
export const getServiceWorkerStatus = async () => {
  if (!isServiceWorkerSupported()) {
    return 'not-supported'
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (!registration) {
      return 'not-registered'
    }

    if (registration.installing) {
      return 'installing'
    }

    if (registration.waiting) {
      return 'waiting'
    }

    if (registration.active) {
      return 'active'
    }

    return 'unknown'
  } catch (error) {
    console.error('Error getting service worker status:', error)
    return 'error'
  }
}

// Check for updates
export const checkForUpdates = async () => {
  if (!isServiceWorkerSupported()) {
    return false
  }

  try {
    const registration = await navigator.serviceWorker.getRegistration()
    if (registration) {
      await registration.update()
      return true
    }
    return false
  } catch (error) {
    console.error('Error checking for updates:', error)
    return false
  }
}

// Performance monitoring integration
export const reportPerformanceMetrics = (metrics: any) => {
  if (navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'PERFORMANCE_METRICS',
      metrics
    })
  }
}

// Initialize service worker with critical resources
export const initServiceWorker = async () => {
  const registration = await registerServiceWorker()
  
  if (registration) {
    // Preload critical resources
    const criticalResources = [
      '/assets/index.css',
      '/assets/vendor.js',
      '/assets/index.js',
      // Add more critical resources as needed
    ]
    
    // Wait a bit for the service worker to be ready
    setTimeout(() => {
      preloadResources(criticalResources)
    }, 1000)
  }
  
  return registration
}