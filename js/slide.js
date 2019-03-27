	var slideimages = new Array() // create new array to preload images
	slideimages[0] = new Image() // create new instance of image object
	slideimages[0].src = "https://pbs.twimg.com/profile_images/1069332555843932160/BFZiEaxp_400x400.jpg" // set image object src property to an image's src, preloading that image in the process
	slideimages[1] = new Image()
	slideimages[1].src = "https://i.ytimg.com/vi/nOoQNPem9hM/hqdefault.jpg"
	slideimages[2] = new Image()
	slideimages[2].src = "https://cdn.drawception.com/drawings/wV9YTGM0vV.png"
	slideimages[3] = new Image()
	slideimages[3].src = "https://i.ytimg.com/vi/6LVfMkb5B4U/maxresdefault.jpg"
	slideimages[4] = new Image()
	slideimages[4].src = "https://i.ytimg.com/vi/UDzf4GdzlhQ/maxresdefault.jpg"

	var i = 0;
	var whichimage = 0;

	function slideit(){
	//ako browsera ne poddurja - exit
	if (!document.images)
	return
	document.getElementById('slide').src = slideimages[i].src;
	whichimage = i;
	if (i<5) {i++;};
	if (i>=5) {i=0;};
	//vikam slideit() na vseki 3.5 sekundi
	setTimeout("slideit()",1000);
	}
	
	//linkove za kartinkite - wont do 4 now unless required
	function slidelink(){
		if (whichimage == 0) window.location = "#";
		else if (whichimage == 1) window.location = "#";
		else if (whichimage == 2) window.location = "#";
		else if (whichimage == 3) window.location = "#";
		else if (whichimage == 4) window.location = "#";
	}
