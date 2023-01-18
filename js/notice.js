function openGrade(evt,gradeLevel){
	//Declre all variables
	var i, tabcontent, tablinks;

	//Get all elements with class= tabcontent and hide them
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0: i < tabcontent.length; i++){
		tabcontent[i].style.display = "none";
	} 

	//Get all elements with class = tablinks and remove the class = active
	tablinks = deocument.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++){
		tablinks[i].className = tablinks[i].className.replace("active", "");
	}

	//Show the current tab, and add an acive class to the button that opened the tab.
	document.getElementsById(gradeLevel).style.display = "block";
	evt.currentTarget.className += "active";  
}