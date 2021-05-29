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
    "revision": "db41dbda5624fbb9f47ec3cd89db71fb"
  },
  {
    "url": "assets/css/0.styles.afc797a5.css",
    "revision": "e320cdb0d40a75434a410f6ec9fe4270"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.62389779.js",
    "revision": "4747f2c947e7bd18972d2f36cffec6b5"
  },
  {
    "url": "assets/js/11.36c509f4.js",
    "revision": "18ea8e5dbb733a6b27f97ce7b564553d"
  },
  {
    "url": "assets/js/12.c1a3d5bf.js",
    "revision": "6ea1546e4e165cc3a4e0dee2c8eb9475"
  },
  {
    "url": "assets/js/13.7e0f4426.js",
    "revision": "461376a07971ece0e43ad5bb710cb09a"
  },
  {
    "url": "assets/js/14.8e2bb44b.js",
    "revision": "a38294177d1194dfb9ae7682f3a3e6f1"
  },
  {
    "url": "assets/js/15.209da004.js",
    "revision": "2d1a14cdbb7f1eb763bf1386bee8e592"
  },
  {
    "url": "assets/js/16.571f799f.js",
    "revision": "8f2c66aadfd402b0523de9be5caef8dd"
  },
  {
    "url": "assets/js/17.2061be08.js",
    "revision": "dd6be28d8be28b61af4cc8baa6f167be"
  },
  {
    "url": "assets/js/18.2488a333.js",
    "revision": "32d7c60298f55db40a1d62aad7e5081e"
  },
  {
    "url": "assets/js/19.2773b362.js",
    "revision": "9d40d8f5ce9496855bdc1c59cfa4fa24"
  },
  {
    "url": "assets/js/2.e85ab9f3.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.5177df09.js",
    "revision": "19804026e0364284a6e4373165693063"
  },
  {
    "url": "assets/js/21.6c728553.js",
    "revision": "c46972a112f24800dff13e96843206fb"
  },
  {
    "url": "assets/js/22.8dc04520.js",
    "revision": "51850770421e3b0da78c22968d5f665a"
  },
  {
    "url": "assets/js/23.acfcef7b.js",
    "revision": "df7e7102faca232407297b58ec70fed6"
  },
  {
    "url": "assets/js/24.4eadf02a.js",
    "revision": "0be553c005064224d3bde811fa192084"
  },
  {
    "url": "assets/js/25.938d5bc4.js",
    "revision": "b8c6d55f9d2e8f783e5a3bbd58c1dfca"
  },
  {
    "url": "assets/js/26.16a4a1e3.js",
    "revision": "b78b55b3c695ac37c463f948096ed820"
  },
  {
    "url": "assets/js/27.dced8f1b.js",
    "revision": "e827446b4a135224fcb1ee9ad88e3679"
  },
  {
    "url": "assets/js/28.52b9b146.js",
    "revision": "65eba98a45f76dfb31a255182812b7d5"
  },
  {
    "url": "assets/js/29.fbcce144.js",
    "revision": "e5f2ab2ea2774ad10c62f867887d4c9e"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.032a7321.js",
    "revision": "2c070c63f299688c4becd0aaac3e135d"
  },
  {
    "url": "assets/js/31.c211a4e8.js",
    "revision": "717ef85bdef5ba5aa65b7a3522518576"
  },
  {
    "url": "assets/js/32.bcb0d8f4.js",
    "revision": "bc65ffa77f9f5e002e6f6afdce6bb1ec"
  },
  {
    "url": "assets/js/33.32424f33.js",
    "revision": "4677d575b32d3ac5aee26c42e1fb268b"
  },
  {
    "url": "assets/js/34.589f7e67.js",
    "revision": "cb5096cef2de5ae2af9a0effa165a657"
  },
  {
    "url": "assets/js/35.a5bfb6c0.js",
    "revision": "826a26590a849e2e53cc1ca29d22a75c"
  },
  {
    "url": "assets/js/36.9e8ca4a2.js",
    "revision": "8f7d02785cb781087eed982dffd4edbb"
  },
  {
    "url": "assets/js/37.c7e0e8a9.js",
    "revision": "b09f64d400f5bdadeb20869e8b756506"
  },
  {
    "url": "assets/js/38.1d79293d.js",
    "revision": "e327242119a9c4f178ea76291e554a07"
  },
  {
    "url": "assets/js/39.b0ce1186.js",
    "revision": "401a1a831676a6f6d7f09f9f5bd7fdda"
  },
  {
    "url": "assets/js/4.00a58f83.js",
    "revision": "8b4e9e397188b5cecf7093411b0a5ef1"
  },
  {
    "url": "assets/js/40.ee596b0a.js",
    "revision": "3cc00dd8dc0625ffade0edaf54295c24"
  },
  {
    "url": "assets/js/41.403becf3.js",
    "revision": "cad4d38642fc04388f3a72bfcca82270"
  },
  {
    "url": "assets/js/42.30f8d19b.js",
    "revision": "b6ca26fe3f3a66c0e99427859d742242"
  },
  {
    "url": "assets/js/43.ae88738e.js",
    "revision": "5cbfc4abc1531377bbaa09aa11dc5d88"
  },
  {
    "url": "assets/js/44.5664a4c4.js",
    "revision": "60f13519f473a311b6206574445f5b0c"
  },
  {
    "url": "assets/js/45.a5fdc61f.js",
    "revision": "9376403a72a5e52d256349e37dd6fd6e"
  },
  {
    "url": "assets/js/46.9cd5da2c.js",
    "revision": "e22d6c201955146bdfca3ccd4e97d3e6"
  },
  {
    "url": "assets/js/47.6751c071.js",
    "revision": "9fe6110b4ca87cd30a4350bb288b2296"
  },
  {
    "url": "assets/js/48.8bdc8dc0.js",
    "revision": "969d12be06629f19d1efdbea9386155a"
  },
  {
    "url": "assets/js/49.1af1c873.js",
    "revision": "5405bcb5fd851c6662bf48957c40c976"
  },
  {
    "url": "assets/js/5.9dd0c11e.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
  },
  {
    "url": "assets/js/50.517ff135.js",
    "revision": "a73eaf7b37beb0ec87d1c4b3bed99248"
  },
  {
    "url": "assets/js/51.8077d5c1.js",
    "revision": "3c2b7b45d5ecc47aab425931e87c6523"
  },
  {
    "url": "assets/js/52.1b2a4509.js",
    "revision": "f0f679f9a06fabbda81a4df38cf39e04"
  },
  {
    "url": "assets/js/53.388ab143.js",
    "revision": "5bd0f989457b4e4ff3238525967a9d15"
  },
  {
    "url": "assets/js/54.7e965846.js",
    "revision": "b1d899ad1be9fb08d6420b6939f4e20c"
  },
  {
    "url": "assets/js/55.3566d216.js",
    "revision": "ddc5cd01c8a293ccca5b7eb457d887aa"
  },
  {
    "url": "assets/js/56.6775d10a.js",
    "revision": "e2bd8fad161fc2d832ed187218dce278"
  },
  {
    "url": "assets/js/57.00cd2b25.js",
    "revision": "5d4d0aae8e4f67cd303694b5e35de60f"
  },
  {
    "url": "assets/js/58.b9d87d98.js",
    "revision": "73179f2ffb61e713bae12e822d4d16f6"
  },
  {
    "url": "assets/js/59.1aefbae5.js",
    "revision": "8176e4d8ae3b12b788b556d2ed83dce0"
  },
  {
    "url": "assets/js/6.a403a684.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
  },
  {
    "url": "assets/js/60.32eae69e.js",
    "revision": "c1121fb7ee9b153e45664e2f41281c5f"
  },
  {
    "url": "assets/js/61.69857e37.js",
    "revision": "99de3becc2c8d263e4a31a9c5dbe6c4f"
  },
  {
    "url": "assets/js/62.ca89672b.js",
    "revision": "ff415c0105ac5e1566c015fefb51e31f"
  },
  {
    "url": "assets/js/63.4ed2a997.js",
    "revision": "79f1497a56c30d685780f2a09c02b97c"
  },
  {
    "url": "assets/js/64.968c6991.js",
    "revision": "2fca2ab7b9a89a9153a468f9ca01e364"
  },
  {
    "url": "assets/js/65.5bc91ea6.js",
    "revision": "28f39d05104d4f35a7dc203762c7fbb0"
  },
  {
    "url": "assets/js/66.48ab7b62.js",
    "revision": "ba9d66510c9aa5810ee87ec681764e58"
  },
  {
    "url": "assets/js/67.52d7810a.js",
    "revision": "781e93ced381c1f110b79b65b19e19bf"
  },
  {
    "url": "assets/js/68.3c257dc7.js",
    "revision": "784292db681188bc798360906af42cfb"
  },
  {
    "url": "assets/js/69.536b4c6a.js",
    "revision": "0f7b73db6d2255f0b869d5a3d20493a3"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.40c77184.js",
    "revision": "8d995f0bfa81beda93a6f53ef2b01f1f"
  },
  {
    "url": "assets/js/71.3f429a0e.js",
    "revision": "fb422f2a98916c15c4acfed07fc394f0"
  },
  {
    "url": "assets/js/72.4b425ab6.js",
    "revision": "4d02600ccca5dad7b718a2ed14e7affd"
  },
  {
    "url": "assets/js/73.94445150.js",
    "revision": "6ad7f5fd163dd6b2cfa65a3ec69b47de"
  },
  {
    "url": "assets/js/74.27005481.js",
    "revision": "be215ff80d7e7400f410eb3c1c958ecc"
  },
  {
    "url": "assets/js/75.13c4c300.js",
    "revision": "8145678e39a41dbd43da6d5b1d758978"
  },
  {
    "url": "assets/js/76.718ca6c0.js",
    "revision": "687f4618bc8674117b4be4580b1d5bee"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.13d7aea4.js",
    "revision": "41857b39f7727b5b9461e2b29dc1e825"
  },
  {
    "url": "assets/js/app.a11862c7.js",
    "revision": "809c7010b597c5227cb0a35f1562f8b3"
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
    "url": "course/lagou/index.html",
    "revision": "6393d02f0637f84b4dd5358ee953184f"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "34b985a4fad190dd9ec87f8c94722005"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "4bd4227c470148d05decbda6ba3a572f"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "71ade5bbc844f6f6b069879fa141e337"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "f1e32eea70a997f5d5c5d04460894ab1"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "4f7e676ddc3b9131bda71ded115a0a0d"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "9a1e1872f656c7be0063301c2423f162"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "94784fd6c47bbbc12fa6d42df29fa39c"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "99adfe2e692c59352bea2174abdebc05"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "1a9d873644e912d7f5d4ec422455990a"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "79cc84afb7453f39237c986554663161"
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
    "revision": "3238c984d2a6a886e7d8c3b3c9216a5b"
  },
  {
    "url": "other/upset.html",
    "revision": "861c1545d4bcf7ac65566c2631da3b42"
  },
  {
    "url": "plan.html",
    "revision": "1ae889c23606ebf4d19e4d73f4c2a487"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "62b0a95a5109535254c03064d9bf8ca3"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "ff66e779df5053f130aab4532bddcc63"
  },
  {
    "url": "projects/testhub.html",
    "revision": "748f18f02843ed5debffe7c393693bdb"
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
    "revision": "39bb9092c9f70ed64fb23e22576504be"
  },
  {
    "url": "server/java/index.html",
    "revision": "e26fa3673967257610b58cdeff61a697"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "3abe2aa16080edee6a8a84381ef9f80d"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "b46f2b7c2ce775c1e441cf216c25f761"
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
    "revision": "664e36dddbdd82890e6a40f20b36e2fe"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "f1f9bde8ccf3f3cec2bece7d48fc37e3"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "20980acd17786de30617f8ab14a8e74a"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "eac43b737a856daf16fb7c4f84bde5d0"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "8cbd4ca66206ec326820d7f5e22cf285"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "702adf9cf63031e7036e241aca67195c"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "49d7c9c653574581efc6ef80830cd9ca"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "c5073377350f01e302a1c87c83e8be92"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "15c39f3a32bbb133a8fecbca82aef42d"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "f412913145f0744b62bfad4d87d4c5dc"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "905ba7d4a2ad1c9070353c93f7aac43b"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "c51ad50d1eb513a2940b0b459d0f004d"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "2b6ef0f229ab05cda7369307246a82cc"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "010b9eb7cfd758c5de4fd4832afa22e2"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "57d999a96313d1276f1961a93d85f33f"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "5f3823524c61be6ea2803725406068a2"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "dbb1a5d121e393c09bae3e6946c81e7f"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "45a7b4c31b814def8efed87ed090efbb"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "999bbde595844e4f72f5f7a3fe53a2c9"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "041b00648e3c2c20001d9e8f78011beb"
  },
  {
    "url": "server/python/index.html",
    "revision": "acdca99d330cc26e81f6459eec7ccd61"
  },
  {
    "url": "server/server/index.html",
    "revision": "47b6fb6c7a8e06de508add2fa3853002"
  },
  {
    "url": "server/socket/index.html",
    "revision": "7497b38b8ea029385e0f44452c8b772e"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "f9b495e8496d44511e0e5a1778dba42b"
  },
  {
    "url": "tools/git.html",
    "revision": "97a20b459ee8de899168b3589f5c3919"
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
    "revision": "e7b12933ec8bf62b3478353f11d272a6"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "808a49ff281dea210885184442fdb8cb"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "9e681f94f43b4943844e26ebe1cd2664"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "7360d16641d7041171e0558961b54908"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "27c068f8a4c59666672cf2efa4e32e23"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "d83d0ed545a46fee7a5949fd734d4567"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "4f9018b5d4200a211836635cd8a22704"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "9947c5313312eab262196cbd40f62f49"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "c93d664f6ff303aa00bc3d959dac2647"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "f863b1df9ab5ce927215fd937460c218"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "31980cf392b50ecc76fe95df7e12f0ba"
  },
  {
    "url": "web/basis/async.html",
    "revision": "b1c543012e435dd7d6371c7cf565549e"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "1ff3e56a284ff05a54243fb02a319729"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "d3a3b078493a7c0b84c0d0f2a5ed39f4"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "37f159d346d8b2f93babb62d73f1aaa5"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "e20ba9f001ca688a683ca22f8e3062ae"
  },
  {
    "url": "web/basis/html.html",
    "revision": "bb95c8cf363ab6b7ec654dcc15fe62f2"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "f98bb10ab78cf98a0374d2e5089e6f3a"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "1d986e333b673f064007f8890a7b5152"
  },
  {
    "url": "web/framework/index.html",
    "revision": "736993123cd920c3834d7748153d80ab"
  },
  {
    "url": "web/framework/React.html",
    "revision": "59ed479c688ab6a395435fc3ae590e2f"
  },
  {
    "url": "wechat/index.html",
    "revision": "77750e3549874f60c3f4b671cf66a351"
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
