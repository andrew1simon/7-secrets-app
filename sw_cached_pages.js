const cacheName = 'v5';

const cacheAssets = [
  '/manifest.webmanifest' ,
  '/sw_cached_pages.js' , 
  '/sw_cached_site.js' ,
  '/styles.css',
  '/js/main.js' , 
  '/new-index.html' ,
  '/new-index' ,
  '/new-index.js' ,
  '/img/sunshine.jpeg' ,
  'img/app-icon.jpg',
  'img/home-img.png',
  'img/logo app.png',
  'img/احبك معنى كل حاجة.png',
  'img/الشعار.png' ,
  'img/اليوم الاول بعد التعديل.png',
  'img/اليوم التانى بعد التعديل.png',
  'img/اليوم الثالث.png' ,
  'img/اليوم الرابع نسخة 2.png' ,
  'img/امدح فى البتول.png' ,
  'img/انا ساكن فى حصون الصخر.png' ,
  'img/طول ما انت لينا اغلى رفيق.png',
  'img/يا مريم.png',
  'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap' ,
  'https://unpkg.com/onsenui/css/onsenui.css' ,
  'https://unpkg.com/onsenui/css/onsen-css-components.min.css' ,
  'https://unpkg.com/onsenui/js/onsenui.min.js' ,
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css' ,
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css' ,

];

// Call Install Event
self.addEventListener('install', e => {
  console.log('Service Worker: Installed');

  e.waitUntil(
    caches
      .open(cacheName)
      .then(cache => {
        console.log('Service Worker: Caching Files');
        cache.addAll(cacheAssets);
      })
      .then(() => self.skipWaiting())
  );
});

// Call Activate Event
self.addEventListener('activate', e => {
  console.log('Service Worker: Activated');
  // Remove unwanted caches
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            console.log('Service Worker: Clearing Old Cache');
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Call Fetch Event
self.addEventListener('fetch', e => {
  console.log('Service Worker: Fetching');
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)))// caches.match(e.request)));
});
