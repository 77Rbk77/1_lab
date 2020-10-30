 document.querySelector('.block').onmousemove = function(event) { 
    document.querySelector('.x').innerHTML = event.offsetX; 
    document.querySelector('.y').innerHTML = event.offsetY; 
}

document.onkeypress = function(event){ 
	document.getElementById('key').innerHTML = event.keyCode; 
	document.getElementById("key").style.display = "block"; 
}
