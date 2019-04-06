"use strict";function _typeof(e){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}!function(n){var o={};function i(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=n,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==_typeof(t)&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){var n;jQuery(document).ready(function(t){var e=function(){var e=document.body.clientWidth;500<=e?t(".logo").removeClass("logo-mobile"):e<501&&t(".logo").addClass("logo-mobile")};t(window).resize(function(){e()}),e()}),$(function(){var e=$(window).height(),t=$(".nav-head").innerHeight();$(".slider , .carousel-item").height(e-t)}),setTimeout(function(){$(".custom-social-proof").slideToggle()},3e3),$(".custom-close").click(function(){$(".custom-social-proof").stop().slideToggle("slow")}),jQuery(document).ready(function(i){var r=i(".cd-cart-container"),c=0;if(0<r.length){var u,l=r.find(".body_cart"),s=l.find("ul").eq(0),o=r.find(".checkout").find("span"),e=r.children(".cd-cart-trigger"),a=e.children(".count"),t=i(".cd-add-to-cart"),d=r.find(".undo");t.on("click",function(e){var t,n,o;e.preventDefault(),t=i(this),n=r.hasClass("empty"),o=i('<li class="product"><div class="product-image"><a href="#0"><img src="assets/images/product-preview.png" alt="placeholder" class="img-fluid"></a></div><div class="product-details"><h3><a href="#0">Product Name</a></h3><span class="price">$25.99</span><div class="actions"><a href="#0" class="delete-item">Delete</a><div class="quantity"><label for="cd-product-'+(c+=1)+'">Qty</label><span class="select"><select id="cd-product-'+c+'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option><option value="9">9</option></select></span></div></div></div></li>'),s.prepend(o),m(n),p(t.data("price"),!0),r.removeClass("empty")}),e.on("click",function(e){e.preventDefault(),n()}),r.on("click",function(e){i(e.target).is(i(this))&&n(!0)}),s.on("click",".delete-item",function(e){e.preventDefault(),function(e){clearInterval(u),s.find(".deleted").remove();var t=e.offset().top-l.children("ul").offset().top,n=Number(e.find(".quantity").find("select").val()),o=Number(e.find(".price").text().replace("$",""))*n;e.css("top",t+"px").addClass("deleted"),p(o,!1),m(!0,-n),d.addClass("visible"),u=setTimeout(function(){d.removeClass("visible"),s.find(".deleted").remove()},8e3)}(i(e.target).parents(".product"))}),s.on("change","select",function(e){f()}),d.on("click","a",function(e){clearInterval(u),e.preventDefault(),s.find(".deleted").addClass("undo-deleted").one("webkitAnimationEnd oanimationend msAnimationEnd animationend",function(){i(this).off("webkitAnimationEnd oanimationend msAnimationEnd animationend").removeClass("deleted undo-deleted").removeAttr("style"),f()}),d.removeClass("visible")})}function n(e){(void 0===e?r.hasClass("cart-open"):e)?(r.removeClass("cart-open"),clearInterval(u),d.removeClass("visible"),s.find(".deleted").remove(),setTimeout(function(){l.scrollTop(0),0==Number(a.find("li").eq(0).text())&&r.addClass("empty")},500)):r.addClass("cart-open")}function f(){var t=0,n=0;s.children("li:not(.deleted)").each(function(){var e=Number(i(this).find("select").val());t+=e,n+=e*Number(i(this).find(".price").text().replace("$",""))}),o.text(n.toFixed(2)),a.find("li").eq(0).text(t),a.find("li").eq(1).text(t+1)}function m(e,t){if(void 0===t){var n=(o=Number(a.find("li").eq(0).text())+1)+1;e?(a.find("li").eq(0).text(o),a.find("li").eq(1).text(n)):(a.addClass("update-count"),setTimeout(function(){a.find("li").eq(0).text(o)},150),setTimeout(function(){a.removeClass("update-count")},200),setTimeout(function(){a.find("li").eq(1).text(n)},230))}else{var o;n=(o=Number(a.find("li").eq(0).text())+t)+1,a.find("li").eq(0).text(o),a.find("li").eq(1).text(n)}}function p(e,t){t?o.text((Number(o.text())+Number(e)).toFixed(2)):o.text((Number(o.text())-Number(e)).toFixed(2))}}),window.onload=function(){var e=document.querySelector(".heart-wrapper");e.addEventListener("click",function(){e.classList.toggle("active")},!1)},n=new function(){var n=this;this.counter=0,this.els={decrement:document.querySelector(".ctrl__button--decrement"),counter:{container:document.querySelector(".ctrl__counter"),num:document.querySelector(".ctrl__counter-num"),input:document.querySelector(".ctrl__counter-input")},increment:document.querySelector(".ctrl__button--increment")},this.decrement=function(){var e=n.getCounter(),t=0<n.counter?--e:e;n.setCounter(t)},this.increment=function(){var e=n.getCounter(),t=e<9999999999?++e:e;n.setCounter(t)},this.getCounter=function(){return n.counter},this.setCounter=function(e){n.counter=e},this.debounce=function(e){setTimeout(e,100)},this.render=function(e,t){n.els.counter.num.classList.add(e),setTimeout(function(){n.els.counter.num.innerText=n.getCounter(),n.els.counter.input.value=n.getCounter(),n.els.counter.num.classList.add(t)},100),setTimeout(function(){n.els.counter.num.classList.remove(e),n.els.counter.num.classList.remove(t)},1100)},this.ready=function(){n.els.decrement.addEventListener("click",function(){n.debounce(function(){n.decrement(),n.render("is-decrement-hide","is-decrement-visible")})}),n.els.increment.addEventListener("click",function(){n.debounce(function(){n.increment(),n.render("is-increment-hide","is-increment-visible")})}),n.els.counter.input.addEventListener("input",function(e){var t=parseInt(e.target.value);!isNaN(t)&&0<=t&&(n.setCounter(t),n.render())}),n.els.counter.input.addEventListener("focus",function(e){n.els.counter.container.classList.add("is-input")}),n.els.counter.input.addEventListener("blur",function(e){n.els.counter.container.classList.remove("is-input"),n.render()})}},document.addEventListener("DOMContentLoaded",n.ready)}]);
//# sourceMappingURL=all.js.map
