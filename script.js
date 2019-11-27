

$(document).ready(function(){
//Recap
$("#recap_form").submit(
	function(event){
		$("span").text("*");
		var isValid = true;
		var recap1 = $("#Recap1").val();
		var recap2 = $("#Recap2").val();
		var recap3 = $("#Recap3").val();
		var recap4 = $("#Recap4").val();
		var recap5 = $("#Recap5").val();
		var recap6 = $("#Recap6").val();
		var recap7 = $("#Recap7").val();
		var recap8 = $("#Recap8").val();
		var recap9 = $("#Recap9").val();
//Task 2.c validate form fields
		if (recap1 == ""){//Task 1.b.2 use an if statement
			$("#Recap1").next().text("This field is required")
			isValid = false;
		}else if (recap1 != "e"){
			$("#Recap1").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap2 == ""){
			$("#Recap2").next().text("This field is required")
			isValid = false;
		}else if (recap2 != "a"){
			$("#Recap2").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap3 == ""){
			$("#Recap3").next().text("This field is required")
			isValid = false;
		}else if (recap3 != "c"){
			$("#Recap3").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap4 == ""){
			$("#Recap4").next().text("This field is required")
			isValid = false;
		}else if (recap4 != 3){
			$("#Recap4").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap5 == ""){
			$("#Recap5").next().text("This field is required")
			isValid = false;
		}else if (recap5 != 2){
			$("#Recap5").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap6 == ""){
			$("#Recap6").next().text("This field is required")
			isValid = false;
		}else if (recap6 != 3){
			$("#Recap6").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap7 == ""){
			$("#Recap7").next().text("This field is required")
			isValid = false;
		}else if (recap7 != "f"){
			$("#Recap7").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap8 == ""){
			$("#Recap8").next().text("This field is required")
			isValid = false;
		}else if (recap8 != "pp"){
			$("#Recap8").next().text("Incorrect answer")
			isValid = false;
		}
		if (recap9 == ""){
			$("#Recap9").next().text("This field is required")
			isValid = false;
		}else if (recap9 != "mf"){
			$("#Recap9").next().text("Incorrect answer")
			isValid = false;
		}
		if (isValid == false) {
			event.preventDefault();
		} else{
			alert("Good job! You got them all right.");//Task 1.a.2 use an alert()function
		}
	}
)

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
	var treble_img = [//Task 1.b.1 use an array
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
	document.getElementById("treble_note").src = treble_img[next_note];//Task 1.e.2 manipulate an image
	document.getElementById("treble_note").alt = treble_alt[next_note];
	var x = document.getElementById("treble_note").alt;
	$("#note_new").click(function(){//Task 1.c.1 use a custom function
		//Task 2.a.1 use a jQuery selector
		//Task 2.a.3 use a jQuery event
		var next_note = Math.floor(Math.random() * treble_img.length)
		document.getElementById("treble_note").src = treble_img[next_note];//Task 1.d.3 change an attribute/element property
		document.getElementById("treble_note").alt = treble_alt[next_note];
		var x = document.getElementById("treble_note").alt;
		//I tried getElementsByClassName here to eliminate some lines but it wouldn't work
		//document.getElementsByClassName("note_button").style.backgroundColor = "#b7bec9"
		document.getElementById("note_a").style.backgroundColor = "#b7bec9";//Task 2.a.2 use a jQuery method
		document.getElementById("note_b").style.backgroundColor = "#b7bec9";
		document.getElementById("note_c").style.backgroundColor = "#b7bec9";
		document.getElementById("note_d").style.backgroundColor = "#b7bec9";
		document.getElementById("note_e").style.backgroundColor = "#b7bec9";
		document.getElementById("note_f").style.backgroundColor = "#b7bec9";
		document.getElementById("note_g").style.backgroundColor = "#b7bec9";
	})


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
	 $("#drag_pp").draggable();//Task 2.d.2 use a jQuery widget
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
			 $("#drag_pp").fadeOut();//Task 1.e.2 manipulate an image
		 }
	 })
	 $("#drop_p").droppable({
		 accept: "#drag_p",
		 drop: function(event, ui){
			 $(this)
			 .addClass ("ui-state-highlight")
			 .find ("p")
			 .html ("Piano");
			 $("#drag_p").fadeOut();//Task 2.b.1 usa a jQuery effect
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
