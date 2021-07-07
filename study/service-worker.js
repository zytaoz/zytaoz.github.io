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
    "revision": "4da7430403636ba12a11384fc0148187"
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
    "url": "assets/js/10.c67550d0.js",
    "revision": "c808b0ab6169476f10d49492f8bd3e8b"
  },
  {
    "url": "assets/js/11.36c509f4.js",
    "revision": "18ea8e5dbb733a6b27f97ce7b564553d"
  },
  {
    "url": "assets/js/12.8ccc7f94.js",
    "revision": "902130af1d3e59f1b034d62871ea69a0"
  },
  {
    "url": "assets/js/13.c42b2352.js",
    "revision": "40ef2ce93d7adfc74bb09db64f172097"
  },
  {
    "url": "assets/js/14.e34d5ec3.js",
    "revision": "8c99c3f220a53416d07b942ec0e15b00"
  },
  {
    "url": "assets/js/15.98860ab4.js",
    "revision": "22cddf8647ecbbc1cfc5d227d587cabb"
  },
  {
    "url": "assets/js/16.2dee3a0e.js",
    "revision": "632a180ef9c833f574e0f5dc335f6abd"
  },
  {
    "url": "assets/js/17.e7902b4e.js",
    "revision": "33daa1e0578480f5aef2ad3b7c8a1cfb"
  },
  {
    "url": "assets/js/18.5c6f7335.js",
    "revision": "a91e8e89c20a5c5f54c6ceae0ec1db4b"
  },
  {
    "url": "assets/js/19.8be29c7b.js",
    "revision": "576175e59e20c2a32a1197c5206b134d"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.1593cfb3.js",
    "revision": "a037cc28a2d43cc6c1ca218974b0520a"
  },
  {
    "url": "assets/js/21.e8d35d19.js",
    "revision": "350d8c3e5f1d637e50b51c2682eea990"
  },
  {
    "url": "assets/js/22.8dc04520.js",
    "revision": "51850770421e3b0da78c22968d5f665a"
  },
  {
    "url": "assets/js/23.f32da324.js",
    "revision": "4af3325d8ed950968df1c829e5ad8c5f"
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
    "url": "assets/js/28.40886ffb.js",
    "revision": "493b1efab56b2214d106142004e059b8"
  },
  {
    "url": "assets/js/29.f8856355.js",
    "revision": "79ef269a4f17ba95b679a364c92f5e70"
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
    "url": "assets/js/39.c39094f1.js",
    "revision": "6f030306bb1664950d7d2f092110608d"
  },
  {
    "url": "assets/js/4.ff6ca8bb.js",
    "revision": "cceef22f9ff415c8f7c52e7569eee2c5"
  },
  {
    "url": "assets/js/40.2ce4164d.js",
    "revision": "ee21fa01a0b0d57b6c23ec42191531c3"
  },
  {
    "url": "assets/js/41.403becf3.js",
    "revision": "cad4d38642fc04388f3a72bfcca82270"
  },
  {
    "url": "assets/js/42.914dc143.js",
    "revision": "44a4ff8eb2d1fca1b7517291270600e9"
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
    "url": "assets/js/45.d96f063a.js",
    "revision": "ffe44e7d0b4aa4af04f99fbf6ffa73a1"
  },
  {
    "url": "assets/js/46.083a88c8.js",
    "revision": "4a575f026e781730711c4bf4f9709797"
  },
  {
    "url": "assets/js/47.6751c071.js",
    "revision": "9fe6110b4ca87cd30a4350bb288b2296"
  },
  {
    "url": "assets/js/48.1c56118c.js",
    "revision": "8be8454d279eae3c4b168dbad7619836"
  },
  {
    "url": "assets/js/49.76ef9542.js",
    "revision": "ffd14f263bad625adb461597052abc97"
  },
  {
    "url": "assets/js/5.6beab8ec.js",
    "revision": "24329d4a824053a6aa5447fb796059ed"
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
    "url": "assets/js/54.f2d128cd.js",
    "revision": "00f62c33e75c416bacf85696195ffaf3"
  },
  {
    "url": "assets/js/55.cf63afda.js",
    "revision": "467acf8597bb344b81c91906ede95672"
  },
  {
    "url": "assets/js/56.6775d10a.js",
    "revision": "e2bd8fad161fc2d832ed187218dce278"
  },
  {
    "url": "assets/js/57.22a3f00f.js",
    "revision": "85f0249878efa3f141dcca79da6ab5ad"
  },
  {
    "url": "assets/js/58.b9d87d98.js",
    "revision": "73179f2ffb61e713bae12e822d4d16f6"
  },
  {
    "url": "assets/js/59.6bfa5ce1.js",
    "revision": "328e1001d58feb2073a786e862b23cb8"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.be074944.js",
    "revision": "370ac673873cad47a5bb7f0eaba7ec79"
  },
  {
    "url": "assets/js/61.69857e37.js",
    "revision": "99de3becc2c8d263e4a31a9c5dbe6c4f"
  },
  {
    "url": "assets/js/62.43486d30.js",
    "revision": "f6b445e4db53cc2802c0f5bbee58dc05"
  },
  {
    "url": "assets/js/63.b33520b2.js",
    "revision": "ffefaee0fd0b9fc06db5d500a932ece9"
  },
  {
    "url": "assets/js/64.d173359e.js",
    "revision": "6d2cacd7154fc790fee4c94c2b13873f"
  },
  {
    "url": "assets/js/65.3f3c2cf1.js",
    "revision": "bc429014794a1a6be48a3fce198544b3"
  },
  {
    "url": "assets/js/66.52f9dbc6.js",
    "revision": "13c6cb77e4cca8547a5c2089d006adfa"
  },
  {
    "url": "assets/js/67.4a62c74a.js",
    "revision": "90637f0404d1bbbe29b9ba0c3370c582"
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
    "url": "assets/js/75.541ec8b8.js",
    "revision": "faff08d0327deb12b8843c065d7803fe"
  },
  {
    "url": "assets/js/76.665adb84.js",
    "revision": "b44f6c561bf9198bdc96875558e3b0d8"
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
    "url": "assets/js/app.88a9f783.js",
    "revision": "85d4262d351906b82d0861b03e67b3f6"
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
    "revision": "e8525a5954347c6021667bdeb591be44"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "360489fedb510dea0a82c7c94dafba9e"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "b8938b41dd669e0eab868dda6aa2d0aa"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "aaa6a7454810043c20189461a96d1f6b"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "33d3f2b9182e92f10e47ca46f51df55e"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "95b2deb9c0278ae15ecd9f09407fa581"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "50fa8fc0dd09978334f938c7090e7571"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "cff569931cc78ab7f10a44250cc389e2"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "0982cd4ece413ae41e4333b1556bcd7d"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "a1eb31dca8c55c7e9a99bc8740f274b0"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "bb3db127c6a2c38d8998d90bf95cee3d"
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
    "revision": "bffa60627e161257013563dc8e9fa745"
  },
  {
    "url": "other/upset.html",
    "revision": "5fe304f5d3ca033c2682ac209480d16e"
  },
  {
    "url": "plan.html",
    "revision": "b48c040af411be4908c9d8721e3c677d"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "72542a34852edcb70933a367458a9d96"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "35c0baa30ebf96c87553a1a6b99d2b26"
  },
  {
    "url": "projects/testhub.html",
    "revision": "2589d02b3a2a19d0d525a9b7b31940d2"
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
    "revision": "0e3af7df6b59319dddbcc835ced1cd97"
  },
  {
    "url": "server/java/index.html",
    "revision": "2319e6764fb860f0e7d356c897ec067d"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "2d0e7014ed74d387efbd6960662709b8"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "a899c27339d9cbb6117c85f073901440"
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
    "revision": "c296133df814bde9803b3f466d59beed"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "3137eb5e9b950270f5027086a80fa18d"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "b35a0f6b0cb59794eff4008f0587bcc1"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "2765db8446dfa187a35ea1aa005f6c5f"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "db5fdef9f1bbfb683ebab51a2a8992b8"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "5d508a27785378df9dfc8d4192a19689"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "bfb5f691d27ddc89f530811e27253be7"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "376faaac43b46f148409d8c5a2a9601f"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "8c8a727da4c44c3be80535546bd425f1"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "3718bf09d137a869b7d96e7ce4187fad"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "6f73c2614dc6c2ab9034ba37bc1eeb81"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "cd7ebd5df11dd01026e396f24c0db8f2"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "ac46b7f6960314ba94eb25ac1dbcc2d9"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "ee56d55ad2312728b8b3ded682088536"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "dd00ace187fbba4b8e6dd7eb1a8ccfa7"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "16c575574a9fb4ffe9eebf93e0a4eb30"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "1f6952b3fe6c2ef9ec2234cf88c2b674"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "e98b41f306aa9169ca682f68a3ceab83"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "3bbbc9c4b90230b36fdce04be1f61649"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "8db2967b89fb8e61685c7c24b8b3a071"
  },
  {
    "url": "server/python/index.html",
    "revision": "c3cf6a6e435be2824812068cfd51b736"
  },
  {
    "url": "server/server/index.html",
    "revision": "a51ebbe3b1df208831026fa583a4fd6d"
  },
  {
    "url": "server/socket/index.html",
    "revision": "e575ef0d3647d0f94a4287390ba252ec"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "6075ad26c5d71755061ec24d30a65da0"
  },
  {
    "url": "tools/git.html",
    "revision": "1d423515bcc302b63cfe300ea93757b3"
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
    "revision": "d2db2d1fd5cb9a0ba3efaf24f377eab1"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "1bc753a09a2ea8b0d26e5f444006ed08"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "3b466efe53a510d34468bc6424c5a467"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "2c8428a3874ad0c56de2cd5a12145b62"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "b013f6362099cc74a79937157e84348e"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "ee755a54e8d8d9b23a358d177c5b4ab9"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "844b6ed41dfcc75eeb545663c3201fb5"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "920dfae74c7cc09d54c89db485871634"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "c39d71e9e280f934baca4a586d3bd5a7"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "31e50ab2968b89a4b68cdc366d5f20e3"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "931b3737082e88325b3ca2b4af9ea79c"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "4b790ce4ee05978371989f645349b6d7"
  },
  {
    "url": "web/basis/async.html",
    "revision": "8408919714d0d564470d3a616f87a6ba"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "d21a51c44774846d77186a5bbd3c116a"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "7a7d8c4194dd8c6290d8a0f0eb82fed9"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "830cd71c49d961c6f0a18e2a2f125db4"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "68815a399167e6863cb46b9efb832232"
  },
  {
    "url": "web/basis/html.html",
    "revision": "d51222ab0af3065799b5e179e009f671"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "7be2ea2dca214c1e14d00b8d3d8f4383"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "713fc109f48ad7fef9e140ebd7304069"
  },
  {
    "url": "web/framework/index.html",
    "revision": "6e21276442a715bb8308d4d6a0b3fe78"
  },
  {
    "url": "web/framework/React.html",
    "revision": "c3f4857596a5a2b596c8f57e97bbe515"
  },
  {
    "url": "wechat/index.html",
    "revision": "9c2048a2b6fdccf30527eb1e15220f44"
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
