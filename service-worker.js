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
    "revision": "97592aeb5ad7c978c48433fa60fdf552"
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
    "url": "assets/js/app.f3b243ed.js",
    "revision": "bb988e2675a4d80bec309cbd79a1a178"
  },
  {
    "url": "index.html",
    "revision": "88242bb172b1faeda3debc57b088bbd3"
  },
  {
    "url": "notes/arc.html",
    "revision": "2001839366843c40507c7a870e19116f"
  },
  {
    "url": "notes/beginPath_closePath.html",
    "revision": "33d3a182381403a061e622740f2df23c"
  },
  {
    "url": "notes/clearRect.html",
    "revision": "d98cf3d8d88bf17591b6d6c4588564e5"
  },
  {
    "url": "notes/clip.html",
    "revision": "df9c9fae062f675b71caae6c3d6e2b32"
  },
  {
    "url": "notes/createPattern.html",
    "revision": "da7b7dd22ca7e7dd874a3f23c4a0f2bb"
  },
  {
    "url": "notes/drawImage.html",
    "revision": "f4c120d6282b823221f07ce33a9c90b8"
  },
  {
    "url": "notes/fill_rule.html",
    "revision": "ea0cc733cb272849270a81def91eb524"
  },
  {
    "url": "notes/font.html",
    "revision": "a65de8c637baed1ddcd0dc5a00acdda4"
  },
  {
    "url": "notes/gradient.html",
    "revision": "324a41f16c854ca75c163ce9344efc13"
  },
  {
    "url": "notes/line.html",
    "revision": "e79c02d4f193232be830f51e0a8e75ce"
  },
  {
    "url": "notes/other_api.html",
    "revision": "e617f399ba9b8b32dc7872c2f9d1f6f2"
  },
  {
    "url": "notes/rect.html",
    "revision": "d92df138ff57ed12b5c76317601a9e52"
  },
  {
    "url": "notes/save_restore.html",
    "revision": "27ced4cd338d6e7ae8a857438397cc2c"
  },
  {
    "url": "notes/shadow_globalAlpha_globalCompositeOperation.html",
    "revision": "72007162f16a2ef5699c100de8fc3ed4"
  },
  {
    "url": "notes/transform.html",
    "revision": "d9bf776dd48d3d11fc4d52f75371d880"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
