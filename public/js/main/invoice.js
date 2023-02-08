function changeImage() {
  var e = document.getElementById("theIcon");
  e.classList.contains("fa-toggle-on") ? (e.classList.remove("fa-toggle-on"), e.classList.add("fa-toggle-off")) : e.classList.contains("fa-toggle-off") && (e.classList.remove("fa-toggle-off"), e.classList.add("fa-toggle-on"));
}
!(function (e) {
  "use strict";
  var n = e(window);
  function t() {
      var t, l, c;
      (t = e("header").height()), (l = e(".screen-height")), (c = n.height() - t), l.css("height", c);
  }
  e("#preloader").fadeOut("normall", function () {
      e(this).remove();
  }),
      n.on("scroll", function () {
          n.scrollTop() <= 50 ? e("header").removeClass("scrollHeader").addClass("fixedHeader") : e("header").removeClass("fixedHeader").addClass("scrollHeader");
      }),
      e(".parallax,.bg-img").each(function (n) {
          e(this).attr("data-background") && e(this).css("background-image", "url(" + e(this).data("background") + ")");
      }),
      n.resize(function (e) {
          setTimeout(function () {
              t();
          }, 500),
              e.preventDefault();
      }),
      t(),
      e(document).ready(function () {
          e('#example1').dataTable();    
          e(".countup").counterUp({ delay: 25, time: 7000 });
          
          $('.xzoom5, .xzoom-gallery5').xzoom({tint: '#232323', Xoffset: 15});

          //Integration with hammer.js
          var isTouchSupported = 'ontouchstart' in window;

          if (isTouchSupported) {
              //If touch device
              $('.xzoom, .xzoom2, .xzoom3, .xzoom4, .xzoom5').each(function(){
                  var xzoom = $(this).data('xzoom');
                  xzoom.eventunbind();
              });
          } else {
              $('#span-test').bind('click', function(event) {
                  var xzoom = $(this).data('xzoom');
                  xzoom.closezoom();
                  var gallery = xzoom.gallery().cgallery;
                  var i, images = new Array();
                  for (i in gallery) {
                      images[i] = {src: gallery[i]};
                  }
                  $.magnificPopup.open({items: images, type:'image', gallery: {enabled: true}});
                  event.preventDefault();
              });
          }

          $('#clients').owlCarousel({
            loop: true,
            nav: false,
            dots: false,
                  smartSpeed: 500,
            autoplay: true,
            autoplayTimeout: 2000,
            responsiveClass: true,
            autoplayHoverPause: false,
                  stagePadding: 0,
                  slideTransition: 'linear',
                  autoplayTimeout: 1300,
                  autoplaySpeed: 1300,
            responsive: {
                      0: {items: 7, margin: 9}, 
                      768: {items: 11, margin: 15}, 
                      992: {items: 12, margin: 23}, 
                      1200: {items: 18, margin: 15},
                      1300: {items: 19, margin: 14}
            }
          });
      });
  e(".switcher-setting").on("click", function () {
      return (
          document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement
              ? document.exitFullscreen
                  ? document.exitFullscreen()
                  : document.msExitFullscreen
                  ? document.msExitFullscreen()
                  : document.mozCancelFullScreen
                  ? document.mozCancelFullScreen()
                  : document.webkitExitFullscreen && document.webkitExitFullscreen()
              : document.documentElement.requestFullscreen
              ? document.documentElement.requestFullscreen()
              : document.documentElement.msRequestFullscreen
              ? document.documentElement.msRequestFullscreen()
              : document.documentElement.mozRequestFullScreen
              ? document.documentElement.mozRequestFullScreen()
              : document.documentElement.webkitRequestFullscreen && document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT),
          !1
      );
  });
})(jQuery);


window.addEventListener("load", () => {
  let binance = new WebSocket("wss://stream.binance.com:9443/ws/btcusdt@kline_1h");
  let bitcoin = document.getElementById("the-one");

  binance.onmessage = event => {
    let confirm = JSON.parse(event.data);
      if(localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length == 1)){
        bitcoin.innerHTML = (localStorage.getItem('banktotal') / parseFloat(confirm.k.c)).toFixed(5)
      } else if(localStorage.getItem('banklogs') && (JSON.parse(localStorage.getItem('banklogs')).length > 1)){
        bitcoin.innerHTML = (localStorage.getItem('divtotal') / parseFloat(confirm.k.c)).toFixed(5)
      }
  }
  
  document.getElementById("copy-text").addEventListener("click", function (ev) {
    ev.preventDefault();
    document.getElementById("text-to-copy").select();
    var copiez;
    try {
      copiez = document.execCommand("copy");
    } catch (ex) {
      copiez = false;
    }
    ;
    if (copiez) {
      document.getElementById("copy-text").innerHTML = `Copied`;
      document.getElementById("copy-text").style.background = "gold";
    }
  });
  document.getElementById("text-to-copy").addEventListener("click", function (eve) {
    eve.preventDefault();
    document.getElementById("text-to-copy").select();
    var copied;
    try {
      copied = document.execCommand("copy");
    } catch (ex) {
      copied = false;
    }
    ;
    if (copied) {
      document.getElementById("copy-text").innerHTML = `Copied`;
      document.getElementById("copy-text").style.background = "gold";
    }
  });
});

!function(e){e(["jquery"],(function(e){return function(){function t(t,n){return t||(t=a()),(l=e("#"+t.containerId)).length||n&&(l=function(t){return(l=e("<div/>").attr("id",t.containerId).addClass(t.positionClass)).appendTo(e(t.target)),l}(t)),l}function n(t){for(var n=l.children(),o=n.length-1;o>=0;o--)s(e(n[o]),t)}function s(t,n,s){var o=!(!s||!s.force)&&s.force;return!(!t||!o&&0!==e(":focus",t).length||(t[n.hideMethod]({duration:n.hideDuration,easing:n.hideEasing,complete:function(){r(t)}}),0))}function o(e){c&&c(e)}function i(n){function s(e){return null==e&&(e=""),e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function i(t){var n=t&&!1!==m.closeMethod?m.closeMethod:m.hideMethod,s=t&&!1!==m.closeDuration?m.closeDuration:m.hideDuration,i=t&&!1!==m.closeEasing?m.closeEasing:m.hideEasing;if(!e(":focus",v).length||t)return clearTimeout(b.intervalId),v[n]({duration:s,easing:i,complete:function(){r(v),clearTimeout(h),m.onHidden&&"hidden"!==D.state&&m.onHidden(),D.state="hidden",D.endTime=new Date,o(D)}})}function c(){(m.timeOut>0||m.extendedTimeOut>0)&&(h=setTimeout(i,m.extendedTimeOut),b.maxHideTime=parseFloat(m.extendedTimeOut),b.hideEta=(new Date).getTime()+b.maxHideTime)}function p(){clearTimeout(h),b.hideEta=0,v.stop(!0,!0)[m.showMethod]({duration:m.showDuration,easing:m.showEasing})}function g(){var e=(b.hideEta-(new Date).getTime())/b.maxHideTime*100;T.width(e+"%")}var m=a(),f=n.iconClass||m.iconClass;if(void 0!==n.optionsOverride&&(m=e.extend(m,n.optionsOverride),f=n.optionsOverride.iconClass||f),!function(e,t){if(e.preventDuplicates){if(t.message===d)return!0;d=t.message}return!1}(m,n)){u++,l=t(m,!0);var h=null,v=e("<div/>"),C=e("<div/>"),w=e("<div/>"),T=e("<div/>"),O=e(m.closeHtml),b={intervalId:null,hideEta:null,maxHideTime:null},D={toastId:u,state:"visible",startTime:new Date,options:m,map:n};return n.iconClass&&v.addClass(m.toastClass).addClass(f),function(){if(n.title){var e=n.title;m.escapeHtml&&(e=s(n.title)),C.append(e).addClass(m.titleClass),v.append(C)}}(),function(){if(n.message){var e=n.message;m.escapeHtml&&(e=s(n.message)),w.append(e).addClass(m.messageClass),v.append(w)}}(),m.closeButton&&(O.addClass(m.closeClass).attr("role","button"),v.prepend(O)),m.progressBar&&(T.addClass(m.progressClass),v.prepend(T)),m.rtl&&v.addClass("rtl"),m.newestOnTop?l.prepend(v):l.append(v),function(){var e="";switch(n.iconClass){case"toast-success":case"toast-info":e="polite";break;default:e="assertive"}v.attr("aria-live",e)}(),v.hide(),v[m.showMethod]({duration:m.showDuration,easing:m.showEasing,complete:m.onShown}),m.timeOut>0&&(h=setTimeout(i,m.timeOut),b.maxHideTime=parseFloat(m.timeOut),b.hideEta=(new Date).getTime()+b.maxHideTime,m.progressBar&&(b.intervalId=setInterval(g,10))),m.closeOnHover&&v.hover(p,c),!m.onclick&&m.tapToDismiss&&v.click(i),m.closeButton&&O&&O.click((function(e){e.stopPropagation?e.stopPropagation():void 0!==e.cancelBubble&&!0!==e.cancelBubble&&(e.cancelBubble=!0),m.onCloseClick&&m.onCloseClick(e),i(!0)})),m.onclick&&v.click((function(e){m.onclick(e),i()})),o(D),m.debug&&console&&console.log(D),v}}function a(){return e.extend({},{tapToDismiss:!0,toastClass:"toast",containerId:"toast-container",debug:!1,showMethod:"fadeIn",showDuration:700,showEasing:"swing",onShown:void 0,hideMethod:"fadeOut",hideDuration:700,hideEasing:"swing",onHidden:void 0,closeMethod:!1,closeDuration:!1,closeEasing:!1,closeOnHover:!0,extendedTimeOut:13e3,iconClasses:{error:"toast-error",info:"toast-info",success:"toast-success",warning:"toast-warning"},iconClass:"toast-info",positionClass:"toast-top-right",timeOut:13e3,titleClass:"toast-title",messageClass:"toast-message",escapeHtml:!1,target:"body",closeHtml:'<button type="button">&times;</button>',closeClass:"toast-close-button",newestOnTop:!0,preventDuplicates:!1,progressBar:!1,progressClass:"toast-progress",rtl:!1},g.options)}function r(e){l||(l=t()),e.is(":visible")||(e.remove(),e=null,0===l.children().length&&(l.remove(),d=void 0))}var l,c,d,u=0,p={error:"error",info:"info",success:"success",warning:"warning"},g={clear:function(e,o){var i=a();l||t(i),s(e,i,o)||n(i)},remove:function(n){var s=a();return l||t(s),n&&0===e(":focus",n).length?void r(n):void(l.children().length&&l.remove())},error:function(e,t,n){return i({type:p.error,iconClass:a().iconClasses.error,message:e,optionsOverride:n,title:t})},getContainer:t,info:function(e,t,n){return i({type:p.info,iconClass:a().iconClasses.info,message:e,optionsOverride:n,title:t})},options:{},subscribe:function(e){c=e},success:function(e,t,n){return i({type:p.success,iconClass:a().iconClasses.success,message:e,optionsOverride:n,title:t})},version:"2.1.3",warning:function(e,t,n){return i({type:p.warning,iconClass:a().iconClasses.warning,message:e,optionsOverride:n,title:t})}};return g}()}))}("function"==typeof define&&define.amd?define:function(e,t){"undefined"!=typeof module&&module.exports?module.exports=t(require("jquery")):window.toastr=t(window.jQuery)});