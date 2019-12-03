 $(document).ready(function(){
 	$.ajax({
 	url:'https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a8df7a9c70154c58bb2db4e0c44d7be4',
 	type:'GET',
 	success:function(data){
 		  var m="<p><h2>"+data.articles[0].description+"</h1>"+data.articles[0].content +"</p><br>"
             var m1="<p><h2>"+data.articles[5].description+"</h1>"+data.articles[5].content +"</p><br>"
             var m2="<p><h2>"+data.articles[2].description+"</h1>"+data.articles[2].content +"</p><br>"
             var m3="<p><h2>"+data.articles[3].description+"</h1>"+data.articles[3].content +"</p><br>"
             var m4="<p><h2>"+data.articles[4].description+"</h1>"+data.articles[4].content +"</p><br>"
             
           document.getElementById("y").innerHTML=m + m1 + m2 + m3 + m4;
 	}
 	})
 })


