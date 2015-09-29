/**
 * @authors sunmix
 * @date    2015-09-29 14:02:19
 * @version 1.0
 */

const proportion = 23.4375;  // 375/16
var html = document.querySelector('html');
resizeFontSize();
window.addEventListener('resize',resizeFontSize);

function resizeFontSize(){
	/*var dpi = window.devicePixelRatio;		//获取屏幕分辨率
	var sysWidth = window.screen.width;		
	this.deviceWidth = sysWidth/dpi;*/
	/*this.deviceWidth = document.body.scrollWidth;*/
	this.deviceWidth = $(window).width();
	this.fontScale = this.deviceWidth/proportion;
	this.fontSize = this.fontScale;
	html.style.fontSize = this.fontSize + 'px';
	console.log(this.fontSize);
}

