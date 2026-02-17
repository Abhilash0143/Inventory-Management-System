self.addEventListener('push', event => {
  const data = event.data?.json() || {}

  event.waitUntil(
    self.registration.showNotification(data.title || 'Inbound Alert', {
      body: data.body || 'Pending action',
      data: { url: data.url || '/' },
      vibrate: [500, 200, 500, 200, 800], // long vibration (Android)
    })
  )
})

self.addEventListener('notificationclick', event => {
  event.notification.close()
  event.waitUntil(
    clients.openWindow(event.notification.data?.url || '/')
  )
})
