/**
 * 
 */ 
	function init() {
		for(var i=1; i<10; i++){
			$("#numtable").append("<tr id=" + i + ">");
			for(var j=1; j<10; j++){
				$("#" + i).append("<td id=" + i + "_" + j + ">");
			}
		}
		for(var i=1; i<10; i++){
			$(".SelNum").append("<span>" + i);
		}
	}