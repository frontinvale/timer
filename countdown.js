"use strict";

var countdown = function() {
  var n,
      t,
      c,

  e = function() {
    t = document.querySelector("#timer"), c = document.querySelector(".countdown")
  },

  i = function(c) {
    s();
    var e = 60 * c;
    t.classList.add("started"), n = setInterval(function() {
        e--, a(e), e > 75 || r(), e > 25 || u(), 0 != e || o()
    }, 1e3)
  },

  a = function(n) {
    var t = n / 60 >> 0,
        e = n - 60 * t + "";
    c.textContent = t + ":" + (e.length > 1 ? "" : "0") + e
  },

  o = function() {
    clearInterval(n), t.classList.add("finished")
  },

  s = function() {
    o(), t.classList.value = []
  },

  r = function() {
    t.classList.add("warning")
  },

  u = function() {
    t.classList.add("shake")
  };

  return {
    init: e,
    start: i,
    clear: s
  }
}();

window.onload = countdown.init;

