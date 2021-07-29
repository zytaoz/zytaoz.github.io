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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "827e102911c1dac3badcbc7bfd6f70d0"
  },
  {
    "url": "assets/css/0.styles.84ce4d99.css",
    "revision": "5d03c9029d64ef8474911de81be4ceb5"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.e39476b7.js",
    "revision": "890b7a5e3784018ca75cb2101dbcdefc"
  },
  {
    "url": "assets/js/11.06d04b88.js",
    "revision": "9cc9af6aca065da71949ff8e371fc608"
  },
  {
    "url": "assets/js/12.8d183791.js",
    "revision": "3b8b0b87dffa61e836ff5c6426619d49"
  },
  {
    "url": "assets/js/13.816f6f84.js",
    "revision": "10b6df83b9ab65064e9cee26297f0092"
  },
  {
    "url": "assets/js/14.c40595a5.js",
    "revision": "d921d7894a3b82b1f97167a966dae503"
  },
  {
    "url": "assets/js/15.380c41e0.js",
    "revision": "0f4602f4afbaff94a9e2d0ae5af159c8"
  },
  {
    "url": "assets/js/16.6f6937fb.js",
    "revision": "685abeb303bf861f69b9e09364ede2dc"
  },
  {
    "url": "assets/js/17.5c20a3f7.js",
    "revision": "06678a81901a3b2656caed1cc03aa1f0"
  },
  {
    "url": "assets/js/18.4d55a71a.js",
    "revision": "3ea94bb373e22897589d9f1ac08e71e8"
  },
  {
    "url": "assets/js/19.19afb8e1.js",
    "revision": "300e56e56a4488150b3ae7418e3e665c"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.82fe1027.js",
    "revision": "2759a82e67fc2303c01e5c1785315fce"
  },
  {
    "url": "assets/js/21.bde14c81.js",
    "revision": "f9f45f7919c0a89eb6cf3b8582989baa"
  },
  {
    "url": "assets/js/22.b7e15cdd.js",
    "revision": "b5c3ed02a4cf3c5f2763344cb3d5ce84"
  },
  {
    "url": "assets/js/23.1c9f5215.js",
    "revision": "8fd570c4d1e724a0ec7366ae0e73bab0"
  },
  {
    "url": "assets/js/24.eeea593b.js",
    "revision": "7d435c419b45d91e68d0cf90366e6133"
  },
  {
    "url": "assets/js/25.3e184091.js",
    "revision": "230b88fd0add2b87fcd9c06dbdb5eff6"
  },
  {
    "url": "assets/js/26.f7941f4c.js",
    "revision": "3f4ece0dbb675cc442ccf69b50f538ba"
  },
  {
    "url": "assets/js/27.7e8ccf73.js",
    "revision": "99b5250baa44c7eec1d49fbdb4cc758b"
  },
  {
    "url": "assets/js/28.9d4f1a6b.js",
    "revision": "5ddf568de594115d4ed7ce256963d92f"
  },
  {
    "url": "assets/js/29.54b9e739.js",
    "revision": "2e8eb2e010f6847e7a23bd9db6ce5bb6"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.a1ae3eff.js",
    "revision": "16c77b90b0ee87f7fa1ff9746732fab8"
  },
  {
    "url": "assets/js/31.c0cebea7.js",
    "revision": "ef0df3a37f02414e2a16c4524d387d97"
  },
  {
    "url": "assets/js/32.a00319e4.js",
    "revision": "205c6b98522d3c47de24a348c2784173"
  },
  {
    "url": "assets/js/33.0633dd40.js",
    "revision": "364effb06645449632b4299d32335d1a"
  },
  {
    "url": "assets/js/34.b871be0d.js",
    "revision": "d01149f0d7bb80ac3b32865d6d1616e8"
  },
  {
    "url": "assets/js/35.ca75ae6c.js",
    "revision": "cb8b2355c3f8f7a6b580d913f16b1642"
  },
  {
    "url": "assets/js/36.201b2cd7.js",
    "revision": "2fdddee203d632a65b516cceeba79bb0"
  },
  {
    "url": "assets/js/37.928f1c76.js",
    "revision": "926c139900c5e2f3ab286e1e2a3acbba"
  },
  {
    "url": "assets/js/38.14cbe1f6.js",
    "revision": "f0a141577e3ac706afce79208816ba22"
  },
  {
    "url": "assets/js/39.3a0bb154.js",
    "revision": "3ed3692fbd1d52f5ce6617da37dee9dd"
  },
  {
    "url": "assets/js/4.73435d7f.js",
    "revision": "966013c34df93779b24b90993e0c3e2f"
  },
  {
    "url": "assets/js/40.cf639651.js",
    "revision": "c5dc5c4c23f44584499816bc9237d73d"
  },
  {
    "url": "assets/js/41.a9c66854.js",
    "revision": "e958e91be95c5afd6c5afd7f150938eb"
  },
  {
    "url": "assets/js/42.ce7b2ed1.js",
    "revision": "07f4e807a044d1057908cefa56268233"
  },
  {
    "url": "assets/js/43.b5a31857.js",
    "revision": "a8980f1207079ed82115ffe7a70d846a"
  },
  {
    "url": "assets/js/44.26428aa6.js",
    "revision": "7e7ad0df9ea2ade8a1b9e4712441aa47"
  },
  {
    "url": "assets/js/45.77bd670f.js",
    "revision": "956db50ba3608fa95291c896e71d0817"
  },
  {
    "url": "assets/js/46.d0e3fbfe.js",
    "revision": "b54c0316c373277a3c42f42eb53d7b1a"
  },
  {
    "url": "assets/js/47.12e309ff.js",
    "revision": "44cc8b16560ef6b74d7137c1dd54261e"
  },
  {
    "url": "assets/js/48.b08a7f56.js",
    "revision": "0e7a33e04fe759427004acbdae110cc8"
  },
  {
    "url": "assets/js/49.bb630d82.js",
    "revision": "7fc086910111aa30f369b1c1d8bda6c2"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.968506de.js",
    "revision": "8bef3bbc4a21ee6f70ccc42748b3f85e"
  },
  {
    "url": "assets/js/51.7a88ac18.js",
    "revision": "ca8ddc3f0fcba09989e507c0537f6005"
  },
  {
    "url": "assets/js/52.d172ea02.js",
    "revision": "c7ea9107ceed19ff938ef0a352719d30"
  },
  {
    "url": "assets/js/53.e38231d5.js",
    "revision": "1f0708984f137c449d9e718ecf594a7c"
  },
  {
    "url": "assets/js/54.4ee2cc2b.js",
    "revision": "129532a6b9c3c9ecb42967fd425e09b6"
  },
  {
    "url": "assets/js/55.c12a81e9.js",
    "revision": "70e19b487c2de203cd69224450ecf231"
  },
  {
    "url": "assets/js/56.b3ed3254.js",
    "revision": "ca3b4970358ce2226967d5f0329331b6"
  },
  {
    "url": "assets/js/57.b35129f0.js",
    "revision": "7021792928a72dd58ddf8c6fe7d45a97"
  },
  {
    "url": "assets/js/58.91a5f10c.js",
    "revision": "c888934fcdafaee06d036a5c44d2e8bf"
  },
  {
    "url": "assets/js/59.b16c9aec.js",
    "revision": "53412398f17af9ccf9864b9a8b112859"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.8d934fa0.js",
    "revision": "edd63cb28208a00ae95a8ba0dd5a407f"
  },
  {
    "url": "assets/js/61.f5ad9981.js",
    "revision": "d54c2d8e42fe73d5c3c58c98bb94c3d8"
  },
  {
    "url": "assets/js/62.a5abcdd0.js",
    "revision": "d93362d9179c14b0505ea3c6e5419e8a"
  },
  {
    "url": "assets/js/63.49d5e7f7.js",
    "revision": "dafde30d75e6313275e03bb2e646b8f1"
  },
  {
    "url": "assets/js/64.e15161fe.js",
    "revision": "d34a893f7a519c1600a6cfa8964f4df3"
  },
  {
    "url": "assets/js/65.3fc26a7a.js",
    "revision": "ff469291c874dfb9c782fbc89d54174c"
  },
  {
    "url": "assets/js/66.01e0fbb6.js",
    "revision": "2d85c1026d7eb4662863074ceab501cd"
  },
  {
    "url": "assets/js/67.279811ba.js",
    "revision": "f1818b9e8f931c779b4b9b07d3564181"
  },
  {
    "url": "assets/js/68.a7dd2a14.js",
    "revision": "d1aa7f2b63cf10927d85b8369fbd1547"
  },
  {
    "url": "assets/js/69.22f4f594.js",
    "revision": "5c9db87260ba99a51c5ef0d2cc2a97c4"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.ace06448.js",
    "revision": "066ae0fc4be4349f612f71673220ee56"
  },
  {
    "url": "assets/js/71.f01b3fec.js",
    "revision": "1655638008f9900ba9514bcc2dbcaeb2"
  },
  {
    "url": "assets/js/72.638d8525.js",
    "revision": "355405f84987a83fb33ed2a74a4e575f"
  },
  {
    "url": "assets/js/73.46455d59.js",
    "revision": "262171c94fa74bc8d0ac17a9cf4f25f0"
  },
  {
    "url": "assets/js/74.87027c92.js",
    "revision": "d183ca5ba427ee8bb50bc367334b4f6d"
  },
  {
    "url": "assets/js/75.230aa115.js",
    "revision": "fe234afd58f2cd4464fc59146a86ee45"
  },
  {
    "url": "assets/js/76.d2aeef4a.js",
    "revision": "11ba37d12b222954c98ca56f738a48db"
  },
  {
    "url": "assets/js/77.fc8fa2bf.js",
    "revision": "146b2694a59253c0cc156193c7f2a9f1"
  },
  {
    "url": "assets/js/78.5d0e6343.js",
    "revision": "45829c92d4351a718d2cb64981349fbf"
  },
  {
    "url": "assets/js/79.5cfd4cb2.js",
    "revision": "5fe98466ad4ded1fa48f72deb53430a3"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/80.172a1d86.js",
    "revision": "095575f9b39cd9e44ddac4e5014ed36c"
  },
  {
    "url": "assets/js/81.cfcc9324.js",
    "revision": "4f21dd26ab52b8ae82a5d4633f01c60d"
  },
  {
    "url": "assets/js/82.15e895ba.js",
    "revision": "d8ea2f327e2d6f133641dd5cf1cbba58"
  },
  {
    "url": "assets/js/83.86b682d7.js",
    "revision": "bceba759bee0dc9dd2c7313eb9d9bf56"
  },
  {
    "url": "assets/js/9.e08831f3.js",
    "revision": "a27a30c529e47526935901b12fa07a16"
  },
  {
    "url": "assets/js/app.8cb22248.js",
    "revision": "6c8ca4a1b6eeb42958e5c91aedbd1314"
  },
  {
    "url": "basis/ysyx-xsyx.png",
    "revision": "7067ff639c4a081689df60fd361f795c"
  },
  {
    "url": "basis/yx.png",
    "revision": "3817e52b3a04fa3d53ac019d88038924"
  },
  {
    "url": "basis/yxl1.png",
    "revision": "84b0f2b4f1f82852be9b4495df3609d7"
  },
  {
    "url": "basis/yxl2.png",
    "revision": "f12bd4abbecc09a4448c109acd331fc3"
  },
  {
    "url": "basis/yxl3.png",
    "revision": "80282b6893887a41cdc8009bf2024e7f"
  },
  {
    "url": "basis/yylx.png",
    "revision": "da1612d5c92392abd7cab57fb4ece2e7"
  },
  {
    "url": "basis/zlx.png",
    "revision": "6cd42b5272b4d4422e7ba5b7d9bc938f"
  },
  {
    "url": "basis/zyy.png",
    "revision": "a4bb9c36515f9b9416156277529a4311"
  },
  {
    "url": "course/imooc/index.html",
    "revision": "9c68217e2fda87f859d9c4f77bd2253a"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "eb1e823a86462a405d6c6c81b0ac7c1b"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "7bd9716366df772d6198553d1514e889"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "1da5eaca3e98af88cf15f03cbb9953ae"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "39fd44da54f5ff04e64a96a66400f674"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "5c81048096fc43f637f0048e777bf586"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "915a4301f6ac57daf53019e3344396fc"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "392780d0bf6c61587c186958cc8143b7"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "8f94036611be304421d61b32270858ad"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "904922f6ae2040b197c286edea5dd23e"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "fbebf84ad7ee98c8559338bf8f4954ed"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "8e0608b0fc231951d86f211dce65dc8d"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "e9358aea7055e43a0362e43cacb47596"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "7837c30edcd1858e453ea59f19b64177"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "4a4b4609b4bac73ad25d714daa8a5108"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "df2efca9c953993772096ab520cc1456"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "f6ec64af59f1712ec2e1447a94997296"
  },
  {
    "url": "lagou/eslint-init.png",
    "revision": "dbca62f977ba2df2f10587240f3a315d"
  },
  {
    "url": "lagou/event-loop.jpg",
    "revision": "34fd442793faa9a8003d31533e44a856"
  },
  {
    "url": "lagou/plop.png",
    "revision": "a608f6c7768d37cf4a7b0243531c896a"
  },
  {
    "url": "lagou/prompting.png",
    "revision": "e155900aef4a22d4eceeb573b09a066b"
  },
  {
    "url": "logo.png",
    "revision": "f2d49389c00b6f6aa98183a99dd11916"
  },
  {
    "url": "note.png",
    "revision": "50b88a885cc09b3d5cb79a16326f756b"
  },
  {
    "url": "notebook.png",
    "revision": "88e925d3e1b9c3c8cd2d52cdaa73608e"
  },
  {
    "url": "other/偏激.html",
    "revision": "57bdf281f79727a01f9dcaa1101d5ae7"
  },
  {
    "url": "other/upset.html",
    "revision": "c86562748ec081e1f41cb9f94f17a280"
  },
  {
    "url": "plan.html",
    "revision": "88192bd8c48ec9b03ebc03e3fa39f825"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "3406799956364d8b2c32e212d9741e61"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "e92156b5ad686d2d45f9fd3868ad5300"
  },
  {
    "url": "projects/testhub.html",
    "revision": "8a9cf7fc32e80b30197b8b1ef749b5e4"
  },
  {
    "url": "react/redux/index.png",
    "revision": "290d6ebaab229e5f85d93a651f3dc35c"
  },
  {
    "url": "react/redux/redux-data-flow.png",
    "revision": "f458b0f260f562e14947aba72ef866d3"
  },
  {
    "url": "react/redux/redux-flow.png",
    "revision": "03a5575bd43665790b9c8752bac49e6d"
  },
  {
    "url": "server/index.html",
    "revision": "b3101a715a158019155d912f770e916a"
  },
  {
    "url": "server/java/index.html",
    "revision": "6bf87769be7a05d2ebd17b061abf10bd"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "f316f8bdf1024f2ad6c80bdebab1046d"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "767ccd1a4ba12c4632309ca12594b89d"
  },
  {
    "url": "server/mysql/full.png",
    "revision": "48ed2a9d929f221ed26bba1ab016b6df"
  },
  {
    "url": "server/mysql/inner.png",
    "revision": "8c51781dbdd93ee12436907f58cbc4cf"
  },
  {
    "url": "server/mysql/left.png",
    "revision": "ddecc55f1f2a926531008b28054498fc"
  },
  {
    "url": "server/mysql/right.png",
    "revision": "0701df576f3ca89b3f45f20975a53837"
  },
  {
    "url": "server/node/koa.html",
    "revision": "f06a9355ca506f464efbe5ef5a187a2e"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "4eb48c6f8e28aac202d6626be2d9e7fd"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "fd6f5c86f837fc249efdb676a511ec84"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "499a3e3e888bc5e113090afb06fe0966"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "944fda135f56827d8e39a8f3440ccfcf"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "d9c7916aae91dc0a403fe60c64a7b78e"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "81002cc4630e452abb83a9000b7e85c6"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "b0bc419bd65171b8faebdd723d7de22c"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "bf2331299c4b8a0a0b685ca6881c9957"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "8e4fef90848b0c6362a5c978c589afdd"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "12602806c56822f9f058b3fe15520298"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "76b99e8e1b245e623e7d016b3b73c92f"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "09194f28b5dc1a8f635aa9dd0add240d"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "af822b32e4806ceb14be7594f102b525"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "82c9cf8dff6a2b3483bc4adc68b2f0c5"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "c95b2e0ca355b2d0074033bf0deb75a9"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "01f253dfb57593acacccbe46a58aea1b"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "d3bee6e67547e52e263d37f406dc2bd9"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "c8f7d67914f8e768bcb81e7106202685"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "70c9d2f9134f6f773805bafa4b142f31"
  },
  {
    "url": "server/python/index.html",
    "revision": "f4ef936f7cd727f2a2274609d758e56f"
  },
  {
    "url": "server/server/index.html",
    "revision": "05c0f434531c6f7c3eafa050f5749b9a"
  },
  {
    "url": "server/socket/index.html",
    "revision": "3422e3d9f7b4631bad2c5e9f388ef971"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "8b85258532c946765341018a6667e52f"
  },
  {
    "url": "tools/git.html",
    "revision": "0d6d15265998474bd4fdbfa3051d15cd"
  },
  {
    "url": "tools/git/branch.png",
    "revision": "7bfa104aa21f548fcb9b9accc186eec0"
  },
  {
    "url": "tools/git/git-stage.jpg",
    "revision": "3e759b0d8e43aa9f4bf0efd2ca091e92"
  },
  {
    "url": "web/advanced/libs/index.html",
    "revision": "2473b9b3a06542495a8f47e40b2f6d7b"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "d15e347d212c54895c7edf154752869d"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "5a87fb4e86020f13cb838acabaa9fc8c"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "ca4c18aaa9a16b090ae3bb57e4f3e683"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "5107b256386d6cab7724590d00574728"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "a2eaf0b35cac76156d7f147485e528ae"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "801fb0f0d6e4781e365b0ef88b999cf6"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "7349f656d2b421f88a6df6adde301dfb"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "b433e663b40d2cd9bbe58e78d63c517b"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "9b36539fff2186ca12079b07641a1285"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "7188c32217920c07357cac3cd0152472"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "c3c9462a5d46b4142eb4b31de80735bc"
  },
  {
    "url": "web/basis/async.html",
    "revision": "a4fd218b7aee94101b404497fbeaf9ec"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "abdeef15037b7189a477b308b92a2e0f"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "086e5ca9867b1c000e63ed6716445e3a"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "48ab5a4f3d8884d07d1f35b868297661"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "9ecf6c2750c0846032a328fb9355bd63"
  },
  {
    "url": "web/basis/html.html",
    "revision": "d07d8c62c2fbdf87858c461591b623ea"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "281ca72ff9c226a055f7738b7c18a626"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "53513ce87e4cbe93289d3219c8468f61"
  },
  {
    "url": "web/framework/index.html",
    "revision": "d4a152cb0a1de53db11a216adc764527"
  },
  {
    "url": "web/framework/React.html",
    "revision": "032f61f8c5d3b59be7f46a613729c8dd"
  },
  {
    "url": "wechat/index.html",
    "revision": "8d9477f51d322b2d58028458f4ff3bc1"
  }
].concat(self.__precacheManifest || []);
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
