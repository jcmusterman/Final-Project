

$(document).ready(function(){
	//Rhythm
//alert("!")
	//Rhythm Notes Math
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
			}else if (q1 != 2){
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
			}else if (q3 != 6){
				$("#Q3").next().text("Incorrect answer")
				isValid = false;
			}
			if (isValid == false) {
				event.preventDefault();
			} else{
				alert("Good job! You got them all right.");
			}
		}
	)
	//Rhythm Rests Math
	$("#rhythm_rests_form").submit(
		function(event){
			$("span").text("*");
			var isValid = true;
			var rq1 = $("#rQ1").val();
			var rq2 = $("#rQ2").val();
			var rq3 = $("#rQ3").val();
			if (rq1 == ""){
				$("#rQ1").next().text("This field is required")
				isValid = false;
			}else if (rq1 != 3){
				$("#rQ1").next().text("Incorrect answer")
				isValid = false;
			}
			if (rq2 == ""){
				$("#rQ2").next().text("This field is required")
				isValid = false;
			}else if (rq2 != 5){
				$("#rQ2").next().text("Incorrect answer")
				isValid = false;
			}
			if (rq3 == ""){
				$("#rQ3").next().text("This field is required")
				isValid = false;
			}else if (rq3 != 8){
				$("#rQ3").next().text("Incorrect answer")
				isValid = false;
			}
			if (isValid == false) {
				event.preventDefault();
			} else{
				alert("Good job! You got them all right.");
			}
		}
	)
//Note Names Treble
	var counter = 0;
	var treble_img = [
		"img/note_names/E4.png",
		"img/note_names/F4.png",
		"img/note_names/G4.png",
		"img/note_names/A4.png",
		"img/note_names/B4.png",
		"img/note_names/C5.png",
		"img/note_names/D5.png",
		"img/note_names/E5.png",
		"img/note_names/F5.png"
	]
	var treble_alt = [
		"e",
		"f",
		"g",
		"a",
		"b",
		"c",
		"d",
		"e",
		"f",
	]
	//	$("#show_answer").button();
	var next_note = Math.floor(Math.random() * treble_img.length)
	document.getElementById("treble_note").src = treble_img[next_note];
	document.getElementById("treble_note").alt = treble_alt[next_note];
	var x = document.getElementById("treble_note").alt;
	$("#note_new").click(function(){
		var next_note = Math.floor(Math.random() * treble_img.length)
		document.getElementById("treble_note").src = treble_img[next_note];
		document.getElementById("treble_note").alt = treble_alt[next_note];
		var x = document.getElementById("treble_note").alt;
		//I tried getElementsByClassName here to eliminate some lines but it wouldn't work
		//document.getElementsByClassName("note_button").style.backgroundColor = "#b7bec9"
		document.getElementById("note_a").style.backgroundColor = "#b7bec9";
		document.getElementById("note_b").style.backgroundColor = "#b7bec9";
		document.getElementById("note_c").style.backgroundColor = "#b7bec9";
		document.getElementById("note_d").style.backgroundColor = "#b7bec9";
		document.getElementById("note_e").style.backgroundColor = "#b7bec9";
		document.getElementById("note_f").style.backgroundColor = "#b7bec9";
		document.getElementById("note_g").style.backgroundColor = "#b7bec9";
	})
//back up below
/*	$("#note_new").click(function(){
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
})*/

$("#note_a").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "a"){
 document.getElementById("note_a").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_a").style.backgroundColor = "red";
}
});
$("#note_b").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "b"){
	document.getElementById("note_b").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_b").style.backgroundColor = "red";
}
});
$("#note_c").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "c"){
	document.getElementById("note_c").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_c").style.backgroundColor = "red";
}
});
$("#note_d").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "d"){
	document.getElementById("note_d").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_d").style.backgroundColor = "red";
}
});
$("#note_e").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "e"){
	document.getElementById("note_e").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_e").style.backgroundColor = "red";
}
});
$("#note_f").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "f"){
	document.getElementById("note_f").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_f").style.backgroundColor = "red";
}
});
$("#note_g").click(function(){
	var x = document.getElementById("treble_note").alt;
if (x == "g"){
	document.getElementById("note_g").style.backgroundColor = "green";
 alert("Correct!");
} else{
	document.getElementById("note_g").style.backgroundColor = "red";
}
});


//Note Names Bass
var counter = 0;
var bass_img = [
	"img/note_names/G2.png",
	"img/note_names/A2.png",
	"img/note_names/B2.png",
	"img/note_names/C3.png",
	"img/note_names/D3.png",
	"img/note_names/E3.png",
	"img/note_names/F3.png",
	"img/note_names/G3.png",
	"img/note_names/A3.png"
]
var bass_alt = [
	"g",
	"a",
	"b",
	"c",
	"d",
	"e",
	"f",
	"g",
	"a",
]
//	$("#show_answer").button();

var next_note = Math.floor(Math.random() * bass_img.length)
document.getElementById("bass_note").src = bass_img[next_note];
document.getElementById("bass_note").alt = bass_alt[next_note];
var x = document.getElementById("bass_note").alt;
$("#note_new").click(function(){
	var next_note = Math.floor(Math.random() * bass_img.length)
	document.getElementById("bass_note").src = bass_img[next_note];
	document.getElementById("bass_note").alt = bass_alt[next_note];
	var x = document.getElementById("bass_note").alt;
	//I tried getElementsByClassName here to eliminate some lines but it wouldn't work
	//document.getElementsByClassName("note_button").style.backgroundColor = "#b7bec9"
	document.getElementById("note_a").style.backgroundColor = "#b7bec9";
	document.getElementById("note_b").style.backgroundColor = "#b7bec9";
	document.getElementById("note_c").style.backgroundColor = "#b7bec9";
	document.getElementById("note_d").style.backgroundColor = "#b7bec9";
	document.getElementById("note_e").style.backgroundColor = "#b7bec9";
	document.getElementById("note_f").style.backgroundColor = "#b7bec9";
	document.getElementById("note_g").style.backgroundColor = "#b7bec9";
})
//back up below
/*	$("#note_new").click(function(){
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
})*/


$("#note_a").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "a"){
document.getElementById("note_a").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_a").style.backgroundColor = "red";
}
});
$("#note_b").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "b"){
document.getElementById("note_b").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_b").style.backgroundColor = "red";
}
});
$("#note_c").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "c"){
document.getElementById("note_c").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_c").style.backgroundColor = "red";
}
});
$("#note_d").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "d"){
document.getElementById("note_d").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_d").style.backgroundColor = "red";
}
});
$("#note_e").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "e"){
document.getElementById("note_e").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_e").style.backgroundColor = "red";
}
});
$("#note_f").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "f"){
document.getElementById("note_f").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_f").style.backgroundColor = "red";
}
});
$("#note_g").click(function(){
var x = document.getElementById("bass_note").alt;
if (x == "g"){
document.getElementById("note_g").style.backgroundColor = "green";
alert("Correct!");
} else{
document.getElementById("note_g").style.backgroundColor = "red";
}
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
			 .html ("Mezzo Piano");
			 $("#drag_mp").fadeOut();
		 }
	 })
	 $("#drop_mf").droppable({
		 accept: "#drag_mf",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Mezzo Forte");
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
