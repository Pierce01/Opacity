//META{"name":"menuDraggable"}*//
var menuDraggable = function () {};

menuDraggable.prototype.convert = function () {	

	var selected = null, // Object of the element to be moved
		selection_array = [],
		x_pos = 0, y_pos = 0, // Stores x & y coordinates of the mouse pointer
		x_elem = 0, y_elem = 0, // Stores top, left values (edge) of the element
		left_margin = 20,
		right_margin = 20,
		top_margin = 20,
		bottom_margin = 20;
		
	if(bdPluginStorage.get("menuDraggable", "menuDraggableData") == null) bdPluginStorage.set("menuDraggable", "menuDraggableData", []);
	if(bdPluginStorage.get("menuDraggable", "menuDraggableData") != []) selection_array = bdPluginStorage.get("menuDraggable", "menuDraggableData");
	
	document.onmouseup = DetectedClick;

	function DetectedClick() {
		if (document.getElementById("draggable-grip") != null) _destroy();
		setTimeout(function(){
			var newP = document.createElement("div");
			newP.style.cssText = "width:800px; height:20px; cursor:move; position:fixed";
			newP.id = "draggable-grip";
			var parent_Node = document.getElementsByClassName('modal-inner')[0];
			if (parent_Node == null) return;
			if (document.getElementById("draggable-grip") == null) parent_Node.appendChild(newP);
			parent_Node.style.position = "fixed";
			
			if (containsElement(selection_array, parent_Node.firstChild.className) == false) selection_array.push({name: parent_Node.firstChild.className, pos: {left_pos: null, top_pos: null}});
			
			var i = findElement(selection_array, parent_Node.firstChild.className);
			if (i != null) {
				//console.log("Found element!");
				if (selection_array[i].pos.left_pos != null) {
					parent_Node.style.left = selection_array[i].pos.left_pos + 'px';
					parent_Node.style.top = selection_array[i].pos.top_pos + 'px';
					
					if (parseInt(parent_Node.style.left.replace('px', null)) < left_margin) parent_Node.style.left = left_margin + 'px';
					if (parseInt(parent_Node.style.top.replace('px', null)) < top_margin) parent_Node.style.top = top_margin + 'px';
					if (parseInt(parent_Node.style.left.replace('px', null)) > (window.innerWidth - parent_Node.offsetWidth - right_margin)) parent_Node.style.left = window.innerWidth - parent_Node.offsetWidth - right_margin  + 'px';
					if (parseInt(parent_Node.style.top.replace('px', null)) > (window.innerHeight - parent_Node.offsetHeight - bottom_margin)) parent_Node.style.top = window.innerHeight - parent_Node.offsetHeight - bottom_margin + 'px';
				}
			}
			//console.log(selection_array);
			bdPluginStorage.set("menuDraggable", "menuDraggableData", selection_array);
			
			parent_Node = null;
			enabledrag();
		}, 130);
	};
	
	function containsElement(list, objName) {
		var i;
		for (i = 0; i < list.length; i++) {
			if (list[i].name == objName)
				return true;
		}
		return false;
	}
	
	function findElement(list, objName) {
		var i;
		for (i = 0; i < list.length; i++) {
			if (list[i].name == objName)
				return i;
		}
		return null;
	}


	// Will be called when user starts dragging an element
	function _drag_init(elem) {
		// Store the object of the element which needs to be moved into a temporary variable
		selected = elem;

		x_elem = x_pos - selected.offsetLeft;
		y_elem = y_pos - selected.offsetTop;
	}

	// Will be called when user dragging an element
	function _move_elem(e) {
		x_pos = document.all ? window.event.clientX : e.pageX;
		y_pos = document.all ? window.event.clientY : e.pageY;
		if (selected !== null) {
			selected.style.left = (x_pos - x_elem) + 'px';
			selected.style.top = (y_pos - y_elem) + 'px';
		}
	}

	// Destroy the object when we are done
	function _destroy() {
		if (selected != null) {
			if (parseInt(selected.style.left.replace('px', null)) < left_margin) selected.style.left = left_margin + 'px';
			if (parseInt(selected.style.top.replace('px', null)) < top_margin) selected.style.top = top_margin + 'px';
			if (parseInt(selected.style.left.replace('px', null)) > (window.innerWidth - selected.offsetWidth - right_margin)) selected.style.left = window.innerWidth - selected.offsetWidth - right_margin  + 'px';
			if (parseInt(selected.style.top.replace('px', null)) > (window.innerHeight - selected.offsetHeight - bottom_margin)) selected.style.top = window.innerHeight - selected.offsetHeight - bottom_margin + 'px';
			
			var i = findElement(selection_array, selected.firstChild.className);
			selection_array[i].pos.left_pos = (parseInt(selected.style.left.replace('px', null)));
			selection_array[i].pos.top_pos = (parseInt(selected.style.top.replace('px', null)));
		}
		
		selected = null;
		document.onmouseup = DetectedClick;
	}

	// Bind the functions...
	function enabledrag() {
		document.getElementById('draggable-grip').onmousedown = function (e) {
			_drag_init(this.parentElement);
			return false;
		};
		document.onmousemove = _move_elem;
		document.onmouseup = _destroy;
	}
};

menuDraggable.prototype.start = function () {
    this.convert();
};

menuDraggable.prototype.load = function () {};

menuDraggable.prototype.unload = function () {};

menuDraggable.prototype.stop = function () {
	console.log("Stopped MenuDraggables Plugin!");
	bdPluginStorage.set("menuDraggable", "menuDraggableData", []);
	//ghetto removal of functions :^)
	menuDraggable.prototype.convert = function() {};
	document.onmouseup = function() {};
	/*
	DetectedClick() {};
	containsElement() {};
	findElement() {};
	_drag_init() {};
	_destroy() {};
	enabledrag() {};
	*/
};

menuDraggable.prototype.getSettingsPanel = function () {
    return "";
};

menuDraggable.prototype.getName = function () {
    return "Draggable Menus";
};
menuDraggable.prototype.getDescription = function () {
    return "Lets you drag most popup menus around on the screen, as if they were windows. Saves in between sessions, to reset windows, disable the plugin, then close and reopen discord.";
};
menuDraggable.prototype.getVersion = function () {
    return "1.0";
};
menuDraggable.prototype.getAuthor = function () {
    return "Bunnies McGee";
};
