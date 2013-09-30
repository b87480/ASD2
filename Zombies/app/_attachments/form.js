$(document).on('pageinit', '#newForm', function(){
	
	
	$('#button').on('click', function(){
		var doc = $('#myForm').serializeArray();
		$.couch.db("zombies").saveDoc(doc, {
    	success: function(data) {
       	 console.log(data);
    	},
    	error: function(status) {
        console.log(status);
    }
});
	/*		var form = $('#myform').serializeArray();
			var db = $.couch.db(zombies_db);
			db.saveDoc(form, function(){
				console.log(form);
				});
			//console.log(db);*/
			
	});


});