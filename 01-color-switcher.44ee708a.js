const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]");e.disabled=!0;let d=null;e.disabled=!0,console.log(e),console.log(t),t.addEventListener("click",(()=>{d=setInterval((()=>{const o=`#${Math.floor(16777215*Math.random()).toString(16)}`;document.body.style.background=o,t.setAttribute("disabled",!0),d&&e.removeAttribute("disabled")}),1e3)})),e.addEventListener("click",(()=>{clearInterval(d),t.removeAttribute("disabled"),d&&e.setAttribute("disabled",!0)}));
//# sourceMappingURL=01-color-switcher.44ee708a.js.map