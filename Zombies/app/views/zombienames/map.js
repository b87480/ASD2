function(doc) {
  if(doc._id.substr(0, 6) === "zombie"){
	  emit(doc._id, {
		  "Name": doc.Name,
		  "Type": doc.Type,
		  "Location": doc.Location,
		  "Food": doc.Eats
	
		  });
  }
};