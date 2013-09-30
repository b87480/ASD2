//Joshua Whitney
//1309
//ASD Project
//week 2


//$('#view').on('pageinit', function(){



//});
//$('#new').on('pageinit', function(){

			
		
//});

$('#loc').on('pageinit', function(){

		for(var i=0, x = localStorage.length; i<x; i++){
			var newDiv  = $('<div class="newDiv">'+'</div>'+'</br>').appendTo('#lcontent');
			var navLi	= $('<ul class="nav"></ul>').appendTo(newDiv);
			var key 	= localStorage.key(i);
			var value   = localStorage.getItem(key);
			var json 	= JSON.parse(value);
			var del 	= $('<a href="#" data-key="' + key + '">DELETE</a>').appendTo(navLi);
			for(var n in json){
				
				var display = json[n].name+": "+json[n].value;
				$('<p>'+ display + '</p>').appendTo('#lcontent');
			}
		//editButtons(localStorage.key(i), navLi);
	//	newButtons(localStorage.key(i), navLi);
		$(del).on('click', function(){
			//var first = $(this).data(key);
			var first = $(key).val();
			//console.log(del);
			console.log(first);
			});
		};
});

$("#json").on('pageinit', function(){

		$.ajax({
			url: "_view/zombienames",
			dataType: "json",
			success: function(data){
			//	console.log(data);
				$.each(data.rows, function(index, zombies){
					var name = zombies.value.Name;
					var loc	 = zombies.value.Location;
					var type = zombies.value.Type;
					var food = zombies.value.Food;
					$('<h2>'+'Name: '+ name + '</h2>'+
						'<h3>'+'Type: '+ type + '</h3>'+
						'<h3>'+'Location: '+ loc + '</h3>'+
						'<h3>'+'Favorite Food: '+ food + '</h3>')
						.appendTo('#zombie');
				});	
		
		}
	});
});
$('#xml').on('pageinit', function(){


		$.ajax({
            url: "_view/weapons",
            dataType: "json",
            success: function(data) {
         //   console.log(data);
			$.each(data.rows, function(index, weapons){

				var base = weapons.value.baseball_bat;
				var golf = weapons.value.golf_club;
				var gren = weapons.value.grenade;
				var knif = weapons.value.knife;
				var mach = weapons.value.machine_gun;
				var shot = weapons.value.shotgun;
				var sile = weapons.value.silenced_pistol;
			
				
				$('<h1>'+"ZOMBIE WEAPONS"+ '</h1>'+
					'<h2>'+ 'Baseball Bat: ' + base + '</h2>'+
					'<h2>'+ 'Golf Club: ' + golf + '</h2>'+
					'<h2>'+ 'Grenade: ' + gren + '</h2>'+
					'<h2>'+ 'Knifet: ' + knif + '</h2>'+
					'<h2>'+ 'Machine Gun: ' + mach + '</h2>'+
					'<h2>'+ 'Shotgun: ' + shot + '</h2>'+
					'<h2>'+ 'Silenced Pistol: ' + sile + '</h2>')
					.appendTo("#xcontent");
				
				});
			}
		});
});