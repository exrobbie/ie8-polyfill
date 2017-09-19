//fix font-face problem
var head = document.getElementsByTagName('head')[0],
    style = document.createElement('style');
style.type = 'text/css';
style.styleSheet.cssText = ':before,:after{content:none !important}';
head.appendChild(style);
setTimeout(function(){
    head.removeChild(style);
}, 0);

/**
 * respond.js
 */
//=require ../node_modules/respond.js/dest/respond.min.js

/**
 * html5shiv.js
 */

//=require ../node_modules/html5shiv/dist/html5shiv.min.js
