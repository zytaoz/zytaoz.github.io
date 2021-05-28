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
    "revision": "60b3f67142e605a8ac7e781953f63144"
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
    "url": "assets/js/10.c3385c4f.js",
    "revision": "442325002b961ee4a8ce933dab2a5e10"
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
    "url": "assets/js/13.b201064e.js",
    "revision": "07cdcaf3147c80e87c9f0a1bce202c3f"
  },
  {
    "url": "assets/js/14.a715ef5a.js",
    "revision": "26754cc0c3240ec76ccfb54551883e64"
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
    "url": "assets/js/18.459fd13c.js",
    "revision": "0d75338f2f9bf68057931b8decc98bae"
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
    "url": "assets/js/26.97e97f24.js",
    "revision": "6f474af8bcd34001bacafb2d670fcea7"
  },
  {
    "url": "assets/js/27.269da41f.js",
    "revision": "369f916b0ada133a4c142ae32279cd70"
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
    "url": "assets/js/46.1962fa8e.js",
    "revision": "3734fe54886c3b710ba62da7dce04c54"
  },
  {
    "url": "assets/js/47.509d286b.js",
    "revision": "f31766f0c43ab7351eb2207a12125bfe"
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
    "url": "assets/js/65.5bc91ea6.js",
    "revision": "28f39d05104d4f35a7dc203762c7fbb0"
  },
  {
    "url": "assets/js/66.48ab7b62.js",
    "revision": "ba9d66510c9aa5810ee87ec681764e58"
  },
  {
    "url": "assets/js/67.53e550bc.js",
    "revision": "8da5c5113e5451e6bed07c224741b4ca"
  },
  {
    "url": "assets/js/68.09cad794.js",
    "revision": "42e55610353feabfddb92ba88ece6aa6"
  },
  {
    "url": "assets/js/69.86846d43.js",
    "revision": "ab7293cec4ff180db96acb51eb2441a2"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.374c79bc.js",
    "revision": "aa7e5dafcaf4a3e72dd0f77f71c2afee"
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
    "url": "assets/js/9.d40e19d7.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.924742eb.js",
    "revision": "c581ff9249ec717ca2261ac84dcaed64"
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
    "revision": "396db24e0b2660228d9cd59e843cfa5e"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "9d76132533ed3b75fce7459596c8bc80"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "33c02c99208c006d67ce859b6ea101a9"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "d9ee9658f6ee6061ec6c2a1d1e936cd8"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "8acf649d72a5b44b5b68d962270fd060"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "df41cd28785a3387d88f0e2d82a4cb4b"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "3bd0a21e7cf3bd4bb87a393e0fdabc8e"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "f289efeedba5065242f4e01ff4aa8011"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "83880d5e0441bb8fa669320976409546"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "53e3c141d4fdf7baf3a6868890029464"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "dc5d0a150cd3dd7db510e7640b136341"
  },
  {
    "url": "lagou/event-loop.jpg",
    "revision": "34fd442793faa9a8003d31533e44a856"
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
    "url": "other/upset.html",
    "revision": "bfa5a2c1577dacee10e8af17b2bf0e03"
  },
  {
    "url": "other/偏激.html",
    "revision": "426c7c67f0945bb237590546665546e8"
  },
  {
    "url": "plan.html",
    "revision": "143d26bcc9523e2bd9d8374bc1462371"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "0f17e4cd7d741fb4098a3d3606f41871"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "4923d1dd838143b4b28677bcbfa48bd0"
  },
  {
    "url": "projects/testhub.html",
    "revision": "4d1aae5fa216607bdbab4ec237503296"
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
    "revision": "0cfbc6147fb88c10d6e7841952afd8d5"
  },
  {
    "url": "server/java/index.html",
    "revision": "2160187bc1a8d2b74eda75917b9abbe5"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "7f709c864feadcb0f7db5ccbab7b79ff"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "4eb1a923b01adde1cc02de2bc97ba358"
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
    "revision": "a17def0b68f108c0c649b93269eaf5c4"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "3cf1b6fc21b6840888e067ee7ae7a55d"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "8578e89ed53354396473ae0f87592346"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "e44b834ebcf6d610f4ab7d7f12fa6ac7"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "a229e96f32dc634a494abb23a6b11d42"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "21a892b7bca4652b0be11ce69d2ebf91"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "aa64d8c68731744e594665d80ae5b9c4"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "8144c801e7c7177f021b160b3d0369bb"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "87a3b59dd644858cda775c2687619eb7"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "17ce5095ca22ecebb9811e933df4934f"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "714c7511b271f4979ff1cb068e4d99d8"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "08461246007cd9bdac665026693d1393"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "9b5706b15fafddf929b1b3385325107c"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "1c8ddb9b20e2841359de60be037fed6f"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "f450df1ae7fdd8393ce0e76111d9c102"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "05a6000285c267ab3a592fd5f7fca023"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "739d9e17dfc867346c63a73756fd79dd"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "b4c9f3299c1d9651e5b7b7b6f9ef1f91"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "62285bebeae389e69a5432316859b4d1"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "299288ba53520d550e6aee13dd01a3e5"
  },
  {
    "url": "server/python/index.html",
    "revision": "4f6be8406b8ab51f616aa6dbaa29c085"
  },
  {
    "url": "server/server/index.html",
    "revision": "c40e1b3721066300e5519a06fbbdfb58"
  },
  {
    "url": "server/socket/index.html",
    "revision": "fa98ca903654b50f037e263af330bb22"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "77e8ab5f033910d1d9e01dca4a05780b"
  },
  {
    "url": "tools/git.html",
    "revision": "e520b4c659d0dfe185718db6624613e7"
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
    "revision": "d5eeb843b705154793e430cef15005ae"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "53d9882ae9551573e1f2fa338e9ce057"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "cda0cc6ce01ed1b0d398b025061bffc2"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "050a5c5338b537924cdafd737bf50666"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "4cf2ec6a612eb226ddd0cf4ab32d4dc7"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "746cb64d8b6f4d1c4aa0ee5379e6d4a3"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "3a541bccfdba6139f7b19b3d93c3a4be"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "d43daa46590179e9bdd5e3a5a0b9f7c7"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "b154bb5cc6cd42732a247ebab9c79905"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "91fd0f39a11428d70be7e020a80bbb18"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "6ac3bbee70cc6f6213ffb95778a2d35e"
  },
  {
    "url": "web/basis/async.html",
    "revision": "d7520d2d60e4f7cef4fb371d9a6f977f"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "3e5c32bc62fe84428a08c66d85fba94b"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "dbc8f308231edfe49316368b821b7999"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "7a5a2aec218a4732a58ab8a2b7dcb6c3"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "71a46c28226f4c728078ec03a5c3f39c"
  },
  {
    "url": "web/basis/html.html",
    "revision": "83ee20b971f4602da46f1ba130a51cbb"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "da06c70522b23d8b13f8551cd3f0d722"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "d8e44830eb2662f6f3281e81b0356913"
  },
  {
    "url": "web/framework/index.html",
    "revision": "68e0f265b40252368bf146c98f323644"
  },
  {
    "url": "web/framework/React.html",
    "revision": "043b82f57042fcf7cb9131f5b92ead45"
  },
  {
    "url": "wechat/index.html",
    "revision": "689749b5b92b6a4958ba38dfac76ed0c"
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
