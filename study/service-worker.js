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
    "revision": "bbffa977d5e438f10cd8ddb0d01d3079"
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
    "url": "assets/js/11.54af9d34.js",
    "revision": "9de4a212b2ca8b2173e3b993d4b79314"
  },
  {
    "url": "assets/js/12.1bff9ff9.js",
    "revision": "5816e5eba67478d81445bb508f0a2ece"
  },
  {
    "url": "assets/js/13.c957678f.js",
    "revision": "a1cf1aea045582f3aca15830ace2c328"
  },
  {
    "url": "assets/js/14.107ab701.js",
    "revision": "8700233de432332574ba2d7b31c220ea"
  },
  {
    "url": "assets/js/15.5d247dc5.js",
    "revision": "9823962af8355d522248b4a37999df8e"
  },
  {
    "url": "assets/js/16.5ea238ab.js",
    "revision": "c5548244f014bf0a4e715dae871bf041"
  },
  {
    "url": "assets/js/17.ca7db418.js",
    "revision": "81d58a20ba9a52d074e6271790e7e721"
  },
  {
    "url": "assets/js/18.8265047a.js",
    "revision": "3e4e0295de83e227278e60e3d4ee2d35"
  },
  {
    "url": "assets/js/19.d6d251f0.js",
    "revision": "49b27f286447f8d26191093224ba4020"
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
    "url": "assets/js/21.958d5be0.js",
    "revision": "725de25888aaafe35ce05e8aaf3a4960"
  },
  {
    "url": "assets/js/22.ec5a72e0.js",
    "revision": "d7316a4795f719417c02fd9ae3782b68"
  },
  {
    "url": "assets/js/23.5e6c201d.js",
    "revision": "a58f894cd6a6204f3ad046935f06af35"
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
    "url": "assets/js/26.32cb3450.js",
    "revision": "f615469fe74bb25b8dd1ab2867517281"
  },
  {
    "url": "assets/js/27.00370bda.js",
    "revision": "65822207c71a9288c08f8f375019c387"
  },
  {
    "url": "assets/js/28.fee80f8d.js",
    "revision": "788fde64906dcb1993b65b4a19cf889b"
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
    "url": "assets/js/30.f3f1e058.js",
    "revision": "1f309bb00de4cd7d6af45d58498b10b3"
  },
  {
    "url": "assets/js/31.08b63d15.js",
    "revision": "5230860ba2a31434ce77daa097d89784"
  },
  {
    "url": "assets/js/32.64d28bf8.js",
    "revision": "ac033a9cad15e4db36845270463e24f7"
  },
  {
    "url": "assets/js/33.7bffeb69.js",
    "revision": "c291334af7df9ee99f896ac3bf596704"
  },
  {
    "url": "assets/js/34.97edab83.js",
    "revision": "a4fecebc13d3ad1a0c6fe4b6e74f0e18"
  },
  {
    "url": "assets/js/35.8ffb45c5.js",
    "revision": "5bf66a235648224d47de7b2afa3683ac"
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
    "url": "assets/js/38.0d6edd63.js",
    "revision": "2c15366f3a8ff4f0c193888d9aa0d838"
  },
  {
    "url": "assets/js/39.3e184e0d.js",
    "revision": "9cf63f1b44bfef02685d832d5db5ff97"
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
    "url": "assets/js/42.b8645b90.js",
    "revision": "c55a4c710c10b16d5227a3c55229a026"
  },
  {
    "url": "assets/js/43.d80ae517.js",
    "revision": "5041fc969788d8a66aee004812338a24"
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
    "url": "assets/js/47.48dad911.js",
    "revision": "966ff8468a7251dd3813aeb8e1bc8230"
  },
  {
    "url": "assets/js/48.eff3736f.js",
    "revision": "b46b6c0f0c30e3177fc91b967c3136f0"
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
    "url": "assets/js/58.d209d95c.js",
    "revision": "835c5a79d8588706270db5244762287f"
  },
  {
    "url": "assets/js/59.7fc90f8e.js",
    "revision": "27954f98bc8503665ef40a332dea91fd"
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
    "url": "assets/js/62.dcacc91d.js",
    "revision": "a3da6f49e4c3e6f1c6222ca7d14da4d7"
  },
  {
    "url": "assets/js/63.16246a71.js",
    "revision": "b18dbf5021681d1b7260ac2013f9b0aa"
  },
  {
    "url": "assets/js/64.2ca16ae8.js",
    "revision": "3a8465181022f0e74c0a25a85582e77a"
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
    "url": "assets/js/67.78488bd7.js",
    "revision": "ab92194c3dd30e6f4c8faa5d7c33ca2d"
  },
  {
    "url": "assets/js/68.fe2257ee.js",
    "revision": "9879b20a86beba6369c64ccd8e6d8b60"
  },
  {
    "url": "assets/js/69.281813de.js",
    "revision": "7990185fd608b3225bbdebbb2d78601f"
  },
  {
    "url": "assets/js/7.6c45e6b4.js",
    "revision": "ef2ec0e9db8c2fb955cb8fbb33b92f9d"
  },
  {
    "url": "assets/js/70.30312fef.js",
    "revision": "366fe9abac0df579641cf252e4940bca"
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
    "url": "assets/js/75.1731e42d.js",
    "revision": "4d07ad9b1c94ac22c3c17de9a190f649"
  },
  {
    "url": "assets/js/76.43a8b194.js",
    "revision": "08b6860bd36844d8a3b79d94eb28ba5c"
  },
  {
    "url": "assets/js/77.7bfcb2b0.js",
    "revision": "798402279bd44507a735518aed54fb05"
  },
  {
    "url": "assets/js/78.28d278ed.js",
    "revision": "9e7efd28a80d872c3c79b17b9d48dd2d"
  },
  {
    "url": "assets/js/79.39fdc8b4.js",
    "revision": "d986c2a3de12bb907603c76e6f145893"
  },
  {
    "url": "assets/js/8.e6131c2d.js",
    "revision": "eb5a44d898295dadf626c6579c371377"
  },
  {
    "url": "assets/js/80.1819ce05.js",
    "revision": "9e8d917af3d8c9216a615a11e8e0c863"
  },
  {
    "url": "assets/js/81.784e2706.js",
    "revision": "2b28b607b76b8264bc57b304a170fc0b"
  },
  {
    "url": "assets/js/82.24a49643.js",
    "revision": "395a6d303b451b90b86b0ee43f38e985"
  },
  {
    "url": "assets/js/83.cdcaa5eb.js",
    "revision": "bf2731dd577cdda1d0027c9b37d54bf6"
  },
  {
    "url": "assets/js/84.f06dce71.js",
    "revision": "f63c107b8d0675c4be1eeaaba7920e12"
  },
  {
    "url": "assets/js/85.af771016.js",
    "revision": "03545b637b27e5a3a5964fdb2cbf5a73"
  },
  {
    "url": "assets/js/86.b20cd445.js",
    "revision": "89735b8577a2700b69d83b5998dc812b"
  },
  {
    "url": "assets/js/87.a64d4b9c.js",
    "revision": "62ca94538a68a15ef3d0cd731040e654"
  },
  {
    "url": "assets/js/88.b63ea3a1.js",
    "revision": "a331b7cfc595f09820137bf2f1a742ab"
  },
  {
    "url": "assets/js/89.55c1d897.js",
    "revision": "220aa1cf3e3f9f91a961c96b195ae6b1"
  },
  {
    "url": "assets/js/9.e4bc17a7.js",
    "revision": "71c4a87e8c38b07e4fd491a23182309b"
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
    "url": "assets/js/app.3afebb82.js",
    "revision": "87dc0368e73d2248ceecd9e924aa9229"
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
    "revision": "ca4cac6af0efb6bfbebb966037a92ff8"
  },
  {
    "url": "course/lagou/index.html",
    "revision": "858d210315116bf89b27ceafec7ada12"
  },
  {
    "url": "course/lagou/path1/async.html",
    "revision": "2f755d81ea1009840428eab2d2b10923"
  },
  {
    "url": "course/lagou/path1/ecmascript.html",
    "revision": "b93eee9ca5b5232b241b487ecedaae66"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "dda47bf1ff5106b0119528137e28d985"
  },
  {
    "url": "course/lagou/path1/js-optimize.html",
    "revision": "6e22f839fb75bf7ba439187f3be164e3"
  },
  {
    "url": "course/lagou/path1/promise.html",
    "revision": "e187e85fbc948474d7c233f200f76732"
  },
  {
    "url": "course/lagou/path1/typescript.html",
    "revision": "8449bae939e809757c670e327071199a"
  },
  {
    "url": "course/lagou/path2/automated-build.html",
    "revision": "6744bebe3b53854e19252f827e7dfc2e"
  },
  {
    "url": "course/lagou/path2/engineering.html",
    "revision": "16e2c9407c2f9f4fda5bcb91fa41ba8f"
  },
  {
    "url": "course/lagou/path2/eslint.html",
    "revision": "8ddd7a303804ad7b0d74b54970f8f6f3"
  },
  {
    "url": "course/lagou/path2/module-develop.html",
    "revision": "a53267dd6fd6b65e349355ac4e9f548c"
  },
  {
    "url": "course/lagou/path2/other-build-tools.html",
    "revision": "34d599d28e3a04be74f6fdefaef2e508"
  },
  {
    "url": "course/lagou/path2/staging.html",
    "revision": "1f90d509b96ad1ce3c28b640d8078a24"
  },
  {
    "url": "course/lagou/path2/webpack-build.html",
    "revision": "c9bc6bf1b33593d504547079fb47db8e"
  },
  {
    "url": "course/lagou/path2/webpack-soundcode.html",
    "revision": "31c7d2595c9712a25fb9b3a49c1dcf46"
  },
  {
    "url": "course/lagou/path3/module1/response-principle.html",
    "revision": "0b4c76d63d3252902302131bb9d7cf9d"
  },
  {
    "url": "course/lagou/path3/module1/router.html",
    "revision": "fa17f9f07208fbf3fa6154fd4c5ac27c"
  },
  {
    "url": "course/lagou/path3/module1/virtual-dom.html",
    "revision": "69f9bacdd604966d7b5eedb89cc2197a"
  },
  {
    "url": "course/lagou/path3/module2/source-code.html",
    "revision": "b4526f1df7c2c714aec250553bd82302"
  },
  {
    "url": "course/lagou/path3/module3/ssr.html",
    "revision": "b73952b197824540bb966cc8faba2588"
  },
  {
    "url": "course/lagou/path3/module3/vuex.html",
    "revision": "205ae1a3893d20f7f6a7539e1b1cbb4d"
  },
  {
    "url": "course/lagou/path3/module4/my-components-libs.html",
    "revision": "450a608e3a84be033ed5af7accd5be80"
  },
  {
    "url": "course/lagou/path3/module4/my-ssg.html",
    "revision": "3479ab89b0773cdc26754be2fde621a6"
  },
  {
    "url": "course/lagou/path3/module4/my-ssr.html",
    "revision": "396592ebdcf2724281cef3e61eaf1ed8"
  },
  {
    "url": "course/lagou/path3/module5/3.0-theory.html",
    "revision": "1048666e81fbcae2cef49ae7a0db7426"
  },
  {
    "url": "course/lagou/path3/module5/compostion-api.html",
    "revision": "83107feea71347adfd2a5d116451ec61"
  },
  {
    "url": "course/lagou/path3/module6/true-project.html",
    "revision": "a78e521e58a4586ee6bcd1f57f381a12"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "ca90fc46ccc70285223a4d331858011d"
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
    "revision": "5d270e4baabb5f55e48d0eefc952ad72"
  },
  {
    "url": "other/upset.html",
    "revision": "ea20e7b1cb3da877be2912706c3a0c5e"
  },
  {
    "url": "plan.html",
    "revision": "9f5c35fd3a6499aef591e66347c84d60"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "433cc1b22eca1585d33061c73c2b5f2c"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "29ba41fc7538ae1bfa4f29319ef07c74"
  },
  {
    "url": "projects/testhub.html",
    "revision": "7336a98f43ad5ed58b2fe0dc9fa0654e"
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
    "revision": "e41b3891b22fd2a223a0e35f905c9e79"
  },
  {
    "url": "server/java/index.html",
    "revision": "427673463fa0230dfb894fe6a98f2bb0"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "36b1128305e0f45d549a01ef36c66971"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "11bbd0b9d51ce5ff54ff8ae1121904ec"
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
    "revision": "15dff19c121b298705629ba8fb80cb3b"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "b4b9e5362ce7be9d954e586ca346c9b7"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "9c86a1de9214c18bac57a6e8029fcf35"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "6b4e2cceb6c4c06af3481bc1bac36d75"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "de102e582a9448df46d1c3ad917f5035"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "08d4891a1cc32fa46d18182ccce99add"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "9429f052e8fc6aadde6d5949a833382e"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "1cab7fbd5305126bdfa6000b060cf93d"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "247ea61df702400d81fc1b8256bc3855"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "25a3d6e5e71f1fe2c86a554d185e7ea0"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "6d25327be087af54b41af06566a1519f"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "6d0964b47cb6a35049d0a731c8ddccb2"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "38ff71637fdc1a7371ca84bad1f295f6"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "c808929e4b75ed9da83d2298bcabbecb"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "9f8a51a2c0e889279fe0d90886923c48"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "db4d8680e917b5d7356c1ff7c34d5a19"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "167ce0a5486bdd681b8b3062467bc686"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "cc613d256e9ca56b086f54728f6dd471"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "cab95baaf83237fa18cecc4f3d529ae1"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "5a1a5c0f868a3f90e0a0d8a8d187e682"
  },
  {
    "url": "server/python/index.html",
    "revision": "9ff4b4ad5b4ecd4a438153c2b0c7c8e2"
  },
  {
    "url": "server/server/index.html",
    "revision": "46baf77e7bfb825f8579255633062fa7"
  },
  {
    "url": "server/socket/index.html",
    "revision": "8b1dca96baf752539228ace6fa647d26"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "470b5c7ef85f88b5b057f9d341d190be"
  },
  {
    "url": "tools/git.html",
    "revision": "9ae91096b53c9b2f18a273b3706e2225"
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
    "revision": "f9c014abe499ece8cece70fd0fed5558"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "d6ab982048db6bbe5bd65f1031ad7138"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "2456f1ad37082c855ecaa9319f51834e"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "8ae33739af88297ca73559f67a90c01b"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "4a6d04690c90ac17fac47c56b9b07a90"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "b285ab5592dd331d91331e30462b7b44"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "5b18ab7e594d46209c5a4b7227cec4a8"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "e8722bfac4479b82e8ad1666a7987f60"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "e5e1ad7c3dd8e07d01e894f32c380dea"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "51ce13c71c055a7711e188f314327d20"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "22dbcf2401b2688675424d37037caea7"
  },
  {
    "url": "web/advanced/vue/vue3/compositionApi.html",
    "revision": "6c5ac49b6f5131ff2b406cff2e1967ce"
  },
  {
    "url": "web/basis/async.html",
    "revision": "a20a9ed02b73983a799bbb5d0592f111"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "17fa30b38b79fb766a0b03d582ef5ff7"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "c7f539fc3e0f79bd02a44e6fc9b468aa"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "58916447e8a5a9fc7d97ccecb7dd9296"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "bbe0640c7a883ff0e4556058bffd5ce5"
  },
  {
    "url": "web/basis/html.html",
    "revision": "01362b3f8590fa07e9c22b6bac03f4d9"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "858d0bb533087a0abfc61a4450799021"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "8b74b0ace0f6be5b33c6c46853293cd8"
  },
  {
    "url": "web/framework/index.html",
    "revision": "a4c4a4510165b3fbaaedbe1a37dc78fd"
  },
  {
    "url": "web/framework/React.html",
    "revision": "30b0beac07ab68e31c715cf2ffe43341"
  },
  {
    "url": "wechat/index.html",
    "revision": "8411eda701d3287b21d26712372f575d"
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
