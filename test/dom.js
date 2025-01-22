
var para = document.createElement('p');
var content = document.createTextNode("Hello, world!");

para.appendChild(content);

var body = document.getElementsByTagName('body')[0]; 

body.appendChild(body);

