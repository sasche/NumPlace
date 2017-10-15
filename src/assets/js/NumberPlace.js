/**
 *
 */
	var xAddress = null;
	var yAddress = null;
	var targetNum;

	function init() {
		for(var i=1; i<10; i++){
			$("#numtable").append("<tr id=" + i + ">");
			for(var j=1; j<10; j++){
				$("#" + i).append("<td class=" + j + ">");
			}
		}
		//$("#numtable").css("background-color","#ffffff");
		//$("#1").find(".1").addClass("testing");

		for(var i=1; i<10; i++){
			$(".SelNum").append("<input type = button value=" + i + " class=numbutton>");
		}
		putDefaultNumber();
		setEvent();
	}

	function setEvent(){
		$("#numtable").hover(
			function(){
				$(this).css("cursor","pointer");
			}
		);
		$(".numbutton").hover(
				function(){
					$(this).css("cursor","pointer");
				}
		);

		$('body').on('click','td', function(){
					xAddress = $(this).attr("class");
					yAddress = $(this).parent().attr("id");
					//console.log(xAddress + " " + yAddress);
					$('td').css('background-color', 'transparent');
					$(this).css("background-color","#7fffd4");
				}
		);

		$(".SelNum").on('click', '.numbutton', function(){
					targetNum = this.value;
					console.log(targetNum);

					if( xAddress != null && yAddress != null ){
						$("#" + yAddress).find("." + xAddress).text(targetNum);
						//xAddress = null;
						//yAddress = null;
					};
				}
		);
	}

	//初期配置関数 一時的に固定配置にしてあります
	function putDefaultNumber(){
		$("#1").find(".1").text("5").addClass("defnum");
		$("#1").find(".2").text("3").addClass("defnum");
		$("#1").find(".5").text("7").addClass("defnum");
		$("#2").find(".1").text("6").addClass("defnum");
		$("#2").find(".4").text("1").addClass("defnum");
		$("#2").find(".5").text("9").addClass("defnum");
		$("#2").find(".6").text("5").addClass("defnum");
		$("#3").find(".2").text("9").addClass("defnum");
		$("#3").find(".3").text("8").addClass("defnum");
		$("#3").find(".8").text("6").addClass("defnum");
		$("#4").find(".1").text("8").addClass("defnum");
		$("#4").find(".5").text("6").addClass("defnum");
		$("#4").find(".9").text("3").addClass("defnum");
		$("#5").find(".1").text("4").addClass("defnum");
		$("#5").find(".4").text("8").addClass("defnum");
		$("#5").find(".6").text("3").addClass("defnum");
		$("#5").find(".9").text("1").addClass("defnum");
		$("#6").find(".1").text("7").addClass("defnum");
		$("#6").find(".5").text("2").addClass("defnum");
		$("#6").find(".9").text("6").addClass("defnum");
		$("#7").find(".2").text("6").addClass("defnum");
		$("#7").find(".7").text("2").addClass("defnum");
		$("#7").find(".8").text("8").addClass("defnum");
		$("#8").find(".4").text("4").addClass("defnum");
		$("#8").find(".5").text("1").addClass("defnum");
		$("#8").find(".6").text("9").addClass("defnum");
		$("#8").find(".9").text("5").addClass("defnum");
		$("#9").find(".5").text("8").addClass("defnum");
		$("#9").find(".8").text("7").addClass("defnum");
		$("#9").find(".9").text("9").addClass("defnum");
	}