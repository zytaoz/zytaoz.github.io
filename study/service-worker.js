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
    "revision": "ea34dbe3226c9255c6438cdb12b03e23"
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
    "url": "assets/js/10.6d169857.js",
    "revision": "ae08de3a86580b5f3e35f0d94df285b3"
  },
  {
    "url": "assets/js/11.32564947.js",
    "revision": "e1f39fd03dd4d3c7598b4a1ab0f69418"
  },
  {
    "url": "assets/js/12.edb9001c.js",
    "revision": "e4269ce32235f0d45030b04937f3e38f"
  },
  {
    "url": "assets/js/13.b0ea4f7b.js",
    "revision": "7addd8d87f26d077d6533efd6543eed2"
  },
  {
    "url": "assets/js/14.bbb3a6d4.js",
    "revision": "56908240400891a4a3df8e99886437d1"
  },
  {
    "url": "assets/js/15.0f4a0cf2.js",
    "revision": "59f97a1a07ebe2faae1de61b16656812"
  },
  {
    "url": "assets/js/16.3ff08cd6.js",
    "revision": "ca1cfc2376cc0ad7746dd242831407f3"
  },
  {
    "url": "assets/js/17.b6b05235.js",
    "revision": "3390a98cecd2960dd4010a5a3cf888ca"
  },
  {
    "url": "assets/js/18.c73a2932.js",
    "revision": "70e54170972e5e145db7c52132b3a09d"
  },
  {
    "url": "assets/js/19.ac3534e0.js",
    "revision": "510c106f09c8514d72e017f269a5f288"
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
    "url": "assets/js/22.2261d0a0.js",
    "revision": "1462a7c7e07d1783412f94e03152206c"
  },
  {
    "url": "assets/js/23.c55f9753.js",
    "revision": "d03a27c24cf22548dd69883f921f6c71"
  },
  {
    "url": "assets/js/24.cab3ec56.js",
    "revision": "11258b2186d868ea20699938442fb5ec"
  },
  {
    "url": "assets/js/25.febba345.js",
    "revision": "7b1fb72f2281a165bac44e8bc38d3651"
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
    "url": "assets/js/30.a877f583.js",
    "revision": "fadb7e06f6bcc8ab87aaf59950309d11"
  },
  {
    "url": "assets/js/31.8e92f5ac.js",
    "revision": "fe4c9d149459ab5cc2e7ae16a1485840"
  },
  {
    "url": "assets/js/32.7a5127ab.js",
    "revision": "8a6d9e14834cb0bd360257f671bed933"
  },
  {
    "url": "assets/js/33.f3036f5b.js",
    "revision": "18d7961cc13ba155f11ba5c548825cc7"
  },
  {
    "url": "assets/js/34.ab53d1d8.js",
    "revision": "fc8b5fa19fb6e5c0c70cf6d86cdfe61b"
  },
  {
    "url": "assets/js/35.dfb75f5e.js",
    "revision": "c1519a50113ce743cf1262553af99a03"
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
    "url": "assets/js/38.1119da47.js",
    "revision": "7fa101b7380ef8ded7b97287b69a5601"
  },
  {
    "url": "assets/js/39.f050e314.js",
    "revision": "f77e0d2580bb2060272e29e1a6ae78af"
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
    "url": "assets/js/43.3eeec219.js",
    "revision": "30ba0e4ded16ea29b66eaafc610303b2"
  },
  {
    "url": "assets/js/44.bcea259c.js",
    "revision": "1191eacbc528f05046aaf43178bfe0be"
  },
  {
    "url": "assets/js/45.19ac04af.js",
    "revision": "d8384c5966bea5a891d4900bca6b9619"
  },
  {
    "url": "assets/js/46.ca78aab3.js",
    "revision": "a2060758af88442353f346e763da35b3"
  },
  {
    "url": "assets/js/47.5b4a3537.js",
    "revision": "0a9771d6c6ab1113229d2e4508ec64b2"
  },
  {
    "url": "assets/js/48.21cd85af.js",
    "revision": "4db992a2a156f57810bdc015cb87b584"
  },
  {
    "url": "assets/js/49.d5654346.js",
    "revision": "f1e1883fbdec6d8367c04aaa135c550c"
  },
  {
    "url": "assets/js/5.cfe0dd09.js",
    "revision": "3c942d47e0c4346cbdc3cc0c743ad081"
  },
  {
    "url": "assets/js/50.0f0fc11e.js",
    "revision": "3410941c96d8054afa464ce06015b8b9"
  },
  {
    "url": "assets/js/51.e51242d8.js",
    "revision": "ffd689a3af824f80ee2286891cce2232"
  },
  {
    "url": "assets/js/52.d7f6c7ca.js",
    "revision": "a03d984f3c770f764bb303d0a3caf694"
  },
  {
    "url": "assets/js/53.9b06d36e.js",
    "revision": "eb66702b1bc364829b293c807363c262"
  },
  {
    "url": "assets/js/54.08457c4d.js",
    "revision": "18f6c8009fdf49e9bf400afba0446fc1"
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
    "url": "assets/js/58.755f981f.js",
    "revision": "81410e9b9b8d91a65cdd7ff6542ec91b"
  },
  {
    "url": "assets/js/59.97cc0199.js",
    "revision": "bdb74acad8a24c4cf80d69c7d5094c4c"
  },
  {
    "url": "assets/js/6.6176149c.js",
    "revision": "30700d58c3bca70dc66159e148cfd1d2"
  },
  {
    "url": "assets/js/60.8b176544.js",
    "revision": "7d422a51f2454abd5e1ba18ef071e2e5"
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
    "url": "assets/js/9.654963aa.js",
    "revision": "5d7946ea92bca00996ed42d0c26057e4"
  },
  {
    "url": "assets/js/app.8bfdbc7e.js",
    "revision": "5313ebc11e98b1026352259a54bd77b9"
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
    "revision": "99f834746c04132a93e2a849096857dc"
  },
  {
    "url": "course/lagou/path1/FP.html",
    "revision": "308cee85f34839fd3a0ebea0702108d3"
  },
  {
    "url": "course/lagou/path2/cli.html",
    "revision": "fb5e1304ab8a23b592213bd9d2528dc0"
  },
  {
    "url": "icon.png",
    "revision": "2ca0e765ad3b9c6604b414b8bb83061b"
  },
  {
    "url": "index.html",
    "revision": "cfb004889d19fd81907be361ca15874d"
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
    "revision": "cea85ef0ea8e2159cd7af5ae4f94ac5f"
  },
  {
    "url": "other/偏激.html",
    "revision": "314f09b6c951aafbf471d3175de22c56"
  },
  {
    "url": "plan.html",
    "revision": "675dc87d84e86ae7328d950c3af07505"
  },
  {
    "url": "projects/alfred/index.html",
    "revision": "1235eff661e4beeccfcb6912922d4e52"
  },
  {
    "url": "projects/hopesnack.html",
    "revision": "7c84996803b462fe93e3af5004873926"
  },
  {
    "url": "projects/testhub.html",
    "revision": "fecbd89291db62cea94b856ea354d9b4"
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
    "revision": "5c44e16ad87d96e02381f89768b6188a"
  },
  {
    "url": "server/java/index.html",
    "revision": "ef81838488206d735fd33fd6879e7cbd"
  },
  {
    "url": "server/jwt/index.html",
    "revision": "c091bea59329bc3702dbbbaae90b84f7"
  },
  {
    "url": "server/mysql/basis.html",
    "revision": "c2195403d77e8e6edd6cffbc8737253e"
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
    "revision": "5bf1118c3c6530adfa550a74e7f9d4cb"
  },
  {
    "url": "server/php/basis/basis.html",
    "revision": "1a550d7c35e2aaa90a6f19422331c2e9"
  },
  {
    "url": "server/php/basis/constants.html",
    "revision": "244615984dfbbb687a41778eba8265e7"
  },
  {
    "url": "server/php/basis/expressions.html",
    "revision": "9155d4be5a2b8ed323c4d59755cd57de"
  },
  {
    "url": "server/php/basis/functions.html",
    "revision": "6f6ce441d5219b09de5a71317cac7ed1"
  },
  {
    "url": "server/php/basis/namespaces.html",
    "revision": "e45fb5bec5f154833194d319e189e2dc"
  },
  {
    "url": "server/php/basis/oop5.html",
    "revision": "c04bc81a959ea883cfd11175b14ce0c2"
  },
  {
    "url": "server/php/basis/operators.html",
    "revision": "caf349ac0eca67b3a37f7bbddf42579b"
  },
  {
    "url": "server/php/basis/structures.html",
    "revision": "d92f1cd7cbfec27654b3db7fa97e0b86"
  },
  {
    "url": "server/php/basis/types/array.html",
    "revision": "97c0095cf517732c5caa2f83327ca401"
  },
  {
    "url": "server/php/basis/types/boolean.html",
    "revision": "9d3b0cd5ffc848e97e010ca6db8b4f9d"
  },
  {
    "url": "server/php/basis/types/float.html",
    "revision": "57f9af73d0f753e863046c84077df4b9"
  },
  {
    "url": "server/php/basis/types/home.html",
    "revision": "576c82f174d4fdaf5d404d9ee4c06b33"
  },
  {
    "url": "server/php/basis/types/int.html",
    "revision": "5732b339e5f790ca3accd39d7445a728"
  },
  {
    "url": "server/php/basis/types/null.html",
    "revision": "8f8de0a62842f6cfb742053ea8f9fde5"
  },
  {
    "url": "server/php/basis/types/object.html",
    "revision": "41a743919898d62c2b0749f3aa903540"
  },
  {
    "url": "server/php/basis/types/string.html",
    "revision": "576dedd68f7602a71e10e2323275f077"
  },
  {
    "url": "server/php/basis/variables.html",
    "revision": "024f18a36b3849ddc60523af592aa449"
  },
  {
    "url": "server/php/library/CI.html",
    "revision": "9fd628d8bef3699619180393eac8e8e5"
  },
  {
    "url": "server/php/library/laravel.html",
    "revision": "4c601694eeea12eee827694ece916e00"
  },
  {
    "url": "server/python/index.html",
    "revision": "6109d676e142f478fee93a2830f1b8c9"
  },
  {
    "url": "server/server/index.html",
    "revision": "5d057f52c4463179c1232f3792711d07"
  },
  {
    "url": "server/socket/index.html",
    "revision": "abc3422f94ce1f196b69ae4d306d2cb1"
  },
  {
    "url": "server/tcp/index.html",
    "revision": "54547670e88b5c134a7fb71f54489777"
  },
  {
    "url": "tools/git.html",
    "revision": "09a82c7c9ff9c301b39940145c4edef2"
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
    "revision": "57bf1e3f90e39d0fff53f90bd13f7588"
  },
  {
    "url": "web/advanced/react/basis.html",
    "revision": "136ac558cbe1673f327386b38bf46a99"
  },
  {
    "url": "web/advanced/react/component.html",
    "revision": "10e91a777ba101d63f782c8c7523cc9c"
  },
  {
    "url": "web/advanced/react/hook.html",
    "revision": "0de9e7bf482a4ffd053719776d7fccab"
  },
  {
    "url": "web/advanced/react/lifecycle.html",
    "revision": "8445186ddf6ad9446820f3c70c89852b"
  },
  {
    "url": "web/advanced/react/redux/basis.html",
    "revision": "e96990a2bd6b2cbe183a5a624f92ba41"
  },
  {
    "url": "web/advanced/react/redux/combineReducers.html",
    "revision": "fdab96998565cda9c2301cf75bf0663d"
  },
  {
    "url": "web/advanced/react/redux/middleware.html",
    "revision": "3ec55a8d55fcecf130c0536e95f04d3f"
  },
  {
    "url": "web/advanced/react/redux/react-redux.html",
    "revision": "b9cf5df5cc948ef5199e9f98a0aedf1c"
  },
  {
    "url": "web/advanced/ts/basis.html",
    "revision": "53b9dc16f7768d21872a633497fd2662"
  },
  {
    "url": "web/advanced/vue/basis.html",
    "revision": "24c636fab164eb9d5669f64b4babe0fc"
  },
  {
    "url": "web/basis/async.html",
    "revision": "110425d34456b50bccfe9439d808a836"
  },
  {
    "url": "web/basis/bom.html",
    "revision": "4bb0ddfb9293edd52dce3903cff6bc46"
  },
  {
    "url": "web/basis/closure.html",
    "revision": "0665f57cd3f632e59271bfa33e99c22b"
  },
  {
    "url": "web/basis/dom.html",
    "revision": "ecdc4fc726665090fa204d81f49c1a67"
  },
  {
    "url": "web/basis/es6.html",
    "revision": "1b66476c9eb892a8928b51138ccbb0d7"
  },
  {
    "url": "web/basis/html.html",
    "revision": "c2c603e2feac068b2d550d472f632a5b"
  },
  {
    "url": "web/basis/phototype.html",
    "revision": "ba2e572df3c3af9410e9533d787f6cdc"
  },
  {
    "url": "web/basis/variable.html",
    "revision": "a9b4acc57ee5a333e04f5ee584993628"
  },
  {
    "url": "web/framework/index.html",
    "revision": "3423ed9fcf5f9dd9d8416dc0f3d240ae"
  },
  {
    "url": "web/framework/React.html",
    "revision": "763f1861ef2f209a13b5b8128b3618e5"
  },
  {
    "url": "wechat/index.html",
    "revision": "f440a3c6823174ea7c28b1b617c23e3f"
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
