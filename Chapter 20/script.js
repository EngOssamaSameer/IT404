var p = document.getElementById("title");
p.innerHTML = "Welcome To JS";
p.style.color = "red";

var photo = document.getElementById("photo");

photo.setAttribute("src","ch21.png");

function myfun () {
    var btn = document.createElement("button");
    var t = document.createTextNode("Click me");
    btn.appendChild(t);
    document.body.appendChild(btn);
}
