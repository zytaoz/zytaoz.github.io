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
    "revision": "b794f729e002c3a142f53873ce3caa00"
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
    "url": "assets/js/10.80779ab2.js",
    "revision": "217147b460ae6920e54d5dba0cdeffaa"
  },
  {
    "url": "assets/js/11.9027f2d0.js",
    "revision": "a2469d9a71c982b9ca58a26a9e29c5f0"
  },
  {
    "url": "assets/js/12.9d2f8e1f.js",
    "revision": "c0aa46d6bc74b072737e5225ad9f2d69"
  },
  {
    "url": "assets/js/13.7b834f24.js",
    "revision": "0710206c6c7555dd5af32b5598211508"
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
    "url": "assets/js/16.766fcbed.js",
    "revision": "461d32d28f82b2c6ca1cc3d8a5c18be4"
  },
  {
    "url": "assets/js/17.b6b05235.js",
    "revision": "3390a98cecd2960dd4010a5a3cf888ca"
  },
  {
    "url": "assets/js/18.883d4029.js",
    "revision": "0e27662a5f46254368dcfa28d6563095"
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
    "url": "assets/js/21.54329066.js",
    "revision": "b6cf2b489402b3b7e2c81b1fb32bdf06"
  },
  {
    "url": "assets/js/22.2261d0a0.js",
    "revision": "1462a7c7e07d1783412f94e03152206c"
  },
  {
    "url": "assets/js/23.2aa6ef6b.js",
    "revision": "eef086b1d7b993a18e3c3b320fe38f80"
  },
  {
    "url": "assets/js/24.e60de6f9.js",
    "revision": "db2178b3ecb24d3d6857b2ecacd8ddd3"
  },
  {
    "url": "assets/js/25.da5a5d17.js",
    "revision": "772566be59b9660fbcd3be08cd1e36bf"
  },
  {
    "url": "assets/js/26.905ec0e0.js",
    "revision": "734d9ef9a33d9774f79cf1efb0f590f4"
  },
  {
    "url": "assets/js/27.1bd6dca2.js",
    "revision": "67bf49d8a7fb2deb9dddc82953da167c"
  },
  {
    "url": "assets/js/28.f4fc8d71.js",
    "revision": "9bd50b9baab4c2448b007c540fa6010c"
  },
  {
    "url": "assets/js/29.260b55b5.js",
    "revision": "58939fbbcc556a3b2c98ba1da021ab0d"
  },
  {
    "url": "assets/js/3.7a2de2ee.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.31c452d5.js",
    "revision": "a2e3002d4c47c6f63df5361e1c8373fa"
  },
  {
    "url": "assets/js/31.8e92f5ac.js",
    "revision": "fe4c9d149459ab5cc2e7ae16a1485840"
  },
  {
    "url": "assets/js/32.64059c9b.js",
    "revision": "40f411da89652daba2ab0da135c73e40"
  },
  {
    "url": "assets/js/33.e595158a.js",
    "revision": "6ecaaf942b022bf9c1042a9eeaf7138a"
  },
  {
    "url": "assets/js/34.32566ba0.js",
    "revision": "5cf0470c729e9be339aaae4ba9706bb6"
  },
  {
    "url": "assets/js/35.0331f84c.js",
    "revision": "08ea528117b33c62ee4e32c73b5fb6be"
  },
  {
    "url": "assets/js/36.919862de.js",
    "revision": "67c2021216a52521367315b8d3c21d26"
  },
  {
    "url": "assets/js/37.231de397.js",
    "revision": "ad1e607644de1673eccd0fa8e071df45"
  },
  {
    "url": "assets/js/38.5d27fca0.js",
    "revision": "5e6987ca11f4c4de90806b6110179b94"
  },
  {
    "url": "assets/js/39.9a3a60a8.js",
    "revision": "c742ccec4c105c457f5273cc897190a3"
  },
  {
    "url": "assets/js/4.c0a7b8ab.js",
    "revision": "e85e2a4d90868719b199496d1fd48b2b"
  },
  {
    "url": "assets/js/40.54c175cc.js",
    "revision": "8a69a98a4b71814535082458587baf96"
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
    "url": "assets/js/43.3eeec219.js",
    "revision": "30ba0e4ded16ea29b66eaafc610303b2"
  },
  {
    "url": "assets/js/44.77f78c6f.js",
    "revision": "7f92360fbb619e56b593ebeed3545e21"
  },
  {
    "url": "assets/js/45.12cb0eea.js",
    "revision": "d59714aafad8a7e7cd8c913a46d36e81"
  },
  {
    "url": "assets/js/46.7fd2be8f.js",
    "revision": "99171389030dabb3685ed1424a520709"
  },
  {
    "url": "assets/js/47.9be29df4.js",
    "revision": "bca28d80a64c4a922f1f855304fd0117"
  },
  {
    "url": "assets/js/48.21cd85af.js",
    "revision": "4db992a2a156f57810bdc015cb87b584"
  },
  {
    "url": "assets/js/49.ba714182.js",
    "revision": "0a54404c71531870955b67f6d05fd1de"
  },
  {
    "url": "assets/js/5.5c4fa790.js",
    "revision": "830885768e0511b0037059fccf1c0e9f"
  },
  {
    "url": "assets/js/50.b6608408.js",
    "revision": "d0bd94d60fefb1e81d0d45eff1266156"
  },
  {
    "url": "assets/js/51.6ee70901.js",
    "revision": "f451b370677bfd067ec4575afea27bac"
  },
  {
    "url": "assets/js/52.27f859d2.js",
    "revision": "7c5e7dd92852f120050590cc987f701a"
  },
  {
    "url": "assets/js/53.dd07a116.js",
    "revision": "12efe5093220a02e9b2b12abd6e4581c"
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
    "url": "assets/js/56.2c9067c1.js",
    "revision": "50aad73c9e0a62ffd99b6ec55562f1c2"
  },
  {
    "url": "assets/js/57.d7106e0a.js",
    "revision": "f8fa6e22e617f9f2eb2ff2d8d6254c60"
  },
  {
    "url": "assets/js/58.755f981f.js",
    "revision": "81410e9b9b8d91a65cdd7ff6542ec91b"
  },
  {
    "url": "assets/js/59.7a55dc2d.js",
    "revision": "91625f0a092036f97a16b5e309bd5161"
  },
  {
    "url": "assets/js/6.3da40176.js",
    "revision": "b7eaf7db508321c1e536c1956712c52a"
  },
  {
    "url": "assets/js/60.04529f91.js",
    "revision": "0fd0f93d70fdf5b9af3c9c15f3f1bebb"
  },
  {
    "url": "assets/js/61.f87e7c64.js",
    "revision": "a38507f0e1f1eadff1b3e1bc2bd95ed1"
  },
  {
    "url": "assets/js/62.9751cce2.js",
    "revision": "c614f0ca8ba70ab670770f41f0017c1b"
  },
  {
    "url": "assets/js/63.8f5d3c60.js",
    "revision": "ee668131b51d2b6ae76b1e7c2696e93c"
  },
  {
    "url": "assets/js/64.712cfa77.js",
    "revision": "7c1003c6a42551f98acc9ea61312f72c"
  },
  {
    "url": "assets/js/65.0294bb0a.js",
    "revision": "9f58b7f4512ebdbfb4f8f73f1d0be925"
  },
  {
    "url": "assets/js/66.fff77273.js",
    "revision": "33cbaaa6fea592628581f509069df13a"
  },
  {
    "url": "assets/js/67.2dc10124.js",
    "revision": "961319633b6a64f83c16884aa809c2da"
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
    "url": "assets/js/9.0ba64a78.js",
    "revision": "2b8844ff0f2351cf1e4906792ffc4f97"
  },
  {
    "url": "assets/js/app.868cffe5.js",
    "revision": "0c6d19f16d57c771796ce161a10035d2"
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
    "revision": "b7d07416375dd91fc73df70bcc644c80"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "dcccab27d8545e2cb6892562c918174e"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "f24430f85ad3eb32c40f40574aa4e761"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "b43c7f7cd299ad7ad2259537306c9382"
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
    "revision": "feb26aa3b25819a913d573f5a8294b32"
  },
  {
    "url": "other/偏激.html",
    "revision": "741245881a3b36500275e516cd43161b"
  },
  {
    "url": "plan.html",
    "revision": "7c7cd523c90629fbd35ea517a4ee05cf"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "eef717fc6dfd138882547f2781f38033"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "c936ab4e31c1c8244d32118f8eab7e03"
  },
  {
    "url": "projects/testhub.html",
    "revision": "78e541ae6a72891b1980ee48ce45ea5e"
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
    "revision": "59f2866a5c8f8246a527d298ef3391d0"
  },
  {
    "url": "server/java/index.html",
    "revision": "86f8ec568780fce98cfd08d674fcd85f"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "579fc779c24d78fad1b9a44eff842674"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "ef1a5b1d154ccca5744e7559b47b7bbf"
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
    "revision": "c62a5f1937b689d37e8ce5c07d290164"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "681bc017f0c69b75e0ed7a919c2be022"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "f64680b05bce20e435847bd2a92d99ab"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "f5c896f2a74526fef8b54a527556a5ec"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "0747edd26604f40db3bd07557a8dbe2b"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "01ddca85e831c5875ccdfdf99b2a73ec"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "9b458094a5c491bf858110c73a406bd0"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "138104208da49b6ff84dad05bc98a16c"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "46f8cf2f6512a4676e8a044f8bcf5534"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "b08bc365f2651a2a9fd0d24e2ba871a7"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "f3be2290e0d29003e235cfc4a6064792"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "3a8a0a2e78c87008581fa98f5e6c1115"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "407b8589c90d967d68ce44cd48adb398"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "2fb862053c2b527412b0b2bc668c5179"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "84738f679747fa2f6b110c93fa2bb72c"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "daedfee21ae849d264255d05d87be9bf"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "af3fe0475dc03d6867cba577099a6ebd"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "52ed0c97fafb80d1ff73c8afd46480d5"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "7f6c67fa6844bf0325a32e1e848c3af8"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "a65566ff9731eb327b41eece39bcbfbd"
  },
  {
    "url": "server/python/index.html",
    "revision": "0e49566a589d6b9f2d8699e4a492716f"
  },
  {
    "url": "server/server/index.html",
    "revision": "ab053c2813f4d59c8b0ccee75d7b63e0"
  },
  {
    "url": "server/socket/index.html",
    "revision": "e176912985e2f8441ccffd1a0375b724"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "5c34af6e05495f2da67a9f27a5c9108f"
  },
  {
    "url": "tools/git.html",
    "revision": "098ec02b98d5dc6cd940ab41ec3fb756"
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
    "revision": "5c130ef6806fdec86ab00c190f78ae3a"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "65f6c0d86671d672bc6a384503915c54"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "ae07cf0566a407ba3b3928c2ec0a3ec1"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "3f8a8d6e6789028d8642a1ce6b27232b"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "25a76fc289bf584cb91aece5be1f194b"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "efe2874144702fb8dc3b04f6c5d4358f"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "0769b2f2d46a3e44dbdef592d4d031cb"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "98bd5933c302408b1137446abdd06e5e"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "ce4f29043ff990fbd56ec22ace7cac76"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "71e0031ff70c8be40cc16459c9921fdb"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "f48db3bfbcaebacf70174dac8ceff22e"
  },
  {
    "url": "web/basis/async.html",
    "revision": "9ffe15147ae2f0eb4fdc8e684ac8483e"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "2c035e4cd288b222fc6ce829f70f7e02"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "2bf1242f33ea64a6e70878e3e54672d3"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "99a3c9c3726e8c18c7dedcf5e2f49bd5"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "334607b3010f5960d66c93fb7921cf3f"
  },
  {
    "url": "web/basis/html.html",
    "revision": "55a40f7e826978a1df8d11b550b401a9"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "98bab15a48c4ff3f0762f09c5702842d"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "0881bd801cbecadd3a612a12a5972c7d"
  },
  {
    "url": "web/framework/index.html",
    "revision": "0b8d35427a86325d28622f66a6ca7335"
  },
  {
    "url": "web/framework/React.html",
    "revision": "b3555ee7d7d7eb64e178205cd20e252d"
  },
  {
    "url": "wechat/index.html",
    "revision": "b19da31cffed40ba4415daf0c570ca4e"
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
