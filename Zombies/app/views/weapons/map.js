function(doc) {
  if(doc._id.substr(0, 6) === "weapon"){
	  emit(doc._id, {
		  "Baseball Bat": doc.baseball_bat,
		  "Golf Club": doc.golf_club,
		  "Grenade": doc.grenade,
		  "Knife": doc.knife,
		  "Machine Gun": doc.machine_gun,
		  "Shotgun": doc.shotgun,
		  "Silenced Pistol": doc.silenced_pistol
	
		  });
  }
};