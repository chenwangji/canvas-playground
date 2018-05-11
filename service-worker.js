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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.2.0/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "b2bbfb10e0c456fe2e63101a775e2c5f"
  },
  {
    "url": "assets/css/16.styles.77dfd4df.css",
    "revision": "9fd1fd5e0152c627ab9a9aa630c840b4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/0.a9aaf172.js",
    "revision": "67975c043b615896859086caafbdca8a"
  },
  {
    "url": "assets/js/1.1e304ca7.js",
    "revision": "1a656f9041b18e3b2d1193beb2a1239e"
  },
  {
    "url": "assets/js/10.b3329dd3.js",
    "revision": "c1457838e587e31e7ee2dfded17c8e40"
  },
  {
    "url": "assets/js/11.5b798750.js",
    "revision": "800a8883dc777eb9229ccb0389200732"
  },
  {
    "url": "assets/js/12.44681285.js",
    "revision": "779dd9417f8fbc20a8c50f45a2e2b593"
  },
  {
    "url": "assets/js/13.9b38d8e1.js",
    "revision": "a32ac174030fc86549d20fb86b0102b0"
  },
  {
    "url": "assets/js/14.e36eda92.js",
    "revision": "eb955200e00da58e7ecc1d613877d220"
  },
  {
    "url": "assets/js/15.75102de8.js",
    "revision": "6dcddf1057585ddf9b76c51f4898a60f"
  },
  {
    "url": "assets/js/2.f1ba10de.js",
    "revision": "83db344a081b136f4e61c8f9b8e541c9"
  },
  {
    "url": "assets/js/3.0a04b451.js",
    "revision": "c4dbe15172706c5a06005c18b79ff5b3"
  },
  {
    "url": "assets/js/4.84f5f233.js",
    "revision": "606362b24e1e38ca1efa734d19ccab22"
  },
  {
    "url": "assets/js/5.3fca793c.js",
    "revision": "5eda08763feed196fcd5cb207a836a6c"
  },
  {
    "url": "assets/js/6.5ad8dad3.js",
    "revision": "6f97f4685cf1c12af8709ff5547b94f8"
  },
  {
    "url": "assets/js/7.627449a8.js",
    "revision": "3132a25d7c5aa6b30febffc52001e421"
  },
  {
    "url": "assets/js/8.963a2224.js",
    "revision": "c239cf5eba86fb5427283c7fd35f6c20"
  },
  {
    "url": "assets/js/9.c5e7ae68.js",
    "revision": "6881ecc459e7f413a03c57f4832bec3b"
  },
  {
    "url": "assets/js/app.9b66e629.js",
    "revision": "44612fa054cee5fb005487b2523bcdfb"
  },
  {
    "url": "index.html",
    "revision": "9254d8390d645696b8083ceaac67735a"
  },
  {
    "url": "notes/arc.html",
    "revision": "f63ff65511f1d6955fc92774a92981c6"
  },
  {
    "url": "notes/beginPath_closePath.html",
    "revision": "92a6dd4ba240257431a6903ab9a9e77f"
  },
  {
    "url": "notes/clearRect.html",
    "revision": "4596096adf6ea036e72d82435952e838"
  },
  {
    "url": "notes/clip.html",
    "revision": "c8a2e22129274bc8b13c091d8bb9a07f"
  },
  {
    "url": "notes/createPattern.html",
    "revision": "8ab50d86ed3d4914099482e5ce99d2d5"
  },
  {
    "url": "notes/drawImage.html",
    "revision": "ee748c90a1c61207e17290694f3139b7"
  },
  {
    "url": "notes/fill_rule.html",
    "revision": "458768805a78f53b91b0dc1e2e1d10ad"
  },
  {
    "url": "notes/font.html",
    "revision": "8882bd931a1669402a385e7899f34ef5"
  },
  {
    "url": "notes/gradient.html",
    "revision": "a57eb133113cbe89c593d09de17840fa"
  },
  {
    "url": "notes/line.html",
    "revision": "6e835df9675b534868ad66d5020938e9"
  },
  {
    "url": "notes/other_api.html",
    "revision": "3bbe9408ac742d893c88039c390d0f68"
  },
  {
    "url": "notes/rect.html",
    "revision": "7db43d9662228bc3db64c2c902b09667"
  },
  {
    "url": "notes/save_restore.html",
    "revision": "3c64b58bbf08b6911f2cb4b394a4d4d9"
  },
  {
    "url": "notes/shadow_globalAlpha_globalCompositeOperation.html",
    "revision": "a11deacc4b4d1feb259b426964fe709f"
  },
  {
    "url": "notes/transform.html",
    "revision": "e760fdee872dc81581decd2b786cb8e7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
