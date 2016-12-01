$(document).ready(function () {
   var city = "";

	$.getJSON("http://ip-api.com/json", function(json) {
		 city = json.regionName ;


	var api ="http://api.apixu.com/v1/current.json?key=02cd4548dd6744d4b03141139163011&q=";
	api+=city;

	$.getJSON(api, function (a) {

		         $(".t").html(a['current']['temp_c']+"°C");
		var j ="";
		if(a['current']['is_day']==0){
			j=" Night";
			$("body").css("background-image","url(http://img1.mxstatic.com/wallpapers/27555fdf69f74e30d639dffb43fbd06d_large.jpeg)");
		}else{
			j=" Day";
			$("body").css("background-image","url(http://antoine.vernois.net/blog/public/2011.06_-_canada/2011.06.16/2011.06.16-0032-jour10.jpg)");
		}
				 $("#day").html(a['current']['condition']['text']+" "+j);
				 $("#loc").html(a['location']['name']+" , "+a['location']['country']);
				 $("img").attr("src",a['current']['condition']['icon']);

		$(".t").on('mouseover',function () {
			$(this).html(a['current']['temp_f']+"F")
		});
		$(".t").on('mouseout',function () {
			$(this).html(a['current']['temp_c']+"°C")
		});
			});

	 });


});
