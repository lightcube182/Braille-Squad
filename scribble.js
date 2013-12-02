$(document).ready(function(){

	var startCaratPosition = 0;
	var matchingInterval = null;
	//code for audio:
	var loadedData = false;
	var stopTime = 0;
	var startTime = 0;
	function blankFunc() {};
	var nextGame = blankFunc;
	var player = document.getElementById("aplayer");
	player.addEventListener('timeupdate',function() {
	if( stopTime <= player.currentTime) {
		player.pause();
	}
	});
	player.addEventListener('loadedmetadata',function(){
		loadedData = true;
		nextGame();
	});
	
	//code for button presses (and loading in the audio)
	$("#scribble").click(function(e){
		if ( loadedData == true) {
			scribbleGame();
		}
		else {
			nextGame = scribbleGame;
			player.load();			
			$("#textbox").focus();
		}
	});
	
	$("#training").click(function(e){
		if ( loadedData == true) {
			trainingGame();
		}
		else {
			nextGame = trainingGame;
			player.load();			
			$("#textbox").focus();
		}
	});
	
	$("#matching").click(function(e){
		if ( loadedData == true) {
			matchingGame();
		}
		else {
			nextGame = matchingGame;
			player.load();
			$("#textbox").focus();
		}
	});

	$("#typing").click(function(e){	
		if ( loadedData == true) {
			typingGame();
		}
		else {
			nextGame = typingGame;
			player.load();
			$("#textbox").focus();
		}
	});	
	
	var instruction;	
	$("#textbox").keyup(function(e){
		if ($("#textbox").val().length>1 && ($("#matching").css("display") == "none")) {
			var temp=$("#textbox").val();
			$("#textbox").val(temp.substring((temp.length-1),(temp.length)));
		}
	});
	
	$("#menuButton").click(function() {
		clearInterval(matchingInterval);
		$(".cellRow").hide();
		$("#matching").show();
		$("#typing").show();
		$("#scribble").show();
		$("#training").show();
		$("h1").show();
		$("div.infoBar").hide();
		$("#menu").css("margin-top", "300px");
		$("div.infoBar").text("");
		$("#firstLetter").hide();
		$("#secondLetter").hide();
		$("#thirdLetter").hide();
		$("#fourthLetter").hide();
		$("#allLetterButtons").hide();
		$("#menuButton").hide();
		$("#textbox").val("");
		$(document).off("keydown");
	});
	
	function trainingGame() {
		$("#training .cellRow").show();
		$("#matching").hide();
		$("#typing").hide();
		$("#scribble").hide();
		$("h1").hide();
		$("#menu").css("margin-top", "0");
		$("#menuButton").show();
	    $("#textbox").focus();
		$("div.infoBar").show();
		$("#matchingInfoBar").hide();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		instruction = getTrainingInstruction(randLetterKey);
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKey, "");
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#scribble").css("display") == "none") {
				if (e.which == randLetterKey) {
					$("div.infoBar").text("Congratulations, that's right!!!");
					randLetterKey = Math.floor((Math.random()*26) + 65);
					instruction = getTrainingInstruction(randLetterKey);
					$("div.infoBar").append("<br>" + instruction);
				} else if (e.which >= 65 && e.which <= 90) {
					$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
				} else {
					$("div.infoBar").text("That's not a letter!  Try again!!!").append("<br>" + instruction);
				}
				generateLetter(randLetterKey, "");
			}
		});
	};
	
	function scribbleGame() {
		$("#scribble .cellRow").show();
		$("#matching").hide();
		$("#typing").hide();
		$("#training").hide();
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
				playScribbleAudio(e.which);
			}
		});
	};
	
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

	function matchingGame () {
		$("#firstLetter, #secondLetter, #thirdLetter, #fourthLetter").css("display", "block");
		$("#firstLetter .cellRow").css("display", "block");
		$("#secondLetter .cellRow").css("display", "block");
		$("#thirdLetter .cellRow").css("display", "block");
		$("#fourthLetter .cellRow").css("display", "block");
		$("#buttonSet1, #buttonSet2").css("display", "block");
		$("#allLetterButtons").css("display", "block");
		$("#scribble").hide();
		$("#typing").hide();
		$("#training").hide();
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
		$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKeys[0], "#firstLetter");
		generateLetter(randLetterKeys[1], "#secondLetter");
		generateLetter(randLetterKeys[2], "#thirdLetter");
		generateLetter(randLetterKeys[3], "#fourthLetter");
		startCaretPosition = doGetCaretPosition(document.getElementById('textbox'));
		matchingInterval = setInterval (function() {
			if (startCaretPosition != doGetCaretPosition(document.getElementById('textbox'))) {
				startCaretPosition = doGetCaretPosition(document.getElementById('textbox'));
				if (startCaretPosition == 1) {
					if (randLetterKeys[0] == correctAnswer) {
						$("div.infoBar").text("That's right!!!");
						randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
						var correctNum = Math.floor((Math.random()*4));
						correctAnswer = randLetterKeys[correctNum];
						instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
						$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
						$("div.infoBar").append("<br>" + instruction);
						generateLetter(randLetterKeys[0], "#firstLetter");
						generateLetter(randLetterKeys[1], "#secondLetter");
						generateLetter(randLetterKeys[2], "#thirdLetter");
						generateLetter(randLetterKeys[3], "#fourthLetter");
					} else {
						$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					}
				} else if (startCaretPosition == 4) {
					if (randLetterKeys[1] == correctAnswer) {
						$("div.infoBar").text("That's right!!!");
						randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
						var correctNum = Math.floor((Math.random()*4));
						correctAnswer = randLetterKeys[correctNum];
						instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
						$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
						$("div.infoBar").append("<br>" + instruction);
						generateLetter(randLetterKeys[0], "#firstLetter");
						generateLetter(randLetterKeys[1], "#secondLetter");
						generateLetter(randLetterKeys[2], "#thirdLetter");
						generateLetter(randLetterKeys[3], "#fourthLetter");
					} else {
						$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					}
				} else if (startCaretPosition == 7) {
					if (randLetterKeys[2] == correctAnswer) {
						$("div.infoBar").text("That's right!!!");
						randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
						var correctNum = Math.floor((Math.random()*4));
						correctAnswer = randLetterKeys[correctNum];
						instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
						$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");		
						$("div.infoBar").append("<br>" + instruction);
						generateLetter(randLetterKeys[0], "#firstLetter");
						generateLetter(randLetterKeys[1], "#secondLetter");
						generateLetter(randLetterKeys[2], "#thirdLetter");
						generateLetter(randLetterKeys[3], "#fourthLetter");
					} else {
						$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					}
				} else if (startCaretPosition == 10) {
					if (randLetterKeys[3] == correctAnswer) {
						$("div.infoBar").text("That's right!!!");
						randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
						randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
						var correctNum = Math.floor((Math.random()*4));
						correctAnswer = randLetterKeys[correctNum];
						instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
						$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
						$("div.infoBar").append("<br>" + instruction);
						generateLetter(randLetterKeys[0], "#firstLetter");
						generateLetter(randLetterKeys[1], "#secondLetter");
						generateLetter(randLetterKeys[2], "#thirdLetter");
						generateLetter(randLetterKeys[3], "#fourthLetter");
					} else {
						$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					}
				}
			}
		}, 500);
	};
	
	$("#firstLetter").click(function(e){
		$("#textbox").focus();
		if (randLetterKeys[0] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
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
		$("#textbox").focus();
		if (randLetterKeys[1] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
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
		$("#textbox").focus();
		if (randLetterKeys[2] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
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
		$("#textbox").focus();
		if (randLetterKeys[3] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			var correctNum = Math.floor((Math.random()*4));
			correctAnswer = randLetterKeys[correctNum];
			instruction = "Pick the letter " + String.fromCharCode(correctAnswer);
			$("#textbox").val(String.fromCharCode(randLetterKeys[0]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[1]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[2]).toLowerCase() + "  " + String.fromCharCode(randLetterKeys[3]).toLowerCase() + " ");
			$("div.infoBar").append("<br>" + instruction);
			generateLetter(randLetterKeys[0], "#firstLetter");
			generateLetter(randLetterKeys[1], "#secondLetter");
			generateLetter(randLetterKeys[2], "#thirdLetter");
			generateLetter(randLetterKeys[3], "#fourthLetter");
		}else {
			$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
		}

	});
	
	function typingGame(){
		$("#typing .cellRow").show();
		$("#matching").hide();
		$("#scribble").hide();
		$("#training").hide();
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
	};
	
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
	};
	
	function getTrainingInstruction(charCode) {
		var instructionStart = "Press cells ";
		var instructionMiddle = " to make the letter ";
		var instructionLetter = "";
		var instructionCells = "";
		switch(charCode) {
			case 65:
				instructionLetter = "a";
				instructionCells = "1"
				break;
			case 66:
				instructionLetter = "b";
				instructionCells = "1 and 2";
				break;
			case 67:
				instructionLetter = "c";
				instructionCells = "1 and 4";
				break;
			case 68:
				instructionLetter = "d";
				instructionCells = "1, 4, and 5";
				break;
			case 69:
				instructionLetter = "e";
				instructionCells = "1 and 5";
				break;
			case 70:
				instructionLetter = "f";
				instructionCells = "1, 2, and 4";
				break;
			case 71:
				instructionLetter = "g";
				instructionCells = "1, 2, 4, and 5";
				break;
			case 72:
				instructionLetter = "h";
				instructionCells = "1, 2, 5";
				break;
			case 73:
				instructionLetter = "i";
				instructionCells = "2 and 4";
				break;
			case 74:
				instructionLetter = "j";
				instructionCells = "2, 4, and 5";
				break;
			case 75:
				instructionLetter = "k";
				instructionCells = "1 and 3";
				break;
			case 76:
				instructionLetter = "l";
				instructionCells = "1, 2, and 3";
				break;
			case 77:
				instructionLetter = "m";
				instructionCells = "1, 3, and 4";
				break;
			case 78:
				instructionLetter = "n";
				instructionCells = "1, 3, 4, and 5";
				break;
			case 79:
				instructionLetter = "o";
				instructionCells = "1, 3, and 5";
				break;
			case 80:
				instructionLetter = "p";
				instructionCells = "1, 2, 3, and 4";
				break;
			case 81:
				instructionLetter = "q";
				instructionCells = "1, 2, 3, 4, and 5";
				break;
			case 82:
				instructionLetter = "r";
				instructionCells = "1, 2, 3, and 5";
				break;
			case 83:
				instructionLetter = "s";
				instructionCells = "2, 3, and 4";
				break;
			case 84:
				instructionLetter = "t";
				instructionCells = "2, 3, 4, and 5";
				break;
			case 85:
				instructionLetter = "u";
				instructionCells = "1, 3, and 6";
				break;
			case 86:
				instructionLetter = "v";
				instructionCells = "1, 2, 3, and 6";
				break;
			case 87:
				instructionLetter = "w";
				instructionCells = "2, 4, 5, and 6";
				break;
			case 88:
				instructionLetter = "x";
				instructionCells = "1, 3, 4, and 6";
				break;
			case 89:
				instructionLetter = "y";
				instructionCells = "1, 3, 4, 5, and 6";
				break;
			case 90:
				instructionLetter = "z";
				instructionCells = "1, 3, 5, and 6";
				break;
			default:
				instructionLetter = "";
				instructionCells =  "";
				break;
		}
		var fullInstruction = instructionStart + instructionCells + instructionMiddle + instructionLetter;
		return fullInstruction;
		
	};
	
	function playScribbleAudio(charCode) {
		switch(charCode) {
			case 65:
			case 66:
			case 67:
			case 68:
			case 69:
			case 70:
			case 71:
			case 72:
			case 73:
			case 74:
			case 75:
			case 76:
			case 77:
			case 78:
			case 79:
			case 80:
			case 81:
			case 82:
			case 83:
			case 84:
			case 85:
			case 86:
			case 87:
			case 88:
			case 89:
			case 90:
				startTime = 1;
				stopTime = 6;
				break;
			default:
				startTime = 7;
				stopTime = 11;
				break;
		}
		player.currentTime = startTime;
		player.play();
	};
});
