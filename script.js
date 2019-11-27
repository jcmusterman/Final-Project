

$(document).ready(function(){
	//Rhythm
	alert("!")
	$("#rhythm_form").submit(
		function(event){
			$("span").text("*");
			var isValid = true;
			var q1 = $("#Q1").val();
			var q2 = $("#Q2").val();
			var q3 = $("#Q3").val();
			if (q1 == ""){
				$("#Q1").next().text("This field is required")
				isValid = false;
			}else if (q1 != 3){
				$("#Q1").next().text("Incorrect answer")
				isValid = false;
			}
			if (q2 == ""){
				$("#Q2").next().text("This field is required")
				isValid = false;
			}else if (q2 != 3){
				$("#Q2").next().text("Incorrect answer")
				isValid = false;
			}
			if (q3 == ""){
				$("#Q3").next().text("This field is required")
				isValid = false;
			}else if (q3 != 3){
				$("#Q3").next().text("Incorrect answer")
				isValid = false;
			}
			if (isValid == false) {event.preventDefault();}
		}
	)

//Note Names
	var counter = 0;
	var treble_img = ["img/pha.png", "img/phb.png", "img/phc.png"]
	var treble_alt = ["pha", "phb", "phc"]
	//	$("#show_answer").button();
	$("#note_new").click(function(){
		if (counter < 2){
		document.getElementById("treble_note").src = treble_img[++counter];
		document.getElementById("treble_note").alt = treble_alt[counter];
		var x = document.getElementById("treble_note").alt;
		alert(x);
	} else{
		counter = -1;
		document.getElementById("treble_note").src = treble_img[++counter];
		document.getElementById("treble_note").alt = treble_alt[counter];
		var x = document.getElementById("treble_note").alt;
		alert(x);
	}
	})
//var x = document.getElementById("treble_note").alt;
//	alert(x);

$("#note_a").click(function(){
if (x == "phb"){
 alert("yes");
} else{
	alert("no");
}
//alert(text)
});



//Dynamics
//https://www.tutorialspoint.com/jqueryui/jqueryui_droppable.htm
	$("#show_answer").click(function(){ //Task 4, click event for all <a> elements
		document.getElementById("draggable_p").style.visibility = "hidden";
})
});
 $( function(){
	 $("#drag_pp").draggable();
	 $("#drag_p").draggable();
	 $("#drag_mp").draggable();
	 $("#drag_mf").draggable();
	 $("#drag_f").draggable();
	 $("#drag_ff").draggable();

	 $("#drop_pp").droppable({
		 accept: "#drag_pp",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Pianissimo");
			 $("#drag_pp").fadeOut();
		 }
	 })
	 $("#drop_p").droppable({
		 accept: "#drag_p",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Piano");
			 $("#drag_p").fadeOut();
		 }
	 })
	 $("#drop_mp").droppable({
		 accept: "#drag_mp",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Mezzopiano");
			 $("#drag_mp").fadeOut();
		 }
	 })
	 $("#drop_mf").droppable({
		 accept: "#drag_mf",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Mezzoforte");
			 $("#drag_mf").fadeOut();
		 }
	 })
	 $("#drop_f").droppable({
		 accept: "#drag_f",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Forte");
			 $("#drag_f").fadeOut();
		 }
	 })
	 $("#drop_ff").droppable({
		 accept: "#drag_ff",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Fortissimo");
			 $("#drag_ff").fadeOut();
		 }
	 })
 });
