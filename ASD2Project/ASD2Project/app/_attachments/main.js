//Joshua Whitney
//1309
//ASD Project
//week 2


$('#view').on('pageinit', function(){



});
$('#new').on('pageinit', function(){

	$('#myform').trigger("reset");

	$('#button').on('click', function(){
		var form = $('#myform').serializeArray();
		var key = Math.floor(Math.random()*1000001);
		localStorage.setItem(key, JSON.stringify(form));

		location.reload();

		return form;
		return key;
		

	});
});

$('#loc').on('pageinit', function(){

	/*$(localStorage).find('items').each(function(){
            		$(this).find('key').each(function(){
            			var item 		= $(this).text();
            			var name 		= $(this).find('name').text();
            			var type 		= $(this).find('type').text();
             			var location  	= $(this).find('location').text();
            			var	food 		= $(this).find('food').text();

          
            			console.log(localStorage.key);
            		});

            });*/
//var obj = $.parseJSON(localStorage);
//var val = JSON.parse(fname);




//console.log($(localStorage).find(key));
	//console.log(form);
		for(var i=0, x = localStorage.length; i<x; i++){
			var newDiv  = $('<div class="newDiv">'+'</div>'+'</br>').appendTo('#lcontent');
			var navLi	= $('<ul class="nav"></ul>').appendTo(newDiv);
			var key 	= localStorage.key(i);
			var value   = localStorage.getItem(key);
			var json 	= JSON.parse(value);
			for(var n in json){
				
				var display = json[n].name+": "+json[n].value;
				$('<p>'+ display + '</p>').appendTo('#lcontent');
			}
		//editButtons(localStorage.key(i), navLi);
		newButtons(localStorage.key(i), navLi);
		}

function newButtons(key, navLi){

	//Edit Button
	var newLink = $('<a href="#" class="edit">EDIT</a>');
			newLink.key = key;
			newLink.css("padding", "5px");
			newLink.css("text-decoration", "none");
			newLink.appendTo(navLi);

	//Delete Button
	var del = $('<a href="#" class="destroy">DELETE</a>');
			del.css("text-decoration","none");
			del.key = key;
			var userDel = $('.destroy');
			$(userDel).on("click", deleteKey);
			del.appendTo(navLi);
			console.log(del.key);

};

function deleteKey(){
	
	console.log($(this).key);
	//localStorage.removeItem(this.key);
	//location.reload();
};

$('#clear').on('click', function(){
	localStorage.clear();
	location.reload();
	});

$('.edit').on('click', function(key){
	
	//var key = $(this).data(key);


	console.log($(this).data(key));
});




});



$("#json").on('pageinit', function(){

		$.ajax({
			url: "zombie.json",
			type: "GET",
			dataType: "json",
			success: function(data){
				console.log(data);
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
            url: "zombie.xml",
            dataType: "xml",
            success: function(xml) {

            	console.log($(xml));//console.log($(xml).find('item').text());
            $(xml).find('items').each(function(){
            		$(this).find('item').each(function(){
            			var item 		= $(this).text();
            			var name 		= $(this).find('name').text();
            			var type 		= $(this).find('type').text();
             			var location  	= $(this).find('location').text();
            			var	food 		= $(this).find('food').text();

            			$(''+
						'<div class="xmlcontent">'+
							'<h2>'+"Name: "+ name +'</h2>'+
							'<p>'+ "Type: "+ type +'</p>'+
							'<p>'+ "Favorite Food: " + food +'</p>'+
							'<p>'+ "Mainly Found in: "+ location +'</p>'+
							'</div>'
					).appendTo('#xcontent');
            			//console.log(location);
            		});

            });
  			$('.xmlcontent h2').css("color", "red");
  			$('.xmlcontent').css("text-align", "center");
            	

            }
      	});
});