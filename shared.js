function BEvents(elem,eventType,handler,add){
	if(add){
		if(elem.addEventListener) elem.addEventListener (eventType,handler,false);
		 else if(elem.attachEvent) elem.attachEvent ('on'+eventType,handler);
	}
 	else{
		if(elem.removeEventListener) elem.removeEventListener (eventType,handler,false);
		 else if(elem.detachEvent) elem.detachEvent ('on'+eventType,handler);
	}
}