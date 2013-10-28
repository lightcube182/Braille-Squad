$(document).ready(function(){
	
	$("#textbox").keyup(function(e){
		if ($("#textbox").val().length>1) {
			var temp=$("#textbox").val();
			$("#textbox").val(temp.substring((temp.length-1),(temp.length)));
		}
	});
		
	
	$("#menuButton").click(function() {
		$(".cellRow").hide();
		$("#matching").show();
		$("#typing").show();
		$("#scribble").show();
		$("h1").show();
		$("div.infoBar").hide();
		$("#menu").css("margin-top", "300px");
		$("div.infoBar").text("");
		$("#menuButton").hide();
	});
	
	$("#scribble").click(function(e){
		$(".cellRow").show();
		$("#matching").hide();
		$("#typing").hide();
		$("h1").hide();
		$("#menu").css("margin-top", "0");
		$("#menuButton").show();
	        $("#textbox").focus();
		$("div.infoBar").show();
		$(document).keydown(function(e) {
			switch(e.which) {
				case 65: //a
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 66: //b
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 67: //c
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 68: //d
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 69: //e
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 70: //f
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 71: //g
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 72: //h
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 73: //i
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 74: //j
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 75: //k
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 76: //l
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 77: //m
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 78: //n
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 79: //o
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 80: //p
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 81: //q
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 82: //r
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 83: //s
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 84: //t
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("");
					break;
				case 85: //u
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				case 86: //v
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				case 87: //w
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				case 88: //x
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				case 89: //y
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				case 90: //z
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					$("div.infoBar").text("");
					break;
				default:
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					$("div.infoBar").text("That's not a letter!  Try again!!!");
					break;
			}
		});
	});
	$("#typing").click(function(e){
		$(".cellRow").show();
		$("#matching").hide();
		$("#scribble").hide();
		$("#menuButton").show();
		$("h1").hide();
		$("div.infoBar").show();
		$("#menu").css("margin-top", "0");
	    $("#textbox").focus();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		var instruction = "Type the letter " + String.fromCharCode(randLetterKey);
		$("div.infoBar").text(instruction);
		switch(randLetterKey) {
			case 65: //a
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 66: //b
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 67: //c
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 68: //d
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 69: //e
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 70: //f
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 71: //g
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 72: //h
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 73: //i
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 74: //j
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 75: //k
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 76: //l
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 77: //m
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 78: //n
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 79: //o
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 80: //p
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 81: //q
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 82: //r
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 83: //s
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","hidden");
				break;
			case 84: //t
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","hidden");
				break;
			case 85: //u
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","visible");
				break;
			case 86: //v
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","visible");
				break;
			case 87: //w
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","visible");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","visible");
				break;
			case 88: //x
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","hidden");
				$(".cell6").css("visibility","visible");
				break;
			case 89: //y
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","visible");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","visible");
				break;
			case 90: //z
				$(".cell1").css("visibility","visible");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","visible");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","visible");
				$(".cell6").css("visibility","visible");
				break;
			default:
				$(".cell1").css("visibility","hidden");
				$(".cell2").css("visibility","hidden");
				$(".cell3").css("visibility","hidden");
				$(".cell4").css("visibility","hidden");
				$(".cell5").css("visibility","hidden");
                                $(".cell6").css("visibility","hidden");
				break;
		}
		$(document).keydown(function(e) {
			if (e.which == randLetterKey) {
				$("div.infoBar").text("Congratulations, that's right!!!");
				randLetterKey = Math.floor((Math.random()*26) + 65);
				instruction = "Type the letter " + String.fromCharCode(randLetterKey);
				$("div.infoBar").append("<br>" + instruction);
			} else if (e.which >= 65 && e.which <= 90) {
				$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
			} else {
				$("div.infoBar").text("That's not a letter!  Try again!!!").append("<br>" + instruction);
			}
			switch(randLetterKey) {
				case 65: //a
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 66: //b
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 67: //c
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 68: //d
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 69: //e
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 70: //f
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 71: //g
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 72: //h
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 73: //i
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 74: //j
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 75: //k
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 76: //l
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 77: //m
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 78: //n
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 79: //o
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 80: //p
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 81: //q
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 82: //r
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 83: //s
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
				case 84: //t
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","hidden");
					break;
				case 85: //u
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					break;
				case 86: //v
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					break;
				case 87: //w
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","visible");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					break;
				case 88: //x
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","visible");
					break;
				case 89: //y
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","visible");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					break;
				case 90: //z
					$(".cell1").css("visibility","visible");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","visible");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","visible");
					$(".cell6").css("visibility","visible");
					break;
				default:
					$(".cell1").css("visibility","hidden");
					$(".cell2").css("visibility","hidden");
					$(".cell3").css("visibility","hidden");
					$(".cell4").css("visibility","hidden");
					$(".cell5").css("visibility","hidden");
					$(".cell6").css("visibility","hidden");
					break;
			}
		});
	});
});