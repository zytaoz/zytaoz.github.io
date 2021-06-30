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
    "revision": "43bd137a6185897ab82a6f861723a1ba"
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
    "url": "assets/js/10.62389779.js",
    "revision": "4747f2c947e7bd18972d2f36cffec6b5"
  },
  {
    "url": "assets/js/11.d861879d.js",
    "revision": "da489638daebee068824aba3a6f14532"
  },
  {
    "url": "assets/js/12.69ac3e3c.js",
    "revision": "a58226d1212464890ee0d533697bd2a5"
  },
  {
    "url": "assets/js/13.d2390ec0.js",
    "revision": "d33c394805a63044b4c61a2a3528f099"
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
    "url": "assets/js/16.1e0d6324.js",
    "revision": "378a54038bbcabfc2678e9c6658009dd"
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
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.49067209.js",
    "revision": "9027252de0511eb7178a591c0f155f35"
  },
  {
    "url": "assets/js/21.6c728553.js",
    "revision": "c46972a112f24800dff13e96843206fb"
  },
  {
    "url": "assets/js/22.215c15da.js",
    "revision": "4d90b79686523c808328c661e45e50c9"
  },
  {
    "url": "assets/js/23.d2c93889.js",
    "revision": "e2d72d877121038560f62677ed42736b"
  },
  {
    "url": "assets/js/24.ea1d81d2.js",
    "revision": "c98a5113e7eb135911e1b79eaedad78d"
  },
  {
    "url": "assets/js/25.4b075a24.js",
    "revision": "2ca60e152392f021dc27445c3e56e59c"
  },
  {
    "url": "assets/js/26.3c2a5406.js",
    "revision": "906d547d3e086b1dc2b2b68294ffb2c3"
  },
  {
    "url": "assets/js/27.269da41f.js",
    "revision": "369f916b0ada133a4c142ae32279cd70"
  },
  {
    "url": "assets/js/28.c8e5be31.js",
    "revision": "79a7d91fa9cabddbb2a28718bab95871"
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
    "url": "assets/js/30.d827798a.js",
    "revision": "9563dd099f53cd57a541a83c997af1b9"
  },
  {
    "url": "assets/js/31.c211a4e8.js",
    "revision": "717ef85bdef5ba5aa65b7a3522518576"
  },
  {
    "url": "assets/js/32.52dea5e9.js",
    "revision": "9a85bf68e4f218bf7a81949fa19af575"
  },
  {
    "url": "assets/js/33.c7da4379.js",
    "revision": "d49aaf17244e2d16839e4bef119d0753"
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
    "url": "assets/js/36.00379cad.js",
    "revision": "5df4c02fb11963bd74615fb2441bca82"
  },
  {
    "url": "assets/js/37.c7e0e8a9.js",
    "revision": "b09f64d400f5bdadeb20869e8b756506"
  },
  {
    "url": "assets/js/38.0b29aa2a.js",
    "revision": "ab92bbe532f364f1b864204aee66905c"
  },
  {
    "url": "assets/js/39.7d166d3d.js",
    "revision": "2806ef031fe06f88835686d78481b83d"
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
    "url": "assets/js/41.19a65671.js",
    "revision": "81c76aed6b3c6b1c5df668dde4eca6ef"
  },
  {
    "url": "assets/js/42.15f4268b.js",
    "revision": "ead4e946cc61b195433db3978a070e5c"
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
    "url": "assets/js/45.d1f788d6.js",
    "revision": "693167a2579b512102644be125ba5f98"
  },
  {
    "url": "assets/js/46.083a88c8.js",
    "revision": "4a575f026e781730711c4bf4f9709797"
  },
  {
    "url": "assets/js/47.509d286b.js",
    "revision": "f31766f0c43ab7351eb2207a12125bfe"
  },
  {
    "url": "assets/js/48.14b50ca6.js",
    "revision": "6c67bff2eb3697780a204c3e0865d90a"
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
    "url": "assets/js/65.3f3c2cf1.js",
    "revision": "bc429014794a1a6be48a3fce198544b3"
  },
  {
    "url": "assets/js/66.fed02bcb.js",
    "revision": "c632fb5ccdfdbc540339daedd6b41259"
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
    "url": "assets/js/9.d40e19d7.js",
    "revision": "3a21a4456e14f25781a63e7b3f1d4156"
  },
  {
    "url": "assets/js/app.bac43eed.js",
    "revision": "8d805c1632943e2e5d48032ceb6608f0"
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
    "revision": "9de2d058e6ccac0d6348a4b591cff10a"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "a5afd24d9455334295209f66056b33d5"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "697488af2400f678de88a4e97fde7f37"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "8f0333562ea9dce18a5d3e7a42966b4c"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "d225af0b3bed1543d98a0740453cb45b"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "bce963e5d9304af1a81a979f28842af4"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "09432fee006c2ba8f43529c8f1238af7"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "1ceae7f7f7fa3ad75315811b8b6f9ce1"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "9aa247d3a72c9780de0c4b2435c9f9cd"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "da3455b51105987be61f10f3382478ba"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "bed65fd33139973d4d0e7af2953ac571"
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
    "revision": "a4f2f92e8bfec01cc28aa615332a3597"
  },
  {
    "url": "other/upset.html",
    "revision": "f25440ab4aa3d74c3938ed2463bf1cf3"
  },
  {
    "url": "plan.html",
    "revision": "478fe2d3f427129e72097f745d7f93b6"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "b985a7a43bef01cb60f69c89905aca37"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "fef528971fd714698f67deb2c862aa67"
  },
  {
    "url": "projects/testhub.html",
    "revision": "c17f19de59b7f48db39230a4b9c8e0eb"
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
    "revision": "dcb84d1c5f8d0b19cfbea02d2145a19e"
  },
  {
    "url": "server/java/index.html",
    "revision": "93aaa0194d6c6047fb0ec0d4e24e4169"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "c7bed54943eb527c642946fbf87cd7ee"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "c7c1cd60b9872677f48f0a3d899a3f86"
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
    "revision": "8bfe33f38c9b4d50bea911788094c0d9"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "f642b0489ae15ce796ce4b50aaf559e8"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "7874a6b5affe2e165e032d79b2b870f6"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "029d888d7be476e7268ccd090582f3e8"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "4e99c9bd2f86e2c11d158ca131b86c54"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "2c4a0c2bed59b980b13b8a8807cb3f34"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "8f9f6fd3d50204b3d7bcfb1411beaf4f"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "e01c6aa1c060f4b5dfb4217a64b2163b"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "dd3ec5be3f52f5b09360014801d34e47"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "ca2c89cff3d4ea0b4edc9e0e5eba8b21"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "0a24278ed0be53b704013df92c8a4a33"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "d48b04eb62ba59c2fe5dc97fc64c0445"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "ffb20981cb24ee0dd74ecd05ccc32a15"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "78f0fe0acf491dac81ba203bdfbe547a"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "4bfef0efba6011f8eae5fb1e90316255"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "5ef54d966e90a38fcd556d923e831a6c"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "9529733627a5b29acf0e2d4ee285a9fa"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "fdb0c9ff332e3609416e80266417948f"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "4e531b2b4e20e3505ed39a37665d37cd"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "fc794d7e82aa9d0d001ff1e8102e70f6"
  },
  {
    "url": "server/python/index.html",
    "revision": "86bea2a390a52f7c1969bf505ae187c4"
  },
  {
    "url": "server/server/index.html",
    "revision": "0477c583ef857167e2619a303bc9d86f"
  },
  {
    "url": "server/socket/index.html",
    "revision": "c3191b56fcb6c6ddc42a1b17c3ba752c"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "29d8e236bbaaa000423100ac0f933828"
  },
  {
    "url": "tools/git.html",
    "revision": "b53a108a965a6bfbb20c622f594de50f"
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
    "revision": "2646c76acf356f732f1d74ab1a27f14a"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "a466823edb1960da36b7af5566af4bd5"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "4779e3cd3bef6f6794113c49261d75c4"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "ef9385e6b6d6ab11513b9ff6200fd0fa"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "231cb29ac67e5060fb20fbabe648fe87"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "ecdb7ce6bf92ca0c6dedc3b1a8f48e81"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "a0370fcca0e247f5411f1f5f605a8aaa"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "8bc8bf6927812542176c092f00039f77"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "9a092dfd2924b7a1686bc91b9e01446d"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "a9eb71c1e1a25915d288897b523f8f35"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "a125f9710f094defa98561102d91cea7"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "b2454161ded5dae8b02700d77272fb34"
  },
  {
    "url": "web/basis/async.html",
    "revision": "7433ea88c941e21e83ddb0e3bb8507e5"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "03da4bc74f33d7963f2de46fd17f26ce"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "f30c6b5464ce7b95f876dbdf5a3f840f"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "08c3ebccb9d51d28a9220947be45c0bf"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "d886154dcbeb7e7d4ef31ec4513a8d26"
  },
  {
    "url": "web/basis/html.html",
    "revision": "4d952cfe423113ca78118fb675eca73d"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "e926c37219e64510021951b959f70a67"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "8a46bd0919be638149b433145363762d"
  },
  {
    "url": "web/framework/index.html",
    "revision": "60a42da8b5a54a167ed7940adbacd11f"
  },
  {
    "url": "web/framework/React.html",
    "revision": "20e9a4c1706a27786dd1675a16ab7b85"
  },
  {
    "url": "wechat/index.html",
    "revision": "49965697b53e81aa29593b2baa7e4366"
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
