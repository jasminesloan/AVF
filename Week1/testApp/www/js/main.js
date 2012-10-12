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
	$("#camera").on("click", function(){
		accessCamera();
});

	var accessCamera = function(){
		navigator.camera.getPicture(onSuccess, onFail, { quality: 50,
			destinationType: Camera.DestinationType.FILE_URI,
		targetWidth: 250,
		targetHeight: 450});

function onSuccess(imageURI) {
localStorage.setItem("picture",imageURI);
displayImage();
//var image = document.getElementById('myImage');
//image.src = imageURI;
//console.log(imageURI);
	}

	function onFail(message) {
		alert('Failed because: ' + message);
	}
};
//Display an image
	var displayImage = function(){
	var imageLocation = localStorage.getItem("picture");
		console.log(imageLocation);
	var ask = confirm("Preview Picture?");
		if (ask){
			$("#picturebucket").append('<div id="picture_div" class="picture_div"></div>')
			$("#picture_div").append('<img id="newpicture" class="newpicture"></img>');
			$("#newpicture").attr("src",imageLocation);
		}
		window.location="#newpicture"
};


function getImage(source) {
    try {
        // Get image file location from specified source
        navigator.camera.getPicture(onPhotoURISuccess, onFail, { quality: 50,
                                    destinationType: destinationType.FILE_URI,
                                    sourceType: source, saveToPhotoAlbum: true });
    }catch (err) {
        alert(err);
    }
}

$(function(){
	//http://api.twitter.com/1/geo/search.json?query=atlanta&callback=? 
	$.getJSON("http://search.twitter.com/search.json?q=Obama2012&rpp=10&include_entities=true&result_type=popular&callback=?", function(data){
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


var handleData = function (json) {
	//console.log(json);
	for (var i = 0; i < json.friends.length; i++){
		var friend = json.friends[i];
		console.log("User ID: " + friend.uuid + ", Name: " + friend.name + ", Age: " + friend.age);	
	};
};



