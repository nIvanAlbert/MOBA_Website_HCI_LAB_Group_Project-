$(".str").toggleClass("expand");
document.getElementById("str").style.backgroundColor = "#3743a059";
document.getElementById("strb").style.backgroundColor = "#00bff3";
$(document).ready(function() {
	$("#str").click(function() {
		var act1 = $(".str").hasClass("expand");
		var act2 = $(".int").hasClass("expand");
		var act3 = $(".agi").hasClass("expand");
		if (act2) {
			$(".int").toggleClass("expand");
			document.getElementById("intb").style.backgroundColor = "transparent";
			document.getElementById("int").style.backgroundColor = "transparent";
		}
		if (act3) {
			$(".agi").toggleClass("expand");
			document.getElementById("agib").style.backgroundColor = "transparent";
			document.getElementById("agi").style.backgroundColor = "transparent";
		}
		if (act1) {} else {
			$(".str").toggleClass("expand");
			document.getElementById("strb").style.backgroundColor = "#00bff3";
			document.getElementById("str").style.backgroundColor = "#3743a059";
		}
	});
});
$(document).ready(function() {
	$("#int").click(function() {
		console.log("yes");
		var act1 = $(".str").hasClass("expand");
		var act2 = $(".int").hasClass("expand");
		var act3 = $(".agi").hasClass("expand");
		if (act1) {
			$(".str").toggleClass("expand");
			document.getElementById("strb").style.backgroundColor = "transparent";
			document.getElementById("str").style.backgroundColor = "transparent";
		}
		if (act3) {
			$(".agi").toggleClass("expand");
			document.getElementById("agib").style.backgroundColor = "transparent";
			document.getElementById("agi").style.backgroundColor = "transparent";
		}
		if (act2) {} else {
			$(".int").toggleClass("expand");
			document.getElementById("intb").style.backgroundColor = "#00bff3";
			document.getElementById("int").style.backgroundColor = "#3743a059";
		}
	});
});
$(document).ready(function() {
	$("#agi").click(function() {
		var act1 = $(".str").hasClass("expand");
		var act2 = $(".int").hasClass("expand");
		var act3 = $(".agi").hasClass("expand");
		if (act1) {
			$(".str").toggleClass("expand");
			document.getElementById("strb").style.backgroundColor = "transparent";
			document.getElementById("str").style.backgroundColor = "transparent";
		}
		if (act2) {
			$(".int").toggleClass("expand");
			document.getElementById("intb").style.backgroundColor = "transparent";
			document.getElementById("int").style.backgroundColor = "transparent";
		}
		if (act3) {} else {
			$(".agi").toggleClass("expand");
			document.getElementById("agib").style.backgroundColor = "#00bff3";
			document.getElementById("agi").style.backgroundColor = "#3743a059";
		}
	});
});

$(document).ready(function() {
	$("#hero1").click(function(){
		sessionStorage.setItem('hero', 'Mars');
		window.location.href = "heroes.html";
	});
	$("#hero2").click(function(){
		sessionStorage.setItem('hero', 'MK');
		window.location.href = "heroes.html";
	});
	$("#hero3").click(function(){
		sessionStorage.setItem('hero', 'Zeus');
		window.location.href = "heroes.html";
	});
});