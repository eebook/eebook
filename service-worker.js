/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3de5c71f156aefdd83f3d37f626ac160"
  },
  {
    "url": "assets/css/1.styles.24ee845c.css",
    "revision": "61599773297589a7bf0531257ff78faf"
  },
  {
    "url": "assets/css/2.styles.e86dbe63.css",
    "revision": "df7c35ec8029dbbde0735a45f875eaf7"
  },
  {
    "url": "assets/css/3.styles.a57b9aa7.css",
    "revision": "5eaf1fd35e24f8511912305559179263"
  },
  {
    "url": "assets/css/styles.d9ede91b.css",
    "revision": "6a9c59b2dd58ae42bccf13ef29c54ec3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.24ee845c.js",
    "revision": "c83590802e6a283b29ecc121bcd58214"
  },
  {
    "url": "assets/js/2.e86dbe63.js",
    "revision": "51d2efa26cffb8c2cc50f16ca8c33c60"
  },
  {
    "url": "assets/js/3.a57b9aa7.js",
    "revision": "60b97dcf55f23db0f46b2f36882d5348"
  },
  {
    "url": "assets/js/4.59da9f5e.js",
    "revision": "3f165cbfcaf804b23e201a3c1f67ef92"
  },
  {
    "url": "assets/js/5.640ec141.js",
    "revision": "32cf1fcdaa835d042bd081f52f50df41"
  },
  {
    "url": "assets/js/6.8b6c918a.js",
    "revision": "c58a3348505e9c453a3e7c12437be798"
  },
  {
    "url": "assets/js/7.a396ca4d.js",
    "revision": "d0c66bf958a740ac3165fe7cc5b630e6"
  },
  {
    "url": "assets/js/8.f77961fb.js",
    "revision": "a5c4e66da73ce3294a4bd7d95a4e0709"
  },
  {
    "url": "assets/js/app.d9ede91b.js",
    "revision": "d9c5120d623983e75722a88a7b645a44"
  },
  {
    "url": "changelog/index.html",
    "revision": "81a925811c3428701d4bda9f4af7179f"
  },
  {
    "url": "en/index.html",
    "revision": "f10508d5e8f75906830dba6d4643ba79"
  },
  {
    "url": "index.html",
    "revision": "f840447b5324297d5046bdf5dfebdefa"
  },
  {
    "url": "support/index.html",
    "revision": "fc6a750d35ab59ea63cd1b4c205c1541"
  },
  {
    "url": "TODO.html",
    "revision": "1f5e66f0b49f4a78389eb313aa2da372"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
