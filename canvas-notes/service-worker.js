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
    "revision": "934ee1f83431dd08edab9de860b593c7"
  },
  {
    "url": "assets/css/16.styles.3799e092.css",
    "revision": "4661471d6bf9d9a87b3a0d24c3e3cdb4"
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
    "url": "assets/js/15.031185e5.js",
    "revision": "797d7cd07dd292facd688ce211fd8658"
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
    "url": "assets/js/app.8307ce38.js",
    "revision": "d47c9409750aee2f7384b47c31c0758e"
  },
  {
    "url": "index.html",
    "revision": "9bc4d4a34dacdf1afdf0ee06a13cc69d"
  },
  {
    "url": "notes/arc.html",
    "revision": "4e0482725a53ead8eaddf891489cc362"
  },
  {
    "url": "notes/beginPath_closePath.html",
    "revision": "d9429f74af3220ba913dd236fa9843db"
  },
  {
    "url": "notes/clearRect.html",
    "revision": "10b212167e36a05536352918776766df"
  },
  {
    "url": "notes/clip.html",
    "revision": "1e99612a352f16b97f2ac21c907412af"
  },
  {
    "url": "notes/createPattern.html",
    "revision": "a51b07988cf3ccd411a7bc0b6c286fbf"
  },
  {
    "url": "notes/drawImage.html",
    "revision": "45f7f91e644b45aba2056af65ce0784c"
  },
  {
    "url": "notes/fill_rule.html",
    "revision": "12ffa88d0ae556a4ec11e970cf82b167"
  },
  {
    "url": "notes/font.html",
    "revision": "5f628fcc8749ccb7ccc4b4a97ff18c34"
  },
  {
    "url": "notes/gradient.html",
    "revision": "3f1e2bc94abd938f4468c5dfdf283daf"
  },
  {
    "url": "notes/line.html",
    "revision": "344203f8686af2b346674b3074cd446e"
  },
  {
    "url": "notes/other_api.html",
    "revision": "8f6a12d8071d22fdc636aeba0445393d"
  },
  {
    "url": "notes/rect.html",
    "revision": "374269067e7454b560d73261b91d4d99"
  },
  {
    "url": "notes/save_restore.html",
    "revision": "4d7d11a781be4ef43c4311449acb37a0"
  },
  {
    "url": "notes/shadow_globalAlpha_globalCompositeOperation.html",
    "revision": "76f2e1cae0b11259dfddb07a3ed2faf5"
  },
  {
    "url": "notes/transform.html",
    "revision": "f1fbe4c674918bcdd8389d65dd605e42"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
