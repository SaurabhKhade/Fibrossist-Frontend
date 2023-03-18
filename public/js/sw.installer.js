if ("serviceWorker" in navigator) {
  // console.log("Service Worker is registered");
  navigator.serviceWorker.register("/sw.js").catch((e) => e);
}
