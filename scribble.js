$(document).ready(function(){
	
	var instruction;	
	$("#textbox").keyup(function(e){
		if ($("#textbox").val().length>1 && ($("#matching").css("display") == "none")) {
			var temp=$("#textbox").val();
			$("#textbox").val(temp.substring((temp.length-1),(temp.length)));
		}
	});
	
	$("#textbox").change(function() {
		if (doGetCaretPosition(document.getElementById('textbox')) == 0) {
			if (randLetterKeys[0] == correctAnswer) {
				$("div.infoBar").text("That's right!!!");
				randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
				var correctNum = Math.floor((Math.random()*4));
				correctAnswer = randLetterKeys[correctNum];
				instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
				$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
				$("div.infoBar").append("<br>" + instruction);
				generateLetter(randLetterKeys[0], "#firstLetter");
				generateLetter(randLetterKeys[1], "#secondLetter");
				generateLetter(randLetterKeys[2], "#thirdLetter");
				generateLetter(randLetterKeys[3], "#fourthLetter");
			} else {
				$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
			}
		} else if (doGetCaretPosition(document.getElementById('textbox')) == 2) {
			if (randLetterKeys[1] == correctAnswer) {
				$("div.infoBar").text("That's right!!!");
				randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
				var correctNum = Math.floor((Math.random()*4));
				correctAnswer = randLetterKeys[correctNum];
				instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
				$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
				$("div.infoBar").append("<br>" + instruction);
				generateLetter(randLetterKeys[0], "#firstLetter");
				generateLetter(randLetterKeys[1], "#secondLetter");
				generateLetter(randLetterKeys[2], "#thirdLetter");
				generateLetter(randLetterKeys[3], "#fourthLetter");
			} else {
				$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
			}
		} else if (doGetCaretPosition(document.getElementById('textbox')) == 4) {
			if (randLetterKeys[2] == correctAnswer) {
				$("div.infoBar").text("That's right!!!");
				randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
				var correctNum = Math.floor((Math.random()*4));
				correctAnswer = randLetterKeys[correctNum];
				instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
				$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());		
				$("div.infoBar").append("<br>" + instruction);
				generateLetter(randLetterKeys[0], "#firstLetter");
				generateLetter(randLetterKeys[1], "#secondLetter");
				generateLetter(randLetterKeys[2], "#thirdLetter");
				generateLetter(randLetterKeys[3], "#fourthLetter");
			} else {
				$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
			}
		} else if (doGetCaretPosition(document.getElementById('textbox')) == 6) {
			if (randLetterKeys[3] == correctAnswer) {
				$("div.infoBar").text("That's right!!!");
				randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
				randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
				var correctNum = Math.floor((Math.random()*4));
				correctAnswer = randLetterKeys[correctNum];
				instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
				$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
				$("div.infoBar").append("<br>" + instruction);
				generateLetter(randLetterKeys[0], "#firstLetter");
				generateLetter(randLetterKeys[1], "#secondLetter");
				generateLetter(randLetterKeys[2], "#thirdLetter");
				generateLetter(randLetterKeys[3], "#fourthLetter");
			} else {
				$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
			}
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
		$("#textbox").val("");
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
		$("#matchingInfoBar").hide();
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#typing").css("display") == "none") {
				$("div.infoBar").text("");
				$("#textbox").focus();
				generateLetter(e.which, "");
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
		var correctNum = Math.floor((Math.random()*4));
		correctAnswer = randLetterKeys[correctNum];
		instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
		$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKeys[0], "#firstLetter");
		generateLetter(randLetterKeys[1], "#secondLetter");
		generateLetter(randLetterKeys[2], "#thirdLetter");
		generateLetter(randLetterKeys[3], "#fourthLetter");		
	});
	
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
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
			$("div.infoBar").append("<br>" + instruction);
			generateLetter(randLetterKeys[0], "#firstLetter");
			generateLetter(randLetterKeys[1], "#secondLetter");
			generateLetter(randLetterKeys[2], "#thirdLetter");
			generateLetter(randLetterKeys[3], "#fourthLetter");
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
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
			$("div.infoBar").append("<br>" + instruction);
			generateLetter(randLetterKeys[0], "#firstLetter");
			generateLetter(randLetterKeys[1], "#secondLetter");
			generateLetter(randLetterKeys[2], "#thirdLetter");
			generateLetter(randLetterKeys[3], "#fourthLetter");
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
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
			$("div.infoBar").append("<br>" + instruction);
			generateLetter(randLetterKeys[0], "#firstLetter");
			generateLetter(randLetterKeys[1], "#secondLetter");
			generateLetter(randLetterKeys[2], "#thirdLetter");
			generateLetter(randLetterKeys[3], "#fourthLetter");
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
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + " " + String.fromCharCode(randLetterKeys[3]).toLowerCase());
			$("div.infoBar").append("<br>" + instruction);
			generateLetter(randLetterKeys[0], "#firstLetter");
			generateLetter(randLetterKeys[1], "#secondLetter");
			generateLetter(randLetterKeys[2], "#thirdLetter");
			generateLetter(randLetterKeys[3], "#fourthLetter");
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
		$("#matchingInfoBar").hide();
		$("#menu").css("margin-top", "0");
		$("#textbox").focus();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		instruction = "Type the letter " + String.fromCharCode(randLetterKey);
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKey, "");
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#scribble").css("display") == "none") {
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
				generateLetter(randLetterKey, "");
			}
		});
	});
	
	function generateLetter(charCode, identifier) {
		switch(charCode) {
			case 65: //a
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 66: //b
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 67: //c
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 68: //d
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 69: //e
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 70: //f
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 71: //g
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 72: //h
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 73: //i
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 74: //j
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 75: //k
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 76: //l
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 77: //m
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 78: //n
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 79: //o
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 80: //p
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 81: //q
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 82: //r
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 83: //s
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 84: //t
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","hidden");
				break;
			case 85: //u
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			case 86: //v
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			case 87: //w
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","visible");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			case 88: //x
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			case 89: //y
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","visible");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			case 90: //z
				$(identifier + " .cell1").css("visibility","visible");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","visible");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","visible");
				$(identifier + " .cell6").css("visibility","visible");
				break;
			default:
				$(identifier + " .cell1").css("visibility","hidden");
				$(identifier + " .cell2").css("visibility","hidden");
				$(identifier + " .cell3").css("visibility","hidden");
				$(identifier + " .cell4").css("visibility","hidden");
				$(identifier + " .cell5").css("visibility","hidden");
				$(identifier + " .cell6").css("visibility","hidden");
				$("div.infoBar").text("That's not a letter! Try again!!!");
				break;
		}
	}
});