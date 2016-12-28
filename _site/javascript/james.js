$(document).ready(function(){
	
	
	$("#smile").click(function(){
        $(".toggle").toggle("slow");
    });
    
    
    
    var x = Math.floor(Math.random()*(5)+1); 
    //maroon
    if (x == 1) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#d37a6f';
	    document.getElementById('smile').style.color = '#d37a6f';
	}
	//blue
	else if (x == 2) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#89b5ea';
	    document.getElementById('smile').style.color = '#89b5ea';
	}
	//purple
	else if (x == 3) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#7f6fe9';
	    document.getElementById('smile').style.color = '#7f6fe9';
	}
	//pink
	else if (x == 4) {
	    document.getElementById('mainSquare1').style.backgroundColor = '#e2b7c9';
	    document.getElementById('smile').style.color = '#e2b7c9';
	}
	//green
	else {
	    document.getElementById('mainSquare1').style.backgroundColor = '#9ac29a';
	    document.getElementById('smile').style.color = '#9ac29a';
	}
    
    
    
});



function getPos(e) {
	if ($(window).width() > 1000) {
		x = e.clientX;
		y = e.clientY;
		midX = window.innerWidth/2
		midY = window.innerHeight/2
		deg = 2;
		degX = ((x/midX)*deg)-deg;
		degY = (((y/midY)*deg)-deg)*-1;
		var table1 = document.querySelector("#mainSquare1");	    
		table1.style.transform = "rotateY("+degX+"deg) rotateX("+degY+"deg)";
		
		var table2 = document.querySelector("#mainSquare2");	    
		table2.style.transform = "rotateY("+degX+"deg) rotateX("+degY+"deg)";
	}
}


/* @license Minigrid v3.0.1 â€“ minimal cascading grid layout http://alves.im/minigrid */ ! function(t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Minigrid = e()
}(this, function(t) {
  "use strict";

  function e(t, e) {
    for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
    return t
  }
  var i = function(t) {
    var i = t.container instanceof Node ? t.container : document.querySelector(t.container),
      n = t.item instanceof NodeList ? t.item : i.querySelectorAll(t.item);
    this.props = e(t, {
      container: i,
      nodeList: n
    })
  };
  return i.prototype.mount = function() {
    if (!this.props.container) return !1;
    if (!this.props.nodeList || 0 === this.props.nodeList.length) return !1;
    var t = "number" == typeof this.props.gutter && isFinite(this.props.gutter) && Math.floor(this.props.gutter) === this.props.gutter ? this.props.gutter : 0,
      e = this.props.done,
      i = this.props.container,
      n = this.props.nodeList;
    i.style.width = "";
    var r = Array.prototype.forEach,
      o = i.getBoundingClientRect().width,
      s = n[0].getBoundingClientRect().width + t,
      p = Math.max(Math.floor((o - t) / s), 1),
      a = 0;
    o = s * p + t + "px", i.style.width = o, i.style.position = "relative";
    for (var c = [], u = [], f = 0; p > f; ++f) u.push(f * s + t), c.push(t);
    r.call(n, function(e) {
      var i = c.slice(0).sort(function(t, e) {
        return t - e
      }).shift();
      i = c.indexOf(i);
      var n = parseInt(u[i]),
        r = parseInt(c[i]);
      e.style.position = "absolute", e.style.overflow = "hidden", e.style.webkitBackfaceVisibility = e.style.backfaceVisibility = "hidden", e.style.transformStyle = "preserve-3d", e.style.transform = "translate3D(" + n + "px," + r + "px, 0)", c[i] += e.getBoundingClientRect().height + t, a += 1
    });
    var h = c.slice(0).sort(function(t, e) {
      return t - e
    }).pop();
    i.style.height = h + "px", "function" == typeof e && e(n)
  }, i
});


(function(){
  var grid;
  function init() {
    grid = new Minigrid({
      container: '.cards',
      item: '.card',
      gutter: 12
    });
    grid.mount();
  }
  
  // mount
  function update() {
    grid.mount();
  }
  document.addEventListener('DOMContentLoaded', init);
  window.addEventListener('resize', update);
  window.addEventListener('load', update);
  
})();
