// Service Worker for Performance Optimization
const CACHE_NAME = 'xpanix-v1.0.0';
const STATIC_CACHE = 'static-v1.0.0';
const DYNAMIC_CACHE = 'dynamic-v1.0.0';

// Files to cache immediately
const STATIC_FILES = [
  '/',
  '/index.html',
  '/manifest.json',
  // Add critical CSS and JS files after build
];

// Cache strategies
const CACHE_STRATEGIES = {
  // Cache first, then network (for static assets)
  CACHE_FIRST: 'cache-first',
  // Network first, then cache (for API calls)
  NETWORK_FIRST: 'network-first',
  // Stale while revalidate (for images)
  STALE_WHILE_REVALIDATE: 'stale-while-revalidate',
};

// Install event - cache static files
self.addEventListener('install', (event) => {
  console.log('Service Worker: Installing...');
  
  event.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => {
        console.log('Service Worker: Caching static files');
        return cache.addAll(STATIC_FILES);
      })
      .then(() => {
        console.log('Service Worker: Static files cached');
        return self.skipWaiting();
      })
      .catch((error) => {
        console.error('Service Worker: Error caching static files', error);
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  console.log('Service Worker: Activating...');
  
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((cacheName) => {
              return cacheName !== STATIC_CACHE && 
                     cacheName !== DYNAMIC_CACHE && 
                     cacheName !== CACHE_NAME;
            })
            .map((cacheName) => {
              console.log('Service Worker: Deleting old cache', cacheName);
              return caches.delete(cacheName);
            })
        );
      })
      .then(() => {
        console.log('Service Worker: Activated');
        return self.clients.claim();
      })
  );
});

// Fetch event - implement caching strategies
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET requests
  if (request.method !== 'GET') {
    return;
  }

  // Skip external requests
  if (url.origin !== location.origin) {
    return;
  }

  // Determine cache strategy based on request type
  const strategy = getCacheStrategy(request);
  
  event.respondWith(
    handleRequest(request, strategy)
  );
});

// Determine cache strategy based on request
function getCacheStrategy(request) {
  const url = new URL(request.url);
  const pathname = url.pathname;
  
  // Static assets (JS, CSS, fonts)
  if (pathname.match(/\.(js|css|woff2?|ttf|eot)$/)) {
    return CACHE_STRATEGIES.CACHE_FIRST;
  }
  
  // Images
  if (pathname.match(/\.(png|jpg|jpeg|gif|webp|avif|svg)$/)) {
    return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
  }
  
  // HTML pages
  if (pathname.match(/\.(html?)$/) || pathname === '/') {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // API calls
  if (pathname.startsWith('/api/')) {
    return CACHE_STRATEGIES.NETWORK_FIRST;
  }
  
  // Default: stale while revalidate
  return CACHE_STRATEGIES.STALE_WHILE_REVALIDATE;
}

// Handle requests based on cache strategy
async function handleRequest(request, strategy) {
  const cache = await caches.open(DYNAMIC_CACHE);
  
  switch (strategy) {
    case CACHE_STRATEGIES.CACHE_FIRST:
      return cacheFirst(request, cache);
    
    case CACHE_STRATEGIES.NETWORK_FIRST:
      return networkFirst(request, cache);
    
    case CACHE_STRATEGIES.STALE_WHILE_REVALIDATE:
      return staleWhileRevalidate(request, cache);
    
    default:
      return fetch(request);
  }
}

// Cache first strategy
async function cacheFirst(request, cache) {
  try {
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Cache first strategy failed:', error);
    return new Response('Offline', { status: 503 });
  }
}

// Network first strategy
async function networkFirst(request, cache) {
  try {
    const networkResponse = await fetch(request);
    
    if (networkResponse.status === 200) {
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.log('Network failed, trying cache:', error);
    
    const cachedResponse = await cache.match(request);
    
    if (cachedResponse) {
      return cachedResponse;
    }
    
    return new Response('Offline', { status: 503 });
  }
}

// Stale while revalidate strategy
async function staleWhileRevalidate(request, cache) {
  const cachedResponse = await cache.match(request);
  
  const networkResponsePromise = fetch(request)
    .then(async (networkResponse) => {
      if (networkResponse.status === 200) {
        await cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch((error) => {
      console.error('Network request failed:', error);
      return null;
    });
  
  return cachedResponse || networkResponsePromise;
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    console.log('Service Worker: Background sync triggered');
    event.waitUntil(performBackgroundSync());
  }
});

async function performBackgroundSync() {
  // Implement background sync logic here
  // For example, sync offline form submissions
  console.log('Performing background sync...');
}

// Push notifications (if needed)
self.addEventListener('push', (event) => {
  if (event.data) {
    const data = event.data.json();
    
    const options = {
      body: data.body,
      icon: '/icon-192x192.png',
      badge: '/icon-192x192.png',
      data: data.data,
      actions: data.actions || []
    };
    
    event.waitUntil(
      self.registration.showNotification(data.title, options)
    );
  }
});

// Notification click handling
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  
  if (event.action === 'open_app') {
    event.waitUntil(
      clients.openWindow('/')
    );
  }
});

// Performance optimization: Preload critical resources
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'PRELOAD_RESOURCES') {
    const resources = event.data.resources;
    
    event.waitUntil(
      caches.open(STATIC_CACHE)
        .then((cache) => {
          return cache.addAll(resources);
        })
        .then(() => {
          console.log('Service Worker: Preloaded resources');
        })
    );
  }
});

// Cache management
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
  
  if (event.data && event.data.type === 'CLEAR_CACHE') {
    event.waitUntil(
      caches.keys()
        .then((cacheNames) => {
          return Promise.all(
            cacheNames.map((cacheName) => {
              return caches.delete(cacheName);
            })
          );
        })
        .then(() => {
          console.log('Service Worker: All caches cleared');
        })
    );
  }
});

console.log('Service Worker: Loaded');