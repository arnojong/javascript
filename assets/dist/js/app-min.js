"use strict";document.addEventListener("DOMContentLoaded",function(e){console.log("DOM fully loaded and parsed")}),document.addEventListener("DOMContentLoaded",function(){var t=document.querySelector(".user-form"),u=document.querySelector(".user-container__list");t.addEventListener("submit",function(e){e.preventDefault(),function(){var e=document.querySelector(".user-form__name").value,t=document.querySelector(".user-form__address").value,n=document.querySelector(".user-form__email").value,r=document.createElement("li"),d=document.createElement("ul");d.classList.add("user-container__inner-list");var o=function(e){var t=document.createElement("li");t.classList.add("user-container__utility");var n=document.createElement("p");n.textContent=e,t.appendChild(n),d.appendChild(t)};o(e),o(t),o(n),r.appendChild(d),u.appendChild(r)}(),t.reset()})});