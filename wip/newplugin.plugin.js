//META{"name":"opacityPlugin"}*//
var opacityPlugin = function () {};

var setBackground = function(number) {
	if (number == null) {
		console.log("Error: No number entered");
		return;
	}
	if (number >= array.length) {
		index = (array.length - 1);
		console.log("Error: Number entered is too high, setting to last image " + index);
	} else {
		index = number;
	}
	$(newDiv).fadeOut(1000);
	setTimeout(function() {
		newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
	}, 800);
	$(newDiv).fadeIn(1000);
	console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
}

function fadeOutThenIn(newDiv, index, array, url) {
	$(newDiv).fadeOut(1000);
	setTimeout(function() {
		newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
	}, 800);
	$(newDiv).fadeIn(1000);
	console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
	return;
}

function fadeIn(newDiv, index, array, url) {
	newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
	setTimeout(function() {
		$(newDiv).fadeIn(1000);
	}, 300);
	console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
	return;
}

opacityPlugin.prototype.convert = function () {
	$(function(){
        $.get('https://bunniesmcgee.tk/res/22 07 2016 v1.txt', function(data){
			var flex = document.getElementsByClassName("flex-horizontal flex-spacer");
			var newDiv = document.createElement("div");
			var next = document.createElement("button");
			var prev = document.createElement("button");
			var url = "https://bunniesmcgee.tk/rand/";
			var array = [];
			var index = 1;
			var incooldown = false;
			var fs = require('fs');
			
            array = data.split('\n');
			if (document.getElementById("bgImgContainer") != null) return;
			flex[0].appendChild(newDiv);
			newDiv.style = "width: 100%; height: 100%; position: absolute; left: 0; top: 0; z-index: -1; background-size: cover; display: none; background-color: " + flex[0].style.backgroundColor; + ";";
			newDiv.id = "bgImgContainer";
			
			prev.innerHTML = "Prev";
			prev.style.backgroundColor = "#282b30";
			prev.id = "previousButton";
			
			next.innerHTML = "Next";
			next.style.backgroundColor = "#282b30";
			next.id = "nextButton";
			
			var links = document.getElementsByClassName("flex-vertical channels-wrap");
			
			$(links).append(prev);
			$(links).append(next);
			
			console.log("Number of background images; " + (array.length - 1));

			index = Math.floor(Math.random() * (array.length - 1)); //random image on load :)
			fadeIn(newDiv, index, array, url);
			
			$(next).on("click", function() {
				if (incooldown == true) {
					return;
				}
				
				incooldown = true;
				setTimeout(() => {
					incooldown = false;
				}, 1750);
				
				index = index + 1;
				if (index == array.length) {
					index = 0;
				}
				
				fadeOutThenIn(newDiv, index, array, url);
				
			});
			
			$(prev).on("click", function() {
				if (incooldown == true) {
					return;
				}
				incooldown = true;
				setTimeout(() => {
					incooldown = false;
				}, 1750);
				
				index = index - 1;
				if (index == -1) {
					index = (array.length-1);
				}

				fadeOutThenIn(newDiv, index, array, url);
			});
		});
	});
};

opacityPlugin.prototype.start = function () {
    this.convert();
};

opacityPlugin.prototype.load = function () {
	
};
opacityPlugin.prototype.unload = function () {
	
};
opacityPlugin.prototype.stop = function () {
	
};

opacityPlugin.prototype.getSettingsPanel = function () {
    return "";
};

opacityPlugin.prototype.getName = function () {
    return "Opacity Plugin";
};
opacityPlugin.prototype.getDescription = function () {
    return "Background image switching, works well with Opacity Theme, or any other similar theme.";
};
opacityPlugin.prototype.getVersion = function () {
    return "0.1";
};
opacityPlugin.prototype.getAuthor = function () {
    return "Bunnies McGee";
};
