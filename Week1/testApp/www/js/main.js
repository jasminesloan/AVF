/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};



// ======================Twitter API==================================
$(function(){
	//http://api.twitter.com/1/geo/search.json?query=atlanta&callback=? 
	$.getJSON("http://search.twitter.com/search.json?q=oomp%20camp&rpp=10&include_entities=true&result_type=recent&callback=?", function(data){
	console.log(data);
	//alert(data.completed_in);
	$("#datamsg").html("<p>Tweets succesfully obtained.</p>");
	//alert(data.results[0].created_at);
	//alert(data.results.length);
	for (i=0, j=data.results.length; i<j; i++){
		//alert("data!!");
		
		$("#data-output")
			.append("<li>" +
				"<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + 
				data.results[i].text + ", <em>" + data.results[i].created_at +"</em>" + 
			"</p>" +
			"</li>");
		}	
	});
});




//=======================JSON Data============================

var handleData = function (json) {
	//console.log(json);
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " + friend.age);	
	};
};

// =====================Alert=================================

	function onBodyLoad() {
		document.addEventListener("deviceready", onDeviceReady, false);
	}

	function onDeviceReady() {
		// do your thing!
		phoneGapReady.innerHTML = ("")
		
	}
	function vibrate() {
        navigator.notification.vibrate(2000);
    }

	
	// alert dialog dismissed
    function alertDismissed() {
        // do something
    }
    
    // Show a custom alert
    //
    function onClick() {
        navigator.notification.alert (
                                     'You clicked Alert!', // message
                                     alertDismissed, // callback
                                     'Alert Demo', // title
                                     'Done' // buttonName
                                     );
    }
    
    // process the confirmation dialog result
    function onConfirm(button) {
        alert('You chose button ' + button);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
                                       'You clicked Confirm!', // message
                                       onConfirm, // callback to invoke with index of button pressed
                                       'Confirm Demo', // title
                                       'Restart,Exit' // buttonLabels
                                       );
    }

// =============GeoLocation==================================

var x=document.getElementById("demo");
function getLocation()
{
    if (navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition(showPosition,showError);
    }
    else{x.innerHTML="Geolocation is not supported by this browser.";}
}

function showPosition(position)
{
    lat=position.coords.latitude;
    lon=position.coords.longitude;
    latlon=new google.maps.LatLng(lat, lon);
    mapholder=document.getElementById('mapholder');
    mapholder.style.height='250px';
    mapholder.style.width='500px';
    
    var myOptions={
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
    };
    var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
    var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function showError(error)
{
    switch(error.code)
    {
        case error.PERMISSION_DENIED:
            x.innerHTML="User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            x.innerHTML="Location information is unavailable.";
            break;
        case error.TIMEOUT:
            x.innerHTML="The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            x.innerHTML="An unknown error occurred.";
            break;
    }
}


