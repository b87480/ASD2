$('#view').on('pageinit', function(){



});
$('#new').on('pageinit', function(){

	$('#button').on('click', function(){
		var form = $('#myform').serializeArray();

		storeData(form);
		//console.log(form);

	});
});

function storeData(form, keyNum){
	var keyNum = Math.floor(Math.random()*1000001);
    localStorage.setItem(keyNum, JSON.stringify(form));
    alert("Zombie Saved!");
    return form;
    return keyNum;
    //showData(keyNum, data);
    getData();
};

function getData(form){
	console.log(form);
};

$('#loc').on('pageinit', function(form){
	
	var user = localStorage.getItem(localStorage.key(''));
	
	
	//var use  = user.value;
	var x = localStorage.length;
	for(i=0; i<x; i++){
		var users = localStorage.key(i);
		var z 	  = localStorage.getItem(users);
		console.log(users);
	}
	//console.log(user);
	
	
});

$("#json").on('pageinit', function(){

		$.ajax({
			url: "xhr/zombie.json",
			type: "GET",
			dataType: "json",
			success: function(data){
				for(var i=0, x=data.Zombies.length; i<x; i++){
					var zom = data.Zombies[i];
					$(''+
						'<div class="zcontent">'+
							'<h2>'+ zom.Name +'</h2>'+
							'<p>'+ "Type: "+ zom.Type +'</p>'+
							'<p>'+ "Favorite Food: " + zom.Food +'</p>'+
							'<p>'+ "Mainly Found in: "+ zom.Location +'</p>'+
							'</div>'
					).appendTo('#jcontent');

			};
			$('.zcontent h2').css("color","red");
			$('.zcontent').css("text-align","center");
			var hom = $('<a href="#home" data-role="button">HOME</a>');
			$(hom).css({"text-decoration":"none",
						"color":"black",
						"display":"block",
						"border":"solid 1px black",
						"padding":"10px",
						"text-align":"center",
						"text-shadow":"none",
						"background-color":"red",
						"border-radius":"10px"});
			$(hom).appendTo('#jcontent');
		}
	});
});