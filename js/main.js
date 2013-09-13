//Joshua Whitney
//1309
//ASD Project
//week 2

$('#view').on('pageinit', function(){



});
$('#new').on('pageinit', function(){

	$('#button').on('click', function(){
		var form = $('#myform').serializeArray();
		var key = Math.floor(Math.random()*1000001);
		localStorage.setItem(key, JSON.stringify(form));


		return form;
		return key;
		

	});
});
$('#loc').on('pageinit', function(){


		for(var i=0, x = localStorage.length; i<x; i++){
			var newDiv  = $('<div class="newDiv">'+'</div>'+'</br>').appendTo('#lcontent');
			var navLi	= $('<ul class="nav"></ul>').appendTo(newDiv);
			var key 	= localStorage.key(i);
			var value   = localStorage.getItem(key);
			var json 	= JSON.parse(value);
			
			//edit button
			var newLink = $('<a href="#" class="edit">EDIT</a>');
			newLink.key = key;
			newLink.css("padding", "5px");
			newLink.css("text-decoration", "none");
			newLink.appendTo(navLi);

			//delete button
			var del = $('<a href="#" class="destroy">DELETE</a>');
			del.css("text-decoration","none");
			del.key = key;
			var userDel = $('.destroy');
		//	userDel.on("click", delItem(key));
			del.appendTo(navLi);


			for(var n in json){
				
				var display = json[n].name+": "+json[n].value;
				$('<p>'+ display + '</p>').appendTo('#lcontent');
			}
		//editButtons(localStorage.key(i), navLi);
		
		}

$('#clear').on('click', function(){
	localStorage.clear();
	window.Location.reload;
	});

$('.edit').on('click', function(key){
	
	//var key = $(this).data(key);


	console.log($(this).data(key));
});

$('.destroy').on('click', function(){

	var key = $(this).data(key);
	var val = localStorage.getItem(key);
	console.log(val.name);
});


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
$('#xml').on('pageinit', function(){


		$.ajax({
            type: "GET",
            url: "xhr/zombie.xml",
            dataType: "xml",
            success: function(xml) {


            	for(var i=0, x=$(xml).find('items').length; i<x; i++){
					var zom = $(xml).find('items')[i];
					console.log(zom[i]);
            /*	$(xml).find('items').each(function(){
                    var type = $(this).find("type").text()
                    var name = $(this).find("name").text()
                    var food = $(this).find("food").text()
                    var loca = $(this).find("location").text()
                    console.log(name);*/

                    $(''+
						'<div class="nzcontent">'+
							'<h2>'+ zom +'</h2>'+
							'<p>'+ "Type: "+ zom +'</p>'+
							'<p>'+ "Favorite Food: " + zom +'</p>'+
							'<p>'+ "Mainly Found in: "+ zom +'</p>'+
							'</div>'
					).appendTo('#xcontent');

			
			$('.nzcontent h2').css("color","red");
			$('.nzcontent').css("text-align","center");
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
			$(hom).appendTo('#xcontent');
                };

            }
      	});
});