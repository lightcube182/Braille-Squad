$(document).ready(function(){

	var startCaratPosition = 0;
	var matchingInterval = null;
	//code for audio:
	var loadedData = false;
	var stopTime = 0;
	var startTime = 0;
	var instructionStart = 0;
	var instructionEnd = 0;
	var audioOnDeck = false;
	/**
	 * Description
	 * @method blankFunc is an empty function. We set nextgame equal to blankfunc when we are at the main menu, and don't want any games played.
	 * @returns nothing
	 */
	function blankFunc() {};
	var nextGame = blankFunc;
	var player = document.getElementById("aplayer");
	var initLoad = true;
	player.addEventListener('timeupdate',function() {
		if( stopTime <= player.currentTime) {
			if( initLoad == true) {
				player.pause();
				initLoad = false;
				nextGame();
			}
			else {
				if( audioOnDeck == false) {
					player.pause();
				}
				else {
					audioOnDeck = false;
					player.currentTime = instructionStart;
					stopTime = instructionEnd;
				}
			}
		}
	});
	player.addEventListener('loadedmetadata',function(){
		loadedData = true;
		//nextGame();
	});
	
	//code for button presses (and loading in the audio)
	$("#scribble").click(function(e){
		if ( initLoad == false) {
			scribbleGame();
		}
		else {
			nextGame = scribbleGame
			startTime = 0;
			stopTime = 0.12;
			player.play();
			$("#textbox").focus();
		}
	});
	
	$("#training").click(function(e){
		if ( initLoad == false) {
			trainingGame();
		}
		else {
			nextGame = trainingGame;
			startTime = 0;
			stopTime = 0.12;
			player.play();		
			$("#textbox").focus();
		}
	});
	
	$("#matching").click(function(e){
		if ( initLoad == false) {
			matchingGame();
		}
		else {
			nextGame = matchingGame;
			startTime = 0;
			stopTime = 0.12;
			player.play();
			$("#textbox").focus();
		}
	});

	$("#typing").click(function(e){	
		if ( initLoad == false) {
			typingGame();
		}
		else {
			nextGame = typingGame;
			startTime = 0;
			stopTime = 0.12;
			player.play();
			$("#textbox").focus();
		}
	});
	
	$("#easyTyping").click(function(e){
		typingGameEasy();
	});
	
	$("#hardTyping").click(function(e){	
		typingGameHard();
	});
	
	var instruction;	
	$("#textbox").keyup(function(e){
		if ($("#textbox").val().length>1 && ($("#matching").css("display") == "none") && ($("#typing").css("display") == "none")) {
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
		$("#easyTypingDiv").hide();
		$("#hardTypingDiv").hide();
		$("#menuButton").css("float", "none");
		$("#buttonToggle").hide();
		$("#textbox").val("");
		$(document).off("keydown");
	});
	
	/**
	 * Description
	 * @method displays cells and instructs the user to press specific buttons in order to learn basic letters. uses getTrainingInstruction to generate instructions for the user and to define the length of
	 * time that passes between various reward and instruction sounds.
	 * @return nothing
	 */
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
		var prevLetterKey = 0;
		instruction = getTrainingInstruction(randLetterKey);
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKey, "");
		startTime = instructionStart;
		stopTime = instructionEnd;
		player.currentTime = startTime;
		player.play();
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#scribble").css("display") == "none") {
				if (e.which == randLetterKey) {
					$("div.infoBar").text("Congratulations, that's right!!!");	
					prevLetterKey = randLetterKey;
					randLetterKey = Math.floor((Math.random()*26) + 65);
					instruction = getTrainingInstruction(randLetterKey);
					audioOnDeck = true;
					playScribbleAudio(prevLetterKey);
					$("div.infoBar").append("<br>" + instruction);
				} else if (e.which >= 65 && e.which <= 90) {
					$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					player.currentTime = 172.368;
					stopTime = 175.738;
					player.play();
				} else {
					$("div.infoBar").text("That's not a letter!  Try again!!!").append("<br>" + instruction);
					player.currentTime = 1.75;
					stopTime = 5.5;
					player.play();
				}
				generateLetter(randLetterKey, "");
			}
		});
	};
	
	/**
	 * Description
	 * @method scribbleGame allows the user to input letters from the braille keyboard and displays the letter on the screen and plays a reward sound if the combination of buttons the children use
	 * are a valid braille character.
	 * @return nothing
	 */
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
		startTime = 5.75;
		stopTime = 7.84;
		player.currentTime = startTime;
		player.play();
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
	
	/**
	 * Description
	 * @method doGetCaretPosition retrieves the position of the cursor on the braille display for use in the matching game
	 * @param {} ctrl is the control that is linked to the braille display (textbox)
	 * @return CaretPos
	 */
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
	/**
	 * Description
	 * @method setCaretPosition changes the position of the cursor on the braille display for use in the matching game
	 * @param {} ctrl is the control linked to the braille display (textbox)
	 * @param {} pos is the position that the cursor will be moved to
	 * @return 
	 */
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
	
	/**
	 * Description
	 * @method dupCheck checks to make sure that no letters are duplicates in the matching game. If there are, generates a new random letter to replace the duplicate.
	 * @return 
	 */
	function dupCheck() {
		var letterMatch = false;
		for (ind = 0; ind < 4; ind++) {
			if (ind == 0) {
				if (randLetterKeys[1] == randLetterKeys[ind]) {
					randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[2] == randLetterKeys[ind]) {
					randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[3] == randLetterKeys[ind]) {
					randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
			} else if (ind == 1) {
				if (randLetterKeys[0] == randLetterKeys[ind]) {
					randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[2] == randLetterKeys[ind]) {
					randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[3] == randLetterKeys[ind]) {
					randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				
			} else if (ind == 2) {
				if (randLetterKeys[0] == randLetterKeys[ind]) {
					randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[1] == randLetterKeys[ind]) {
					randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[3] == randLetterKeys[ind]) {
					randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
			} else if (ind == 3) {
				if (randLetterKeys[0] == randLetterKeys[ind]) {
					randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[1] == randLetterKeys[ind]) {
					randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
				if (randLetterKeys[2] == randLetterKeys[ind]) {
					randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
					letterMatch = true;
				}
			}
			if (letterMatch) {
				letterMatch = false;
				ind = 0;
			}
		}
	}

	/**
	 * Description
	 * @method matchingGame displays four braille letters on the screen as well as four braille characters on the braille display. It prompts the user to pick the letter that matches an instruction,
	 * and if they do a reward sound is played and a new set of letters pop up.
	 * @return nothing
	 */
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
		$("#menuButton").css("float", "left");
		$("#menuButton").show();
		$("#buttonToggle").show();
		$("#textbox").focus();
		$("div.infoBar").show();
		randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
		randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
		dupCheck();
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
						dupCheck();
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
						dupCheck();
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
						dupCheck();
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
						dupCheck();
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
		}, 50);
	};
	
	$("#firstLetter").click(function(e){
		$("#textbox").focus();
		if (randLetterKeys[0] == correctAnswer) {
			$("div.infoBar").text("That's right!!!");
			randLetterKeys[0] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[1] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[2] = Math.floor((Math.random()*26) + 65);
			randLetterKeys[3] = Math.floor((Math.random()*26) + 65);
			dupCheck();
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
			dupCheck();
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
			dupCheck();
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
			dupCheck();
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
	
	$("#buttonToggle").click(function(e){
		if ($("#firstLetter").attr("aria-hidden") == "true") {
			$("#firstLetter").attr("aria-hidden", "false");
			$("#secondLetter").attr("aria-hidden", "false");
			$("#thirdLetter").attr("aria-hidden", "false");
			$("#fourthLetter").attr("aria-hidden", "false");
		} else {
			$("#firstLetter").attr("aria-hidden", "true");
			$("#secondLetter").attr("aria-hidden", "true");
			$("#thirdLetter").attr("aria-hidden", "true");
			$("#fourthLetter").attr("aria-hidden", "true");
		}
	});
	
	/**
	 * Description
	 * @method typingGame shows the buttons for the two different difficulty levels of the typing games and hides the menu and title screen.
	 * @return 
	 */
	function typingGame(){
		$("#easyTypingDiv").show();
		$("#hardTypingDiv").show();
		$("#matching").hide();
		$("#scribble").hide();
		$("#training").hide();
		$("#menuButton").show();
		$("h1").hide();
		$("div.infoBar").show();
		$("#matchingInfoBar").hide();
		$("#menu").css("margin-top", "0");
	};
	
	/**
	 * Description
	 * @method typingGameEasy is the easier of the typing games, where the user is given both a verbal prompt and a letter displayed on the braille display and is expected to type that letter.
	 * @return 
	 */
	function typingGameEasy(){
		$("#hardTypingDiv").hide();
		$("#typing .cellRow").show();
		$("#menu").css("margin-top", "0");
		$("#textbox").focus();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		var prevLetterKey = 0;
		instruction = "Type the letter " + String.fromCharCode(randLetterKey);
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKey, "");
		setTypingInstruction(randLetterKey);
		startTime = instructionStart;
		stopTime = instructionEnd;
		$("#textbox").val(String.fromCharCode(randLetterKey).toLowerCase());
		$("#textbox").focus();
		player.currentTime = startTime;
		player.play();
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#scribble").css("display") == "none") {
				if (e.which == randLetterKey) {
					$("div.infoBar").text("Congratulations, that's right!!!");
					randLetterKey = Math.floor((Math.random()*26) + 65);
					instruction = "Type the letter " + String.fromCharCode(randLetterKey);
					setTypingInstruction(randLetterKey);
					startTime = instructionStart;
					stopTime = instructionEnd;
					player.currentTime = startTime;
					player.play();
					$("#textbox").val("");
					
					$("#textbox").val(String.fromCharCode(randLetterKey).toLowerCase());
					
					$("#textbox").focus();					
					$("div.infoBar").append("<br>" + instruction);
				} else if (e.which >= 65 && e.which <= 90) {
					$("#textbox").clear();
					$("#textbox").val(String.fromCharCode(randLetterKey).toLowerCase());
					$("#textbox").focus();	
					$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
				} else {
					$("#textbox").clear();
					$("#textbox").val(String.fromCharCode(randLetterKey).toLowerCase());
					$("#textbox").focus();
					$("div.infoBar").text("That's not a letter!  Try again!!!").append("<br>" + instruction);
				}
				generateLetter(randLetterKey, "");
			}
		});
			
	};
	
	/**
	 * Description
	 * @method typingGameHard is the variation of the typing game where the braille character is not displayed on the braille display, and the character has to type it from memory after a verbal prompt.
	 * @return 
	 */
	function typingGameHard(){
		$("easyTypingDiv").hide();
		$("#typing .cellRow").show();
		$("#menu").css("margin-top", "0");
		$("#textbox").focus();
		var randLetterKey = Math.floor((Math.random()*26) + 65);
		var prevLetterKey = 0;
		instruction = "Type the letter " + String.fromCharCode(randLetterKey);
		$("div.infoBar").text(instruction);
		generateLetter(randLetterKey, "");
		setTypingInstruction(randLetterKey);
		startTime = instructionStart;
		stopTime = instructionEnd;
		player.currentTime = startTime;
		player.play();
		$("#textbox").val(String.fromCharCode(randLetterKey));
		$(document).keydown(function(e) {
			if ($("#matching").css("display") == "none" && $("#scribble").css("display") == "none") {
				if (e.which == randLetterKey) {
					e.preventdefault();
					$("div.infoBar").text("Congratulations, that's right!!!");
					prevLetterKey = randLetterKey;
					randLetterKey = Math.floor((Math.random()*26) + 65);
					instruction = "Type the letter " + String.fromCharCode(randLetterKey);
					setTypingInstruction(randLetterKey);
					audioOnDeck = true;
					playScribbleAudio(prevLetterKey);
					$("div.infoBar").append("<br>" + instruction);
				} else if (e.which >= 65 && e.which <= 90) {
					e.preventdefault();
					$("div.infoBar").text("Sorry, that's not right.  Try again!").append("<br>" + instruction);
					player.currentTime = 172.368;
					stopTime = 175.738;
					player.play();
				} else {
					e.preventdefault();
					$("div.infoBar").text("That's not a letter!  Try again!!!").append("<br>" + instruction);
					player.currentTime = 1.75;
					stopTime = 5.5;
					player.play();
				}
				generateLetter(randLetterKey, "");
			}
		});
			
	};
	
	/**
	 * Description
	 * @method generateLetter hides and shows the cells needed to portray a braille letter in the ipad display.
	 * @param {} charCode is the code of the character that is meant to be displayed 
	 * @param {} identifier is the name of the control that the character is to be displayed inside. In every game but the matching game, this parameter is an empty string.
	 * @return 
	 */
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
	
	/**
	 * Description
	 * @method getTrainingInstruction changes the global variables instructionStart and instructionEnd so that the sound file we play occurs after the voiceover
	 * @param {} charCode = the numeric code of the character that is being used as instruction
	 * @return fullInstruction returns the text of the instruction to be displayed in the infobar, ex: "Press cells 1 and 2 to make the letter b"
	 */
	function getTrainingInstruction(charCode) {
		var instructionBeginning = "Press cells ";
		var instructionMiddle = " to make the letter ";
		var instructionLetter = "";
		var instructionCells = "";
		switch(charCode) {
			case 65:
				instructionLetter = "a";
				instructionCells = "1"
				instructionStart = 79.69;
				instructionEnd = 81.673;
				break;
			case 66:
				instructionLetter = "b";
				instructionCells = "1 and 2";
				instructionStart = 81.941;
				instructionEnd = 84.234;
				break;
			case 67:
				instructionLetter = "c";
				instructionCells = "1 and 4";
				instructionStart = 84.504;
				instructionEnd = 86.778;
				break;
			case 68:
				instructionLetter = "d";
				instructionCells = "1, 4, and 5";
				instructionStart = 87.047;
				instructionEnd = 90.033;
				break;
			case 69:
				instructionLetter = "e";
				instructionCells = "1 and 5";
				instructionStart = 90.309;
				instructionEnd = 92.756;
				break;
			case 70:
				instructionLetter = "f";
				instructionCells = "1, 2, and 4";
				instructionStart = 93.008;
				instructionEnd = 96.067;
				break;
			case 71:
				instructionLetter = "g";
				instructionCells = "1, 2, 4, and 5";
				instructionStart = 96.424;
				instructionEnd = 100.171;
				break;
			case 72:
				instructionLetter = "h";
				instructionCells = "1, 2, 5";
				instructionStart = 100.443;
				instructionEnd = 103.705;
				break;
			case 73:
				instructionLetter = "i";
				instructionCells = "2 and 4";
				instructionStart = 103.996;
				instructionEnd = 106.831;
				break;
			case 74:
				instructionLetter = "j";
				instructionCells = "2, 4, and 5";
				instructionStart = 107.064;
				instructionEnd = 110.286;
				break;
			case 75:
				instructionLetter = "k";
				instructionCells = "1 and 3";
				instructionStart = 110.578;
				instructionEnd = 113.14;
				break;
			case 76:
				instructionLetter = "l";
				instructionCells = "1, 2, and 3";
				instructionStart = 113.373;
				instructionEnd = 116.316;
				break;
			case 77:
				instructionLetter = "m";
				instructionCells = "1, 3, and 4";
				instructionStart = 116.616;
				instructionEnd = 119.528;
				break;
			case 78:
				instructionLetter = "n";
				instructionCells = "1, 3, 4, and 5";
				instructionStart = 119.702;
				instructionEnd = 123.469;
				break;
			case 79:
				instructionLetter = "o";
				instructionCells = "1, 3, and 5";
				instructionStart = 123.702;
				instructionEnd = 126.808;
				break;
			case 80:
				instructionLetter = "p";
				instructionCells = "1, 2, 3, and 4";
				instructionStart = 127.08;
				instructionEnd = 131.002;
				break;
			case 81:
				instructionLetter = "q";
				instructionCells = "1, 2, 3, 4, and 5";
				instructionStart = 131.293;
				instructionEnd = 135.816;
				break;
			case 82:
				instructionLetter = "r";
				instructionCells = "1, 2, 3, and 5";
				instructionStart = 136.166;
				instructionEnd = 140.088;
				break;
			case 83:
				instructionLetter = "s";
				instructionCells = "2, 3, and 4";
				instructionStart = 140.398;
				instructionEnd = 143.659;
				break;
			case 84:
				instructionLetter = "t";
				instructionCells = "2, 3, 4, and 5";
				instructionStart = 143.893;
				instructionEnd = 147.457;
				break;
			case 85:
				instructionLetter = "u";
				instructionCells = "1, 3, and 6";
				instructionStart = 148.039;
				instructionEnd = 151.359;
				break;
			case 86:
				instructionLetter = "v";
				instructionCells = "1, 2, 3, and 6";
				instructionStart = 152.126;
				instructionEnd = 155.698;
				break;
			case 87:
				instructionLetter = "w";
				instructionCells = "2, 4, 5, and 6";
				instructionStart = 156.434;
				instructionEnd = 159.754;
				break;
			case 88:
				instructionLetter = "x";
				instructionCells = "1, 3, 4, and 6";
				instructionStart = 160.112;
				instructionEnd = 163.54;
				break;
			case 89:
				instructionLetter = "y";
				instructionCells = "1, 3, 4, 5, and 6";
				instructionStart = 163.87;
				instructionEnd = 167.675;
				break;
			case 90:
				instructionLetter = "z";
				instructionCells = "1, 3, 5, and 6";
				instructionStart = 167.908;
				instructionEnd = 171.907;
				break;
			default:
				instructionLetter = "";
				instructionCells =  "";
				instructionStart = 0;
				instructionEnd = 0;
				break;
		}
		var fullInstruction = instructionBeginning + instructionCells + instructionMiddle + instructionLetter;
		return fullInstruction;
		
	};
	
	/**
	 * Description
	 * @method playScribbleAudio plays the correct reward sound for a user's successful entry of the letter into the game.
	 * @param {} charCode is the character code of the letter.
	 * @return 
	 */
	function playScribbleAudio(charCode) {
		switch(charCode) {
			case 65: //a
			case 66: //b
			case 67: //c
			case 68: //d
			case 69: //e
			case 70: //f
			case 71: //g
			case 72: //h
			case 73: //i
			case 74: //j
			case 75: //k
			case 76: //l
			case 77: //m
			case 78: //n
			case 79: //o
			case 80: //p
			case 81: //q
			case 82: //r
			case 83: //s
			case 84: //t
			case 85: //u
			case 86: //v
			case 87: //w
			case 88: //x
			case 89: //y
			case 90: //z
				startTime = 0.25;
				stopTime = 1.5;
				break;
			default:
				startTime = 1.75;
				stopTime = 5.5;
				break;
		}
		player.currentTime = startTime;
		player.play();
	};
	

	/**
	 * Description
	 * @method setTypingInstruction sets the instructions for the typing game, leaving enough time so that the reward sounds and the instruction sounds do not overlap.
	 * @param {} charCode is the character code for the letter that the game wishes to obtain the proper timing
	 * @return 
	 */
	function setTypingInstruction(charCode) {
		switch(charCode) {
			case 65: //a
				instructionStart = 8.0;
				instructionEnd = 9.17;
				break;
			case 66: //b
				instructionStart = 9.35;
				instructionEnd = 10.75;
				break;
			case 67: //c
				instructionStart = 10.8;
				instructionEnd = 12.05;
				break;
			case 68: //d
				instructionStart = 12.22;
				instructionEnd = 13.5;
				break;
			case 69: //e
				instructionStart = 13.67;
				instructionEnd = 14.95;
				break;
			case 70: //f
				instructionStart = 15.12;
				instructionEnd = 16.43;
				break;
			case 71: //g
				instructionStart = 16.56;
				instructionEnd = 17.84;
				break;
			case 72: //h
				instructionStart = 18.0;
				instructionEnd = 19.0;
				break;
			case 73: //i
				instructionStart = 19.6;
				instructionEnd = 20.872;
				break;
			case 74: //j
				instructionStart = 21.071;
				instructionEnd = 22.326;
				break;
			case 75: //k
				instructionStart = 22.507;
				instructionEnd = 23.828;
				break;
			case 76: //l
				instructionStart = 24.01;
				instructionEnd = 25.232;
				break;
			case 77: //m
				instructionStart = 25.446;
				instructionEnd = 26.718;
				break;
			case 78: //n
				instructionStart = 26.993;
				instructionEnd = 28.171;
				break;
			case 79: //o
				instructionStart = 28.403;
				instructionEnd = 29.657;
				break;
			case 80: //p
				instructionStart = 29.872;
				instructionEnd = 31.11;
				break;
			case 81: //q
				instructionStart = 31.309;
				instructionEnd = 32.58;
				break;
			case 82: //r
				instructionStart = 32.762;
				instructionEnd = 34.017;
				break;
			case 83: //s
				instructionStart = 34.215;
				instructionEnd = 35.47;
				break;
			case 84: //t
				instructionStart = 35.76;
				instructionEnd = 36.982;
				break;
			case 85: //u
				instructionStart = 37.228;
				instructionEnd = 38.402;
				break;
			case 86: //v
				instructionStart = 38.604;
				instructionEnd = 39.778;
				break;
			case 87: //w
				instructionStart = 39.994;
				instructionEnd = 31.646;
				break;
			case 88: //x
				instructionStart = 41.976;
				instructionEnd = 43.396;
				break;
			case 89: //y
				instructionStart = 43.628;
				instructionEnd = 44.981;
				break;
			case 90: //z
				instructionStart = 45.18;
				instructionEnd = 46.434;
				break;
			default:
				instructionStart = 0;
				instructionEnd = 0;
				break;
		}
	};
});
