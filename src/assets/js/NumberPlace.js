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
		$("#numtable").css("background-color","#ffffff");

		for(var i=1; i<10; i++){
			$(".SelNum").append("<input type = button value=" + i + " id=" + i + " class=numbutton>");
		}
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
						xAddress = null;
						yAddress = null;
					};
				}
		);
	}