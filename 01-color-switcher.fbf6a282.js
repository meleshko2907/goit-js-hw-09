!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;var o=null;e.disabled=!0,console.log(e),console.log(t),t.addEventListener("click",(function(){o=setInterval((function(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16));document.body.style.background=n,t.setAttribute("disabled",!0),o&&e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(function(){clearInterval(o),t.removeAttribute("disabled"),o&&e.setAttribute("disabled",!0)}))}();
//# sourceMappingURL=01-color-switcher.fbf6a282.js.map
