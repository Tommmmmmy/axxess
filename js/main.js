var timer;
var pre = "";

$(document).ready(function(){
		$("#display").html(0 + "/" + 0);
		$("#start").click(function(){
			var number = $("input").val();
			if(pre != number && number.length !== 0) {
				clearInterval(timer);
				validate(number);
				pre = number;
			}
		});
		$("#reset").click(function(){
			$("#display").html(0 + "/" + 0);
			$('input').val("");
			clearInterval(timer);
			$("#finger").removeClass("highlight");
			$("#toe").removeClass("highlight");
		});
		$("#restart").click(function(){
			clearInterval(timer);
			$("#finger").removeClass("highlight");
			$("#toe").removeClass("highlight");
			var number = $("input").val();
			if(number.length !== 0) {
				validate(number);
			}
		});
})


function validate(number) {
	clearInterval(timer);
	if(Math.floor(number) != number || number <= 0) {
		alert("invalid integer!");
	}
	else {
		var count = 0;
		timer = setInterval(function(){
			count++;
			if(count == number) {
				clearInterval(timer);
				pre = "";
			}
			$("#display").html(count + "/" + number);
			if(count % 3 == 0) {
				$("#finger").addClass("highlight");
			}
			else {
				$("#finger").removeClass("highlight");
			}
			if(count % 5 == 0) {
				$("#toe").addClass("highlight");
			}
			else {
				$("#toe").removeClass("highlight");
			}
    	}, 1000);
	}
}
