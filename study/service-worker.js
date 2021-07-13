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
    "revision": "78add8656ad9c22a5affab5ac76a3e4a"
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
    "url": "assets/js/10.e8e30f9f.js",
    "revision": "d09f03e2d4fa8cda9d92250b25008bf1"
  },
  {
    "url": "assets/js/11.c1410e6d.js",
    "revision": "40fa9626a465ac0e25f0a1b687dc8c1f"
  },
  {
    "url": "assets/js/12.49b8c613.js",
    "revision": "4094b76ebd6eb527a87027701d97686b"
  },
  {
    "url": "assets/js/13.a47d2fb0.js",
    "revision": "71a101761fea31c2c7b4df506df4af5a"
  },
  {
    "url": "assets/js/14.c74b99d5.js",
    "revision": "80486c93e84b813ec38e11ac65abd796"
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
    "url": "assets/js/18.c7d4bb19.js",
    "revision": "4871d65afac706509b286fee1ce7fcdc"
  },
  {
    "url": "assets/js/19.e9bcfee4.js",
    "revision": "67a7c7ebb3c645c8b453ad9d2816e244"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.9da512dc.js",
    "revision": "0cf81105b60806704e5297d8fa5c7269"
  },
  {
    "url": "assets/js/21.bf5bbbf7.js",
    "revision": "23092be42e480012c6cb7686abd0a7b8"
  },
  {
    "url": "assets/js/22.883dd68d.js",
    "revision": "e6a9126362beace3be40853711b2f4da"
  },
  {
    "url": "assets/js/23.f35f248b.js",
    "revision": "c4d02ecbc71b85e9d40a0877e4b3cf43"
  },
  {
    "url": "assets/js/24.b02e191b.js",
    "revision": "10d86921d363bac90dd30296011b6c3e"
  },
  {
    "url": "assets/js/25.638feefd.js",
    "revision": "c6a3c30c8df81e4001081cd4d085f812"
  },
  {
    "url": "assets/js/26.74f5e9a0.js",
    "revision": "0dabf4ee551116227a799d1ed63dc7ad"
  },
  {
    "url": "assets/js/27.9d3badf1.js",
    "revision": "f0fb39905bca3d2e38ab92430d656c7f"
  },
  {
    "url": "assets/js/28.8fd90200.js",
    "revision": "b82f76f7850577c367d006805789da05"
  },
  {
    "url": "assets/js/29.cfdf8821.js",
    "revision": "237bd0cf39ed999517b4319cb82565ea"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.2df8bb97.js",
    "revision": "c718e48b610b213a32cd4a6ee64a1f84"
  },
  {
    "url": "assets/js/31.19713387.js",
    "revision": "6911cb441913fdba98c424118a693653"
  },
  {
    "url": "assets/js/32.e48786f0.js",
    "revision": "7fb58270a5dad3d70599b76a32b62401"
  },
  {
    "url": "assets/js/33.cb411b41.js",
    "revision": "3e6e75c0d881b432446fd730768f8fe7"
  },
  {
    "url": "assets/js/34.c50842af.js",
    "revision": "33af142f7324cee1e6211f7f824294e0"
  },
  {
    "url": "assets/js/35.c3d55b25.js",
    "revision": "5cb1858eb8ed96f2e9da4c52ad628987"
  },
  {
    "url": "assets/js/36.201b2cd7.js",
    "revision": "2fdddee203d632a65b516cceeba79bb0"
  },
  {
    "url": "assets/js/37.96b6c7e1.js",
    "revision": "6661fb621fdd511547b15b9cc28e3072"
  },
  {
    "url": "assets/js/38.54e3fb3c.js",
    "revision": "50ebd1cb5d8800945dfd4a7915d3fd65"
  },
  {
    "url": "assets/js/39.88ebbd28.js",
    "revision": "13bab6406f4d693f04147dd086cf9072"
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
    "url": "assets/js/44.28774be0.js",
    "revision": "ed2a875b5935fb41785878b3692d5dd3"
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
    "url": "assets/js/47.6a3f7759.js",
    "revision": "46fbb6b094ae39bf60bb2ebb7fcae24b"
  },
  {
    "url": "assets/js/48.677dd27f.js",
    "revision": "3af7f253e0f8cfdcf1935a379124e2cb"
  },
  {
    "url": "assets/js/49.c016a086.js",
    "revision": "0a64ddf0e99ccc2c593f6a861d1bcdb5"
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
    "url": "assets/js/51.8c811358.js",
    "revision": "15ab93e5a9330a57991135430a6a121f"
  },
  {
    "url": "assets/js/52.38848cc0.js",
    "revision": "46a99bcde76c22663b177488fcf098a5"
  },
  {
    "url": "assets/js/53.595ade3d.js",
    "revision": "5dc3d278821b93ef2e519ce1beb8d741"
  },
  {
    "url": "assets/js/54.7221f883.js",
    "revision": "ba43b2f0e8a33a971cd3b0ff29f0b3d4"
  },
  {
    "url": "assets/js/55.9927a1ab.js",
    "revision": "471270b01308939122ad22e5227b403a"
  },
  {
    "url": "assets/js/56.b3ed3254.js",
    "revision": "ca3b4970358ce2226967d5f0329331b6"
  },
  {
    "url": "assets/js/57.d9849215.js",
    "revision": "e82749b4d2c48c6d0242549c2d7ddc32"
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
    "url": "assets/js/67.03ee66e9.js",
    "revision": "1e66272724375a3bd741d95ad1e93032"
  },
  {
    "url": "assets/js/68.ce99f958.js",
    "revision": "83c489fb0d2b3139752a7097a2b555d2"
  },
  {
    "url": "assets/js/69.8295dfb5.js",
    "revision": "05e33594f9a96da54b11c37098c05ec0"
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
    "url": "assets/js/77.dd88c6ac.js",
    "revision": "990bdd8198c040b69859a8b61e20aece"
  },
  {
    "url": "assets/js/78.5d0e6343.js",
    "revision": "45829c92d4351a718d2cb64981349fbf"
  },
  {
    "url": "assets/js/79.5048872a.js",
    "revision": "198a0dcd61c18ebc333f0f75d3fed3d9"
  },
  {
    "url": "assets/js/8.6237b39a.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
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
    "url": "assets/js/9.7011dc14.js",
    "revision": "08fd60e7d4ca95ba6a2c98b4a7c1070f"
  },
  {
    "url": "assets/js/app.e9c607b0.js",
    "revision": "405841589d5f4f0931071844fe5d9c1c"
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
    "revision": "d740e78c6323bb6e3f2668a92a0cc491"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "759bb1936b9c78da13d50b9ef34b7a80"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "30f07670083e6a363d423b07edcb2945"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "ea7ae7e158d273596826db2d10ed8614"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "b9262e34ac886b439b0f192fccaae1d6"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "5c8df4ff26ab218f96f49b4ece146424"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "5bbec1805831a7072e18ea95b6bed150"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "4ecb278f76e25760df64ab88479446f2"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "d11e301f2516ccc58d75ad56eaea3abb"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "4b622d80641511a09d7bb9c54aac5b58"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "072ae27dc75e11bac2f43a18cd3fd499"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "ae2c4cb6a5f01032d17ab6f6b315b8ab"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "41756a360cd9eba7ddf74267d25f5751"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "7dcf12bcee598a64d02b508331149b1a"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "86a69dadbad45747070ef2d9ce053304"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "46bc51cda8c06031426294e3c178593c"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "d58c64d1694de135be84500c22f992dd"
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
    "revision": "fe5020e35933ad99d0df59028a552dae"
  },
  {
    "url": "other/upset.html",
    "revision": "231f3e7e9d03743d085291db0af804dc"
  },
  {
    "url": "plan.html",
    "revision": "80b427bb86de4dda162057ac8ddb3cd5"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "59516725827ec452c222dc540f29c843"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "dc4e709acd4b7923f094953216a9eca5"
  },
  {
    "url": "projects/testhub.html",
    "revision": "50df3f9c8ea719ddadcc352f2c51d5ce"
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
    "revision": "c4860a4809c8cfb1d6a76e3ebe958d2c"
  },
  {
    "url": "server/java/index.html",
    "revision": "41e07f40d954088b5f934e2e0b6402b5"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "4955fdb080c7eb6745b9720ef32f51a1"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "1b4f0cc93436b1f3b855bfeaa6a89fd2"
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
    "revision": "e10d4d13dd82b9481159df9007bddad6"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "7d09f94fe0cde9990beb267466ad5002"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "1e533a6d8dc8e0f9bbf1890d49a6be32"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "9bc93091695ce825918c6f91db8febe5"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "6bb914a9d978e5bca4271983eaa5d138"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "869d4bf6eb1c921f19df462584b412d1"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "7c9caca513b2dd50a9dce9322785c1ca"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "14c6a028f8fe6b84d6bf2c09158ca5ac"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "bff955e330c22d3fd06c5ff6e0d3060b"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "1da1a0ad3895a2a207682bf5b559bfab"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "8562e2c52cd90977f5bf63a818dadffb"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "ae4d716d5fb829d3af25bbc7a2dc898e"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "79bf4a74fe39559ab0b04b0f9a7013ea"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "d461ac8ae376158b0ab814e3f5353b59"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "f84e2158b1f22cfec9dada334ed2eb95"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "44933c59a9943d3241ce0cb9d9940a0d"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "782ff1bed7de9a327550df5885b1898e"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "8006e2d6298f33c276a036c4c4a18457"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "48e93a863b2c52d66f43177627dcb936"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "c966c7bd6754d97b2d4c48f509265311"
  },
  {
    "url": "server/python/index.html",
    "revision": "d3a2703696e2b19fd11faab4c8b4b4db"
  },
  {
    "url": "server/server/index.html",
    "revision": "0b80dd73491749369ddf4913c97dff84"
  },
  {
    "url": "server/socket/index.html",
    "revision": "af920a64ada03a38509165bec0fd0404"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "6402fcec8f429426b3a04ef82569ea33"
  },
  {
    "url": "tools/git.html",
    "revision": "17d092de45795731838137a4a2466917"
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
    "revision": "acaec2712cbf617979bf86932cac5931"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "db29a62bfe0dc2bcc88466021183febb"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "e13b872935694fe8f4af8c7216da1f1c"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "cfd49b062369e2d032fa4cc0547f4cb4"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "7e055050be745f6e58e70f1d2fbb5afd"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "9035cc56f7e559bb3492ffbdd8878bf1"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "fa280143dd362c7c17dc4c14928fc2a0"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "2cf93e9a412e2bf56843679fddc61e81"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "05bc3e442ead98d9769fbee2b35df728"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "f47cc6cbd85f9800810e52565936d24a"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "e16a2736e3197795f97b3fee4812f3c0"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "fb4e22e827242c46c68614229f56532a"
  },
  {
    "url": "web/basis/async.html",
    "revision": "d04aef62fe5e27c149da182965231a9d"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "1d5dbbd272fec63e3185fd9a33e1572f"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "ead6b3442afc6f92ac9e5365c1a36843"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "03cdd536a3638f971f021e9da7bb11a9"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "7a702b5fc533f227a7da53dfcc0d1f0b"
  },
  {
    "url": "web/basis/html.html",
    "revision": "2685a46d2e5ee443667b468c4620b7eb"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "d5181aeb3528b53d28b7e2bb3ddddf2d"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "bf60ab3689093781553b2a0169c6d24f"
  },
  {
    "url": "web/framework/index.html",
    "revision": "e8cd24fbe8475079b91f2222d53d6510"
  },
  {
    "url": "web/framework/React.html",
    "revision": "b381c47f8cbd9918a0cc4becd1730f4d"
  },
  {
    "url": "wechat/index.html",
    "revision": "954a782b8302d6a264be67181991e6f3"
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
