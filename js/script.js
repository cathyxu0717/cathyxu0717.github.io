//All FUNCTIONS are HERE....
//Popup Hire me Function Start
function hire_me_popup() {
	var modal = document.getElementById('modal-hire-me');
	var span = document.getElementsByClassName("close-1")[0];
	
	modal.style.display = "block";

	span.onclick = function() {
    	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
}
//Popup Hire me  Function End

//Popup Resume Function Start
function resume_popup(){
	var modal = document.getElementById('modal-resume');
	var span = document.getElementsByClassName("close-2")[0];
	
	modal.style.display = "block";

	span.onclick = function() {
    	modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
    	}
	}
}
//Popup Resume Function End

//Popup Project View Function Start
function project_popup(overlay,picturediv,contentdiv){
	var modal = document.getElementById(overlay);
	var picture = document.getElementById(picturediv);
	var content = document.getElementById(contentdiv);
	var span = document.getElementsByClassName("close-3")[0];
	
	modal.style.display = "block";
	picture.style.display= "block";
	content.style.display= "block";
	
	span.onclick = function() {
    	modal.style.display = "none";
	    picture.style.display= "none";
		content.style.display= "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
    	if (event.target == modal) {
        	modal.style.display = "none";
			picture.style.display= "none";
			content.style.display= "none";
    	}
	}
}
//Popup Project View Function End

//Print Function Start
function print_resume(elem) {
    var mywindow = window.open('', 'PRINT', 'height=600,width=800');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
	mywindow.document.write( "<meta name='viewport' content='width=device-width, initial-scale=1.0'>" );
	mywindow.document.write( "<link rel='stylesheet' href='css/style.css' media='all'>" );
	mywindow.document.write( "<link rel='stylesheet' href='css/bootstrap.css'>");
    mywindow.document.write("</head><body>");
    mywindow.document.write(document.getElementById(elem).innerHTML);
    mywindow.document.write('</body></html>');

    mywindow.document.close();
    mywindow.onload=function(){
		mywindow.focus();
		mywindow.print();
    	mywindow.close();
	}
    return true;
}
//Print Function End
