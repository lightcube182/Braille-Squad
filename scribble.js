$(document).ready(function(){
	
	var instruction;	
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
		$("#firstLetter").hide();
		$("#secondLetter").hide();
		$("#thirdLetter").hide();
		$("#fourthLetter").hide();
		$("#menuButton").hide();
		setCaretPosition($("#textBox"), 7);
	});
	
	$("#scribble").click(function(e){
		$("#scribble .cellRow").show();
		$("#matching").hide();
		$("#typing").hide();
		$("h1").hide();
		$("#menu").css("margin-top", "0");
		$("#menuButton").show();
	        $("#textbox").focus();
		$("div.infoBar").show();
		$(document).keydown(function(e) {
			$("#textbox").focus();
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
	
	var randLetterKeys = new Array();
	var correctAnswer;
	
	function doGetCaretPosition (ctrl) {
		var CaretPos = 0;	// IE Support
		if (document.selection) {
		ctrl.focus ();
			var Sel = document.selection.createRange ();
			Sel.moveStart ('character', -ctrl.value.length);
			CaretPos = Sel.text.length;
		}
		// Firefox support
		else if (ctrl.selectionStart || ctrl.selectionStart == '0')
			CaretPos = ctrl.selectionStart;
		return (CaretPos);
	}
	function setCaretPosition(ctrl, pos){
		if(ctrl.setSelectionRange)
		{
			ctrl.focus();
			ctrl.setSelectionRange(pos,pos);
		}
		else if (ctrl.createTextRange) {
			var range = ctrl.createTextRange();
			range.collapse(true);
			range.moveEnd('character', pos);
			range.moveStart('character', pos);
			range.select();
		}
	}
	
	$("#matching").click(function(e){
		$("#firstLetter, #secondLetter, #thirdLetter, #fourthLetter").show();
		$("#firstLetter .cellRow").show();
		$("#secondLetter .cellRow").show();
		$("#thirdLetter .cellRow").show();
		$("#fourthLetter .cellRow").show();
		$("#scribble").hide();
		$("#typing").hide();
		$("h1").hide();
		$("#menu").css("margin-top", "0");
		$("#menuButton").show();
	        $("#textbox").focus();
		$("div.infoBar").show();
		randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
		$("#textbox").val(String.fromCharCode(randLetterKeys[0]) + " " + String.fromCharCode(randLetterKeys[1]) + " " + String.fromCharCode(randLetterKeys[2]) + " " + String.fromCharCode(randLetterKeys[3]));
		var correctNum = Math.floor((Math.random()*4));
		correctAnswer = randLetterKeys[correctNum];
		instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
		$("div.infoBar").text(instruction);
		switch(randLetterKeys[0]) {
			case 65: //a
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 66: //b
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter  .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 67: //c
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 68: //d
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 69: //e
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 70: //f
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 71: //g
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 72: //h
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 73: //i
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 74: //j
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 75: //k
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 76: //l
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 77: //m
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 78: //n
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 79: //o
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 80: //p
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 81: //q
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 82: //r
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 83: //s
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 84: //t
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
			case 85: //u
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			case 86: //v
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			case 87: //w
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","visible");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			case 88: //x
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			case 89: //y
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","visible");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			case 90: //z
				$("#firstLetter .cell1").css("visibility","visible");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","visible");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","visible");
				$("#firstLetter .cell6").css("visibility","visible");
				break;
			default:
				$("#firstLetter .cell1").css("visibility","hidden");
				$("#firstLetter .cell2").css("visibility","hidden");
				$("#firstLetter .cell3").css("visibility","hidden");
				$("#firstLetter .cell4").css("visibility","hidden");
				$("#firstLetter .cell5").css("visibility","hidden");
				$("#firstLetter .cell6").css("visibility","hidden");
				break;
		}
		switch(randLetterKeys[1]) {
			case 65: //a
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 66: //b
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 67: //c
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 68: //d
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 69: //e
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 70: //f
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 71: //g
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 72: //h
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 73: //i
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 74: //j
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 75: //k
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 76: //l
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 77: //m
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 78: //n
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 79: //o
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 80: //p
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 81: //q
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 82: //r
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 83: //s
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 84: //t
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
			case 85: //u
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			case 86: //v
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			case 87: //w
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","visible");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			case 88: //x
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			case 89: //y
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","visible");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			case 90: //z
				$("#secondLetter .cell1").css("visibility","visible");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","visible");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","visible");
				$("#secondLetter .cell6").css("visibility","visible");
				break;
			default:
				$("#secondLetter .cell1").css("visibility","hidden");
				$("#secondLetter .cell2").css("visibility","hidden");
				$("#secondLetter .cell3").css("visibility","hidden");
				$("#secondLetter .cell4").css("visibility","hidden");
				$("#secondLetter .cell5").css("visibility","hidden");
				$("#secondLetter .cell6").css("visibility","hidden");
				break;
		}
		switch(randLetterKeys[2]) {
			case 65: //a
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 66: //b
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 67: //c
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 68: //d
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 69: //e
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 70: //f
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 71: //g
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 72: //h
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 73: //i
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 74: //j
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 75: //k
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 76: //l
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 77: //m
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 78: //n
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 79: //o
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 80: //p
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 81: //q
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 82: //r
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 83: //s
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 84: //t
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
			case 85: //u
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			case 86: //v
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			case 87: //w
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","visible");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			case 88: //x
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			case 89: //y
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","visible");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			case 90: //z
				$("#thirdLetter .cell1").css("visibility","visible");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","visible");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","visible");
				$("#thirdLetter .cell6").css("visibility","visible");
				break;
			default:
				$("#thirdLetter .cell1").css("visibility","hidden");
				$("#thirdLetter .cell2").css("visibility","hidden");
				$("#thirdLetter .cell3").css("visibility","hidden");
				$("#thirdLetter .cell4").css("visibility","hidden");
				$("#thirdLetter .cell5").css("visibility","hidden");
				$("#thirdLetter .cell6").css("visibility","hidden");
				break;
		}
		switch(randLetterKeys[3]) {
			case 65: //a
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 66: //b
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 67: //c
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 68: //d
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 69: //e
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 70: //f
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 71: //g
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 72: //h
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 73: //i
				$("#fourthLetter cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 74: //j
				$("#fourthLetter .cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 75: //k
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 76: //l
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 77: //m
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 78: //n
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 79: //o
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 80: //p
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 81: //q
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 82: //r
				$("#fourthLetter v.cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 83: //s
				$("#fourthLetter .cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 84: //t
				$("#fourthLetter .cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
			case 85: //u
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			case 86: //v
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			case 87: //w
				$("#fourthLetter .cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","visible");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			case 88: //x
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			case 89: //y
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","visible");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			case 90: //z
				$("#fourthLetter .cell1").css("visibility","visible");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","visible");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","visible");
				$("#fourthLetter .cell6").css("visibility","visible");
				break;
			default:
				$("#fourthLetter .cell1").css("visibility","hidden");
				$("#fourthLetter .cell2").css("visibility","hidden");
				$("#fourthLetter .cell3").css("visibility","hidden");
				$("#fourthLetter .cell4").css("visibility","hidden");
				$("#fourthLetter .cell5").css("visibility","hidden");
				$("#fourthLetter .cell6").css("visibility","hidden");
				break;
		}
	});
	
	//if (doGetCaretPosition(document.getElementById('textbox')) == 0) {
	//	if (randLetterKeys[0] == correctAnswer) {
	//		$("div.infoBar").text("That's right!!!");
	//		randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
	//		randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
	//		randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
	//		randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
	//		var correctNum = Math.floor((Math.random()*4));
	//		correctAnswer = randLetterKeys[correctNum];
	//		instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
	//		$("div.infoBar").append("<br>" + instruction);
	//		switch(randLetterKeys[0]) {
	//			case 65: //a
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 66: //b
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 67: //c
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 68: //d
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 69: //e
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 70: //f
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 71: //g
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 72: //h
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 73: //i
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 74: //j
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 75: //k
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 76: //l
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 77: //m
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 78: //n
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 79: //o
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 80: //p
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 81: //q
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 82: //r
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 83: //s
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 84: //t
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 85: //u
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			case 86: //v
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			case 87: //w
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","visible");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			case 88: //x
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			case 89: //y
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","visible");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			case 90: //z
	//				$("#firstLetter .cell1").css("visibility","visible");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","visible");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","visible");
	//				$("#firstLetter .cell6").css("visibility","visible");
	//				break;
	//			default:
	//				$("#firstLetter .cell1").css("visibility","hidden");
	//				$("#firstLetter .cell2").css("visibility","hidden");
	//				$("#firstLetter .cell3").css("visibility","hidden");
	//				$("#firstLetter .cell4").css("visibility","hidden");
	//				$("#firstLetter .cell5").css("visibility","hidden");
	//				$("#firstLetter .cell6").css("visibility","hidden");
	//				break;
	//		}
	//		switch(randLetterKeys[1]) {
	//			case 65: //a
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 66: //b
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 67: //c
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 68: //d
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 69: //e
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 70: //f
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 71: //g
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 72: //h
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 73: //i
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 74: //j
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 75: //k
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 76: //l
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 77: //m
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 78: //n
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 79: //o
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 80: //p
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 81: //q
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 82: //r
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 83: //s
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 84: //t
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 85: //u
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			case 86: //v
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			case 87: //w
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","visible");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			case 88: //x
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			case 89: //y
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","visible");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			case 90: //z
	//				$("#secondLetter .cell1").css("visibility","visible");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","visible");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","visible");
	//				$("#secondLetter .cell6").css("visibility","visible");
	//				break;
	//			default:
	//				$("#secondLetter .cell1").css("visibility","hidden");
	//				$("#secondLetter .cell2").css("visibility","hidden");
	//				$("#secondLetter .cell3").css("visibility","hidden");
	//				$("#secondLetter .cell4").css("visibility","hidden");
	//				$("#secondLetter .cell5").css("visibility","hidden");
	//				$("#secondLetter .cell6").css("visibility","hidden");
	//				break;
	//		}
	//		switch(randLetterKeys[2]) {
	//			case 65: //a
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 66: //b
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 67: //c
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 68: //d
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 69: //e
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 70: //f
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 71: //g
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 72: //h
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 73: //i
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 74: //j
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 75: //k
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 76: //l
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 77: //m
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 78: //n
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 79: //o
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 80: //p
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 81: //q
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 82: //r
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 83: //s
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 84: //t
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 85: //u
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			case 86: //v
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			case 87: //w
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","visible");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			case 88: //x
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			case 89: //y
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","visible");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			case 90: //z
	//				$("#thirdLetter .cell1").css("visibility","visible");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","visible");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","visible");
	//				$("#thirdLetter .cell6").css("visibility","visible");
	//				break;
	//			default:
	//				$("#thirdLetter .cell1").css("visibility","hidden");
	//				$("#thirdLetter .cell2").css("visibility","hidden");
	//				$("#thirdLetter .cell3").css("visibility","hidden");
	//				$("#thirdLetter .cell4").css("visibility","hidden");
	//				$("#thirdLetter .cell5").css("visibility","hidden");
	//				$("#thirdLetter .cell6").css("visibility","hidden");
	//				break;
	//		}
	//		switch(randLetterKeys[3]) {
	//			case 65: //a
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 66: //b
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 67: //c
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 68: //d
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 69: //e
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 70: //f
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 71: //g
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 72: //h
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 73: //i
	//				$("#fourthLetter cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 74: //j
	//				$("#fourthLetter .cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 75: //k
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 76: //l
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 77: //m
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 78: //n
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 79: //o
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 80: //p
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 81: //q
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 82: //r
	//				$("#fourthLetter v.cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 83: //s
	//				$("#fourthLetter .cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 84: //t
	//				$("#fourthLetter .cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//			case 85: //u
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			case 86: //v
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			case 87: //w
	//				$("#fourthLetter .cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","visible");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			case 88: //x
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			case 89: //y
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","visible");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			case 90: //z
	//				$("#fourthLetter .cell1").css("visibility","visible");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","visible");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","visible");
	//				$("#fourthLetter .cell6").css("visibility","visible");
	//				break;
	//			default:
	//				$("#fourthLetter .cell1").css("visibility","hidden");
	//				$("#fourthLetter .cell2").css("visibility","hidden");
	//				$("#fourthLetter .cell3").css("visibility","hidden");
	//				$("#fourthLetter .cell4").css("visibility","hidden");
	//				$("#fourthLetter .cell5").css("visibility","hidden");
	//				$("#fourthLetter .cell6").css("visibility","hidden");
	//				break;
	//		}
	//	} else {
	//		$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
	//	}
	//}

	$("#firstLetter").click(function(e){
		if (randLetterKeys[0] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("div.infoBar").append("<br>" + instruction);
			switch(randLetterKeys[0]) {
				case 65: //a
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[1]) {
				case 65: //a
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[2]) {
				case 65: //a
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[3]) {
				case 65: //a
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#fourthLetter cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#fourthLetter v.cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
			}
		} else {
			$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
		}
	});
	
	$("#secondLetter").click(function(e){
		if (randLetterKeys[1] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("div.infoBar").append("<br>" + instruction);
			switch(randLetterKeys[0]) {
				case 65: //a
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter  .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[1]) {
				case 65: //a
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[2]) {
				case 65: //a
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[3]) {
				case 65: //a
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#fourthLetter cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#fourthLetter v.cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
			}
		}else {
			$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
		}

	});
	
	$("#thirdLetter").click(function(e){
		if (randLetterKeys[2] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("div.infoBar").append("<br>" + instruction);
			switch(randLetterKeys[0]) {
				case 65: //a
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter  .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[1]) {
				case 65: //a
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[2]) {
				case 65: //a
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[3]) {
				case 65: //a
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#fourthLetter cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#fourthLetter v.cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
			}
		}else {
			$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
		}

	});
	
	$("#fourthLetter").click(function(e){
		if (randLetterKeys[3] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("div.infoBar").append("<br>" + instruction);
			switch(randLetterKeys[0]) {
				case 65: //a
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter  .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","visible");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","visible");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#firstLetter .cell1").css("visibility","visible");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","visible");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","visible");
					$("#firstLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#firstLetter .cell1").css("visibility","hidden");
					$("#firstLetter .cell2").css("visibility","hidden");
					$("#firstLetter .cell3").css("visibility","hidden");
					$("#firstLetter .cell4").css("visibility","hidden");
					$("#firstLetter .cell5").css("visibility","hidden");
					$("#firstLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[1]) {
				case 65: //a
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","visible");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","visible");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#secondLetter .cell1").css("visibility","visible");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","visible");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","visible");
					$("#secondLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#secondLetter .cell1").css("visibility","hidden");
					$("#secondLetter .cell2").css("visibility","hidden");
					$("#secondLetter .cell3").css("visibility","hidden");
					$("#secondLetter .cell4").css("visibility","hidden");
					$("#secondLetter .cell5").css("visibility","hidden");
					$("#secondLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[2]) {
				case 65: //a
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","visible");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","visible");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#thirdLetter .cell1").css("visibility","visible");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","visible");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","visible");
					$("#thirdLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#thirdLetter .cell1").css("visibility","hidden");
					$("#thirdLetter .cell2").css("visibility","hidden");
					$("#thirdLetter .cell3").css("visibility","hidden");
					$("#thirdLetter .cell4").css("visibility","hidden");
					$("#thirdLetter .cell5").css("visibility","hidden");
					$("#thirdLetter .cell6").css("visibility","hidden");
					break;
			}
			switch(randLetterKeys[3]) {
				case 65: //a
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 66: //b
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 67: //c
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 68: //d
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 69: //e
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 70: //f
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 71: //g
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 72: //h
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 73: //i
					$("#fourthLetter cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 74: //j
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 75: //k
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 76: //l
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 77: //m
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 78: //n
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 79: //o
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 80: //p
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 81: //q
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 82: //r
					$("#fourthLetter v.cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 83: //s
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 84: //t
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
				case 85: //u
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 86: //v
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 87: //w
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","visible");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 88: //x
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 89: //y
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","visible");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				case 90: //z
					$("#fourthLetter .cell1").css("visibility","visible");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","visible");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","visible");
					$("#fourthLetter .cell6").css("visibility","visible");
					break;
				default:
					$("#fourthLetter .cell1").css("visibility","hidden");
					$("#fourthLetter .cell2").css("visibility","hidden");
					$("#fourthLetter .cell3").css("visibility","hidden");
					$("#fourthLetter .cell4").css("visibility","hidden");
					$("#fourthLetter .cell5").css("visibility","hidden");
					$("#fourthLetter .cell6").css("visibility","hidden");
					break;
			}
		}else {
			$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
		}

	});
	
	$("#typing").click(function(e){
		$("#typing .cellRow").show();
		$("#matching").hide();
		$("#scribble").hide();
		$("#menuButton").show();
		$("h1").hide();
		$("div.infoBar").show();
		$("#menu").css("margin-top", "0");
		$("#textbox").focus();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		instruction = "Type the letter " + String.fromCharCode(randLetterKey);
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