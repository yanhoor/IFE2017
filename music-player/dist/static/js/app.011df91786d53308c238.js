webpackJsonp([0,2],[,function(t,s){},function(t,s){},function(t,s,i){i(9);var a=i(0)(i(6),i(12),null,null);t.exports=a.exports},,,function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i(10),e=i.n(a);s.default={name:"app",components:{MusicPlayer:e.a}}},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{songList:[{album:"STEINS;GATE Original Soundtrack+Radio CD(仮)",album_pic:"http://img.xiami.net/images/album/img74/94174/4371591424151634_2.jpg",singer:"阿保剛",album_pic_m:"http://img.xiami.net/images/album/img74/94174/4371591424151634_1.jpg",lyric:"",location:"http://om5.alicdn.com/174/94174/437159/1770163789_2249535_l.mp3?auth_key=fb4327a6903bc75200e99170dac12f10-1490151600-0-null",title:"GATE OF STEINER -Piano-",album_pic_l:"http://img.xiami.net/images/album/img74/94174/4371591424151634.jpg"},{album:"Brit Awards 2015",album_pic:"http://img.xiami.net/images/album/img58/23258/2250921901425092190_2.jpg",singer:"First Aid Kit",album_pic_m:"http://img.xiami.net/images/album/img58/23258/2250921901425092190_1.jpg",lyric:"",location:"http://om5.alicdn.com/258/23258/225092190/1774024646_16366085_l.mp3?auth_key=30b7aec140d489a6194f12cc12b10cc8-1490151600-0-null",title:"My Silver Lining",album_pic_l:"http://img.xiami.net/images/album/img58/23258/2250921901425092190.jpg"},{album:"蔡琴经典(壹)",album_pic:"http://img.xiami.net/images/album/img48/1348/69421384850954_2.jpg",singer:"蔡琴",album_pic_m:"http://img.xiami.net/images/album/img48/1348/69421384850954_1.jpg",lyric:"",location:"http://om5.alicdn.com/348/1348/6942/84764_2113348_l.mp3?auth_key=d4d61a2ce447efc110e8104c2bbe2c2f-1490151600-0-null",title:"被遗忘的时光",album_pic_l:"http://img.xiami.net/images/album/img48/1348/69421384850954.jpg"},{album:"WHITE ALBUM2 ORIGINAL SOUNDTRACK～kazusa～",album_pic:"http://img.xiami.net/images/album/img24/176/58b3d5fc6e425_8832024_1488180732_2.jpg",singer:"生天目仁美",album_pic_m:"http://img.xiami.net/images/album/img24/176/58b3d5fc6e425_8832024_1488180732_1.jpg",lyric:"",location:"http://om5.alicdn.com/826/75826/2102674458/1795430948_1483092419161.mp3?auth_key=f8d5c0d6594170569545ab09b865dab7-1489892400-0-null",title:"WHITE ALBUM",album_pic_l:"http://img.xiami.net/images/album/img24/176/58b3d5fc6e425_8832024_1488180732.jpg"}],index:0,defaultCover:"http://s4.music.126.net/style/web2/img/default/default_album.jpg",cover:"",play:!1,volPos:{max:113,btn:113},progressPos:{max:690,btn:0},posData:{mouseStartX:"",btnStartX:""},btnType:"",totalLen:0,currLen:0,intervalId:""}},methods:{coverImage:function(){var t=this;this.cover=this.defaultCover;var s=new Image;s.src=this.songList[this.index].album_pic,s.onload=function(){t.cover=s.src}},switchState:function(){this.play=!this.play,this.play?this.$refs.audio.play():this.$refs.audio.pause()},drag:function(t,s){t.preventDefault(),this.posData.mouseStartX=t.pageX,this.posData.btnStartX=this[s].btn,this.btnType=s,this.btnDownManager(),window.addEventListener("mousemove",this._mousemoveCallback),window.addEventListener("mouseup",this._mouseupCallback)},_mousemoveCallback:function(t){var s=this;this._throttleV2(function(){s.moveBtn(t),s.btnMoveManager()},10,15)()},_mouseupCallback:function(t){window.removeEventListener("mousemove",this._mousemoveCallback),window.removeEventListener("mouseup",this._mouseupCallback),this.btnUpManager()},moveBtn:function(t){var s=t.pageX-this.posData.mouseStartX;this[this.btnType].btn=this.posData.btnStartX+s,this[this.btnType].btn<0&&(this[this.btnType].btn=0),this[this.btnType].btn>this[this.btnType].max&&(this[this.btnType].btn=this[this.btnType].max)},_throttleV2:function(t,s,i){var a=null,e=void 0;return function(){var n=this,o=arguments,r=+new Date;clearTimeout(a),e||(e=r),r-e>=i?(t.apply(n,o),e=r):a=setTimeout(function(){t.apply(n,o)},s)}},btnDownManager:function(){var t=this;({volPos:function(){},progressPos:function(){clearInterval(t.intervalId)}})[this.btnType]()},btnMoveManager:function(t){var s=this;({volPos:function(){s.setVolume()},progressPos:function(){s.currLen=(s.progressPos.btn/s.progressPos.max*s.totalLen).toFixed(4)}})[this.btnType]()},btnUpManager:function(t){var s=this;({volPos:function(){},progressPos:function(){s.$refs.audio.currentTime=(s.progressPos.btn/s.progressPos.max*s.$refs.audio.duration).toFixed(4),s.setProgress()}})[this.btnType]()},setVolume:function(){this.$refs.audio.volume=(this.volPos.btn/this.volPos.max).toFixed(2)},setProgress:function(){var t=this;this.intervalId=setInterval(function(){if(t.$refs.audio.ended)return t.currLen=0,void t.nextSong();t.currLen=t.$refs.audio.currentTime,t.progressPos.btn=parseFloat((t.currLen/t.totalLen*t.progressPos.max).toFixed(2))},300)},changeVolPos:function(t){this.volPos.btn=t.offsetX,this.setVolume()},stopPass:function(){},initMusic:function(){var t=this;this.$refs.audio.addEventListener("loadedmetadata",function(){t.totalLen=t.$refs.audio.duration,t.play&&t.$refs.audio.play()}),this.setProgress()},getTime:function(t){var s=Math.floor(t/60);s<10&&(s="0"+s);var i=Math.floor(t%60);return i<10&&(i="0"+i),s+":"+i},changeProgress:function(t){var s=t.offsetX;this.$refs.audio.currentTime=(s/this.$refs.progressBar.clientWidth*this.totalLen).toFixed(2),this.currLen=this.$refs.audio.currentTime},nextSong:function(){this.index===this.songList.length-1?this.index=0:++this.index,this.coverImage()}},created:function(){this.coverImage()},computed:{controlClass:function(){var t={play:"fa fa-play",pause:"fa fa-pause"};return this.play?t.pause:t.play},volumeClass:function(){var t={volumeOff:"fa fa-volume-off",volumeOn:"fa fa-volume-up"};return 0===this.volPos.btn?t.volumeOff:t.volumeOn}},mounted:function(){this.initMusic()}}},function(t,s){},function(t,s){},function(t,s,i){i(8);var a=i(0)(i(7),i(11),null,null);t.exports=a.exports},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"container"},[i("audio",{ref:"audio",attrs:{src:t.songList[t.index].location}}),t._v(" "),i("div",{staticClass:"left-content"},[i("div",{staticClass:"title"},[t._v(t._s(t.songList[t.index].title))]),t._v(" "),i("div",{staticClass:"singer"},[t._v(t._s(t.songList[t.index].singer))]),t._v(" "),i("div",{staticClass:"progress-wrapper"},[i("div",{ref:"bar",staticClass:"volume-bar",on:{click:t.changeVolPos}},[i("div",{staticClass:"current-bar",style:{width:t.volPos.btn+"px"}}),t._v(" "),i("div",{ref:"volumeController",staticClass:"controller",style:{left:t.volPos.btn+"px"},on:{click:function(s){s.stopPropagation(),t.stopPass(s)},mousedown:function(s){s.stopPropagation(),t.drag(s,"volPos")}}})]),t._v(" "),i("div",{staticClass:"left"},[i("div",{staticClass:"time"},[i("span",{staticClass:"currTime"},[t._v(t._s(t.getTime(t.currLen)))]),t._v(" "),i("span",{staticClass:"totalTime"},[t._v(" / "+t._s(t.getTime(t.totalLen)))])]),t._v(" "),i("span",{staticClass:"volume-btn"},[i("i",{class:t.volumeClass,attrs:{"aria-hidden":"true"}})])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"progress_bar-wrapper"},[i("div",{ref:"progressBar",staticClass:"progress_bar",on:{click:t.changeProgress}},[i("div",{staticClass:"current-progress",style:{width:t.progressPos.btn+"px"}})]),t._v(" "),i("div",{staticClass:"progress-btn",style:{left:t.progressPos.btn+"px"},on:{click:function(s){s.stopPropagation(),t.stopPass(s)},mousedown:function(s){s.stopPropagation(),t.drag(s,"progressPos")}}})])]),t._v(" "),i("div",{staticClass:"controller-wrapper"},[t._m(1),t._v(" "),i("div",{staticClass:"right"},[i("span",{staticClass:"bg-icon",on:{click:t.switchState}},[i("i",{class:t.controlClass,attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{staticClass:"bg-icon",on:{click:function(s){t.nextSong()}}},[i("i",{staticClass:"fa fa-step-forward",attrs:{"aria-hidden":"true"}})])])])]),t._v(" "),i("div",{staticClass:"right-content"},[i("div",{staticClass:"cover"},[i("img",{staticClass:"img",attrs:{src:t.cover}})])])])},staticRenderFns:[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"right"},[i("span",{staticClass:"sm-icon"},[i("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{staticClass:"sm-icon"},[i("i",{staticClass:"fa fa-download",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{staticClass:"sm-icon"},[i("i",{staticClass:"fa fa-plus",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{staticClass:"sm-icon"},[i("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}})])])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"left"},[i("span",{staticClass:"bg-icon"},[i("i",{staticClass:"fa fa-heart",attrs:{"aria-hidden":"true"}})]),t._v(" "),i("span",{staticClass:"bg-icon"},[i("i",{staticClass:"fa fa-trash-o",attrs:{"aria-hidden":"true"}})])])}]}},function(t,s){t.exports={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"music-wrapper"},[i("MusicPlayer")],1)])},staticRenderFns:[]}},,,function(t,s){},function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i(5),e=i(3),n=i.n(e),o=i(4),r=i.n(o),l=i(2),c=(i.n(l),i(1));i.n(c);a.a.use(r.a),a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})}],[16]);
//# sourceMappingURL=app.011df91786d53308c238.js.map