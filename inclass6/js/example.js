// ADD NEW ITEM TO END OF LIST
var item = document.createElement('li');
var node = document.createTextNode("cream");
item.appendChild(node);

var el = document.querySelector('ul');
el.append(item);

// ADD NEW ITEM START OF LIST
item = document.createElement('li');
node = document.createTextNode("kale");
item.appendChild(node);

var child = document.getElementById("one");
el.insertBefore(item,child);

// ADD A CLASS OF COOL TO ALL LIST ITEMS
var x = el.childElementCount;
child = document.querySelectorAll('li');
for ( var i = 0; i < x; i++) {
    child[i].className = "cool";
}

// ADD NUMBER OF ITEMS IN THE LIST TO THE HEADING

item = document.createElement('span');
node = document.createTextNode(x);
item.appendChild(node);

var head = document.querySelector('h2');
head.innerHTML += '<span>' + x + '</span>'