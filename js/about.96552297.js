(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"34f5":function(t,e,n){"use strict";n("ef7b")},"51a6":function(t,e,n){"use strict";n.r(e);var a,i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{dir:"rtl"}},[a("fixed-header",{attrs:{title:"من نحن",imageUrl:n("f0b4")}}),a("div",[a("div",{staticClass:"our-story-sub-container"},[t._m(0),a("div",{staticClass:"our-story-text"},[a("div",{staticClass:"our-story-image"},[a("img",{attrs:{src:t.ourStory.Content_Image,alt:"text-image"}})]),a("span",{domProps:{innerHTML:t._s(t.ourStory.Content)}})])]),a("div",{staticClass:"our-journey-container"},[t._m(1),a("div",{staticClass:"journey-brief-text"},[t._v(" "+t._s(t.journeyBrief)+" ")]),a("swiper",{ref:"mySwiper",staticClass:"swiper",staticStyle:{height:"44vw","margin-left":"35px"},attrs:{options:t.swiperOption}},[t._l(t.ourJourney,(function(e,i){return a("swiper-slide",{key:i},[a("div",{staticClass:"swiper-custom-container"},[a("div",{staticClass:"fallback-white-background is-hidden-mobile"}),t._l(e.months,(function(e,i){return a("section",{key:i},[a("div",{staticClass:"swiper-inside-container"},[a("div",{staticClass:"section-white-custom is-hidden-mobile"}),a("section",{staticClass:"section-grey-custom"},[a("div",{staticClass:"month-style"},[a("span",{staticClass:"month-text"},[t._v(t._s(e.month))])]),t._l(e.stage,(function(e,i){return a("div",{key:i,staticClass:"insider-container"},[a("div",{staticClass:"inside-header"},[t._v(t._s(e.title))]),a("div",{staticClass:"inside-summary"},[e.image?a("div",{staticClass:"our-journey-image"},[a("img",{attrs:{src:n("ac88"),alt:"text-image"}})]):t._e(),a("span",{domProps:{innerHTML:t._s(e.content)}})])])}))],2)])])}))],2)])})),a("div",{staticClass:"swiper-pagination",attrs:{slot:"pagination"},slot:"pagination"})],2)],1)]),a("call-to-action",{staticClass:"call-to-action"})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"our-story-title"},[t._v("قصت"),n("span",{staticClass:"underline-text"},[t._v("نا     ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"our-journey-title"},[t._v("رحلت"),n("span",{staticClass:"underline-text"},[t._v("نا      ")])])}],s=n("1da1"),o=n("d4ec"),c=n("bee2"),u=n("262e"),l=n("2caf"),f=(n("96cf"),n("99af"),n("d3b7"),n("9ab4")),p=n("1b40"),d=n("1b8e"),h=n("52fc"),m=n("7212"),v=(n("a7a3"),n("6b11")),b=a=function(t){Object(u["a"])(n,t);var e=Object(l["a"])(n);function n(){var t;return Object(o["a"])(this,n),t=e.apply(this,arguments),t.ourJourney=[{}],t.swiperOption={direction:t.direction,loop:!0,slidesPerView:1,slidesPerGroup:1,spaceBetween:100,allowTouchMove:t.allowtouch,pagination:{el:".swiper-pagination",renderBullet:function(t,e){var n=a.years;return'<span style="font-size:1.2vw" class="'.concat(e,' swiper-pagination-bullet-custom">\n        <span class="bullet-custom"></span><span class="bullet-text">').concat(n[t],"</span></span>")},dynamicBullets:!0,clickable:!0}},t.on={resize:function(){alert("resized"),window.innerWidth,t.direction="horizontal"}},t.ourStory={Content:"",Content_Image:""},t.journeyBrief="",t}return Object(c["a"])(n,[{key:"beforeCreate",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:window.innerWidth<=769?(this.allowtouch=!0,this.direction="horizontal"):(this.allowtouch=!0,this.direction="vertical");case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"created",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchJourney();case 2:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()},{key:"fetchJourney",value:function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(){var e=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch(v["a"].AboutUs.GetAllYears).then((function(t){if(t.ok)return t.json()})).then((function(t){for(var n in e.ourJourney=t.data,e.ourJourney)a.years.push(t.data[n].year)})).catch((function(t){console.log(t)}));case 2:return t.next=4,fetch(v["a"].AboutUs.GetCase).then((function(t){if(t.ok)return t.json()})).then((function(t){e.ourStory=t.data,e.ourStory.Content_Image=v["a"].LocalhostImages+e.ourStory.Content_Image})).catch((function(t){console.log(t)}));case 4:return t.next=6,fetch(v["a"].AboutUs.GetJourneyBrief).then((function(t){if(t.ok)return t.json()})).then((function(t){e.journeyBrief=t.data.Brief})).catch((function(t){console.log(t)}));case 6:case"end":return t.stop()}}),t)})));function e(){return t.apply(this,arguments)}return e}()}]),n}(p["d"]);b.years=[],b=a=Object(f["a"])([Object(p["a"])({components:{CallToAction:d["a"],FixedHeader:h["a"],Swiper:m["Swiper"],SwiperSlide:m["SwiperSlide"]}})],b);var y=b,g=y,w=(n("34f5"),n("2877")),C=Object(w["a"])(g,i,r,!1,null,"4b8582c3",null);e["default"]=C.exports},"52fc":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"leading-Image"},[n("v-img",{attrs:{"max-height":"350","aspect-ratio":16/9,src:t.imageUrl}}),n("span",{staticClass:"about-us"},[t._v(t._s(t.title))])],1)},i=[],r=n("d4ec"),s=n("262e"),o=n("2caf"),c=n("9ab4"),u=n("1b40"),l=function(t){Object(s["a"])(n,t);var e=Object(o["a"])(n);function n(){return Object(r["a"])(this,n),e.apply(this,arguments)}return n}(u["d"]);Object(c["a"])([Object(u["c"])()],l.prototype,"title",void 0),Object(c["a"])([Object(u["c"])()],l.prototype,"imageUrl",void 0),l=Object(c["a"])([Object(u["a"])({components:{}})],l);var f=l,p=f,d=(n("c35f"),n("2877")),h=n("6544"),m=n.n(h),v=n("adda"),b=Object(d["a"])(p,a,i,!1,null,"46bfacda",null);e["a"]=b.exports;m()(b,{VImg:v["a"]})},"867c":function(t,e,n){},ac88:function(t,e,n){t.exports=n.p+"img/girl-gazing.3f4145c3.png"},c35f:function(t,e,n){"use strict";n("867c")},ef7b:function(t,e,n){},f0b4:function(t,e,n){t.exports=n.p+"img/about-us.c4e0710e.png"}}]);
//# sourceMappingURL=about.96552297.js.map