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
    "revision": "a35a365602d27e110ba7dd9e8e4970ee"
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
    "url": "assets/js/10.4421d51c.js",
    "revision": "11ef38894d04958caf74fa7dab80098d"
  },
  {
    "url": "assets/js/11.9255a1de.js",
    "revision": "a2469d9a71c982b9ca58a26a9e29c5f0"
  },
  {
    "url": "assets/js/12.88347898.js",
    "revision": "ffafbab402222be9a7c3be0455297884"
  },
  {
    "url": "assets/js/13.a48ee64b.js",
    "revision": "e712ab66a80240a5835e2ac39972349c"
  },
  {
    "url": "assets/js/14.19119f82.js",
    "revision": "e5ed5d01149388f86678167300b75fc0"
  },
  {
    "url": "assets/js/15.c4dd2326.js",
    "revision": "eebc6721aabefc315c0a2e495fe12da3"
  },
  {
    "url": "assets/js/16.4ec7c07c.js",
    "revision": "7f0b4c1d72038d9565b1a5e92425614b"
  },
  {
    "url": "assets/js/17.cc13cf4b.js",
    "revision": "3390a98cecd2960dd4010a5a3cf888ca"
  },
  {
    "url": "assets/js/18.68ab4b10.js",
    "revision": "70e54170972e5e145db7c52132b3a09d"
  },
  {
    "url": "assets/js/19.d4a813cb.js",
    "revision": "996f06d6360ebb8ccc8436731d2ae575"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.bfd03857.js",
    "revision": "9e397b4d161715df65c8a0f5d4c75333"
  },
  {
    "url": "assets/js/21.3d256f6f.js",
    "revision": "5305786221cdea6b24203663de179203"
  },
  {
    "url": "assets/js/22.7e8ef894.js",
    "revision": "d5455aedf50e1249db4b2270d317b97d"
  },
  {
    "url": "assets/js/23.ce8d6b67.js",
    "revision": "911fb1e5a2630a774d24273b01bb475e"
  },
  {
    "url": "assets/js/24.fe6f8b6a.js",
    "revision": "59c277d53cff1903412c67560703d2ab"
  },
  {
    "url": "assets/js/25.d0ccb358.js",
    "revision": "4f307687b2d4f0b35e3f586cc374f0d4"
  },
  {
    "url": "assets/js/26.a113d2dd.js",
    "revision": "ba91a5dcc20ea4485beacb9145d174c4"
  },
  {
    "url": "assets/js/27.88fa8bbe.js",
    "revision": "ea61cc0e98f483b6fce1e825250011e1"
  },
  {
    "url": "assets/js/28.582921e6.js",
    "revision": "843775a7e3f8937b3b94b262a4a7ddd0"
  },
  {
    "url": "assets/js/29.04f7c786.js",
    "revision": "e97aec283220a7589a3e368e3a7ee983"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.df0d77e8.js",
    "revision": "fadb7e06f6bcc8ab87aaf59950309d11"
  },
  {
    "url": "assets/js/31.05b920c9.js",
    "revision": "302d975d388dae47b34a439c5d7515d7"
  },
  {
    "url": "assets/js/32.78c3e461.js",
    "revision": "a956dffc0d2b6f2508f5684d3c36ca69"
  },
  {
    "url": "assets/js/33.84e7bf9b.js",
    "revision": "08bdd21ed1d63cd95a6d8b521e7a5614"
  },
  {
    "url": "assets/js/34.d4ac3eee.js",
    "revision": "5cf0470c729e9be339aaae4ba9706bb6"
  },
  {
    "url": "assets/js/35.34c4ca35.js",
    "revision": "08ea528117b33c62ee4e32c73b5fb6be"
  },
  {
    "url": "assets/js/36.3b584025.js",
    "revision": "b2a64561d0f0a0c08a9a2ce4c240c8c0"
  },
  {
    "url": "assets/js/37.53dbfc3c.js",
    "revision": "fe53b8a231e86382500e81acbbbeea17"
  },
  {
    "url": "assets/js/38.ff8ac380.js",
    "revision": "5e6987ca11f4c4de90806b6110179b94"
  },
  {
    "url": "assets/js/39.f768fe55.js",
    "revision": "65b1ead70accb711c309a3b513b952c4"
  },
  {
    "url": "assets/js/4.c0a7b8ab.js",
    "revision": "e85e2a4d90868719b199496d1fd48b2b"
  },
  {
    "url": "assets/js/40.e673eebb.js",
    "revision": "60fdaf75cdd0b6961215902a45932085"
  },
  {
    "url": "assets/js/41.d97c36e8.js",
    "revision": "c1ba1dabfb832619d7f0df759b719926"
  },
  {
    "url": "assets/js/42.1e8ed962.js",
    "revision": "68ec57b06c70663189f0a95ffa996fc2"
  },
  {
    "url": "assets/js/43.c220bf88.js",
    "revision": "2305f187f2fc16a22796dc5c028c9d7d"
  },
  {
    "url": "assets/js/44.f848ba4d.js",
    "revision": "1191eacbc528f05046aaf43178bfe0be"
  },
  {
    "url": "assets/js/45.75c5ae31.js",
    "revision": "d8384c5966bea5a891d4900bca6b9619"
  },
  {
    "url": "assets/js/46.f63457ce.js",
    "revision": "47c40bf2b2a14ebf725ef44a42471f75"
  },
  {
    "url": "assets/js/47.ef717252.js",
    "revision": "67c7b5bcca124a08005e0b079510b66e"
  },
  {
    "url": "assets/js/48.56c2fdb3.js",
    "revision": "9b5177e571e1ac383fd175ba3d632178"
  },
  {
    "url": "assets/js/49.998e30dd.js",
    "revision": "d19d5b84a730dffe87153fa3b995f118"
  },
  {
    "url": "assets/js/5.4527858b.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.05dda865.js",
    "revision": "c53d77bf0c3a0a23816954b0b4c275a8"
  },
  {
    "url": "assets/js/51.8f88039f.js",
    "revision": "f451b370677bfd067ec4575afea27bac"
  },
  {
    "url": "assets/js/52.0a36a112.js",
    "revision": "22c83f3e1cfa9b82abd68a8dd770ea3a"
  },
  {
    "url": "assets/js/53.4e380b84.js",
    "revision": "eb66702b1bc364829b293c807363c262"
  },
  {
    "url": "assets/js/54.ce9724bc.js",
    "revision": "df16add5296cc616c00728e6a6477850"
  },
  {
    "url": "assets/js/55.d74d8e96.js",
    "revision": "73fd02f3ed138ab6c4ccc734b5340455"
  },
  {
    "url": "assets/js/56.86f81afd.js",
    "revision": "4e21f48f1fa977353cc87a1fb44a10a0"
  },
  {
    "url": "assets/js/57.69c5ae49.js",
    "revision": "19dca6b9b96e648c415426d39d57e317"
  },
  {
    "url": "assets/js/58.7d4d25e7.js",
    "revision": "e332500c96929c4a440c2c8fc31d2ec2"
  },
  {
    "url": "assets/js/59.72296911.js",
    "revision": "6aa0b5ca45f022c16e541e490e80be0d"
  },
  {
    "url": "assets/js/6.ef994a19.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.45a82372.js",
    "revision": "0fd0f93d70fdf5b9af3c9c15f3f1bebb"
  },
  {
    "url": "assets/js/61.0f21b934.js",
    "revision": "2d39d17bc3a731783a6fbb78de9f2b25"
  },
  {
    "url": "assets/js/62.23878218.js",
    "revision": "00a3830baf2466639c0fa6d3ef9791e9"
  },
  {
    "url": "assets/js/63.ac41ce15.js",
    "revision": "3f115daeab176bad878a9b85889f615a"
  },
  {
    "url": "assets/js/64.234ae2f8.js",
    "revision": "5c4a7b6dd7a13a080a6f9ac099bdfb56"
  },
  {
    "url": "assets/js/65.6e473bd4.js",
    "revision": "8ce193ec89449f0d577b91f8facc290d"
  },
  {
    "url": "assets/js/66.04614d38.js",
    "revision": "d2a7a6d0d8b79e9647295a00efb8109b"
  },
  {
    "url": "assets/js/67.f25c51ab.js",
    "revision": "961319633b6a64f83c16884aa809c2da"
  },
  {
    "url": "assets/js/68.f2c8f7ac.js",
    "revision": "6e00204ed407f4f61b772e67d5c9e8ca"
  },
  {
    "url": "assets/js/69.4f121cb4.js",
    "revision": "e3f73b77a28a7b199594b8d5d8363eb8"
  },
  {
    "url": "assets/js/7.574db714.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/8.43051b52.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/9.aa462578.js",
    "revision": "b414eb14259b448b6e2b7264bf94e099"
  },
  {
    "url": "assets/js/app.dfa97d40.js",
    "revision": "2d7597ac0be8b3e4a8aef991b1733a7c"
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
    "revision": "5f2286e2caf48e344c7bad84d6ff9e92"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "cae114f65a1658345b797eaf1d9a114b"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "fca3808cc3c256f77db7469d7a21cb67"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "71ce5c55f069f3dec029892912713d54"
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
    "revision": "365545c12762d9f0d236b64b5bc8abf9"
  },
  {
    "url": "other/偏激.html",
    "revision": "51ce0d7fd44b140b161f3333c3c7b124"
  },
  {
    "url": "plan.html",
    "revision": "1b35abf02eb409d8e5a05cf4a67a9016"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "e0d1cd48b9b481baf14d5095e6dde0a2"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "c6dbb5ca04092fa4892969a3f1bc029d"
  },
  {
    "url": "projects/testhub.html",
    "revision": "732d5281599512d468556c4902d8c8f1"
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
    "revision": "e69dad09570a5c3eda3380c5f3b72496"
  },
  {
    "url": "server/java/index.html",
    "revision": "79ffb0ac374a715dfab7dc61bb3c415a"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "95f168f5db3ae9d4882681e4dafcf4e3"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "a169d443f72711b5db5bcb582530bcf4"
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
    "revision": "ab0b4e6bbef61f1bfc8e34bc03ead411"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "e65303cd6cd8c1e112bf5b50c1d65f34"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "7fa996290dbf5798101eef09cf20ef91"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "f85df7c21cd8260ab47e5a7694adbda0"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "479bc451578fc96ad86b2befe7795077"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "eae431905d18debc8f90cd99deacce85"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "20ef53c2c5c35a7e20d8105f28f82e0f"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "2c4f3039bcce48e267b0b5ed009e5423"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "4b9fcab2cc746720da79fc38bdcdfbb2"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "b14903b347c9e853a2941812afec93af"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "7354c4858e07c52e903ce83071b80e88"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "cbed37bc385bb55286e0ad85d5bec744"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "6bde9384cff6398c2249775a93c36242"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "2a170c089b907d5985378a2cb898ea7c"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "d767c54adfd58404f6c4e10f9e222bc9"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "951cc4aff80b80bc303be798ceb9104b"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "1caf46aa2076f45f344213fe96ed17e0"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "daf08b570f58f68454c58766371dde7c"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "88ee5a2174c96eb3f4b032d5bb439274"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "b4c17a23f4dfb05ccef96162ca65464d"
  },
  {
    "url": "server/python/index.html",
    "revision": "735ae0e38f5b91cc89eea0e3c2cfe612"
  },
  {
    "url": "server/server/index.html",
    "revision": "b970a7b6b3b23614ec4dc8574a618303"
  },
  {
    "url": "server/socket/index.html",
    "revision": "6e19fcb4a0901c616cc037657084d858"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "bdf35adc0ece4ef14734ea0156471f0a"
  },
  {
    "url": "tools/git.html",
    "revision": "0010ae780db9340ea5b99c21958f8cb7"
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
    "revision": "cf1380e859548cc1477af60c1a3f12c2"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "9a47af005f2cd1bf4a4d9f75b98932eb"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "436183e9e6da56642084612a64e382a3"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "4320e0791dbabf439a9285646b9fbeb2"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "4b49ce87b3a3d7c7857c5a54a1319e84"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "63f1f6b774fb4f537e43a980958f9afc"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "84f590943c91f60c3668e10fc48c435a"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "c2371e46a34985b61bcb744b5c6b33f3"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "a40aa2f62cc9ad4826553e9feaee06ca"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "3c448e5a7c10849a9375a62e7f2d095e"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "3c641aa1d1b2ecee265619bb26216b5d"
  },
  {
    "url": "web/basis/async.html",
    "revision": "1cbdb908a750d5b4310a8fc4154c83cc"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "66cbb14139e26200820f64770f29dffc"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "f2c7938eeb7f6e6df77b5ad95219e158"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "ecd9d4a7276205ea9b4d3d89dea0945f"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "dd40f55d05a8033c37f0bb05b9c8c124"
  },
  {
    "url": "web/basis/html.html",
    "revision": "1a369dc043558f9329d7f19bd47a574c"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "1b546521e0aabd3670b186561fb73259"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "15243ee2a0414f4ad9fe3f2eba333ced"
  },
  {
    "url": "web/framework/index.html",
    "revision": "4e2c98a33318d713eae34cde6f02cd58"
  },
  {
    "url": "web/framework/React.html",
    "revision": "04c68a1cc83fcfd1622e0a2838d1717d"
  },
  {
    "url": "wechat/index.html",
    "revision": "68e7eddcca94f8010fd35baa61078110"
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
