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
    "revision": "4e22b5878c3523f78838f7ec67e316f8"
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
    "url": "assets/js/10.c847ad45.js",
    "revision": "ba51bd694b616f42ec88ae509daeadfc"
  },
  {
    "url": "assets/js/11.9255a1de.js",
    "revision": "a2469d9a71c982b9ca58a26a9e29c5f0"
  },
  {
    "url": "assets/js/12.3bca2d52.js",
    "revision": "08845c95e77a8a900ef1f5e2099145ca"
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
    "url": "assets/js/15.ec06fd7d.js",
    "revision": "bdc3e41c49978c24639f02f0bdd11f06"
  },
  {
    "url": "assets/js/16.c00403ed.js",
    "revision": "ca1cfc2376cc0ad7746dd242831407f3"
  },
  {
    "url": "assets/js/17.449b6886.js",
    "revision": "7a66cd5b8e784362e9db7d886bf10d28"
  },
  {
    "url": "assets/js/18.f88beb91.js",
    "revision": "b5063dfde1a67afe9ad874589d13f4db"
  },
  {
    "url": "assets/js/19.c565c4be.js",
    "revision": "24bbde3d8b1ba21347eacbfeef5db6a1"
  },
  {
    "url": "assets/js/2.a9b97005.js",
    "revision": "a52160eaad028456e71b9c3a92bf9d81"
  },
  {
    "url": "assets/js/20.0af2cf6b.js",
    "revision": "5436ac59521d88575c1991526c1206f6"
  },
  {
    "url": "assets/js/21.da44d9ba.js",
    "revision": "03ccc160622870d8ab91357d41306dde"
  },
  {
    "url": "assets/js/22.46c65fa4.js",
    "revision": "b05fb385cd3d8b9453f062ea7d906b0c"
  },
  {
    "url": "assets/js/23.63bb79ed.js",
    "revision": "eef086b1d7b993a18e3c3b320fe38f80"
  },
  {
    "url": "assets/js/24.b849da12.js",
    "revision": "c847355c53cb15c66d7e164415bf9676"
  },
  {
    "url": "assets/js/25.ce8e0106.js",
    "revision": "460a0ead83d386fe0d05af83053caf28"
  },
  {
    "url": "assets/js/26.a113d2dd.js",
    "revision": "ba91a5dcc20ea4485beacb9145d174c4"
  },
  {
    "url": "assets/js/27.ad05c963.js",
    "revision": "67bf49d8a7fb2deb9dddc82953da167c"
  },
  {
    "url": "assets/js/28.5ee79e20.js",
    "revision": "9bd50b9baab4c2448b007c540fa6010c"
  },
  {
    "url": "assets/js/29.cbd62251.js",
    "revision": "f1b9064a340605bf814f1fc81c093290"
  },
  {
    "url": "assets/js/3.93cabe1e.js",
    "revision": "36f9734f9a3fa9168c5437635e81aefe"
  },
  {
    "url": "assets/js/30.dbea940f.js",
    "revision": "a2e3002d4c47c6f63df5361e1c8373fa"
  },
  {
    "url": "assets/js/31.8b0026d3.js",
    "revision": "3ce85cc0193dfefe292e13b05e24c389"
  },
  {
    "url": "assets/js/32.c6996abe.js",
    "revision": "76c54e1111e9c4d7a3b7a540d9598cef"
  },
  {
    "url": "assets/js/33.d6fb5e76.js",
    "revision": "18d7961cc13ba155f11ba5c548825cc7"
  },
  {
    "url": "assets/js/34.103c60e4.js",
    "revision": "fc8b5fa19fb6e5c0c70cf6d86cdfe61b"
  },
  {
    "url": "assets/js/35.fa0ac45d.js",
    "revision": "76d1a5988682a4137ec70dd389559a9b"
  },
  {
    "url": "assets/js/36.171371a2.js",
    "revision": "85247b4ed566a6e8c8879d1845111827"
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
    "url": "assets/js/4.b868ba84.js",
    "revision": "4b85ab53ccabc3498e70ce837e138039"
  },
  {
    "url": "assets/js/40.b3e3b313.js",
    "revision": "3a5428324f96573e694705e7c9bd031f"
  },
  {
    "url": "assets/js/41.d6848fb4.js",
    "revision": "1db662cb7c170fea1de0c912d02c64a6"
  },
  {
    "url": "assets/js/42.1e8ed962.js",
    "revision": "68ec57b06c70663189f0a95ffa996fc2"
  },
  {
    "url": "assets/js/43.d00e8476.js",
    "revision": "30ba0e4ded16ea29b66eaafc610303b2"
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
    "url": "assets/js/48.464a1d61.js",
    "revision": "6ca339ab09104a9770a381eb88cd8f12"
  },
  {
    "url": "assets/js/49.fb443cb7.js",
    "revision": "f1e1883fbdec6d8367c04aaa135c550c"
  },
  {
    "url": "assets/js/5.6d4cf194.js",
    "revision": "24329d4a824053a6aa5447fb796059ed"
  },
  {
    "url": "assets/js/50.ac5d2c87.js",
    "revision": "abe8a12ee4c16dc332489b01dec43ad4"
  },
  {
    "url": "assets/js/51.8bea53a7.js",
    "revision": "dbeebaeebfcc2d3174243db0a573f1ed"
  },
  {
    "url": "assets/js/52.0a36a112.js",
    "revision": "22c83f3e1cfa9b82abd68a8dd770ea3a"
  },
  {
    "url": "assets/js/53.77c86e92.js",
    "revision": "31992352dca1a0f6b55c3771036c4e80"
  },
  {
    "url": "assets/js/54.cf458cc5.js",
    "revision": "e1234734fd61ee5e7361f89d9fa2a649"
  },
  {
    "url": "assets/js/55.ef681e8a.js",
    "revision": "bd2ff736b90872fb5fcd48193e67ac96"
  },
  {
    "url": "assets/js/56.f8e0ef77.js",
    "revision": "51c8be7c0f2beb2ed83bb65ac024b4be"
  },
  {
    "url": "assets/js/57.32b8b000.js",
    "revision": "d41ae706b294c3185c75a804e92d4b17"
  },
  {
    "url": "assets/js/58.7e944ea4.js",
    "revision": "7e1ef108ee89fd9fceb4927fba7c23ec"
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
    "url": "assets/js/60.610fa3e5.js",
    "revision": "4be32affa36f89873e862b072107a8a3"
  },
  {
    "url": "assets/js/61.321583dc.js",
    "revision": "2e42492b30b315b44ea6970e95113c86"
  },
  {
    "url": "assets/js/62.0125d01d.js",
    "revision": "c614f0ca8ba70ab670770f41f0017c1b"
  },
  {
    "url": "assets/js/63.92149dfa.js",
    "revision": "ee668131b51d2b6ae76b1e7c2696e93c"
  },
  {
    "url": "assets/js/64.c48c2888.js",
    "revision": "a8039081101c5a104e9917c65f6b1c83"
  },
  {
    "url": "assets/js/65.5629e0da.js",
    "revision": "0432511fdb83d0870f11978fa13bc642"
  },
  {
    "url": "assets/js/66.04614d38.js",
    "revision": "d2a7a6d0d8b79e9647295a00efb8109b"
  },
  {
    "url": "assets/js/67.bd07af35.js",
    "revision": "16c6fe57324001f39cce823fb814058e"
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
    "url": "assets/js/8.6e7e3d6c.js",
    "revision": "9a46e70947b4bca4d298fb3a146bf9ed"
  },
  {
    "url": "assets/js/9.ee35ac94.js",
    "revision": "47dc0cde855f135942953da8e7e1ca69"
  },
  {
    "url": "assets/js/app.1111f98f.js",
    "revision": "745a79676dc3d92a05d579b415b8b482"
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
    "revision": "630239771132bf9955347b7753e762e3"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "08f777f7067a695196e959bfee7a2b85"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "fa30a4dc5394772d92a80cdf65e92e6c"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "e81d874c1ea91cfdf6b76451a8ba2320"
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
    "revision": "2c952e986e4e8d57667fc8ee0b757585"
  },
  {
    "url": "other/偏激.html",
    "revision": "71308d0cc70151a0f4e7e774a926dd5d"
  },
  {
    "url": "plan.html",
    "revision": "e96a29c31b955436979820188b5c1fe8"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "ae262fd65a7f8d4eb84b5c3df0228065"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "630501554ed1266f4d62c3c94246ea95"
  },
  {
    "url": "projects/testhub.html",
    "revision": "bae2a287d4af9ded812eb51472fb8120"
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
    "revision": "00e2f2990134f32b69f77ed27e76c556"
  },
  {
    "url": "server/java/index.html",
    "revision": "fb12827ae6010a2dff0cb579b84cf09e"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "072556302ff11dfae2b08c503fd8187a"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "51a5dcf48bafd19792603c1abef345bc"
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
    "revision": "dfd04eac1ce9299b3a5ead98e9835312"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "128e457b3b7e980444799721260e9d91"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "ca66e1699446b1c71752c3e2463f4830"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "8e294a7467de2cddfe0adc916dda621b"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "b193a3bd4bb8de293027aa6609e10d18"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "fd496f0279455ab4440191de697947d2"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "6d126f1a027a58a044591653eeefa969"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "7ebd5b39517069d2176f89300de3506f"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "6a7a6467a74976e9ca38b5383d47503d"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "06db822753e9155a5597cacef3e2c7fd"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "e2fb16f3f7e30e30c5f86307e818a882"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "8e7d4c783d5812105be180be3d858386"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "9de14d61c5bd3b792022a67131c88bdd"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "956d825a8713c9e96978cf9a99ad96f4"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "e4e31211502820921fd24af4f8b61921"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "9a5edc59e46a9f651b41b5cb7dc9cfb4"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "aa81fb347aa1cb478c318b4046de03c5"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "44c87716028c748f88aa9e93ed910904"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "b9d89016f2c9bb849a6035e8335f2df6"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "82ba78d502b842411a190452a73496f8"
  },
  {
    "url": "server/python/index.html",
    "revision": "45622cfe3e2eb589b5dbc617f819fd2f"
  },
  {
    "url": "server/server/index.html",
    "revision": "a2becdd822dbfb85a9a541dba1f59a53"
  },
  {
    "url": "server/socket/index.html",
    "revision": "97c97b7765d66f0a8e96d082f9c2c8ec"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "94220eb4a1580dfed6e381130cab8a6a"
  },
  {
    "url": "tools/git.html",
    "revision": "6e2e730922f2ea5fc276d10f6f68fb8e"
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
    "revision": "ad879f9c0004924948a916a28eb93c16"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "0d64643ff56574b314d3a89a17d50175"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "ea87e2c9baa972ff0fadc2a891483ef5"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "267fe1c75a46ddb366e082c68176639a"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "7df3b42a31f7a1eaefd5ff8c3954f9ab"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "a3909ee59b48baddedfa6a39f8aed8c2"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "adce959910c616e9b3ec2355bee84b0e"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "c829940d140917ed51773392c6725d31"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "323ebd675dd516ff6698833ab6bdfd28"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "1762122a2a415542c47cae73505c98a7"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "2fcff60a9b8049afe7f0402ef152d4ad"
  },
  {
    "url": "web/basis/async.html",
    "revision": "27505c27aa2238c3208a5def753db483"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "f841ee884b9e7e965c772ce758fbff3a"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "da69263c72c6edf55ede0a48513b0325"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "016b478f489d0fca67fc9aa173b3ae32"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "3c9abbc8268c23378f24aafb20161ba4"
  },
  {
    "url": "web/basis/html.html",
    "revision": "be0f4eaee50ab2591bbe88544f01769d"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "972b2ab0e515b492fe03315e152e2491"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "11483315aeee50c0a92e252e40821435"
  },
  {
    "url": "web/framework/index.html",
    "revision": "d249900e29dc95f4a7747dfcf75861b6"
  },
  {
    "url": "web/framework/React.html",
    "revision": "8410d3c69bfec64998bc19bd41115ab3"
  },
  {
    "url": "wechat/index.html",
    "revision": "86e7d123113da902fa12314eb0216c33"
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
