importScripts("jokes.js");

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  setInterval(() => {
    if (Notification.permission === 'granted') {
      self.registration.showNotification("😂 Sarcastic Joke", {
        body: getRandomJoke(),
        icon: 'icon.png'
      });
    }
  }, 5 * 60 * 1000); // every 5 minutes
});