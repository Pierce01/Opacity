//META{"name":"back"}*//

var images = [
    "img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg",
	"img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg",
	"img/20.jpg", "img/21.png", "img/22.jpg", "img/23.jpg", "img/24.png", "img/25.jpg", "img/26.jpg", "img/27.jpg", "img/28.png", "img/29.jpg",
    "img/30.jpg", "img/31.jpg", "img/32.jpg", "img/33.jpg", "img/34.jpg", "img/35.jpg", "img/36.jpg", "img/37.jpg", "img/38.jpg", "img/39.jpg",
    "img/30.jpg", "img/41.jpg", "img/42.jpg", "img/43.jpg", "img/44.jpg", "img/45.jpg", "img/46.jpg", "img/47.jpg", "img/48.jpg", "img/49.jpg",
    "img/50.jpg", "img/51.jpg", "img/52.png", "img/53.png", "img/54.png", "img/55.png", "img/56.png", "img/57.png", "img/58.png", "img/59.png",
	"img/60.jpg", "img/61.jpg", "img/62.jpg", "img/63.jpg", "img/64.jpg", "img/65.jpg", "img/66.jpg", "img/67.jpg", "img/68.jpg", "img/69.jpg",
	"img/70.png", "img/71.jpg", "img/72.jpg", "img/73.jpg", "img/74.jpg", "img/75.jpg", "img/76.jpg", "img/77.jpg", "img/78.jpg", "img/79.jpg",
	"img/80.jpg", "img/81.jpg", "img/82.jpg", "img/83.jpg", "img/84.jpg", "img/85.jpg", "img/86.jpg", "img/87.jpg", "img/88.jpg", "img/89.jpg",
	"img/90.jpg", "img/91.jpg", "img/92.jpg", "img/93.jpg", "img/94.jpg"
];


var back = function () {};

var flex = document.getElementsByClassName("flex-horizontal flex-spacer");
var apps = document.getElementsByClassName("app");


var newDiv = document.createElement("div");
var next = document.createElement("button");
var prev = document.createElement("button");

var url = "https://bunniesmcgee.tk/rand/";
var array = [];

var dontstart = false;
var index = 1;
var incooldown = false;

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

back.prototype.convert = function () {

	var elementExists = document.getElementById("bgImgContainer");

	
	$(function(){
        $.get('https://bunniesmcgee.tk/res/22 07 2016 v1.txt', function(data){
            array = data.split('\n');
			
			if (elementExists == null) {
				dontstart = false;
			} else {
				dontstart = true;
			}
			
			if (dontstart == false) {
				
				flex[0].appendChild(newDiv);
				newDiv.style.width = "100%";
				newDiv.style.height = "100%";
				newDiv.style.position = "absolute";
				newDiv.style.left = "0";
				newDiv.style.top = "0";
				newDiv.style.zIndex = "-1";
				newDiv.style.backgroundSize = "cover";
				newDiv.style.backgroundColor = flex[0].style.backgroundColor;
				newDiv.id = "bgImgContainer";
				
				var links = document.getElementsByClassName("flex-vertical channels-wrap");
				$(links).append(prev);
				prev.innerHTML = "Prev";
				prev.style.backgroundColor = "#282b30";
				prev.id = "previousButton";
				
				$(links).append(next);
				next.innerHTML = "Next";
				next.style.backgroundColor = "#282b30";
				next.id = "nextButton";
				
				
				//var randint = Math.floor(Math.random() * (images.length));
				console.log("Number of background images; " + (array.length - 1));
				var randint = Math.floor(Math.random() * (array.length - 1));
				index = randint;
				
				//newDiv.style.backgroundImage = "url('"+ url + images[randint] + "')";
				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + images[index] + "')";
					//console.log("Current background image: "+ url + images[index]);
					
					newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
				}, 800);
				$(newDiv).fadeIn(1000);
				
				//newDiv.style.backgroundImage = "url('"+ url + array[randint] + "')";
				//console.log("Current background image: "+ url + images[index]);
				console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
			}

			$(next).on("click", function() {
				if (incooldown == true) {
					return;
				}
				
				incooldown = true;
				setTimeout(() => {
					incooldown = false;
				}, 1750);
				
				index = index + 1;
				//if (index == images.length) {
				if (index == array.length) {
					index = 0;
				}

				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + images[index] + "')";
					//console.log("Current background image: "+ url + images[index]);
					
					newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
					console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
				}, 800);
				$(newDiv).fadeIn(1000);
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
				//if (index == images.length) {
				if (index == -1) {
					index = (array.length-1);
				}

				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + images[index] + "')";
					//console.log("Current background image: "+ url + images[index]);
					
					newDiv.style.backgroundImage = "url('"+ url + array[index] + "')";
					console.log("Current background image: Index = " + index + ", URL = " + url + array[index]);
				}, 800);
				$(newDiv).fadeIn(1000);
			});
			
			//$(document).mousedown(function(e){ 
			//	console.log(document.getElementsByClassName("context-menu")[0]);
			//	console.log(document.getElementsByClassName("context-menu")[1]);
			//});
		});
	});
};

back.prototype.start = function () {
    this.convert();
};

back.prototype.load = function () {};
back.prototype.unload = function () {};
back.prototype.stop = function () {};
back.prototype.getSettingsPanel = function () {
    return "";
};

back.prototype.getName = function () {
    return "Bunny Plugin";
};
back.prototype.getDescription = function () {
    return "Must use Bunny theme in conjunction";
};
back.prototype.getVersion = function () {
    return "1.0";
};
back.prototype.getAuthor = function () {
    return "Bunnies McGee";
};
