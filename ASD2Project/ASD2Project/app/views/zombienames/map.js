function(doc) {
  if(doc._id.substr(0, 7) === "zombies:"){
  	emit(doc.id);
  	}
};