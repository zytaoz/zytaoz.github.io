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
    "revision": "411aa2c699f033ae0b7ede3bab438c86"
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
    "url": "assets/js/10.15dba463.js",
    "revision": "b77d6e31b67700b75d4e3b0259e3fb06"
  },
  {
    "url": "assets/js/11.e7e66a06.js",
    "revision": "1408842c1759500e27b1d9d78af87182"
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
    "url": "assets/js/16.a10f9e12.js",
    "revision": "a2ff5b57e8f4ad885abe5ffabeaf133d"
  },
  {
    "url": "assets/js/17.2061be08.js",
    "revision": "dd6be28d8be28b61af4cc8baa6f167be"
  },
  {
    "url": "assets/js/18.69e0aab3.js",
    "revision": "979c9ac26d34bc627628cf2b09d88c22"
  },
  {
    "url": "assets/js/19.865588d3.js",
    "revision": "10d71c5c17f5667d7e6f501eb8d32905"
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
    "url": "assets/js/25.3103cc54.js",
    "revision": "35c374ab0d4759bd2d1630f869057eb5"
  },
  {
    "url": "assets/js/26.3c2a5406.js",
    "revision": "906d547d3e086b1dc2b2b68294ffb2c3"
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
    "url": "assets/js/4.229959be.js",
    "revision": "f8edf922380f8c82f132d97d6d6e7e26"
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
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
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
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.32eae69e.js",
    "revision": "c1121fb7ee9b153e45664e2f41281c5f"
  },
  {
    "url": "assets/js/61.4eaf2fb1.js",
    "revision": "a5601c16a3e0da19f86709f7cae0ec10"
  },
  {
    "url": "assets/js/62.d2a05bf5.js",
    "revision": "8ef73f202a4dc5c6617cec391eab7d09"
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
    "url": "assets/js/65.8a1e8ee7.js",
    "revision": "169f0eb57797a0eb8d6beea79b4dd3d6"
  },
  {
    "url": "assets/js/66.2c6d76ac.js",
    "revision": "1bb8e1eba9681fddb3a5f0a90fc5a1c5"
  },
  {
    "url": "assets/js/67.f6cfe54b.js",
    "revision": "3b75c607e848c22bf4a430d5c35d5504"
  },
  {
    "url": "assets/js/68.207c105b.js",
    "revision": "2f7ff16441abc7424c52d18e0de4aad0"
  },
  {
    "url": "assets/js/69.f4cef889.js",
    "revision": "ba7e55a02ed0dd3901bf8f16d3281315"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.0e3db48f.js",
    "revision": "d986878c807b401cf4ef27bb380dd8fc"
  },
  {
    "url": "assets/js/71.3b92661b.js",
    "revision": "d3b3fd64b021335ce5986003d9b27972"
  },
  {
    "url": "assets/js/72.df987994.js",
    "revision": "49652e31ad11dc216dd11b048b6e7bb1"
  },
  {
    "url": "assets/js/73.27e802b7.js",
    "revision": "ef6d1f93ebf4f577b5f645fe7ad44cb9"
  },
  {
    "url": "assets/js/74.3f498679.js",
    "revision": "e617bf35c67f0d4ad7f00bf07b53d55c"
  },
  {
    "url": "assets/js/75.2f62ce87.js",
    "revision": "ff7cfe81ef6056ec1ed934697f3cbe7f"
  },
  {
    "url": "assets/js/76.9e129d74.js",
    "revision": "2b7adcf575b693730a1a8dca38c237ea"
  },
  {
    "url": "assets/js/77.bee0a936.js",
    "revision": "1f5e1a56dcb0293576a048fa1f65910f"
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
    "url": "assets/js/app.420e5b8c.js",
    "revision": "49a2eafce387a74d052e4855d398120a"
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
    "revision": "3a8e61440145da7559b0f618861466e0"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "b71653eaa9a8b06148c1dbfbba0feb78"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "6c718a7b7bc0070dbf95e93d9b56265f"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "26c1837be2e8062eb88b1ffb1be0bc7a"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "b0559a6e228389ca5126b18a730c5570"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "e7343139b6b2e7aaaed555fd6b9eeacb"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "a58b4f4d8a6f362ca5ff5a8eb9e3840a"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "1187a961c873e539e701e403b2ae3894"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "a1655e727abe2f1733f30b4dd94f5921"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "a48ac721b746d7d0cff6929c50e209c0"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "15fc9260b711a74a9d82ab57b4a2c530"
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
    "revision": "b6c3a65aafb34b7bfc1180dac43e646d"
  },
  {
    "url": "other/upset.html",
    "revision": "3c40404e057cf1c63be588858c51eaa5"
  },
  {
    "url": "plan.html",
    "revision": "e01268a3df71e0b46b892cbb4ae04275"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "dbf43ca2236792f4636f2936f57dd95d"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "c2f743dc88833695a8fffc4eb5f6c2f3"
  },
  {
    "url": "projects/testhub.html",
    "revision": "cada0be43c19efac8ebd5f269476f58e"
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
    "revision": "f9dff3581299aadb112c95678aa12bed"
  },
  {
    "url": "server/java/index.html",
    "revision": "9e7f77f6e080ad07030ac0da0319e5c0"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "333b55e4814118d87479ed7e5d72ce8a"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "bcaedf17db8e7597c9940f79aea1e542"
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
    "revision": "9e6454e2645aa994c3f33ff2623756fd"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "0b2af9af2dad2499469525152ed7202a"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "a2b2324e9700cd4f0ad2d3d1ee582973"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "f1f516f69729842b05745ecbbbc248c0"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "e5e0d0728da061c3fc5de48697799499"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "4b8c89852a202b31b8d05d3058f6fe74"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "81508065853af6b75c3075d94675c9d4"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "e7188bc5c7859fe31588c5f3b9c61891"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "8b8b0821d71fc6128fb61e39a1917c3d"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "5509dcb54aec0acf68a96b01da703754"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "89b74d5f187c4973065c12fc624fa5be"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "f659bad0436acdccfe72622a1bf9759a"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "a61b3487ee2f70c5fca6061fbaf4f564"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "54edd318504a5d6110826d791851e84e"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "44c2a25bbbce0a2dc6b8329c63e97a14"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "1933439b7e20d7019cfabe619324055d"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "09fefa3aeb9ed0bb2e075e3f7e05278a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "ea9273464351cc3e7ad3fe37f086cea1"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "1b49ac859e3f750fe191345f37506d2b"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "82243c88a6a5e4119502516d25984e14"
  },
  {
    "url": "server/python/index.html",
    "revision": "a9f068cef3428ba0a8b8b6564e3cc95d"
  },
  {
    "url": "server/server/index.html",
    "revision": "8cc0c33866d1ab1bd1b2c4379da950d1"
  },
  {
    "url": "server/socket/index.html",
    "revision": "fe18d99f702a8eddfb0ee2676eba5387"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "95f73871dd2c364cba1d599b3435602b"
  },
  {
    "url": "tools/git.html",
    "revision": "6e65deab542c8d4e3cdd6913b345b374"
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
    "revision": "aab2a93dbe11d51c62c63716bd72474d"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "5fcf249105d5853f8ecf8e402859f039"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "3333584534ac6fb37c67eb1be3a71b20"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "23c8e8e14422dcaa9638959bac3e89ae"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "a292723f705ddb51e797af601b1de35a"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "693905a9befe7128c59e8b30fe5155e7"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "bed7d3aec2f1d565f1084939760b0a22"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "31f5f9bab8baa35e7334f351470080d7"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "efddba735b82aa95a8d828fe604bbe0f"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "85a1c70d9c81308f00f1cc6e147c008c"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "40957d7922eb98f749548a62b01ebda7"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "e32adb290ce35d4397da48e4b0869940"
  },
  {
    "url": "web/basis/async.html",
    "revision": "ca75d4c05ab2459b2b955d89626525f4"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "afc5de910deb58a1a3b4dfb387b01fdf"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "0619fe3e269c10635e3cef26727a9705"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "215e595e9422027ec31b88c351235cd5"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "1d5f84fbf2d4e7512925762eb50daee0"
  },
  {
    "url": "web/basis/html.html",
    "revision": "0b657dc0a832a5c676c8c07bcee0a8a1"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "8a4bc0b50af38ba5ec9e3315d6b169c2"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "d996efd388eed4880de3dfce5a259fe1"
  },
  {
    "url": "web/framework/index.html",
    "revision": "9c7fd392387f47efc72ab07348de4404"
  },
  {
    "url": "web/framework/React.html",
    "revision": "44977528979f25b7ef5669c316bc84d3"
  },
  {
    "url": "wechat/index.html",
    "revision": "d0cdfe6fa3bda7810a3244b14249e9f3"
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
