var i = 0;
var k = 180
// var A = 0;
		var tag = document.getElementById("text");
		var html = document.getElementById("text").innerHTML;
		var attr = tag.setAttribute("data", html);
		var txt = tag.getAttribute("data");
		var speed = 100;
        console.log(txt,"selam");
		function typeWriter() {
		  if (i <= txt.length) {
		    document.getElementById("text").innerHTML = txt.slice(0 , i + 1);
		    i++;
		    setTimeout(typeWriter, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

typeWriter();
var a = 0;
var k = 180
// var A = 0;
		var etiket = document.getElementById("selam");
		var htmll = document.getElementById("selam").innerHTML;
		var attrr = tag.setAttribute("data", htmll);
		var txtt = tag.getAttribute("data");
		var speed = 100;
        console.log(txt);
		function aaaa() {
		  if (a <= txtt.length) {
		    document.getElementById("selam").innerHTML = txtt.slice(0 , a + 1);
		    a++;
		    setTimeout(aaaa, speed);
		  }
		    //console.log(document.getElementById("text").innerHTML);
		}

aaaa()