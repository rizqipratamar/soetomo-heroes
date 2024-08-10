window.ymConfig = {
  bot: 'x1632400725886',
  host: 'https://app.yellow.ai'
};

(function () {
  var w = window, ic = w.YellowMessenger;
  if (typeof ic === 'function') {
    ic("reattach_activator");
    ic("update", ymConfig);
  } else {
    var d = document, i = function () { i.c(arguments) };
    function l() {
      var e = d.createElement("script");
      e.type = "text/javascript";
      e.async = true;
      e.src = "https://app.yellowmessenger.com/widget/main.js?cachebuster=" + Date.now();
      var t = d.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t);
    }
    i.q = [];
    i.c = function (e) { i.q.push(e) };
    w.YellowMessenger = i;
    if (w.attachEvent) {
      w.attachEvent("onload", l);
    } else {
      w.addEventListener("load", l, false);
    }
  }
})();