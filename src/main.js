var head = document.getElementsByTagName('head')[0];

//fix font-face problem
var style = document.createElement('style');
style.type = 'text/css';
style.styleSheet.cssText = ':before,:after{content:none !important}';
head.appendChild(style);
setTimeout(function(){
    head.removeChild(style);
}, 0);

//force edge IE rendering and use Google Chrome Frame if possible
var meta = document.createElement('meta');
meta.httpEquiv = 'X-UA-Compatiable';
meta.content = 'IE=edge, chrome=1';
head.appendChild(meta);

/**
 * respond.js
 */
//=require ../node_modules/respond.js/dest/respond.min.js

/**
 * html5shiv.js
 */

//=require ../node_modules/html5shiv/dist/html5shiv.min.js
