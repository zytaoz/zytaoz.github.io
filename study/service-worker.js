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
    "revision": "bd31c3af94508a2fe07ce6c98a522286"
  },
  {
    "url": "assets/css/0.styles.67dc0cf7.css",
    "revision": "ba1823a7bbb9f907b1ce3e7f11ffdde8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.090a9934.js",
    "revision": "663875395612aaf67ca216c19cb435c0"
  },
  {
    "url": "assets/js/11.06d04b88.js",
    "revision": "9cc9af6aca065da71949ff8e371fc608"
  },
  {
    "url": "assets/js/12.3255b240.js",
    "revision": "dcf524349b4f70c0fcd00bfd539e0968"
  },
  {
    "url": "assets/js/13.1a6b814d.js",
    "revision": "30e8c9eef7f1fb1749a0b93d86d190aa"
  },
  {
    "url": "assets/js/14.9c2d413b.js",
    "revision": "4915ca39219a918844080f4e123e76aa"
  },
  {
    "url": "assets/js/15.b77d3ba5.js",
    "revision": "dee36bae82f3567754c2b2e8110eae83"
  },
  {
    "url": "assets/js/16.5ea238ab.js",
    "revision": "c5548244f014bf0a4e715dae871bf041"
  },
  {
    "url": "assets/js/17.69515e27.js",
    "revision": "e9a51a16ba74f996cbf710620cb16282"
  },
  {
    "url": "assets/js/18.4d55a71a.js",
    "revision": "3ea94bb373e22897589d9f1ac08e71e8"
  },
  {
    "url": "assets/js/19.17e1db06.js",
    "revision": "961b1f3b8bae01204f7f02cabcfe23ba"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.77996274.js",
    "revision": "c3979bf37517edfc279d1fdacfcf3942"
  },
  {
    "url": "assets/js/21.9cb2c389.js",
    "revision": "a9b05349e78f8b76c2ea28a87f4c5579"
  },
  {
    "url": "assets/js/22.b7e15cdd.js",
    "revision": "b5c3ed02a4cf3c5f2763344cb3d5ce84"
  },
  {
    "url": "assets/js/23.dbd5bdcd.js",
    "revision": "522216d9d56a5fff81f59b0737435999"
  },
  {
    "url": "assets/js/24.3ca38a72.js",
    "revision": "a64dfb7028d4bd94d3bef8f6898069b9"
  },
  {
    "url": "assets/js/25.3e184091.js",
    "revision": "230b88fd0add2b87fcd9c06dbdb5eff6"
  },
  {
    "url": "assets/js/26.285d2773.js",
    "revision": "e1586e343adf614ff2fde18f16e76238"
  },
  {
    "url": "assets/js/27.99ea1b97.js",
    "revision": "6cdad7af2337bdc6f848da4beb7a7bc5"
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
    "url": "assets/js/31.a1f9ae10.js",
    "revision": "4240e9179247bd7c3b6557d21e0932c6"
  },
  {
    "url": "assets/js/32.736a44bd.js",
    "revision": "d56544e32e5aed41d28362a0ec2edbd8"
  },
  {
    "url": "assets/js/33.0633dd40.js",
    "revision": "364effb06645449632b4299d32335d1a"
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
    "url": "assets/js/36.30135d88.js",
    "revision": "b67b4e73e176b079dab176e009d06daa"
  },
  {
    "url": "assets/js/37.a9dd05e3.js",
    "revision": "f292d5b38b1dfb4c8e8a8add09dbb235"
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
    "url": "assets/js/4.5ebb981d.js",
    "revision": "fa8a7d978b9ee9a2a1473a18a40c334d"
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
    "url": "assets/js/44.0cbfa38b.js",
    "revision": "f1cffd41fb6cfc0fa09c7fee89950d68"
  },
  {
    "url": "assets/js/45.486c7657.js",
    "revision": "90f520096602bdae4b2f0a8c6d85810b"
  },
  {
    "url": "assets/js/46.7452b5e0.js",
    "revision": "509ff0d31333a2304280aa7275bd14a7"
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
    "url": "assets/js/5.6beab8ec.js",
    "revision": "24329d4a824053a6aa5447fb796059ed"
  },
  {
    "url": "assets/js/50.c3f6c928.js",
    "revision": "c9f5bcec30cdba100e32f9ba0fe881ca"
  },
  {
    "url": "assets/js/51.c1042cfe.js",
    "revision": "779d733d8483d89351ce3c86487211e2"
  },
  {
    "url": "assets/js/52.c0f548d2.js",
    "revision": "96509594bf9a4c52864632d1b91ff0b6"
  },
  {
    "url": "assets/js/53.2ca7298d.js",
    "revision": "67a0642f25f1a6d07423e6081c65b2f0"
  },
  {
    "url": "assets/js/54.4ee2cc2b.js",
    "revision": "129532a6b9c3c9ecb42967fd425e09b6"
  },
  {
    "url": "assets/js/55.23df5c60.js",
    "revision": "4e57da5a6e37c20eff7b86ae6db80822"
  },
  {
    "url": "assets/js/56.feafc2fe.js",
    "revision": "4511e5ad8254ce031e14590033626c3e"
  },
  {
    "url": "assets/js/57.b35129f0.js",
    "revision": "7021792928a72dd58ddf8c6fe7d45a97"
  },
  {
    "url": "assets/js/58.0677b751.js",
    "revision": "9daad07772d13b9341d3efc909ea2666"
  },
  {
    "url": "assets/js/59.122ee92c.js",
    "revision": "eca46c03b6dcfefd6307d60e72d1e0d0"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.ca44564c.js",
    "revision": "f680e3387f2d4a3db443441c8696af4a"
  },
  {
    "url": "assets/js/61.21f839c9.js",
    "revision": "1a3ba560eefa45a702e4c1df53a33c62"
  },
  {
    "url": "assets/js/62.a5abcdd0.js",
    "revision": "d93362d9179c14b0505ea3c6e5419e8a"
  },
  {
    "url": "assets/js/63.a4f89ebc.js",
    "revision": "8a864548581ffe255179f838915b4073"
  },
  {
    "url": "assets/js/64.d8d96cbb.js",
    "revision": "0045949577729cd75124caf9b47a0cb2"
  },
  {
    "url": "assets/js/65.e312c972.js",
    "revision": "0467a0dee8c05855e40fd043b7f0e0d5"
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
    "url": "assets/js/76.0bb2e64b.js",
    "revision": "69ecf236eab8e713d1824a48ae8ccf22"
  },
  {
    "url": "assets/js/77.c9ceb7d4.js",
    "revision": "4f46923e8d0c1cb02e3f9c296122f025"
  },
  {
    "url": "assets/js/78.224a0a00.js",
    "revision": "7c23d836f9882753e3a839d44d965ba2"
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
    "url": "assets/js/9.e4bc17a7.js",
    "revision": "71c4a87e8c38b07e4fd491a23182309b"
  },
  {
    "url": "assets/js/app.a70df36f.js",
    "revision": "9e43bd65e0d8b6d799e5d83f75949abb"
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
    "revision": "f0c755e1d75fd97732c2df3e48926379"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "a18c619324ed73f4ce720e0236c70d32"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "b6055cc18b4d3ca7b1b8060f65d2e0f0"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "4184d7a8777773a7319502eed93e4d16"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "860a369a160c74d94317a76ef4aa864d"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "2006ed729c3a2c84ace8ef7c5752ad1c"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "9de55b62dbab5376ca58a386f4e141ef"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "25897881fd8a139873087610c2301be2"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "524ec157f92ae076cc79c5eec6949568"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "445f56f657d91f1b5e66957404ace0c1"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "ab81b94f386b8b8b1734f8857a3c167b"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "c4ffbf462c156471ce46e1ca03aa09d2"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "f2c12a58fb1de6aad3e73344814fb991"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "8a707a980e0076611fedb3d76b162a48"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "5333476504f8a95ab495fecae4f79bf5"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "df1c655ec79b2dd18a4b2c0a2cb53465"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "33b19647cede92aaf46264a28612725c"
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
    "revision": "1b468f021dc33e89f4db2198f82be8e7"
  },
  {
    "url": "other/upset.html",
    "revision": "3746e0319dc935e6a3edc86a01786de1"
  },
  {
    "url": "plan.html",
    "revision": "8f5aa5eebc3154129060a4f09a0235d2"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "3dec1d44ab2712f366594e42464b462f"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "c01252a2080a4ff267906283073d6dc6"
  },
  {
    "url": "projects/testhub.html",
    "revision": "a8987dd76090407ba600178cd5069d21"
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
    "revision": "fb31d801670c2fe7052278ba7bcee3cf"
  },
  {
    "url": "server/java/index.html",
    "revision": "449b33c607367f59394f80b30d4fc691"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "e03540766ce4ddc5180c3ea3fd9401cd"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "ffc0a7545b45fcf47ec1fc8a04aefb0e"
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
    "revision": "8ccc3faf6d9b792ee1823166ee647b02"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "14515400bf7f9d11df821b67afdda48b"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "c28618a42c684c4446c785dccdc9d78c"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "15525f2192cf42ef2cc01d27c11570e7"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "c62832c3e3bbf1ea2fb05f04460063f8"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "22b09286de472790f50cdeb7eae6efc7"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "83308202ea5de21c7f018f0798deb275"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "8309de88c3e55d59bf6f44329d22f9f8"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "aece4f817e418cd031f65afeb63d3d4a"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "12bc787b396dacaa8d6dbc1e365722ca"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "f0fd9700533bf8d22ef7075d84dbe815"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "2dbb806263f9aaedb48ee74a6d14de12"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "7a313cfbab1d4179f44a21c7db793125"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "aabb328e32d762d37647dfaeef41099e"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "170c21886ffee9754c9ba39a211083a6"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "ad57b63782075167081b2e66755e4cda"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "030ed5bc1bcdce60bdb50c2cfb558891"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "e4103fbd2679401655bc2f16d8e89016"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "6bbc57ad9de6438455a341556a2cba9f"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "6db40f677ccce7cf085cc5b3ca5788c7"
  },
  {
    "url": "server/python/index.html",
    "revision": "5d25f1f09a4f631a055ec913c3529234"
  },
  {
    "url": "server/server/index.html",
    "revision": "a19b6c2b1543352fa255501157d4e59b"
  },
  {
    "url": "server/socket/index.html",
    "revision": "6140a2d1dc97eea6b16b376042d4209d"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "b16aa3d501ca5237aeb58caad509520a"
  },
  {
    "url": "tools/git.html",
    "revision": "cff2da8077c62fc7a3dcc32430d5491c"
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
    "revision": "135e2fb1beb200232ebc84a744b2d0e5"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "bc27c28d1c8621b6fda50304ef3d9d81"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "8a3c442cfb0a042e1f9f1d3e2c4d5b55"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "4d6b25d0181cc8183f522d73cfb53f30"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "dce30c4f6cd0eaf471ca00509ba377e4"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "648dc4ed9a0cf4832825f431006d6551"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "84c9b6c29496c043cfaa04a852b45b95"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "ef2c21eaa1112787d6a347038ffa4284"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "a175af145c2935ab4eac643eb8c14608"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "28b2ee3286c9325f8f05ab84fa9a9f02"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "ff7bb9109fef078d2a8b221061960183"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "09e8295926f9627a044f2093e45d69f6"
  },
  {
    "url": "web/basis/async.html",
    "revision": "ff2409795f3d84aec9f1a0bc7831a357"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "98fc74b2990111139a2982c031f7cf26"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "dacf0ff9e8451bf5911a4156564ad2a0"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "09fa60c7fb3b3e4bb407fa99f581fa2a"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "059e1a0813f8bd419a20fce435173842"
  },
  {
    "url": "web/basis/html.html",
    "revision": "8043fa243d9263dbb46b7c793018ec2e"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "effc377917d17e4e5d53f2c55384350b"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "06f96767d674e7e95c3552686a0902d7"
  },
  {
    "url": "web/framework/index.html",
    "revision": "eb092af2279bf1c5d488186b3b744f35"
  },
  {
    "url": "web/framework/React.html",
    "revision": "194719f562172d0b0195103e8190a656"
  },
  {
    "url": "wechat/index.html",
    "revision": "f0f401b1c67a142953dde790023df19b"
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
