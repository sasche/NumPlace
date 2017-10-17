/**
 *
 */
	var xAddress = null;
	var yAddress = null;
	var targetNum;
	var successFlg = true;

	function init() {
		for(var i=1; i<10; i++){
			$("#numtable").append("<tr id=" + i + ">");
			for(var j=1; j<10; j++){
				$("#" + i).append("<td class=" + j + ">");
			}
		}

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
					};
				}
		);
		$("#del").click(function(){
			$("#" + yAddress).find("." + xAddress).text("");
		});
		
		$("#clear").click(clear);
		$("#check").click(check);
	}
	
	
	function clear(){
		if(window.confirm("すべて削除します。よろしいですか？")){
			$("table td:not(.defnum)").text("");
		}else{
			// do nothing
		}
	}

	function check(){
		//var $inputNunbers = $("table td:not(.defnum)");
		var rows = [9];
		var columns = [9];
		var squares = [9];
		
		//判定用の二次元配列を生成しておく
		for(var idx=0; idx<9; idx++){
			rows[idx] = (new Array()).fill(0);
			columns[idx] = (new Array()).fill(0);
			squares[idx] = (new Array()).fill(0);
		}
		
		$("table tr").each(function(i,tr){
			$(tr).find("td").each(function(j,cell){
				var rowIdx = i+1;
				var columnIdx = j+1
				var cellValue = parseInt($(cell).text());
				//行
				rows[i][cellValue-1] = 1;
				//列
				columns[j][cellValue-1] = 1;
				//3*3の四角
				if(1<=rowIdx<=3 && 1<=columnIdx<=3){
					squares[0][cellValue] = 1;
				}
				if(1<=rowIdx<=3 && 4<=columnIdx<=6){
					squares[1][cellValue] = 1;
				}
				if(1<=rowIdx<=3 && 7<=columnIdx<=9){
					squares[2][cellValue] = 1;
				}
				if(4<=rowIdx<=6 && 1<=columnIdx<=3){
					squares[3][cellValue] = 1;
				}
				if(4<=rowIdx<=6 && 4<=columnIdx<=6){
					squares[4][cellValue] = 1;
				}
				if(4<=rowIdx<=6 && 7<=columnIdx<=9){
					squares[5][cellValue] = 1;
				}
				if(7<=rowIdx<=9 && 1<=columnIdx<=3){
					squares[6][cellValue] = 1;
				}
				if(7<=rowIdx<=9 && 4<=columnIdx<=6){
					squares[7][cellValue] = 1;
				}
				if(7<=rowIdx<=9 && 7<=columnIdx<=9){
					squares[8][cellValue] = 1;
				}
			})
			
		});
		for(var idx2=1; idx2<10; idx2++){
			if($.inArray(0,rows[idx2]) != -1 && $.inArray(0,columns[idx2]) != -1 && $.inArray(0,squares[idx2]) != -1){
				successFlg = false;
			}

		}
		if(successFlg){
			alert("クリア！");
		}else{
			alert("違います");
		}
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
		
		$("#1").find(".3").text("4").addClass("defnum");
		$("#1").find(".3").text("4").addClass("defnum");
		$("#1").find(".4").text("6").addClass("defnum");
		$("#1").find(".6").text("8").addClass("defnum");
		$("#1").find(".7").text("9").addClass("defnum");
		$("#1").find(".8").text("1").addClass("defnum");
		$("#1").find(".9").text("2").addClass("defnum");
		$("#2").find(".2").text("7").addClass("defnum");
		$("#2").find(".3").text("2").addClass("defnum");
		$("#2").find(".7").text("3").addClass("defnum");
		$("#2").find(".8").text("4").addClass("defnum");
		$("#2").find(".9").text("8").addClass("defnum");
		$("#3").find(".1").text("1").addClass("defnum");
		$("#3").find(".4").text("3").addClass("defnum");
		$("#3").find(".5").text("4").addClass("defnum");
		$("#3").find(".6").text("2").addClass("defnum");
		$("#3").find(".7").text("2").addClass("defnum");
		$("#3").find(".9").text("7").addClass("defnum");
		$("#4").find(".2").text("5").addClass("defnum");
		$("#4").find(".3").text("9").addClass("defnum");
		$("#4").find(".4").text("7").addClass("defnum");
		$("#4").find(".6").text("1").addClass("defnum");
		$("#4").find(".7").text("4").addClass("defnum");
		$("#4").find(".8").text("2").addClass("defnum");
		$("#5").find(".2").text("2").addClass("defnum");
		$("#5").find(".3").text("6").addClass("defnum");
		$("#5").find(".5").text("5").addClass("defnum");
		$("#5").find(".7").text("7").addClass("defnum");
		$("#5").find(".8").text("9").addClass("defnum");
		$("#6").find(".2").text("1").addClass("defnum");
		$("#6").find(".3").text("3").addClass("defnum");
		$("#6").find(".4").text("9").addClass("defnum");
		$("#6").find(".6").text("4").addClass("defnum");
		$("#6").find(".7").text("8").addClass("defnum");
		$("#6").find(".8").text("5").addClass("defnum");
		$("#7").find(".1").text("9").addClass("defnum");
		$("#7").find(".3").text("6").addClass("defnum");
		$("#7").find(".4").text("1").addClass("defnum");
		$("#7").find(".5").text("5").addClass("defnum");
		$("#7").find(".6").text("3").addClass("defnum");
		$("#7").find(".9").text("7").addClass("defnum");
		$("#8").find(".1").text("2").addClass("defnum");
		$("#8").find(".2").text("8").addClass("defnum");
		$("#8").find(".3").text("7").addClass("defnum");
		$("#8").find(".7").text("6").addClass("defnum");
		$("#8").find(".8").text("3").addClass("defnum");
		$("#9").find(".1").text("3").addClass("defnum");
		$("#9").find(".2").text("4").addClass("defnum");
		$("#9").find(".3").text("5").addClass("defnum");
		$("#9").find(".4").text("2").addClass("defnum");
		$("#9").find(".6").text("6").addClass("defnum");
		$("#9").find(".7").text("1").addClass("defnum");
		$("#9").find(".9").text("1").addClass("defnum");
	}