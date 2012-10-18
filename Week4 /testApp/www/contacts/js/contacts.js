
function onBodyLoad() {
	document.addEventListener("deviceready", onDeviceReady, false);
	
// Cordova ready
	

    // Cordova is ready
    //
    function onDeviceReady() {
        // find all contacts with 'Bob' in any name field
        var options = new ContactFindOptions();
        options.filter=""; 
        var fields = ["displayName", "name"];
        navigator.contacts.find(fields, onSuccess, onError, options);
    }

    // onSuccess: Get a snapshot of the current contacts
    //
    function onSuccess(contacts) {
    	document.getElementById('contacts-output').innerHTML = 
			    "<strong>You have " + contacts.length + "</strong> contacts.";
        for (var i=0; i<contacts.length; i++) {
        	if (contacts[i].name && contacts[i].name.formatted)
        	document.getElementById('contacts-output').innerHTML = 
			document.getElementById('contacts-output').innerHTML +
            console.log("Display Name = " + contacts[i].displayName);
            	//show first five contacts
			            "<br/>Contact " + (i+1) + " is <strong>" +
			            contacts[i].name.formatted + "</strong>";
			            "<br/>Contact " + (i+2) + " is <strong>" +
			            contacts[i].name.formatted + "</strong>";
			            "<br/>Contact " + (i+3) + " is <strong>" +
			            contacts[i].name.formatted + "</strong>";
			            "<br/>Contact " + (i+4) + " is <strong>" +
			            contacts[i].name.formatted + "</strong>";
			            "<br/>Contact " + (i+5) + " is <strong>" +
			            contacts[i].name.formatted + "</strong>";
			            break;
        }
    }
    function contacts_fail (error) {
			    document.getElementById('contacts-output').innerHTML = "<strong>Error getting contacts.</strong>";
			}

    // onError: Failed to get the contacts
    //
    function onError(contactError) {
        alert('onError!');
    }
}
