!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");e.addEventListener("click",(function e(){a.start(),n=setTimeout(e,2e3),t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))})),o.addEventListener("click",(function(){a.stop(),clearTimeout(n)}));var n=null;var a={start:function(){Date.now;e.disabled=!0,o.disabled=!1},stop:function(){e.disabled=!1,o.disabled=!0}}}();
//# sourceMappingURL=01-color-switcher.d83adf11.js.map
