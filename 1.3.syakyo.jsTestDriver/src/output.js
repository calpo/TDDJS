function helloworld(){
	var div = document.createElement('body');
	div.innerHTML = 'Hello World!';
	document.getElementsByTagName('html')[0].appendChild(div);
}
