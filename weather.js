$(document).ready(function(){
	

	$("#find").click(function(){

		




		var city=$("#loc").val();
		if(city !=''){
				function setPositionForWeatherInfo(){
        document.getElementById("weatherContainer").style.visibility = 'visible';
        }


			$.ajax({
				url :'http://api.openweathermap.org/data/2.5/weather?q='+city+'&units=metric'+'&APPID=874f47a9ffe5635ee597c21bfad2e0e4',
				type : 'GET',
				dataType : 'jsonp',
				success : function(data){
					console.log(data);
					result=data;
					document.getElementById("cityHeader").innerHTML= data.name;
					document.getElementById("temperature").innerHTML=data.main.temp+" C";
					document.getElementById("weatherDescriptionHeader").innerHTML=data.weather[0].description;
					var icon="https://api.openweathermap.org/img/w/"+data.weather[0].icon+".png"; 
                    document.getElementById("documentIconImg").src=icon;
                    document.getElementById("map1").data-longitude=result.coord.lon;
                    document.getElementById("map1").data-latitude=result.coord.lat;
                    document.getElementById("space").innerHTML="<br>";
                    document.getElementById("space1").innerHTML="<br>";
                    document.getElementById("space2").innerHTML="<br>";
                    setPositionForWeatherInfo();

				}
			})

		}
		else{
			alert('Please enter location');
		}
	})
})