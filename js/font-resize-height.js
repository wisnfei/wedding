/**
 * @authors sunmix
 * @date    2015-09-29 14:02:19
 * @version 1.0
 */

const proportion = 39.375;  // 630/16
var html = document.querySelector('html');
resizeFontSize();
window.addEventListener('resize',resizeFontSize);

function resizeFontSize(){
	this.deviceHeight = screen.height;
	this.fontScale = (this.deviceHeight+3)/proportion;
	this.fontSize = this.fontScale;
	html.style.fontSize = this.fontSize + 'px';
	console.log(this.fontSize);
}

