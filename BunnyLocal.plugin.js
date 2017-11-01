//META{"name":"imageback"}*//

/*@cc_on
@if (@_jscript)
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\\BetterDiscord\\plugins");
    var pathSelf = WScript.ScriptFullName;
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("Plugin is already in the folder.\nReload Discord.", 0, "Error", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("BetterDiscord plugins folder missing.\nMake sure its installed?", 0, "Error add", 0x10);
    } else if (shell.Popup("Adding the local Plugin, want to?", 0, "Request", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
    }
    WScript.Quit();
@else @*/


var imageback = function () {};
var apps = document.getElementsByClassName("app");
var newDiv = document.createElement("div");
var next = document.createElement("button");
var prev = document.createElement("button");
//var url = "https://bunniesmcgee.tk/rand/";
var localurl = "C:\\Users\\YOUR-USERNAME\\AppData\\Roaming\\BetterDiscord\\plugins\\img\\";
var localarray = [];
var dontstart = false;
var index = 0;
var incooldown = false;
var fs = require('fs');

var setBackground = function(number) {
	if (number == null) {
		console.log("Error: No number entered");
		return;
	}
	if (number >= localarray.length) {
		index = (localarray.length - 1);
		console.log("Error: Number entered is too high, setting to last image " + index);
	} else {
		index = number;
	}
	$(newDiv).fadeOut(1000);
	setTimeout(function() {
		//newDiv.style.backgroundImage = "url('"+ url + localarray[index] + "')";
		newDiv.style.backgroundImage = "url(data:image/png;base64," + localarray[index] + ")";
	}, 800);
	$(newDiv).fadeIn(1000);
	//console.log("Current background image: Index = " + index + ", URL = " + url + localarray[index]);
}

imageback.prototype.convert = function () {
	var elementExists = document.getElementById("bgImgContainer");
	//$(function(){
        //$.get('https://bunniesmcgee.tk/res/22 07 2016 v1.txt', function(data){
			// fs.realpath((url), function(err, path) {
				// if (err) {
					// console.log(err);
				 // return;
				// }
			// });


			var files = fs.readdirSync(localurl);
			for (var i in files) {
				var name = localurl + files[i];
				var bitmap = fs.readFileSync(name);
				localarray.push(Buffer(bitmap).toString('base64'));
			}
			//function(err, files) {
			//	if (err) return;
			//	files.forEach(function(f) {
			//		var name = url+f;
			//		var bitmap = fs.readFileSync(name);
			//		//console.log(Buffer(bitmap).toString('base64'));//this broke it kek
			//		localarray[index++] = Buffer(bitmap).toString('base64');
			//		//console.log(f);
			//	});
			//	//console.log(localarray[0]);
			//	//logging any of these crashes it
			//	console.log(index);
			//});
            //localarray = data.split('\n');
			if (elementExists == null) {
				dontstart = false;
			} else {
				dontstart = true;
			}
			if (dontstart == false) {
				document.body.appendChild(newDiv);
				newDiv.style.width = "100%";
				newDiv.style.height = "100%";
				newDiv.style.position = "absolute";
				newDiv.style.left = "0";
				newDiv.style.top = "0";
				newDiv.style.zIndex = "-1";
				newDiv.style.backgroundSize = "cover";
				newDiv.id = "bgImgContainer";
				var links = document.getElementsByClassName("channels-3g2vYe");
				$(links).append(prev);
				prev.innerHTML = "Prev";
				prev.style.backgroundColor = "#282b30";
				prev.id = "previousButton";
				$(links).append(next);
				next.innerHTML = "Next";
				next.style.backgroundColor = "#282b30";
				next.id = "nextButton";
				console.log("Number of background images; " + (localarray.length - 1));
				var randint = Math.floor(Math.random() * (localarray.length - 1));
				index = randint;
				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + localarray[index] + "')";
					newDiv.style.backgroundImage = "url(data:image/png;base64," + localarray[index] + ")";
				}, 1000);
				setTimeout(function() {
					$(newDiv).fadeIn(1000);
				}, 1300);
				//console.log("Current background image: Index = " + index + ", URL = " + url + localarray[index]);
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
				if (index == localarray.length) {
					index = 0;
				}

				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + localarray[index] + "')";
					newDiv.style.backgroundImage = "url(data:image/png;base64," + localarray[index] + ")";
					//console.log("Current background image: Index = " + index + ", URL = " + url + localarray[index]);
				}, 1000);
				setTimeout(function() {
					$(newDiv).fadeIn(1000);
				}, 1300);
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
					index = (localarray.length-1);
				}

				$(newDiv).fadeOut(1000);
				setTimeout(function() {
					//newDiv.style.backgroundImage = "url('"+ url + localarray[index] + "')";
					newDiv.style.backgroundImage = "url(data:image/png;base64," + localarray[index] + ")";
					//console.log("Current background image: Index = " + index + ", URL = " + url + localarray[index]);
				}, 1000);
				setTimeout(function() {
					$(newDiv).fadeIn(1000);
				}, 1300);
			});
		//});
	//});
};

imageback.prototype.start = function () {
    this.convert();
};

imageback.prototype.load = function () {};
imageback.prototype.unload = function () {};
imageback.prototype.stop = function () {};
imageback.prototype.getSettingsPanel = function () {
    return "";
};

imageback.prototype.getName = function () {
    return "Bunny Plugin Local Edition";
};
imageback.prototype.getDescription = function () {
    return "Must use Bunny theme in conjunction, allows for changing of background image using buttons. Uses local files";
};
imageback.prototype.getVersion = function () {
    return "1.2";
};
imageback.prototype.getAuthor = function () {
    return "Bunnies McGee";
};
/*@end @*/
