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
    "revision": "88e05b36c494fa46e5835f760906e6ad"
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
    "url": "assets/js/10.30d17643.js",
    "revision": "d7a254541f1013516eb3bb839715437a"
  },
  {
    "url": "assets/js/11.06d04b88.js",
    "revision": "9cc9af6aca065da71949ff8e371fc608"
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
    "url": "assets/js/14.59eb06cd.js",
    "revision": "881e4ee7c417c96a2697caf0b92d43f5"
  },
  {
    "url": "assets/js/15.11acde4b.js",
    "revision": "7b2c877beed3af563a5181d2938b3c0e"
  },
  {
    "url": "assets/js/16.36a497b3.js",
    "revision": "2cd8c3a8a3af9b395723b8b55f3e9705"
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
    "url": "assets/js/19.7c20838d.js",
    "revision": "11df9c7f1fff0362c02f41bb2eb77500"
  },
  {
    "url": "assets/js/2.516fa38b.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.82fe1027.js",
    "revision": "2759a82e67fc2303c01e5c1785315fce"
  },
  {
    "url": "assets/js/21.bde14c81.js",
    "revision": "f9f45f7919c0a89eb6cf3b8582989baa"
  },
  {
    "url": "assets/js/22.b7e15cdd.js",
    "revision": "b5c3ed02a4cf3c5f2763344cb3d5ce84"
  },
  {
    "url": "assets/js/23.f975d1b4.js",
    "revision": "8fb275a4ffa9a62b681948f29682a6cb"
  },
  {
    "url": "assets/js/24.744725d6.js",
    "revision": "e3f639e5abd1b38d044cd3aea4f367ca"
  },
  {
    "url": "assets/js/25.6301de4e.js",
    "revision": "afeef31748c485325792c7b403d767aa"
  },
  {
    "url": "assets/js/26.34fdc408.js",
    "revision": "e594df97476a39e6f4ed6988bf70b3d9"
  },
  {
    "url": "assets/js/27.7efa8d7a.js",
    "revision": "7353d8d1ebda098fac949028de13bb76"
  },
  {
    "url": "assets/js/28.0a4e1c20.js",
    "revision": "fca7362147866598d2157a763e5f2624"
  },
  {
    "url": "assets/js/29.7cf58464.js",
    "revision": "23c2b0d51d3abd8342ed82f3ee04472a"
  },
  {
    "url": "assets/js/3.af148eeb.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.5aa1db62.js",
    "revision": "56a602a8c73a81d543a17cb3f10e1405"
  },
  {
    "url": "assets/js/31.c17eca5a.js",
    "revision": "373e96c3ed2de857bc51701b24c7b0d8"
  },
  {
    "url": "assets/js/32.e5dbf513.js",
    "revision": "fd2affe771c914e5143b782cd52cca0a"
  },
  {
    "url": "assets/js/33.c215b4bc.js",
    "revision": "c89f12424f78dea4b01f1256e243ee80"
  },
  {
    "url": "assets/js/34.97edab83.js",
    "revision": "a4fecebc13d3ad1a0c6fe4b6e74f0e18"
  },
  {
    "url": "assets/js/35.a399b4bb.js",
    "revision": "b90f293bdb258ae0af0bed42b346126e"
  },
  {
    "url": "assets/js/36.2297a35e.js",
    "revision": "d582eb22cec52e45cc5fa11f5911caa4"
  },
  {
    "url": "assets/js/37.fc29722d.js",
    "revision": "f059cd7bffb831c757f68230b3aa2414"
  },
  {
    "url": "assets/js/38.4f1d7272.js",
    "revision": "06ad45339f2ace6533cc2e82858e9a2d"
  },
  {
    "url": "assets/js/39.43f85d23.js",
    "revision": "d4c50efafb3f8f33715fef42910942bf"
  },
  {
    "url": "assets/js/4.1bee1f88.js",
    "revision": "155e443362b84872aa15fe93c5214a83"
  },
  {
    "url": "assets/js/40.2536f58f.js",
    "revision": "98a40db293d5c1f376bd3a861fa16bee"
  },
  {
    "url": "assets/js/41.5dc3607a.js",
    "revision": "3e7336662feb64b362bd7099c78de31e"
  },
  {
    "url": "assets/js/42.14773d56.js",
    "revision": "6a1e43460c3f7da165146b8ca089e110"
  },
  {
    "url": "assets/js/43.f969fc52.js",
    "revision": "a7270b0c3904856720a9c277aa889e9f"
  },
  {
    "url": "assets/js/44.6eacbcec.js",
    "revision": "e3b39b750a87eb367460d58c1d8f0462"
  },
  {
    "url": "assets/js/45.8a21a65f.js",
    "revision": "b92b2e7dd7d113fcc3e98d6222832ac9"
  },
  {
    "url": "assets/js/46.6bf2ae92.js",
    "revision": "686733b12f0c041d1e3ed553fffd52cc"
  },
  {
    "url": "assets/js/47.6ceab64d.js",
    "revision": "905c6a825efb0a3e61ec5b8aca5b2c11"
  },
  {
    "url": "assets/js/48.f737675c.js",
    "revision": "6f9b7d49cd1fbd7876b2b8a90e1c2079"
  },
  {
    "url": "assets/js/49.da2369ad.js",
    "revision": "936d4034822e80c6cd240392adfc6ae2"
  },
  {
    "url": "assets/js/5.3ea10eb3.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.d9afc70a.js",
    "revision": "4bea09b33683fa1decb542cccf64cb78"
  },
  {
    "url": "assets/js/51.6018a8a7.js",
    "revision": "dd7e007b2e900ba5ea0bef9638c2861d"
  },
  {
    "url": "assets/js/52.27ee4987.js",
    "revision": "6e9c18dd4cf13055457cab5892721ee9"
  },
  {
    "url": "assets/js/53.f8f2cc0b.js",
    "revision": "9d0581ff18d4132f5441d871c83e8519"
  },
  {
    "url": "assets/js/54.1ec33720.js",
    "revision": "007241c11902761895b4d8f78d76e057"
  },
  {
    "url": "assets/js/55.4d17f8dc.js",
    "revision": "a507ce7d4990a3127289550e067dce35"
  },
  {
    "url": "assets/js/56.f6f409e3.js",
    "revision": "15708bf07ad3a019a3aff6c140cf5cc8"
  },
  {
    "url": "assets/js/57.7332f639.js",
    "revision": "9ce00fb4a227f2aa66d17b145b82db50"
  },
  {
    "url": "assets/js/58.b4e039be.js",
    "revision": "93cd20b558a8dd1c0089d9e9c1efe511"
  },
  {
    "url": "assets/js/59.71d06e06.js",
    "revision": "aac8353c9797eb9d14a2f08942ecdc6f"
  },
  {
    "url": "assets/js/6.f71aa628.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.25179937.js",
    "revision": "2fc21d64aefd820154046eeab547743f"
  },
  {
    "url": "assets/js/61.4a803833.js",
    "revision": "baeb3a334733e3ca714433312670be33"
  },
  {
    "url": "assets/js/62.6f8c3af6.js",
    "revision": "af116f44713a72e60979caf61c28bf55"
  },
  {
    "url": "assets/js/63.6bfd1906.js",
    "revision": "56af1f3ee1cc506b12730eb15e61f6ef"
  },
  {
    "url": "assets/js/64.157e057f.js",
    "revision": "d225b183268704bf0ca03aa7c83140fb"
  },
  {
    "url": "assets/js/65.8846125d.js",
    "revision": "fa2f8a8e43ee81da484580731c108752"
  },
  {
    "url": "assets/js/66.1b159e92.js",
    "revision": "ae102ef81457e9bfd0b8ca51d28c4d02"
  },
  {
    "url": "assets/js/67.3ea42da1.js",
    "revision": "b441d644b50f8b7c7ba1ed89f22b2e23"
  },
  {
    "url": "assets/js/68.e153b209.js",
    "revision": "027348f57b0368c7f378b9f1a3193205"
  },
  {
    "url": "assets/js/69.5b8486ed.js",
    "revision": "51f81304333174eadb0ffb7d5cef7c41"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.5cdbb0a8.js",
    "revision": "a3346c95533b9de98e6f8674129c9cc2"
  },
  {
    "url": "assets/js/71.a3fb51a5.js",
    "revision": "e1923048adf4a7e742531873db02856f"
  },
  {
    "url": "assets/js/72.0b39de24.js",
    "revision": "78b2bc17569df6d19eecb00b8bf3678f"
  },
  {
    "url": "assets/js/73.e870b145.js",
    "revision": "c03e8068bc09affa80b2fa384d2b47c7"
  },
  {
    "url": "assets/js/74.4ca0d456.js",
    "revision": "b539089131d0c034b60f551337f05a5b"
  },
  {
    "url": "assets/js/75.a263bcd3.js",
    "revision": "5c8889a5d178c4c4d073692dac44c5bc"
  },
  {
    "url": "assets/js/76.a894ba94.js",
    "revision": "6d0815ce563a6d0e6ebaf7a35c115db5"
  },
  {
    "url": "assets/js/77.9b7b2651.js",
    "revision": "e1c7019f40146007945dbe19957522f1"
  },
  {
    "url": "assets/js/78.7677fda6.js",
    "revision": "61747e6608a3a083c5021233c537fb7a"
  },
  {
    "url": "assets/js/79.5ebc2204.js",
    "revision": "d32288525c415d1aba2bbdf7d28fd717"
  },
  {
    "url": "assets/js/8.6d4ff2f9.js",
    "revision": "2c1ee88d54a7811d2e1f0335cd84ab83"
  },
  {
    "url": "assets/js/80.837b1d02.js",
    "revision": "96c5e19d072ec864f3b794b646e6a8a9"
  },
  {
    "url": "assets/js/81.88f7522b.js",
    "revision": "95046a06fc68dcc0b61d7e97118bbef8"
  },
  {
    "url": "assets/js/82.9076f357.js",
    "revision": "297eb15d598d1973b9e7c57b94b3a1fe"
  },
  {
    "url": "assets/js/83.30bb75bd.js",
    "revision": "43b75e2a13236b546fd3c2c235e48c4b"
  },
  {
    "url": "assets/js/84.18e1871b.js",
    "revision": "7c83ccd0a4b8d382f33224d52d667794"
  },
  {
    "url": "assets/js/85.255bc65c.js",
    "revision": "ab0e5ec77449e599ea3be46a2b781241"
  },
  {
    "url": "assets/js/86.579e98b6.js",
    "revision": "b0bed61b54640b2fea7ffc4433b24166"
  },
  {
    "url": "assets/js/87.131f634d.js",
    "revision": "c12fafda7ce0267aa7061b0e5a802dc3"
  },
  {
    "url": "assets/js/88.726f72e8.js",
    "revision": "06e9c9e6d25487ca15dc3357a7322226"
  },
  {
    "url": "assets/js/89.224fe3e1.js",
    "revision": "6a5b876068691d401a847addd6c0962e"
  },
  {
    "url": "assets/js/9.3d55f185.js",
    "revision": "65abd76d4f37c5dd8fae83d68c9aff39"
  },
  {
    "url": "assets/js/90.25ef091e.js",
    "revision": "c18130e526f1e3ac65574f91fab451f2"
  },
  {
    "url": "assets/js/91.eb960813.js",
    "revision": "56ca0250862fa0bcd5db0ec36366d887"
  },
  {
    "url": "assets/js/92.ece9dfad.js",
    "revision": "f1edf1024be8cc6d878718e74df4f13e"
  },
  {
    "url": "assets/js/93.303aa350.js",
    "revision": "c0f529c7e0523ad90662438b0e02e936"
  },
  {
    "url": "assets/js/94.2894abb8.js",
    "revision": "547201fbcd8ef64391ac11c466a5574c"
  },
  {
    "url": "assets/js/95.80b0b100.js",
    "revision": "07d07d21df253ee6ba532cdccbb65270"
  },
  {
    "url": "assets/js/app.40c936c5.js",
    "revision": "bdd22b5608c660b4c2add44fad34ea34"
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
    "revision": "c180139a46d01fc8b73e4bd9d34cee64"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "71de67b93a8ee25d0faf538811de9b18"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "6add6ea2968b946b4e776d58e8092239"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "57466d736a4a6e90c5403187a60858ad"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "5febecccc1dc81fb174934d77df13c4c"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "60dceef575f8859af97a7555f68afbc0"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "56a386751b2eaafaf81d85c524529bb1"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "a98f7eff1f05972e7a28e584bf1c36fb"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "512a9d8c17040adf391bd7a8210daaa7"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "4edbf7d6915ef74d6b920426cfcb83c3"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "6d01c40c97f515e229ceb9cb5be05449"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "32c05fb48150c03b747f1e7bf7a9d3ed"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "40012119a0de76be0564bf349b9a229d"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "2e39bdf2dccbfa9100190f510b7888e9"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "cf29852cf766d0d4e3924ea8c4ad79e9"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "4401ec183a03c0803ab3f66456f5fa2c"
  },
  {
    "url": "course/lagou/path3/module1/response-principle.html",
    "revision": "bf3c6de10cc35d442d5fb6d8d3903f76"
  },
  {
    "url": "course/lagou/path3/module1/router.html",
    "revision": "976b220f35dffefcef9d97232bb3f209"
  },
  {
    "url": "course/lagou/path3/module1/virtual-dom.html",
    "revision": "ab8015e8703371c4871193686fa1c4db"
  },
  {
    "url": "course/lagou/path3/module2/source-code.html",
    "revision": "c08336a680959eb0290940a2061fd2f4"
  },
  {
    "url": "course/lagou/path3/module3/ssr.html",
    "revision": "45da450a8ce009bc51dcaaf8cbf9ade5"
  },
  {
    "url": "course/lagou/path3/module3/vuex.html",
    "revision": "8edce5c53efe567d9477c25d442eff91"
  },
  {
    "url": "course/lagou/path3/module4/my-components-libs.html",
    "revision": "b4ad33c3b465368f1e7628d5a42f5e52"
  },
  {
    "url": "course/lagou/path3/module4/my-ssg.html",
    "revision": "42b34f5e29c1dd0958afd93e0bb5dff1"
  },
  {
    "url": "course/lagou/path3/module4/my-ssr.html",
    "revision": "34316be9fe1d08fef8ef0dfc353ce3d9"
  },
  {
    "url": "course/lagou/path3/module5/3.0-theory.html",
    "revision": "afa16c119a5527fa9861a892751611cc"
  },
  {
    "url": "course/lagou/path3/module5/compostion-api.html",
    "revision": "383db7eb7be7be8749c0c2612425eb87"
  },
  {
    "url": "course/lagou/path3/module6/true-project.html",
    "revision": "08cd04b90159184f639f1f013d53bfee"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "1d87804df00377730cd82a4f38d8a12b"
  },
  {
    "url": "lagou/eslint-init.png",
    "revision": "dbca62f977ba2df2f10587240f3a315d"
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
    "revision": "4b98a95d1baa8287208c573d3ba48817"
  },
  {
    "url": "other/upset.html",
    "revision": "63c464743c0466fc6d63a0c232ae57d9"
  },
  {
    "url": "plan.html",
    "revision": "ad66cd7d5903e0ed435489167db9b20f"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "80dcd4b1a7c7d82deb9a62747722bb92"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "07c004869362827410435d6b1f3238c2"
  },
  {
    "url": "projects/testhub.html",
    "revision": "1479d8924fea24e6ff8689d381b3a9a8"
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
    "revision": "d941c9bb6c45538ec08f0741f4fc5146"
  },
  {
    "url": "server/java/index.html",
    "revision": "57faa03b9188bb06560f076c0a7fc026"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "2f2dc66e6140077395f96dd0af64b6f9"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "ea7ef211ca42dec3079b2f0d40dc9ab2"
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
    "revision": "c073ffb0378d9e15256d5158ecf8a24d"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "6e77f64c3d9bdb5b24d7747c059be697"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "64b77ec8072ae7f4ab942844d800ea9d"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "c4675b2dffdf0afd9acf433b4bb80be6"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "6872ed1bfc65b21d7d50302224284c06"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "e8234ee2e1da0f1ae7df2d1db58e1b32"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "f92ed89e8bd3cf79d9f73f7b7ff96faa"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "f0f0540a212cefe0704b4980054db6f8"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "1a73a4f59c5dd875b9fb5e0bfdda3429"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "7f37fb5293cc6d02e6a81922a8598d9d"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "9181396c897f39f6514740826a515cbf"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "d0bbf088bf1a2f3b9604ed2142889a72"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "43723cf776814feecedb2fac0c892fc1"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "e6aaf688a257a97b1afc493179e7bf44"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "c4b37c4aacd2862a5eae7720a1bb2176"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "1288834ca0021ecb350d20abb6bfa87a"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "a7dcfbba8898773a72e1ce372cb5a846"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "46889c5af1d2fd18fb85c65df74d2c15"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "e6e7e5745878e25d4211c8d47707ba6e"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "57edd462e82bd9b24bad75121c52590d"
  },
  {
    "url": "server/python/index.html",
    "revision": "7922f245d8aec7150557f4a2de029b53"
  },
  {
    "url": "server/server/index.html",
    "revision": "b5341862f049d09a50d9d12bb14160a8"
  },
  {
    "url": "server/socket/index.html",
    "revision": "8f42c56a04a74da3d22ad7fb44dd86c4"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "2bd12679b13f0eef77ce9b7e69d5bfc8"
  },
  {
    "url": "tools/git.html",
    "revision": "08d578ba05d7f14e40482ea770f57464"
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
    "revision": "380691c4ebbe3efd02a2730d527c9dfb"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "c4c2c08f3178b4b70c9c54dde31b292b"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "58b81b4628659e70dd08fb3bbc5e28d0"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "efb5689eb0259c1c3c4098ab53b3337b"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "419f0be6c01418f2118213fa80228524"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "4e7ce887f83c6b1fc8493923e9e71378"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "f5234365f3edfa9bd06186f0a7d11947"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "b5169857750bafbfeff2ba5d315ab02c"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "c0c5473d0cf7d313cd846ff5919d2d0e"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "221436c3f3813ebca3ad156fa2d0d6ea"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "2d49eaf1963aec6d102d7f2174f61126"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "bce2871ee584361daf9e3790968db766"
  },
  {
    "url": "web/basis/async.html",
    "revision": "cde8d71989891001a5bc1c4866408fc6"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "601886cf5ec1dfaaf219417a9db4764f"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "23cd80cf896332e7846d5aeac3e4adcd"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "c5b3e17d1f601584a943ec666014c255"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "8cff3c0448b20882361e877bfdbdff8b"
  },
  {
    "url": "web/basis/html.html",
    "revision": "b1a682eac4fc7baa0e6b10bb39a7405f"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "fd82415c41938a1589859d65177cc8d2"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "2c383fae5570605b2d772a59df182469"
  },
  {
    "url": "web/framework/index.html",
    "revision": "623fe344dcc4cb3b5e6754aaf3de84b9"
  },
  {
    "url": "web/framework/React.html",
    "revision": "d81d9e3f6c5847f6e96bbed6f1746365"
  },
  {
    "url": "wechat/index.html",
    "revision": "635e47bea0a3a771261cfc20b06adb9c"
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
