$(document).ready(function () {

	// validate 10 digit phone number on keyup
		$("#phone").keyup(function () {
		var phone = $("#phone").val().trim();

		// If the last character typed is not a number, slice it off
		// if (isNaN(phone[phone.length - 1])) {
		// 	phone = phone.slice(0, phone[phone.length -2]);
		// 	$("#phone").val(phone);
		// }
		// check the length
		if (phone.length < 10) {
			$("#phone").next(".error").text("You need to input 10 digits.");
		} else if(phone.length === 10) {
			$("#phone").next(".error").text("");
			$("#phone").val(phone);
		} else {
			$("#phone").val(phone);
			$("#phone").next(".error").text("You have too many digits.");
		}
	});

	$("#member_form").submit(
	function(event) {
		var isValid = true;
		$(".error").text("");
	

		// validate the first name entry
		var firstName = $("#first_name").val().trim();
		if (firstName == "") {
			$("#first_name").next(".error").text("This field is required.");
			$("#first_name").css({"border-style" : "solid",
						"border-color" : "red"});
			isValid = false;
		} else {
			$("#first_name").val(firstName);}

		// validate the last name entry
		var lastName = $("#last_name").val().trim();
		if (lastName == "") {
			$("#last_name").next(".error").text("This field is required.");
			$("#last_name").css({"border-style" : "solid",
						"border-color" : "red"});
			isValid = false;
		} else {
			$("#last_name").val(lastName);}

		// validate the address entry
		var address = $("#address").val().trim();
		if (address == "") {
			$("#address").next(".error").text("This field is required.");
			$("#address").css({"border-style" : "solid",
						"border-color" : "red"});
			isValid = false;
		} else {
			$("#address").val(address);}

		//validate phone number
		var phone = $("#phone").val().trim();
		if (phone.length < 10) {
			$("#phone").next(".error").text("You need to input 10 digits.");
		} else if(phone.length === 10) {
			$("#phone").next(".error").text("");
			$("#phone").val(phone);
		} else {
			$("#phone").val(phone);
			$("#phone").next(".error").text("You have too many digits.");
		}
		
		var areacode, prefix, suffix;
		var formattedphone;

		areacode = phone.slice(0, 3);
		prefix = phone.slice(3, 6);
		suffix = phone.slice(6, 10);
		formattedphone = "(" + areacode + ") " + prefix + "-" + suffix;

		$("#phone").val(formattedphone);


		// validate email entry
		var email = $("#email").val().trim();
		if (email == "") {
			$("#email").next(".error").text("This field is required.");
			$("#email").css({"border-style" : "solid",
						"border-color" : "red"});
			isValid = false;
		} else if (email.indexOf("@") === -1) {
			$("#email").next(".error").text("Invalid Email.");
		} else {
			$("#email").val(email);}



		// prevent the submission of the form if any entries are invalid
		if (isValid == false) { event.preventDefault(); }





		}); // end function
	// end submit
}); // end ready