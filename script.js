

//creates a list item, appends text and displays the item in the DOM
function addItem(){

	var item = document.getElementById("input").value;
	var text = document.createTextNode(item);
	var newItem = document.createElement('li');
	newItem.appendChild(text);

	var img = new Image(20,20); //delete item image to be displayed on the right
	img.src = 'remove.png';
	img.setAttribute("onclick", "remove(this)"); //invokes the remove function when clicked
	img.setAttribute("align", "right");

	newItem.appendChild(img);

	//using bootstrap class to color code unfinished items pink
	newItem.setAttribute("class", "list-group-item list-group-item-danger");
	newItem.setAttribute("onclick", "changeState(this)");

	document.getElementById("toDoList").appendChild(newItem);

};

//utilizes bootstrap class property to change the item color to green
//when clicked (task completed)
function changeState(item){

	if(item.getAttribute("class") == "list-group-item list-group-item-danger"){

		item.setAttribute("class", "list-group-item list-group-item-success");
	}
	else {
		item.setAttribute("class", "list-group-item list-group-item-danger");
	}

};

//removes the item element from the list when image is clicked
function remove(item){
	var parent = item.parentNode.parentNode;
	var child = item.parentNode;
	parent.removeChild(child);
};

