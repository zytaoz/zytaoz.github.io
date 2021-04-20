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
    "revision": "7b68d31cfeba33e4693059c3a9561c4e"
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
    "url": "assets/js/10.51bfc82a.js",
    "revision": "91b16d29cb294eaa8868d826a226bf9d"
  },
  {
    "url": "assets/js/11.4a16ba66.js",
    "revision": "d827730f2df4c1c9a832cec4f442d4c7"
  },
  {
    "url": "assets/js/12.9d2f8e1f.js",
    "revision": "c0aa46d6bc74b072737e5225ad9f2d69"
  },
  {
    "url": "assets/js/13.763c3cc8.js",
    "revision": "e712ab66a80240a5835e2ac39972349c"
  },
  {
    "url": "assets/js/14.9f059d9f.js",
    "revision": "2bbfa47dad48f22ffa7037e303ee9b46"
  },
  {
    "url": "assets/js/15.938dcad8.js",
    "revision": "eebc6721aabefc315c0a2e495fe12da3"
  },
  {
    "url": "assets/js/16.1faff71d.js",
    "revision": "b5de4860e84172d25e0412f097586cb4"
  },
  {
    "url": "assets/js/17.f836cd04.js",
    "revision": "97b2ef161071edb5f385180be435cd38"
  },
  {
    "url": "assets/js/18.71d3b458.js",
    "revision": "b5063dfde1a67afe9ad874589d13f4db"
  },
  {
    "url": "assets/js/19.98b7ad14.js",
    "revision": "f77a830339c8c81c7260d74caf317f37"
  },
  {
    "url": "assets/js/2.cc96577c.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.cf3b65f9.js",
    "revision": "9e397b4d161715df65c8a0f5d4c75333"
  },
  {
    "url": "assets/js/21.d31100e6.js",
    "revision": "9422fa81f632bf7534bc7467105b3aff"
  },
  {
    "url": "assets/js/22.ff8f3ea8.js",
    "revision": "0f4d658eac5ab22fef05e2d1c799c541"
  },
  {
    "url": "assets/js/23.bad42677.js",
    "revision": "681ea0d8428da50f129b0b339a5d510d"
  },
  {
    "url": "assets/js/24.e60de6f9.js",
    "revision": "db2178b3ecb24d3d6857b2ecacd8ddd3"
  },
  {
    "url": "assets/js/25.febba345.js",
    "revision": "7b1fb72f2281a165bac44e8bc38d3651"
  },
  {
    "url": "assets/js/26.b5eeb3e7.js",
    "revision": "c76edb4b78cefb07458ed91ed1697c59"
  },
  {
    "url": "assets/js/27.52d45daf.js",
    "revision": "ea61cc0e98f483b6fce1e825250011e1"
  },
  {
    "url": "assets/js/28.86a2c22d.js",
    "revision": "843775a7e3f8937b3b94b262a4a7ddd0"
  },
  {
    "url": "assets/js/29.1600b051.js",
    "revision": "e97aec283220a7589a3e368e3a7ee983"
  },
  {
    "url": "assets/js/3.7a2de2ee.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.19c25a70.js",
    "revision": "70e3a1a45fcc655922544e3684bfe20d"
  },
  {
    "url": "assets/js/31.b56d1591.js",
    "revision": "3ce85cc0193dfefe292e13b05e24c389"
  },
  {
    "url": "assets/js/32.52001df2.js",
    "revision": "a956dffc0d2b6f2508f5684d3c36ca69"
  },
  {
    "url": "assets/js/33.f3036f5b.js",
    "revision": "18d7961cc13ba155f11ba5c548825cc7"
  },
  {
    "url": "assets/js/34.e5329300.js",
    "revision": "fb1bf0331ffe041b7b41d52c41ee11c6"
  },
  {
    "url": "assets/js/35.0331f84c.js",
    "revision": "08ea528117b33c62ee4e32c73b5fb6be"
  },
  {
    "url": "assets/js/36.b135a2b2.js",
    "revision": "b2a64561d0f0a0c08a9a2ce4c240c8c0"
  },
  {
    "url": "assets/js/37.a6577e6c.js",
    "revision": "fe53b8a231e86382500e81acbbbeea17"
  },
  {
    "url": "assets/js/38.5d27fca0.js",
    "revision": "5e6987ca11f4c4de90806b6110179b94"
  },
  {
    "url": "assets/js/39.4ae764bb.js",
    "revision": "65b1ead70accb711c309a3b513b952c4"
  },
  {
    "url": "assets/js/4.c0a7b8ab.js",
    "revision": "e85e2a4d90868719b199496d1fd48b2b"
  },
  {
    "url": "assets/js/40.b1328096.js",
    "revision": "3a5428324f96573e694705e7c9bd031f"
  },
  {
    "url": "assets/js/41.a87199ba.js",
    "revision": "d7092a54b320abd7930d8c745520141d"
  },
  {
    "url": "assets/js/42.8019f37e.js",
    "revision": "bd47fd35a725fcd66fa623e663b81892"
  },
  {
    "url": "assets/js/43.d3a4c981.js",
    "revision": "33982c3bebc6db41da308101cd97010c"
  },
  {
    "url": "assets/js/44.611a7913.js",
    "revision": "712b4c67417ebaacc04a34b86db79c4b"
  },
  {
    "url": "assets/js/45.19ac04af.js",
    "revision": "d8384c5966bea5a891d4900bca6b9619"
  },
  {
    "url": "assets/js/46.85c759e1.js",
    "revision": "47c40bf2b2a14ebf725ef44a42471f75"
  },
  {
    "url": "assets/js/47.88be4a23.js",
    "revision": "67c7b5bcca124a08005e0b079510b66e"
  },
  {
    "url": "assets/js/48.24ae4ddf.js",
    "revision": "6ca339ab09104a9770a381eb88cd8f12"
  },
  {
    "url": "assets/js/49.6651fdb3.js",
    "revision": "19e3d7cbb6abead17fcbf1245326ebc9"
  },
  {
    "url": "assets/js/5.cfe0dd09.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.9d957d50.js",
    "revision": "abe8a12ee4c16dc332489b01dec43ad4"
  },
  {
    "url": "assets/js/51.aa3154db.js",
    "revision": "a3f488282694c6343873451b74f8cc32"
  },
  {
    "url": "assets/js/52.13c9454d.js",
    "revision": "22c83f3e1cfa9b82abd68a8dd770ea3a"
  },
  {
    "url": "assets/js/53.9f89096e.js",
    "revision": "6e03d9126a269e4714b08a7fd1d8964d"
  },
  {
    "url": "assets/js/54.b19d2efb.js",
    "revision": "df16add5296cc616c00728e6a6477850"
  },
  {
    "url": "assets/js/55.064cebd0.js",
    "revision": "52de8f942abe8de9907f247c5cce0c48"
  },
  {
    "url": "assets/js/56.f08e13bf.js",
    "revision": "4e21f48f1fa977353cc87a1fb44a10a0"
  },
  {
    "url": "assets/js/57.3c3fceba.js",
    "revision": "19dca6b9b96e648c415426d39d57e317"
  },
  {
    "url": "assets/js/58.13c8e741.js",
    "revision": "e332500c96929c4a440c2c8fc31d2ec2"
  },
  {
    "url": "assets/js/59.c18d9b9e.js",
    "revision": "ac56604d0d7fa79560376c8a4b3c07c2"
  },
  {
    "url": "assets/js/6.6176149c.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.934f66c1.js",
    "revision": "2bef77d59227d76250eb43379ba6436e"
  },
  {
    "url": "assets/js/61.1407fb8c.js",
    "revision": "2e42492b30b315b44ea6970e95113c86"
  },
  {
    "url": "assets/js/62.50b0f3c6.js",
    "revision": "730e105fdd39a2cd4e6b0f6f7f097b7a"
  },
  {
    "url": "assets/js/63.816044c5.js",
    "revision": "4465a56ee7baafead14743c90b58ac66"
  },
  {
    "url": "assets/js/64.e183f71d.js",
    "revision": "8948a66d73fb0f7158276f0177ef59b9"
  },
  {
    "url": "assets/js/65.bb2b6c21.js",
    "revision": "8ce193ec89449f0d577b91f8facc290d"
  },
  {
    "url": "assets/js/66.21997793.js",
    "revision": "17b7df1379868fc41f6d09ee2b5c5291"
  },
  {
    "url": "assets/js/67.267638dc.js",
    "revision": "5365dbf27c93e9719490b5982404647b"
  },
  {
    "url": "assets/js/68.53198741.js",
    "revision": "6e00204ed407f4f61b772e67d5c9e8ca"
  },
  {
    "url": "assets/js/69.4f121cb4.js",
    "revision": "e3f73b77a28a7b199594b8d5d8363eb8"
  },
  {
    "url": "assets/js/7.079bf03f.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/8.c1a34fc4.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
  },
  {
    "url": "assets/js/9.1f5b00c3.js",
    "revision": "47dc0cde855f135942953da8e7e1ca69"
  },
  {
    "url": "assets/js/app.b15d6dac.js",
    "revision": "e5ad9e963e9a862e7f5affcd89d06a8a"
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
    "revision": "2de41476a028711f506619cd3779fa05"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "43de153146d7ea1c159c3acad79afa00"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "640476f84c7c7349917889ac31e7e7cc"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "db1a4b8d57eecc3a0d38d0370b938a75"
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
    "revision": "e1d8ee7a7c9df3f33cccd917cbfa8179"
  },
  {
    "url": "other/偏激.html",
    "revision": "dcb60e8d8558a8434256447625fe6cb0"
  },
  {
    "url": "plan.html",
    "revision": "71cc3d2f060a10fed0dbd033fd29cd7a"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "559814ebe97149511d130f727736aaa0"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "b181ac0fd7b07cdb56745ed5e230b457"
  },
  {
    "url": "projects/testhub.html",
    "revision": "f256308e16641a22c25dd67638bc56e3"
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
    "revision": "24203629ce9a3fb532b49ef667902440"
  },
  {
    "url": "server/java/index.html",
    "revision": "29bfa9ff23acd7c872065bfab5de0098"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "cf9a16a704864ca930aec00f36f58e53"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "be550fd5015f36829da0b7889964606f"
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
    "revision": "a0fc461e34b073cafac65b0ec4f57929"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "d840ca85c75214bd466b3428e5828454"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "9eea1a85a664a4c188173e1f76f886d6"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "70ea75e6775605499a7b36fab19fd517"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "56e75f4dc8ac07bda05950f1881c6047"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "d33370c7c79b56e3e8d334f2f18d5bdb"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "3c58a295248dbf33ac951653b997b3fa"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "a8cd1dca1c61421fc81719400d75a6d4"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "089ecb652f3bb0123548563015580133"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "5aac1ed3b573a3ea6530eb5186977340"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "da3a435d9b840713694fa59862391a3a"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "81c6f1c834a6e397db9cacdc70ee30c0"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "1cd6dc17e9236a36ef8b9f90b584f407"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "512a29eb195ace922bc3b039c6c3e00b"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "3c45b063190d3bca06ec7bf0eb0c91b6"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "1ac5597cebaaf850c25af3054984d680"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "894ae85d875169598fda0c69f4938b1a"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "138e0ecf0fa80ee08f66f5b4b93938b8"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "d7580cf0c988f1d3c802de0d7e5e5262"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "64680183dcf954a4bf3b16dc5f7dfe7a"
  },
  {
    "url": "server/python/index.html",
    "revision": "ee1cccaac56013dc2ca389db2e83a865"
  },
  {
    "url": "server/server/index.html",
    "revision": "de852b4471de7c3e1d95742405e4b338"
  },
  {
    "url": "server/socket/index.html",
    "revision": "cfc59bcd1118cd74cb5248e8b9239f0f"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "97bc79457d77e47acec13e796aa75e81"
  },
  {
    "url": "tools/git.html",
    "revision": "377f32d42fef013a62b196f1f1f0870d"
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
    "revision": "d9a3567912457b371c533f1526b4d90d"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "a93e295d8e7a0a84a51f6a50e5f6a0bb"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "48531f31fe811f0d539e4563ed45c036"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "1e2c916ec6c9093598bebe066bd7ef5c"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "42fc8a4bb77c9348cf8bba11a3d76ccd"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "8a9b4815368e4f9b26b345f20ea231c2"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "035bd6a6c4742c0130285fd883cf5c97"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "1d27d4887ec666812370b981543f49cf"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "fff763a35a1bc568f330947e87cdb268"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "e516b32d28d88ef5913134c4690585c0"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "ba6314275221df193094b45474a1e23b"
  },
  {
    "url": "web/basis/async.html",
    "revision": "b47ba87064e51348aefe1d3807151fa8"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "406669c2af05d344d7513efe75f0ee9b"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "222d74fa3755ad248e09d99b919e7dce"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "c03856cca7f6cc66c1f9f53837178312"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "dfae4b0e7a95b0462a25341f20684595"
  },
  {
    "url": "web/basis/html.html",
    "revision": "78b1b8c832f044b3d82e90d4fd82c90a"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "d2ad135a822de412dfbcdf5ee08eff93"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "00fcd1e25ab9f847f30ebc4ec8018180"
  },
  {
    "url": "web/framework/index.html",
    "revision": "5457b38dbba73a5debe6a1c02a6ab7aa"
  },
  {
    "url": "web/framework/React.html",
    "revision": "a9a7cfa52241e67f03c2e139e5c481be"
  },
  {
    "url": "wechat/index.html",
    "revision": "30002a4a1e7e7619a182612b21211da4"
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
