(()=>{var e={361:()=>{document.querySelectorAll(".footer__col").forEach((function(e){e.addEventListener("click",(function(e){var t=e.currentTarget,l=t.querySelector(".footer__title"),o=t.querySelector(".footer__list");t.classList.toggle("open"),t.classList.contains("open")?(l.setAttribute("aria-expanded",!0),o.setAttribute("aria-hidden",!1),o.style.maxHeight=o.scrollHeight+"px"):(l.setAttribute("aria-expanded",!1),o.setAttribute("aria-hidden",!0),o.style.maxHeight=null)}))}))}},t={};function l(o){var i=t[o];if(void 0!==i)return i.exports;var n=t[o]={exports:{}};return e[o](n,n.exports,l),n.exports}(()=>{"use strict";var e,t,o,i,n,a,r,s,u=function(){var e,t=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),l=document.body,o=parseInt(l.dataset.position,10);t.forEach((function(e){e.style.paddingRight="0px"})),l.style.paddingRight="0px",l.style.top="auto",l.classList.remove("dis-scroll"),window.scroll({top:o,left:0}),l.removeAttribute("data-position"),document.documentElement.style.scrollBehavior="smooth"};n=null===(e=document)||void 0===e?void 0:e.querySelector("[data-burger]"),a=null===(t=document)||void 0===t?void 0:t.querySelector("[data-menu]"),r=null===(o=document)||void 0===o?void 0:o.querySelectorAll("[data-menu-item]"),s=null===(i=document)||void 0===i?void 0:i.querySelector("[data-menu-overlay]"),null==n||n.addEventListener("click",(function(e){null==n||n.classList.toggle("burger--active"),null==a||a.classList.toggle("menu--active"),null!=a&&a.classList.contains("menu--active")?(null==n||n.setAttribute("aria-expanded","true"),null==n||n.setAttribute("aria-label","Закрыть меню"),function(){var e,t=null===(e=document)||void 0===e?void 0:e.querySelectorAll(".fixed-block"),l=window.scrollY,o="".concat(window.innerWidth-document.body.offsetWidth,"px");document.documentElement.style.scrollBehavior="none",t.forEach((function(e){e.style.paddingRight=o})),document.body.style.paddingRight=o,document.body.classList.add("dis-scroll"),document.body.dataset.position=l,document.body.style.top="-".concat(l,"px")}()):(null==n||n.setAttribute("aria-expanded","false"),null==n||n.setAttribute("aria-label","Открыть меню"),u())})),null==s||s.addEventListener("click",(function(){null==n||n.setAttribute("aria-expanded","false"),null==n||n.setAttribute("aria-label","Открыть меню"),n.classList.remove("burger--active"),a.classList.remove("menu--active"),u()})),null==r||r.forEach((function(e){e.addEventListener("click",(function(){null==n||n.setAttribute("aria-expanded","false"),null==n||n.setAttribute("aria-label","Открыть меню"),n.classList.remove("burger--active"),a.classList.remove("menu--active"),u()}))})),l(361)})()})();