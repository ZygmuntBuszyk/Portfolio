/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

console.log('portfolio on command');

// css do js
__webpack_require__(1);
__webpack_require__(10);
var $ = __webpack_require__(12);
//js scripts
__webpack_require__(13);
// const $ = require('jquery');

// About hover end
$('.About-button').one('mouseover', function() {
  setTimeout(function() {
    $('.hov').addClass('displayNone');
  }, 250);
});

//  DROPDOWNS (JQUERY)

// ABOUT PAGE
$('.About-button').click(function() {
  if ($('.bonfire-slideout').hasClass('bonfire-slideout-active')) {
    /* enable browser scroll */
    // Circle Button Click hide
    var html = $('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    // hide shown Page
    setTimeout(function() {
      $('.bonfire-slideout').removeClass('bonfire-slideout-active');
    }, 650);
    $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
    $('.CircleImage').removeClass('zIndex');
    return false;
  } else {
    /* disable browser scroll */
    var scrollPosition = [
      self.pageXOffset ||
        document.documentElement.scrollLeft ||
        document.body.scrollLeft,
      self.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
    ];
    var html = $('html');
    html.data('scroll-position', scrollPosition);
    html.data('previous-overflow', html.css('overflow'));
    html.css('overflow', 'hidden');
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    // show shown Page

    $('.bonfire-slideout').addClass('bonfire-slideout-active');
    $('.bonfire-slideout').addClass('bonfire-slideout-active-translate');

    setTimeout(function() {
      $('.CircleImage').addClass('zIndex');
    }, 2000);
    return false;
  }
});

// Close button click
$('.bonfire-slideout-close').click(function() {
  /* enable browser scroll */
  var html = $('html');
  var scrollPosition = html.data('scroll-position');
  html.css('overflow', html.data('previous-overflow'));
  window.scrollTo(scrollPosition[0], scrollPosition[1]);

  // hide shown Page
  setTimeout(function() {
    $('.bonfire-slideout').removeClass('bonfire-slideout-active');
  }, 650);
  $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
  $('.CircleImage').removeClass('zIndex');
  return false;
});

// Close ESCAPE CLICK

/* hide slideout (ESC button) */
$(document).keyup(function(e) {
  if (e.keyCode == 27) {
    /* enable browser scroll */
    var html = $('html');
    var scrollPosition = html.data('scroll-position');
    html.css('overflow', html.data('previous-overflow'));
    window.scrollTo(scrollPosition[0], scrollPosition[1]);

    /* hide shown Page */
    setTimeout(function() {
      $('.bonfire-slideout').removeClass('bonfire-slideout-active');
    }, 650);
    $('.bonfire-slideout').removeClass('bonfire-slideout-active-translate');
    $('.CircleImage').removeClass('zIndex');
    return false;
  }
});

// Icon on dropdown
// $(function() {
//   var header = $('.header');
//   $(window).scroll(function() {
//     var scroll = $(window).scrollTop();

//     if (scroll >= 100) {
//       $('.CircleImage').addClass('zero-opacity');
//     } else {
//       $('.CircleImage').removeClass('zero-opacity');
//     }
//   });
// });


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(2);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(3);
exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, "*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  /* background-color: #5a595644; */\r\n  /* background-image: linear-gradient(120deg, #a6c0fe 0%, #f68084 100%);\r\n   */\r\n  /* background-image: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);\r\n   */\r\n  /* background-image: linear-gradient(to top, #0ba360 0%, #3cba92 100%); */\r\n  background-image: linear-gradient(to right, #434343 0%, black 100%);\r\n  margin: 0;\r\n  /* padding: 0; */\r\n  font-family: 'Courier New', Courier;\r\n  overflow-x: hidden;\r\n  overflow-y: hidden;\r\n  height: 100vh;\r\n  /* background-image: url('../../pics/text3.jpg'); */\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n}\r\n.mainGrid {\r\n  /* display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr; */\r\n  /* grid-template-rows: 1fr; */\r\n}\r\n.top-tri {\r\n  width: 0;\r\n  height: 0;\r\n  /* border-left: 0px solid transparent; */\r\n  border-right: 200px solid transparent;\r\n  border-top: 200px solid rgba(51, 51, 51, 0.185);\r\n}\r\n.bot-tri {\r\n  position: absolute;\r\n  bottom: 0;\r\n  right: 0;\r\n  width: 0;\r\n  height: 0;\r\n  /* border-left: 0px solid transparent; */\r\n  border-left: 200px solid transparent;\r\n  border-bottom: 200px solid rgba(223, 223, 223, 0.418);\r\n}\r\n\r\n/* CIRCLE IMAGE */\r\n.CircleImage {\r\n  width: 6em;\r\n  height: 6em;\r\n  background: black;\r\n  border-radius: 50%;\r\n  left: 1em;\r\n  top: 1em;\r\n  position: absolute;\r\n  background-image: url(" + escape(__webpack_require__(5)) + ");\r\n  background-size: cover;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  z-index: 3;\r\n}\r\n.CircleImage::before,\r\n.CircleImage::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n.CircleImage::after {\r\n  /* background: purple; */\r\n  width: 6em;\r\n  height: 6em;\r\n  top: 0px;\r\n  left: 0px;\r\n  border: 3px solid transparent;\r\n  border-left-color: green;\r\n  border-right-color: green;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  animation: 5s spin linear infinite;\r\n\r\n  /* animation: 5s pulse-easly linear infinite; */\r\n  /* border-color: red; */\r\n  /* animation: pulsar-red 2s linear infinite; */\r\n  /* border-top-color: red; */\r\n  /* transform: scale(1.4); */\r\n  /* padding: 5px; */\r\n}\r\n.CircleImage:hover::after {\r\n  animation: spin 2s linear infinite;\r\n  background: rgba(12, 8, 255, 0.1);\r\n  /* animation: beat 1.5s linear infinite; */\r\n  background: rgba(0, 0, 12, 0.85);\r\n  filter: blur(2px);\r\n}\r\n.first {\r\n  position: absolute;\r\n  /* width: 1em;\r\n  height: 1em; */\r\n  /* background: green; */\r\n  /* border-left: 0px solid transparent; */\r\n  border-left: 1em solid transparent;\r\n  border-bottom: 1em solid black;\r\n  top: -1em;\r\n  left: -1em;\r\n  opacity: 0.5;\r\n  /* border-radius: 2%; */\r\n  animation: diagonal 2s linear infinite;\r\n}\r\n.about {\r\n  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));\r\n  /* text-shadow: 0 0 5px rgba(0, 0, 0, 0.1); */\r\n  position: absolute;\r\n  top: -1em;\r\n  left: -1em;\r\n  color: white;\r\n  opacity: 1;\r\n  transform: rotate(-45deg);\r\n}\r\n/* .Second {\r\n  position: absolute;\r\n  bottom: 6.5em;\r\n  right: 1.5em;\r\n  border-right: 1em solid transparent;\r\n  border-bottom: 1em solid white;\r\n}\r\n.Social {\r\n  position: absolute;\r\n  bottom: 5.5em;\r\n  right: 1.5em;\r\n  color: white;\r\n} */\r\n.displayNone {\r\n  display: none;\r\n}\r\n.zero-opacity {\r\n  opacity: 0 !important;\r\n}\r\n.CircleImage:hover .first,\r\n.CircleImage:hover .about {\r\n  visibility: hidden;\r\n  opacity: 0;\r\n  transition: visibility 250ms, opacity 0.2s linear;\r\n  /* display: none; */\r\n  /* filter: blur(1px); */\r\n  /* transition: all ease-in-out 500ms; */\r\n}\r\n@keyframes diagonal {\r\n  0% {\r\n    transform: translatex(0) translatey(0);\r\n  }\r\n  50% {\r\n    transform: translatex(0.1em) translatey(0.1em);\r\n  }\r\n  100% {\r\n    transform: translatex(0) translatey(0);\r\n  }\r\n}\r\n.CircleImage:hover::before {\r\n  content: 'About';\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-decoration: none;\r\n  color: white;\r\n  z-index: 10;\r\n}\r\n\r\n.CircleSocialIcon {\r\n  width: 4.5em;\r\n  height: 4.5em;\r\n  background-image: url(" + escape(__webpack_require__(6)) + ");\r\n  background-size: cover;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  border-radius: 50%;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1em;\r\n  animation: spinLeft 5s linear infinite;\r\n  z-index: 3;\r\n}\r\n.CircleSocialIcon::before,\r\n.CircleSocialIcon::after {\r\n  content: '';\r\n  position: absolute;\r\n  display: block;\r\n  border-radius: 50%;\r\n}\r\n.CircleSocialIcon::after {\r\n  /* background: purple; */\r\n  width: 4.5em;\r\n  height: 4.5em;\r\n  top: 0px;\r\n  left: 0px;\r\n  background: rgba(0, 0, 0, 0.1);\r\n  border: 3px solid transparent;\r\n  border-left-color: green;\r\n  border-right-color: green;\r\n  animation: 3s spin linear infinite;\r\n  /* border-color: red; */\r\n  /* animation: pulsar-red 2s linear infinite; */\r\n  /* border-top-color: red; */\r\n  /* transform: scale(1.4); */\r\n  /* padding: 5px; */\r\n}\r\n.CircleSocialIcon:hover {\r\n  animation: none;\r\n  cursor: pointer;\r\n  /* filter: blur(5px); */\r\n}\r\n.CircleSocialIcon:hover::after {\r\n  animation: beat 2s linear infinite;\r\n  background: rgba(0, 0, 12, 0.85);\r\n  filter: blur(2px);\r\n}\r\n.CircleSocialIcon:hover::before {\r\n  content: 'social';\r\n  z-index: 10;\r\n  left: 50%;\r\n  top: 50%;\r\n  transform: translate(-50%, -50%);\r\n  text-decoration: none;\r\n  color: white;\r\n}\r\n@keyframes pulse-easly {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes spin {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spin-scale {\r\n  0% {\r\n    transform: rotate(0deg) scale(1.1);\r\n  }\r\n  50% {\r\n    transform: rotate(180deg) scale(1);\r\n  }\r\n  100% {\r\n    transform: rotate(360deg) scale(1.1);\r\n  }\r\n}\r\n@keyframes pulse-spin-color {\r\n  0% {\r\n    transform: rotate(0deg) scale(1);\r\n    border-bottom-color: blue;\r\n  }\r\n  50% {\r\n    transform: rotate(180deg) scale(1.1);\r\n    border-bottom-color: red;\r\n  }\r\n  100% {\r\n    transform: rotate(360deg) scale(1);\r\n    border-bottom-color: blue;\r\n  }\r\n}\r\n@keyframes spinLeft {\r\n  0% {\r\n    transform: rotate(0deg);\r\n  }\r\n  0% {\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes beat {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  10% {\r\n    transform: scale(1.1);\r\n  }\r\n  20% {\r\n    transform: scale(1);\r\n  }\r\n  30% {\r\n    transform: scale(1.1);\r\n  }\r\n  40% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: rotate(20deg);\r\n  }\r\n  100% {\r\n    transform: rotate(-360deg);\r\n  }\r\n}\r\n/* 2 FULL BORDER PULSARS  */\r\n/* @keyframes pulsar-red {\r\n  0% {\r\n    transform: scale(1);\r\n  }\r\n  50% {\r\n    transform: scale(1.1);\r\n  }\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n@keyframes pulsar-blue {\r\n  0% {\r\n    transform: scale(1.1);\r\n  }\r\n  50% {\r\n    transform: scale(1);\r\n  }\r\n  100% {\r\n    transform: scale(1.1);\r\n  }\r\n} */\r\n.main-content {\r\n  z-index: 2;\r\n  position: absolute;\r\n  display: grid;\r\n  grid-gap: 20px;\r\n  grid-template-rows: repeat(6, 1fr);\r\n  grid-template-columns: repeat(5, 1fr);\r\n  width: 70%;\r\n  height: 70%;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  /* clip-path: polygon(50% 0%, 100% 0%, 50% 100%, 0% 100%); */\r\n}\r\n.item-one {\r\n  grid-row: span 3;\r\n  grid-column: span 2;\r\n}\r\n.item-two {\r\n  grid-row: span 3;\r\n  grid-column: span 1;\r\n}\r\n.item-three {\r\n  grid-row: span 3;\r\n  grid-column: span 2;\r\n}\r\n.item-four {\r\n  grid-row: span 7;\r\n  grid-column: span 2;\r\n}\r\n.item-five {\r\n  grid-row: span 2;\r\n  grid-column: span 3;\r\n}\r\n.item-six {\r\n  grid-row: span 5;\r\n  grid-column: span 2;\r\n}\r\n.item-seven {\r\n  grid-row: span 5;\r\n  grid-column: span 1;\r\n}\r\n\r\n/* TESTING */\r\n.test1 {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: calc(100% - 166px);\r\n  height: 50vh;\r\n  border-left: 10px dashed black;\r\n  border-bottom: 10px dashed black;\r\n  z-index: -1;\r\n  opacity: 0.2;\r\n}\r\n.test2 {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: calc(100% - 166px);\r\n  height: 50vh;\r\n  border-right: 10px dashed black;\r\n  /* border-bottom: 10px dashed black; */\r\n  z-index: -1;\r\n  opacity: 0.2;\r\n}\r\na:hover ~ .test1 {\r\n  transition: all ease-in-out 0.5s;\r\n  border-left-color: green;\r\n}\r\na:hover ~ .test1 {\r\n  transition: all ease-in-out 0.5s;\r\n  transition-delay: 1s;\r\n  border-bottom-color: green;\r\n}\r\na:hover ~ .test2 {\r\n  transition: all ease-in-out 0.5s;\r\n  transition-delay: 1s;\r\n  border-right-color: green;\r\n}\r\n\r\n/* BLOCK HOVER EFFECT */\r\n.block {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background: black;\r\n  flex-direction: column;\r\n  flex-wrap: wrap;\r\n  flex: 1 0 50%;\r\n  /* text-align: center; */\r\n  /* font-size: 1.5em; */\r\n  background-size: cover;\r\n  background-position: top left;\r\n  position: relative;\r\n  z-index: 10;\r\n  /* cursor: pointer; */\r\n  text-align: center;\r\n}\r\n.block h3 {\r\n  color: white;\r\n  position: relative;\r\n}\r\n.block:hover h3 {\r\n  color: white;\r\n  text-shadow: 0 0 5px rgba(0, 0, 0, 0.85);\r\n}\r\n\r\n.icons a:hover svg {\r\n  fill: rgba(3, 163, 24, 0.685);\r\n  filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));\r\n}\r\n.block:hover h3 {\r\n  font-size: 1em;\r\n  filter: blur(2px);\r\n  transition: all ease-in-out 300ms;\r\n}\r\n.block h3:hover {\r\n  filter: none;\r\n  /* transition: all ease-in-out 300ms; */\r\n}\r\n.block h3:hover ~ .icons {\r\n  filter: blur(2px);\r\n  transition: all ease-in-out 300ms;\r\n}\r\n.block {\r\n  fill: white;\r\n}\r\n.block div.icons a {\r\n  fill: white;\r\n  display: none;\r\n}\r\n.block .icons svg {\r\n  width: 2em;\r\n  height: 2em;\r\n}\r\n.block:hover .icons a {\r\n  display: inline-flex;\r\n  animation: note 300ms ease-in-out forwards;\r\n}\r\n\r\n@keyframes note {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.1) rotate(50deg) translateY(50px) rotateX(90deg);\r\n  }\r\n\r\n  100% {\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n/* .block:hover p {\r\n  display: block;\r\n} */\r\n.item-one {\r\n  background-image: url('/pics/Bakery.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-two {\r\n  background-image: url('/pics/portfolio.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-three {\r\n  background-image: url('/pics/YTApi.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-four {\r\n  background-image: url('/pics/RezApp.png');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-five {\r\n  background-image: url('/pics/construction.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-six {\r\n  background-image: url('/pics/construction.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.item-seven {\r\n  background-image: url('/pics/construction.jpg');\r\n  background-size: cover;\r\n  background-position: center;\r\n}\r\n.block::before {\r\n  content: '';\r\n  display: block;\r\n  background: black;\r\n  opacity: 0.5;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  transition: all ease-in-out 300ms;\r\n  z-index: -1;\r\n}\r\n\r\n.block:hover::before {\r\n  opacity: 0.2;\r\n}\r\n\r\n/* SOCIAL DIV  */\r\n.toggleSocial {\r\n  width: 20em;\r\n  height: 4.5em;\r\n  position: absolute;\r\n  bottom: 1em;\r\n  right: 1em;\r\n  background: black;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 50px;\r\n  align-items: center;\r\n  justify-content: left;\r\n  /* transform: translateY(0%); */\r\n  /* transform: translateX(110%); */\r\n  /* display: hidden; */\r\n}\r\n.toggleSocial div a {\r\n  padding: 0 10px;\r\n}\r\n.toggleSocial div a:hover svg g path {\r\n  fill: green;\r\n  transition: all ease-in-out 250ms;\r\n}\r\n.trash {\r\n  position: absolute;\r\n  width: 50px;\r\n  height: 100px;\r\n  right: 0;\r\n  bottom: 0;\r\n  background: black;\r\n  /* z-index: 1; */\r\n}\r\n/* .hidden {\r\n  display: none;\r\n}\r\n\r\n.visuallyhidden {\r\n  opacity: 0;\r\n}\r\n.transformed-social {\r\n  transform: translateX(0%);\r\n  transition: all ease-in-out 1s;\r\n}\r\n.moved-social {\r\n  right: 0 !important;\r\n  transition: all ease-in-out 1s;\r\n} */\r\n.zIndex {\r\n  z-index: 101;\r\n  animation-delay: 2s;\r\n  animation: note 800ms ease-in-out forwards;\r\n  top: 1em;\r\n  left: 1em;\r\n  opacity: 0.5;\r\n  background-image: url(" + escape(__webpack_require__(7)) + ");\r\n}\r\n\r\n.zIndex:hover {\r\n  opacity: 0.7;\r\n  transform: scale(1.1);\r\n}\r\n.zIndex::after,\r\n.zIndex::before {\r\n  all: unset;\r\n}\r\n.zIndex::after {\r\n  content: 'X';\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n.zIndex:hover::before,\r\n.zIndex:hover::after {\r\n  display: none;\r\n}\r\n.zIndex:hover::after {\r\n  content: 'X' !important;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  color: black;\r\n  font-size: 30px;\r\n}\r\n/* .zIndex::after {\r\n  content: 'X';\r\n} */\r\n/* .CircleImage::before,\r\n.CircleImage::after {\r\n  display: none;\r\n} */\r\n\r\n@keyframes note {\r\n  0% {\r\n    opacity: 0;\r\n    -webkit-transform: scale(0.1) rotate(30deg) translateY(50px) rotateX(90deg);\r\n    transform: scale(0.1) rotate(30deg) translateY(50px) rotateX(90deg);\r\n  }\r\n  50% {\r\n    -webkit-transform: rotate(-10deg) rotateX(-2deg);\r\n    transform: rotate(-10deg) rotateX(-2deg);\r\n    opacity: 1;\r\n  }\r\n  70% {\r\n    -webkit-transform: rotate(3deg);\r\n    transform: rotate(3deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: scale(1);\r\n    transform: scale(1);\r\n  }\r\n}\r\n\r\n@media (max-width: 1024px) {\r\n  .zIndex {\r\n    top: 0;\r\n    left: 0;\r\n    width: 4em;\r\n    height: 4em;\r\n  }\r\n}\r\n\r\n@media (max-width: 676px) {\r\n  .block h3 {\r\n    display: none;\r\n  }\r\n  .main-content {\r\n    height: 60%;\r\n    width: 100%;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAIABJREFUeJzs3WdgVFXeBvDnnJlJb5TQCS0EpAkESEIxNiAJiFgQBMUuuk3dqrv7Lqvb3HXd1XXdtbuKFTsmIYjK4tIRVOz03jtJJplyzvshgJSUSTIz596Z5/dlSTJz77NE5v+/5557jgARWdfMmTI7e1XLOJe3rVKyrQLShRZpQiNNS50mtEjTQqcJ6DRomQShEwAdr4AEKJkAgXgIFS8hHQ2eS8ELwKOk8kigWgEeCVRrLT1awyOAai2VRypZoaU+IID90OKAFnq/0PIAhDqghN4v/I4DsUnlBxZesLAq9H9BRNRUwnQAomiVvyA/rqo8qbOUqrNWsrMQurMWurOAztAQ7aFEGy1Vm4CKtxUpVCip9kuIA1qL3RB6s9BikxB6k1/LzcLp3bRs7HuHIKBNRyWKRmwAiEIof0F+kscd3xPKkamFytRaZEqgB4TKBGRH0/lMU1DHpJabIPRmfbw5EFps9ku1yedzrl81objSdEaiSMUGgCgI8hfkJ1WXJ/XRQvcRQvcVSvRVUvWRkF1MZ7MtBQ1gnRZYA+BzIfQah5ZrFq0cshn33qtMxyOyOzYARI00srQgXQGDtF8OgsAgaAwC0BOS/57CQqFCA59D6prGQIs1DojPF40vOWQ6GpGd8AOLqB4D5o1OTPS6sjWQI4TOhRLDINHJdC6qhcY2CLUUWi5WEIvjEss/W3jBQp/pWERWxQaA6BTDSgs6SSBfKDlSaeRAqgG2nYQX7WpGCpZDYLHQYrEnrnrZqtHvHzEdi8gq2ABQ9NIQI0vGdfMLlQ/gPAD5gOhmOhaFiIKGwOcAFmupFmuhFy8vmLeFTyFQtGIDQFEle8741k6H/yIJjFbQoyVkhulMZI6G2giIMgHMrXD6FqwZO7/CdCaicGEDQBEtf0G+s9odPwJaFAjo0VByMCfrUe2UBxAfKWAutJi7fFzpNxwdoEjGD0KKOLllY1rC7yjQwHhAF0rINNOZyH4U1BYJUSa0mAuf88MlE+ccM52JKJjYAFBEyJk7tqtU8goFPQHACE7co6BS8GqpFkE55gB4bdklJTtMRyJqLjYAZFvD547tpZS8QgBXAGKw6TwURTQWaaFf9Wvx+srxpbtNxyFqCjYAZCu5ZWMyhd9xtYK+SkL2M52Hop1SGlgIiNlOod9YVFS2z3QiokCxASDLG1pc1M4p9GQAUwExzHQeotooKL9U8kMt9Ww4/G8uK3jvoOlMRPVhA0CWlD1nfEKMVFdA41pIdREgpelMRIFSCj4JzIfArJjEire4NTJZERsAsg4NMfzd8blaqBuVVJMlZLLpSETNpnAQUj/vF/rJFUVlX5mOQ3QCGwAyLuedS9pK6b9eATdIiV6m8xCFioJaAi2f9Ck5m1sdk2lsAMgMDZE7t+A8oeTt0LgcEi7TkYjCRuEoBF6EVE8uLSr7xHQcik5sACissudfnOqqjpkuNG6DRB/TeYjMU6u0lk8qqV5eUVR21HQaih5sACgsjj+z/yMBfT0gE0znIbIchQot8JR2+B9aXjhvs+k4FPnYAFDoaIjhcwtGKyXvEAJFpuMQ2YNSAF6HwF+XFpWtNJ2GIhcbAAq6gtKC2KNaTNdK3MlhfqKmU1AfQTkeXP7xkGLce68ynYciCxsACprs+RenujyuGQL6LkC2M52HKGIorIUQD+qK+FnLJr/uNh2HIgMbAGq2ocVF7RxC3ymUuB0SKabzEEUqpbBPCDzqlOpfXHaYmosNADXZkLIxnZ1+x91aiZukRKzpPETRQilUCYHH/cD93IyImooNADXaiDnjM5RUd0OomwAZYzoPUfRSbkD80+N3/GXVhOL9ptOQvbABoIDlFRd1gdD3QIkbuXAPkXUojXIp9MMOLR9cNL7kkOk8ZA9sAKhBOe9c0lY6/L+GxgwWfiILUzgCqR/0C/0wFxWihrABoDrlv3VpmifG81PUPM6XaDoPEQVI4SCAv1TEeP+5Zuz8CtNxyJrYANBZcl+9Mh5JFT/U0HdLyBam8xBR0yiFvULg/tjEin9zS2I6ExsA+s7MmTJv6Mpp0PgjJDqZjkNEQaKwWUj90yVFc9+EgDYdh6yBDQABAHJLC/KFxoOAzDadhYhCRGOhAO5cMr70U9NRyDw2AFFuaElhlgP6LwLyUtNZiCgMFLSW+knh9P3f0rHz95qOQ+awAYhSw9+ekKydvl9D4y7O7CeKQgpHIfV9RyqSHvnqqtc8puNQ+LEBiDYaInduwVT45QNCor3pOERkmlqnBX6yrLCsmPMDogsbgCgy4t1x5/qlekRAjDKdhYgsRmG+dPrvWlw470vTUSg82ABEgfwF+UmeyoT7AH0HIKXpPERkTUrBJwUe0BUJv+Oug5GPDUCEG15cdKkGHoFAZ9NZiMgu1DotcMuyorKFppNQ6LABiFBDysZ0dvic/5ACE01nISJ70tBPxHpifrHwsncOm85CwccGINLMnCnzhq24XWlxvxRIMh2HiOxNK+wCxPeXXVLyluksFFxsACJIbtmYTOFzPgWBfNNZiCjS6DeF1/XDJRPn7DSdhIKDDUAEmDR7kmNbfOUPhfT/EZDxpvMQUYRSOCKk/tmSFcOexr33KtNxqHnYANjc0JLCLAn9rIQcbjoLEUUJjYVCqpuWFJVtMB2Fmo6PhNmVhsgrKfy+E/pTFn8iCiuBfL+Sn+YUF10PzQtJu+IvzoZy3x3XEUI/IwTGmM5CRNFOv+bQcsai8SWHTCehxmEDYDM5JYWTAf1vCdnCdBYiIgCAwnYhMH3J+NIFpqNQ4NgA2MTwtyckK5f3XwLiGtNZiIjOUrPL4F+OViT9hpsL2QMbABsYXlI4xK/EK1Kih+ksRET106uFVFOXFM771nQSqh8nAVrZzJkyr6TwJ1qJJSz+RGQPYrBW4pO84nG3coKgtfGXY1F580a3UT7n8xJirOksRERNoaHe8fqdN6+aULzfdBY6GxsAC8opLRgJLV6VEB1MZyEiag4FtRXacfny8SWrTGeh0/EWgJXUPNv/E2j8l8WfiCKBhMyA1ovzSgtuNJ2FTscRAIvInn9xaozH9SwgLjOdhYgoFDT0E2lC/6isqKzadBZiA2AJuSWF/bUSb3GiHxFFPr3C6/Bf+XHBe9tMJ4l2vAVgWF5pwZUCehmLPxFFBzHM4XWuGl5cdIHpJNGOIwCGTJo9ybE9oeI+CPzSdBYiovBTClr+Yum40gchoE2niUZsAAzInn9xqsvjelFAjDOdhYjILP2a8LpuWjJxzjHTSaING4AwG1pSmOVU4l1IZJnOQkRkDeprh3aMXzS+ZKPpJNGEcwDCKOfdcedL6GUs/kREp5LneLVellNclGM6STRhAxAmNc/A6vncxY+I6GxSIh0a/80pLrrcdJZowVsAoTZzpswbtuJ+QPzMdBQiIstT0Erqny4vmvt3Tg4MLTYAIZT76pXxIqniRS7uQ0TUOFrh0dikijsXXrDQZzpLpGIDECJD35zYSsZWvysh8kxnISKyI6VQHJdUcfXCCxaWm84SidgAhMCwdy7pJqR/rpToZToLEZGdKYVPHH7n+CUT5+w0nSXSsAEIstw54wcLh68UkG1NZyEiigga27TQ45aNm/u56SiRhE8BBFFu8biLtVQLWfyJiIJIoLNQYlHOu+PONx0lkrABCJLhJYVXCOEvkQJJprMQEUUciRRAz80pKSw0HSVSsAEIgrzSghs19GxAxpjOQkQUqaREnFTineElhVeYzhIJ2AA0U15J4U+g5dOA5N8lEVGoSbg09Oy84qJrTUexOxatptIQeSWFvwfEX01HISKKLlJC47nc4qIZppPYGRuAptAQuSVFDwDiV6ajEBFFJQkhBB7LKSn8sekodsUGoLE0RG5p4UNC4CemoxARRTsJ8WBucdFvoPlYe2PxL6wxZs6UeUNX/hMCt5uOQkREp9IPLC2a+wvuHxA4h+kAtjFzpswbsvJxSPCeExGR5YgRndf2bLO959S5WLiQTUAAeAsgEN8V/5tNRyEiojoI3J47ZOU/eDsgMBwBaIiGyKtIfJRX/kRE1icEhnVe2zN++4vrPsC9ptNYGxuA+pyc8Cd+YDoKEREFSGBE53WZ/u0vrf/IdBQr4zBJXY4/6sfZ/kRE9qSgf7J83Ny/mc5hVWwA6pBbUvg7AfFr0zmIiKjp/BVYLJT65/IpZa+YzmI1bABqkVNS+GMJ8aDpHERE1AxVGtoLKKX9EnL8sqmlZaYjWQkbgDPklRbcWLO2PxER2ZWu0oD3lK8Vqh0OdcGSyfOWmktlLWwATpFTXHS5FOo1buxDRGRjbkD7zl4KQCldLh1i+LLJcz83kMpy2AAcl1s87mIh/CXc0peIyL60G0Atxf+7F+CAhhqy/Op5m8OVyarYAADIKy0YpJT8SAokmc5CRERNoAFdhfqL/4mXamxyKZm9aFrJodAHs66oH+rOmTu2KzRKWfyJiGxKH7/nH0DxBwAh0M0jVVlBaUFsiJNZWlQ3AEPfnNgKPkcZINuZzkJERE1TU/wb9x4pMOzQMf1KNC8bHLUrAea+emW8SKicK4UYZDoLERE1kRuNLv4nCIje7b/MTNv5+vqofDwwOkcAZs6UIqniBQk53HQUIiJqAg1ot651tn9jOCDuyHml4HtBSmUrUdkA5A5b8QdAXG46BxERNVEThv3rpPHIsJcLxgTpaLYRdfc+8koKbwDEM6ZzEBFR02h3EIv/CUpVauEYsvzq0q+DfGTLiqoGILe0IF/45XxIuExnISKiJqjU0P7QHFpotcOjXANXTSveH5ozWEvU3ALIeXdcT+GXb7L4ExHZkAZ0CIs/AGghOzqd/tLsx7Ojok5ERQMwrLQgBVLNgURL01mIiKiRjk/4QwiL/wlCY6gjJf1foT+TeZHfAMycKR1KviAhepuOQkREjReu4n+CFOLmnFcLbwnfGc2I+AYgd+jK30LgEtM5iIiokTSAyvAW/5P86t/DXx2bZ+DMYRPRkwBrdvfDG6ZzEBHVJd4Rj3hnLFzCBYd0QGsNr/bCq7wo91bCH8qb3lamAV0JQDXvOf9mZjggtXfAkqnv7zQXInQitgHIe3dcP0Avg0Si6SxEFL3iHfHokdIFPZK7IiOxEzrEt0P7hDZoFdsCKa4UuKSz3veX+ypwxHMUe9z7scu9Gzsqd2NT+RasP7oZOyt3Q8NggQwVDcAd2gl/gdIKK+PaVw5feMHCYD94aFxENgDDSgtSHBofA7Kn6SxEFF3axLXG0NYD0b9FHwxo0QddkjpBhOijtsJXiS8Pf4vPD32FTw5+jjUHv4ZP27xOWeHK/wx+6IdXTim703SOYIu8BkBD5JYUzRYCV5qOQkTRoXdqJi5oNxLD2wxFj+SuxnJU+tz4+MCn+GjPUny0exnKfRXGsjSNhq4AoEznOJvW6orlV89703SOYIq4BiCvpPAOQDxkOgcRRba28em4pNNYjO14PjomtDcd5yxe5cOyfatQsn0+Fu9dYf25BGF81K8plFZuoZznLp9Wss50lmCJqAZg+JzxeX6hPpIS9d9UIyJqotz0bEzqOgE5rbMhhT0+Qg9UH8S7297D61vexcHqw6bjnE0dL/4WvPI/nV4HkXTussmvu00nCQZ7/NcbgOw541vHCPUJJDqZzkJEkUUKibEdLsC07lege3IX03GazKu8KNuxALM2vIbtlRaZ2H58hT/rF/+T/rNsytwbTIcIhshoADREbmnhuwJinOkoRBQ5BARGd8jHjT2nIiOxo+k4QePXfpRu/wDPrH8Je9z7jOXQCoAblprwFwgFfdWKKWWvmc7RXBHRAOS+O+5OIfXfTecgosgxoEUf3NlnBnqnZpqOEjIe5cFLG9/CrA2z4fZXhffkWh+f7R/e0waDVqpSKkefpdeUbjGdpTls3wDkzhk/WAi1jJv8EFEwpMWk4I5zbsXYjheYjhI2+6sO4m9fPYb/7l4cnhPab9j/LEro1fFt3Dl2Xh/AYTpAc+QvyE9Sfsd8CJFuOgsR2d+YDufjgSG/Rb8W0bV1SIIzHhe1H4XM5O749ODnoR0NsM2Ev/oJiPa+Cqdzx+vrPzSdpalsPQKQV1L4LCCuN52DiOwtyZWIX/T7IS5qP8p0FOMOe47iT58/jP/tWRb8g6vji/xoe93zr4tWWkshRy69unSJ6SxNYdsGIK+04EpoaftJGERkVr8WvfG7QXejbRwHEk/15tYSPPzVE/CqII1wR8iV/5mUVjviHVW9F161sNx0lsay5S2AUXPHtld+x1wIxJvOQkT2dXmXcbhv4N1IcSWbjmI556RmYVjrwVi+bxUqfJXNOpZWqNnVLzIu/E8jhEhRfken7W9seNt0lsay33bAGsLnczwNiZamoxCRPTmEA7/o90P8tO/3GtyMJ5r1TeuFZ0c+jD5pWU0/iALgjszif4KWcnruKwW223bedrcAcouLZgiBx0znICJ7SnDG4/eD7kFuerbpKLZR7ffgt5/9BQt3L23cG9Xx2f4RXPxPEjjq9Tl6rJpWvN90lEDZ6hZAbtmYTKHxNiD4yB8RNVqKKxkP5/weg1r2Nx3FVpzSgQvbjcKeqn1Yd3RjYG+Kgiv/M8RKh+qz4/X1L5sOEij7NAAzZ8pOHXa9JSAjd1UOIgqZFjFp+Gfun5CV0sN0FFsSQmBU2xwc8x7DV4fX1v/iaLryP4WAyOp4Zfcvdry+4WvTWQJhmzkAuUNXfl9A8BkdImq01JhkPJLzR6Nb9UYCAYG7+tyGyzPqXnVd+6Oz+J8g4Hhm6JsXtTKdIxC2GAEYWTyuuxbqTQ79E1FjJToT8PCwP6JnSnfTUSJGXpsh2FW5B+uPbTr9B9E37F+bWKlk5vbX1882HaQh1h8B0BA+4X8KkAmmoxCRvTiFE3/K/lVEr+dvgoDALwfcgZz0wSe/p5WO6iv/02hxuR2eCrB8A5BbUnSrgIyeRbmJKGh+0f+HGNJqoOkYEckhHPjDoF8iM7kb4AdQIVj8T/dM/uz8JNMh6mPpBmD42xM6aKEeMJ2DiOzn6m6XYVyni03HiGgJznj8dchv0VG2B6v/mURrtz/hz6ZT1MfSDYBy+h6WkFyii4gaZVDL/vhe7xtMx4h4fr8f8f44PDLiD3BKS5cTI4TG7Tmzx1l2wQnL/sbyiovGCYErTecgIntJi0nF7wbdDYewxRxn2/L7/ah0u6G1RoIjAX/O+63pSJYjJAS076VJsydZ8j9GSzYAA+aNTlRCPWo6BxHZz68G3ImWsWmmY0S0U4v/Cf1Se2F8lzEGU1mT0DJrm//oj03nqI0lG4BEn3OmhOxiOgcR2cvEjEKMaDPMdIyIVlvxP+H7fW9EakyKgVTWpiF/N3R2UTvTOc5kuQZgxNyxfRW0JbslIrKu9LhW+H7vG03HiGj1FX8AkBD4S95vwpzK+oRArEMpy+1hY60GQEP4lXhEQlryfgkRWddP+34fiU4uFxIqDRX/E7omdsaYznxy+2zi0mEvj7XUaraWagByS4om8Zl/ImqsvPShGNU2x3SMiOULsPif8MN+N0Faq7xYgoR8zkoTAi3zGxowb3Si0HjQdA4ishencOKOPjebjhGxfH4/KisrAy7+ABAjXLjr3BkhTGVTAt226/IfmI5xgmUagESf8x5IdDKdg4jsZWJGITIS+dERCj6fD5WVlU1675iO+UiKsfRCeEZov/pj7qtjWprOAVikARhZPK47oH9mOgcR2UusIwbXZV5lOkZE8vl8qHS7m3EEgV8M/H7Q8kQMKRME5B9NxwAs0gD4oP8MyBjTOYjIXi7LKEKrWEtcTEWU5hf/GkNbD0ZqDBdzPZPWuGXoy4VZpnMYbwDyiouGc8U/Imosp3Di6m6Xm44RcYJV/AFAALjj3FuDcqzIIqRD4HHTKcw2ABpCc+IfETXBxR3OQ3pcK9MxIkowi/8JeelDuU9A7c7PfWWs0d2qjP5WckoLrxISuSYzEJE9XdX1UtMRIoo3BMUfqFkc6LpeU4J+3EigtPg3NISp8xtrAApKC2KlEvebOj8R2Vfv1Ez0Ts00HSNieH0+uENQ/E8ozOC2zLWRQmTmvlow1dj5TZ34sN9xOyS6mjo/EdnXhM4FpiNEjFAXfwBIdiSidwvjc94sSWnx9+zHs10mzm2kARj+9oRkIf2/MnFuIrI3l3Ti4vbnmY4REbxeb8iL/wnX95oUlvPYjRRId6a1/p6Rc5s4qXL6fgzI1ibOTUT2Nqz1YCS5Ek3HsD2v1wt3VVXYzte/xTlhO5fdaIXfDXh+dNj/ow57A5A9Z3xrLdRPwn1eIooMF7YfaTqC7YW7+AOAU7hwbus+YT2nXUghk+NjnWHfBTfsDUCMVPdISK4MQUSNJoVAXvpQ0zFszUTxP+GybuOMnNcOhF/fPfztCWGtjWFtAHLfHddRaXBtSCJqkt6pPZEWk2I6hm15DBZ/AOjfkiMAdZIiQVV5wrokflgbACHVL6REbDjPSUSRY1jrwaYj2JbH60WVweIPAEmOBCQ444xmsDKl9U+HzSoIW4cbtgZg+NsTOigluCYkETXZuS36mo5gSx6Px3jxP+GiTvmmI1iWFDLeESPvDtv5wnUi5fT9nFf/RNRUUgj0bdHLdAzb8Xg8qKquNh3jpOHtsk1HsDS/VneFaxQgLA3AqLlj22uNGeE4FxFFps6JHZHk5ON/jWG14g8A3ZK6mI5gaRIiDi78NDznCgOfkj+XErzxQ0RN1jO5u+kItmLF4g8AqZzE2SCp9U9yX70yPuTnCfUJsueMbw1oXv0TUbP0SOlqOoJtVFu0+AOAhERKTJLpGNYmZAJU5Q9CfZqQNwAxDv8PARnyToaIIluXxM6mI9hCtceDaosW/xMGpg8wHcHyNPy/DPUeASFtAPIX5CdBiZB3MUQU+ToktDUdwfLsUPwBoHcqb+c0RAiZ5kpqfV0ozxHSBqC6POlmSLQM5TmIKDq0j2cDUJ/q6mpbFH8A6JTYwXQEe3DImaE8fMgagOyPs11C6LCvbUxEkSdGxiDZxfvGdamurka1x2M6RsBaxfO6MECdcl8dE7K9r0PWAMTsbjsFArxpR0TNlhrD7UPqYrfiD4CPczaCguMPoTp2aBoADaE07grJsYko6qS6+OhYbapsWPwBIJ7LAQdMagwe9sqYc0Ny7FAcNK+kaJSUGBSKYxNR9GHBOFtVdTU8Niz+AOASTtMR7EU4fheKw4ZmBEDoO0NyXCKKSi7JgnEqOxd/AJDCYTqCrUitxuW8dEnQZ8EGvQEYWTyuO5SYGOzjElH0cvKK8aSqqipbF38AkCKsG9FGACkhfUFfHjjovwW/UD+AhAj2cYkoegnBjxTgePH3ek3HaDYNbTqC7WitZuQvyA9qJxzUBmDAvNGJUOKmYB6TiMirfKYjGBcpxR8AlFamI9iOFDK5cnfCVUE9ZjAPluRzToUEp+sSUVBV++2xwE2ouCOo+AOA4ghAkwiB/wvm8YLXAGgIvxK3B+14RETHVfgqTUcwxl1VBW8EFX8A8Piiu6FrKgn0zntlXL8gHi84ckqKhvHRPyIKJgGBizuch/uzg3rhYxuRWPwBwO13m45gWxr+nwfrWEFrAKTQvPonoqAZ0WYYnhv5CO4b+AtkJHY0HSfsIrX4A8Axb4XpCLalhJiU/2x+UBbGCMqMwtyyMS2VV0yWfLKDiJppUMv+uK3Xdejf4hzTUYxxu93w+iJ34uMe937TEWxLasRVxcVNAfCf5h4rKA2A8DmvERJcqouImqx3ak/c1us6DGsd3XcSI734A8DmY1tNR7A1AfkzWKUB0ELfKPjoPxE1Qdekzrg1azrObzfcdBTjoqH4A8DawxtMR7A3gT45L47ruXxaybrmHKbZDUBeacEgaBGSjQqIKHK1j2+Lm7OmYWyHCyG50A8q3W74oqD4A8Bn+78yHcH2pNQ/BtCsuXfNHwHQ4oZmH4OIokar2Ba4IfNqXNJ5LNf4Py6air9P++BR9l7K2Aq01FOh8T2Ipi+q0Kx/fQWlBbFH/GJaiLYUIqIIkuxKwrXdJ+HKrpcgzhFrOo5lRFPxB4ADnsOmI0QGjZSclwsvXo6585t6iGY1AEeUYwKkbtmcYxBRZIt3xGNyt0sxtfvlSHImmo5jKdFW/AHgm8PrTUeIGEKKuwGYaQAg1DXg5D8iqoVLunB5lyJM73EVWsSkmY5jOdFY/AHgo52LTUeIGErr87LnjE9YNaG4SUtlNrkByC0b0xJeUcjhfyI6lRQS4zpdjBszp6JtfLrpOJajtYbb7YbP7zcdJfwEsGTXx6ZTRAwp4JRu39UAnm7K+5vcAAif60pI7Wrq+4kosggIXNR+FG7OuiYqV+4LRFQXfwAHPIegwJ0Ag0lDfh/hbgAAPbXp7yWiSDK8zVDMyJqOnindTUexLK01Kt1u+KO0+APAx3s/MR0h4gitzh354rgWi6aVHGrse5vUAAwpG9MZXpzH2/9E0W1gy364rdd1GNCij+kolsbiX+O1De+ajhCBhPQ7fVMBPNrYdzapAXD5nJMhWf6JolWv1B64Let65KQPNh3F8lj8a1T4K7GtfKfpGJFJYwbC1QAo4CrO/SOKPl2SOmFG1nTktxsOLv/dMBb/7yzft9p0hIilleyX/eL41qumFTdql6VGNwAj5ozPUEINbez7iMi+2sW3wc09r0FBxwsgBdv/QLD4f0cIgae/ftF0jMglIVzCdy2AvzfmbY1uAPxCX86+nyg6tIxNw/WZU3Bp50Iu29sILP6n2+Xei/3ug6ZjRDSl5Q0IdQMghL6ise8hIntJdiXhmu5XYlLXCVy2t5G01qisrIRf8XG3E2ZveNt0hIgn4e87bFZByopry44G+p5GNQBDi4vaQWMEb/0RRaZ4R1zNsr3drkCSi8v2NhaL/9mqtQclW943HSMKSOmMwWQATwb6jkY1AFKqy6Alyz9RhHFJJyZmFOG6HpPRMpbL9jZ90djIAAAgAElEQVQFi3/tire+ZzpC1PAL3IKQNQAaExqdiIgsSwqJoo4X46aeXLa3ObTWqKishGLxP41P+/EMJ/+FjfZhUEFpQWxZUVl1IK8PuAHIX5Cf5KnEhU2PRkRWISBwYfuRuCXrGmQkdjIdx9ZY/Ov27tZ58PHvJWykhPPIETEaQHEgrw+4AfBUJlwMiJgmJyMiS8hLH4IZvaYjK6WH6Si2x+JfNy98eOLLWaZjRB0lcCOC3QAAGN+0OERkBee27Ivbsq7DuS37mo4SEVj86/fMNy9x4x8DtNDnB/rawCb0zZwp84Yt3wHIdk0NRURmZKX0wG29rkNuerbpKBFDHZ/wx+Jfu0Oew5jy/gzTMaKW9sus5dNK1jX0uoBGAIYPWzFYs/gT2UqXpE64NetanN9uBJftDSIW/wYIgZmr/mo6RVTT0n81gPsael1ADYDWooCfH0T20DY+HTf3nIbCjhdx2d4gU0qh0u1m8a/H4r3L8e2hBi8+KYSEA5MQQAMQUFnPKSlYKCHPa3YqIgqZlrFpuK7HFEzM4LK9ocDi3zC3qsLlZTfw3r9hSmt/fJU7aeENC6vqe12DnxLD356Q7Fe+4eCFBJElJbkSTy7bG++IMx0nIrH4B0AA96z4A4u/BUghHO64+PMA1LsKU4MNgHZ58yUELyeILCbOEYurul6Kad2vQLIryXSciKWUqrnnr7XpKJY2Z+s8fH1wrekYdJx0iGvR7AYAGM3b/0TWUbNsbyGu6zGFy/aGmFIKFZWV0Cz+9dpcsR2Pfv6M6Rh0CgXd4MJ9Ddb2vJKCrwB5TnAiEVFTSSFR2PEi3NRzKtrFtzEdJ+Kx+AemSlVh0nu3wKM8pqPQqTS08um0+nYHrHcEYGhxUTsALP5EBgkInN9uBG7NuhZdkrhsbziw+AdGQeEHi+5h8bciASFj1HgAL9X1knobAAfAmf9EBuWmZ+PWrOnonZppOkrUYPEPkAD+b+X92Fa+03QSqpO8Ck1tAKBxHp//Jwq/AS364LZe12Fgy36mo0QVFv8ACYG/rfk3Pt77mekkVB+tc+r7cb0NgOAIAFFY9Uzpjtt6XYe89CGmo0Qd//HZ/iz+DXvi6+cxb9sC0zGoIUq2HfD86MQ10+dX1PbjOhuAoW9ObAXp6R+6ZER0QkZiR9ySdS0ubD+Sy/YawOIfGCEEHv9mFt7YGNBmc2SahEiMkSMBzKvtx3U2AK4Yz0j+UyAKrbbx6bip51QUdbyYy/Ya4vf7Uel2s/g3RAAPffE4Srd8YDoJNYZDXInGNgBK6JG8EiEKjRYxabg+c/LxZXtdpuNEjc8OfonH1j6HvPQhmN7jKhb/AGmhMfPjB7B8zyrTUaiRtB/5df2szgZAaJHL+k8UXEnOREztfgUmd5uAeEe86ThR49sjG/D42uewbF9NAfvs4JfYW7kfM7pNZ/FvgEd78cNF92Dz0W2mo1ATKC26YeZMiXvvPWuN5lpLfPbH2a6YPelHAMlPKKIgiHPEYlLXCbim+5VctjeMtpRvxxNrZ+G/uxdD45RCrzR0JTA+Ywx+0PdGzruow073Lnz/f3ej0lfvnjJkcT74+n88Zf4XZ36/1hEA1872/eFQLP50FgGBtJhUJDoTEO+MQ4IzHgmOBCQ64+GSLvi0D17lg9vvxhHPMRz1HsX+qkNRu1CISzpxaedCXJc5Ga1iW5iOEzV2u/fi6XUvYu6OD6H0GRc+fkBX1vyxeMt7+OLQ1/hb3n1IdCSEP6hFCSHw3vYF+Otn/zYdhYLAIV3jAQTWAGinL0doTkiKZlIIdE/qim7JGchI7IQuiZ3QJakTOiV2aNKOc4c8h7Grci+2VGzDxmNbsO7oJnx15FuUe2t9OsX2pBAo6Hghbuo5De3j25qOEzUOVh/Gcxtewdtb58KrfGf9XPs14D79e5uPbsOV827CfcN+jqGtB4UpqXV5tBczV/4Fq/etMR2FgkRAjQFw/5nfr7UBkEry/n8U6pbUBUNaD8DgludiUKt+SHElB+3YLWLS0CImDX3Ssk5+T0Nja/kOfHrwC6zY/wlWHvgkIhqC89uNwC1Z16BbUobpKFGj3FuBFza+jtmb30GVv7r2F50o/rXc8ldQ+PWK+zGi3TDcPehHiBHROTHzk0Nf4DfL/xy1I3YRS6PWR/prLfM5JYVfS4jeoU1EVnBui74o6HghRrXNNb6znNIKnx78Ev/dvRgLdi/GgeqDRvM0Vk76YMzImo7eqT1NR4kabn8VXts8By9sfL3e5lH7ALgDm+znlBK/HHwXRrQdVmuzEIkqlBt/XP13ruwXqTR0bFVlwsIbFp42meOsBiB/QX6SpzzxKCTHACJVx4T2KOx4EQo6XoAOCe1Mx6mV0grL969Gyfb5+N+eZbUO51pF/xbn4LZe12FQS66bFS5e5cPbW+fiuQ2v4GD14fpf7AN0gMX/VBnJHTEz+6folNChiSmtT0Hh9U3FePrrF01HoRBzSD1q8VVli0793llFPq+4aDgEFocvFoXLsNaDMb3HVRjcyl6F6kD1Iby1tQRvbZmLQ54GPuzDqGbZ3unISx9qOkrUUFph7o4P8PS6l7DbvbfhN/g1dB3D/oEa1mYQ7hxwK1rFtGz6QSxGQ2Ph7qV48NN/c7g/SggH7ls6ae7M07535ovySgq/D4h/hi8WhZKAwKi2ubg+c7Lth6Y9yoN3ts7DCxtfw76qA8ZydE7sgFuyrsVF7Ufx8bEw0dBYsGsxnlg7C1srtgf2piZe+dclt90QfK/v9Wgbmx60Y4abHwqL9izHQ589gUpfpek4FEZC6veXXlU2+rTvnfmivJLCpwBxU/hiUahc2H4kbsyciu7JXUxHCSqv8uLNLaV4dv3LOOo9Frbzto1Lx409p6Ko00VwCEfYzhvtlu77GI9/+zzWHt0Q+JuCXPxPlZnaFd/rdyP6pGbZpgE85q9A6Zb5+M83r0LhrPVgKAoorXasuHpep1O/V1sDsAoQg8MXi4ItI7ETftrvdgxpNdB0lJAq91bgmfUv4bXN78Kv/SE7T1pMKq7PnIzLMoq4bG8YfXboSzz27XP47OCXjXuj7/iwf4g5pRPTel6OsRkXonVMS8utKOjTPnx1ZC2e+volfHtonek4ZJjS8K2YMjcG4rsbYqc1AMdXACwHZEz441FzxTpicH3mFEztdgVcst6dniPK+qOb8Ocv/okvD38T1OPWLNt7OSZ3u5TL9obR2qMb8Pi3z2Ppvo8b/2afhq5C2Gfvp8QkYXLmRIxsl4O2cenGRgbcqgrfHFmPdzbNxdLdTfj7o4jm88seH08r2Xji69P+K80pLjpHCnwV/ljUXENbD8Td/X8UtYvOKK3x6ua38Ni3z8OrvM06Vqwj5uSyvcFcC4Hqt6V8O55cNwsLdp2xbG+AtBdAlTWuwnPaDsaFHUfhnBZZaB3bAg6E4JaRANw+N7ZUbMfKfZ+ibOuH2O+216OzFF5KiOkrJpfOOvH1aZeJUqq+4AqAtiKFxC1Z12B6j6tscz8yFKQQuLrb5chNH4LffPJnbDi2udHHcAonLs0owPWZk9EqNnJmfFvdHvc+PLXuRczd8cHZy/YGygfLFH8AWL5nNZbvWX3y6+SYJAxpMxB9W/RC56SOSI9riSRXEuIcsXAKByRkzb9fAUDXTHrUAPzww+P3wO2vwuHqw9hRuRebjm7Gx/vWYN3hRsyJIAIghX8UgNobAK1kHxG9NcR20uNa4d6BP8fAlv1MR7GMbkkZeGr43/H3rx7DnG21boF9FikExnaoWba3Q0J0jqCYULNs76t4e2tp89Z5CNM9/+Y45inHgu2LsGD7ooZfTBQiGvK0iWGnNQBCqL4ARwDsICd9MGae+zOkxaSYjmI5sY4Y3N3/R+iT1gt//eJf8Om6i8v57YbjlqxruWxvGJV7K/Dixjcwe/M7cPubucucFzX3/ImoYVp3O/XL0xoABfRh+be+SzMK8LO+P4DkcE29JnQeiy6JnXDP6t/jsOfoaT8b1nowbuvFZXvDKdBlewPmBbSFhv2JrE779Wlbkp6sIPkL8p2e8sRKSPA5Jwu7IfNq3JJ1jekYtrK1YgfuXPFr7HbvRb8WvXFb1vW2Ww3RzrzKh3e2zcV/1gewbG+ArDThj8hOhE90XXpN6RbglBGA6urYroLF37KkELizzwxc2eUS01FsJyOxI57IexBrj27A8DZctjdcapbt/RBPr3sxsGV7A8XiT9Rk2qVHADi9AYDPmRnFk8gtTQqJ3w78GS5uf57pKLbVOq4lWsdxZn84aGj8d3fNsr1bygNctjdQXs17/kTNIXU2gJeAUxsAoTPr2B2YDLu7/w9Z/MkWlu1bhcfXPodvjwT/ETXt1QCLP1HzaNH7xB9PNgAC6GEmDdXn9l7XY3ynMaZjENXrs0Nf4vFvn8enB78IzQlY/ImCRJ18EuBkA6CUyJR8BMBSJne7FNf2mGQ6BlGd1h3diMe+fR5L960M3Uk47E8UNErJk4udfHcLQPIWgJWM7pCPH51zi+kYRLXaWrEdT659AR/uWtSkZXsDpT0AqkN2eKLoo1XqiT/WVPyZM2XOkJWVUiLWWCg6qXtyFzw9/CHEOrgnE1nLHvc+PL3uJZTueL/py/YGygPoas72Jwo2f4yn9crLPzjgBICcwavTWfytId4Rh98PuofFnyzlkOcwnls/G29tLW32ZksBYfEnChmnJ747gJoGwOH0ddYc/reEn/b7HromdTYdgwhAzbK9L216A69uCsKyvQHS1QA8LP5EoSIc/oEAVjoBQCnZWUj+gzNtXKeLUdjxItMxiFDlrz65bO8xb3nYzsviTxR6CrovcHwSoBCal5yGtYtvgx/3vd10DIpyXuXDnG1l+M/6V3Cg+lB4T+7RgCe8pySKSlr0BI43ABrI4A0As+7qcxviHXGmY1CUUlqhbMcCPL3uRexy7wn7+bVHc7Y/UZgIoToDJ0cAVGduA2zOyDY5GNU2x3QMikIaGgt3L8ETa2dhc/k2MxmqeeVPFE5aizbA8QZAAe1Y/s2IdcTgrr4zTMegKLR832o8vvY5fHNkvbkQLP5E4adFEnBiISAl23IAwIzrekxB+/i2Db+QKEjWHPoKj337XOiW7Q2QrkLNzn5EFFZK1Tz2X9MASNWWtwDCr1VsC0ztfpnpGBQl1h3diMfXPo8le0O4bG+Aaoo/Z/sTmSAFnJNmT3I4C0oLYo9omWY6UDSa0u0yxEgu+EOhtbViB55a+wI+2PW/kC7bGzAWfyLjtvqqWjv3S9XG5efVf7iluJJxeZci0zEogu2p2odn1r2Eku1hWLY3QLzyJ7IGGevNcMb4HW35zzH8JnWdgHhHvOkYFIEOe47guQ2v4s0tYVq2N1BVmvf8iSxC+dHDqbRoLbgIQFglOONxVdcJpmNQhCn3VeCljW8eX7bXbTrO6ao0NIs/kWUIqTs7hRZpEBwDCKeCDhci2ZVkOgZFiCp/NV7f/C5mbXwtrMv2Bkrzyp/IcjRke6eWKk1wI6CwKuzE9f6p+Xzah3e2Glq2N1BuAD7TIYjoTBpoc3wEwHSU6JGR2BF903qZjkE2prTGvJ0f4ul1L2JnZfiX7Q2UdgPwcXSRyIqEQmunFpojAGFU0PFC0xHIxv67ewmeXDsLm8q3mo5SL+3WvPInsjAp0MIJoIXpINFCQGBsxwtMxyAbWrF/NR779nl8c2Sd6SgNq2LxJ7I6BaQ6BXQaOAIQFn1b9OKyv9Qonx/6Go99+xw+Ofi56SgN08ef82fxJ7I87VdJTg2RyPIfHsNaDzIdgWxi/dFNeHzt81i8d4XpKIHjlT+RjThinIBO4AhAeGS3Otd0BLK4bRU78eS6Wfhgp0WW7Q0Q7/kT2Yz0O51QMp77AIVejIxBv7TepmOQRe2p2odn172Mku3vw6/9puM0Cos/kQ1p4XQKgQTTOaLBgBZ94JIu0zHIYg57juD5DbPxxpYSay3bGwh9/FE/e/UrRARAAg4nhIrnVsChN7jVANMRyELKfRV4eeNbeGXT29ZbtjdAukqz+BPZlNLC4QQ4AhAO56T2NB2BLKDa78FrW+bghQ2v46j3mOk4TcZhfyLbczgBEWc6RTTISOpoOgIZ5NM+zNk6D8+ufwUHqg+ajtN0HPYnigxaCSeUcPIOQGjFyBi0jWtjOgYZoLTGezsX4Kl1L1h62d6A6ONX/iz+RLYnpRBOJeBg/Q+tzokdILnnctRZuHspnlj7vOWX7Q0Uiz9RBFFCOKVQDk4CDK2MxE6mI1AYrdj/CR7/9nl8fWSt6SjBwSt/oojkBOAwHSLSZSTy/n80+OLQN3hs7X+w+oANlu0NFIs/UWQSEE4F3gIItdSYFNMRKITWH9uEx7+12bK9AWLxJ4pcTgnJEYAQS3DGm45AIbCtYieeWvcC3t/5ka2W7Q2IBnSlBpTpIEQUKk7TAaIBG4DIsrdqP55Z9zJKts+33bK9ATkx7M/iTxS5BOBUUH6OAoRWgoMNQCT51eo/4cvD35iOERoaQCVY/ImigJS8wxdyHAGILC4ZoQNnx4f9tYqw2xlEdDZdcwuADUCIxXMEIKI4RAQOmCkAVRz2J4oaGloqrugdcpqfqhElIif8uTUicToDEdWNIwBh4FXssSKJ7bbtrYdWADjhjyj6SK2dkiMAIRdJBYOAKn+16QjBoTXgBos/URRSWmsJLe25GbmNHPNWmI5AQVThi4DfpwI0Z/sTRS0phZLQYAMQYke8R0xHoCA67DlqOkLzaHDYnyjKaQ2/VFJVmg4S6Q552ABEiip/NSp9Nu6ZFaArjt/7J6LopYXPCQgbf5rZwx73PtMRKEj2Vtn4d6k1tBuItIcYiKgJhPY5oUUluFV9SO1y7zEdgYJkV+Ve0xGaRCvUrPDH4k9EADSER8qajwUKoR0Vu01HoCDZVrnDdITGO/GoH4s/ER0nJaqlErrcdJBIt9O9K3IeHYtym8u3mY7QOJztT0S10EJUSqnFYdNBIp3SGpvKt5iOQUGwuXyr6QiBU/r4lT8v/YnoDFoflQDYAITB2iMbTUegILhv4N24quulcEmX6Sj1O37lz9n+RFQbAXFYaqHZAITBF4e/Nh2BgqBlbBru7HMrZuc/iUs6j4EU0nSks2h/zdr+vOdPRHVy+A9KoSUbgDBYc+gr0xEoiNrGp+Oe/nfgpfMew8UdzoOwyqM0fnCRHyIKgNgvARwyHSMabKvYiX1VB0zHoCDLSOyI+wb+As+NfAQj2+QYzaKVrpnwxyt/ImqAgtwrlVAcAQiTZftWmY5AIZKZ0g1/GfIbPDn8QQxuNSD8Afw4/kAvqz8RBUJtlw4tbLy0mb0s3fex6QgUYn3TeuOfOX/CP3L+gD5pWeE5qeI9fyJqJOFYJx0OP5epC5Pl+1aj2u8xHYPCYEirgXhq+N/x5+zfoEdy19CdSGnoChZ/ImocR4LnWynjqvZB8eMjHNx+N5buW2k6BoXRqLY5eG7kP3HvwJ+jU0KHoB5b+48v8kNE1BgCWLpk+H4BAHklBfsA2dp0pmhwQbuR+MPge0zHIAP82o+S7fPxzLqXsbdqf/MOxgl/RNREGvAtnzLXJQFAa8nbAGGyaO8y++8nT03iEA5M6FyA185/CneccyvSYlKbdiB/zZa+LP5E1CQOVAFAzSomGmwAwsSrfJi74wPTMcggl3RhcrdL8cYFT+PWrOlIciYG/uYTi/wQETXdUeB4AyAEdpnNEl3e3loKzcu3qBfviMf1mZPxxgXPYHqPqxDniK3/DX7N2f5E1GxSiP3A8QZAC22zLc7sbVvFTizas8J0DLKIZFcSbut1HV4//xlM6joBLuk86zXaB97zJ6Kg0LKm5p9oAGy0xVlkeGnjG6YjkMW0jE3DXX1m4NX8JzG+0yn7DPhQs7wvEVEQSMgNNf8LQGrBEYAw++zQl1h9YI3pGGRB7eLb4JcD7sBL5/0bV3YaB1FlkX0GiCgieOH7GjjRACjJBsCAJ9bOMh2BLKxDbDvc3O1avFswCzf0vtp0HCKKEA6XXg0cbwD8Li8bAAPWHPoKS/ZyYSA6m8/nQ6XbDQBwCiemdJ+IOYWzcGXmBMPJiMjulEN+A+D4HqYaIqek6KgUSDKaKgplJHbCC+c9Cqc4e+IXRadTi39tKv2VePzrWSjb+mEYUxFRJNBQ/uVT5jmBE+sACGgJbDSaKkptrdiO1zcXm45BFuFtoPgDQIIjAXf1m4HZY57CqA65YUpGRBHBgZMr0cmT3xR6vZEwhCfXvoA9VdyUMdp5fT64Gyj+p0p1JuPXA+/Cixf/G4PS+4cwGRFFCgHsPvHn7xoALdgAGOL2u/HAF4+ajkEGNbb4n6p1TEvcP/TXePaCh9GrRc8gJyOiSKKFY8OJP59sAARHAIxasnclSra/bzoGGeD1eptc/E/VIb4d/pH3ezyW/wAykjsFIRkRRRoh/F+c+PPJBkADG2p/OYXL3758DDsquSpzNPF6vXBXVQX1mN0SM/DUeX/DwyN/jzbx3OSTiL4jpFx+4s8nGwDpd3AEwDC3343ffPIXeJXPdBQKg1AU/xO01uid0hOzLnwUf877DVJcySE5DxHZiACEcJ1ch/5kA7B4VfZ2QFWaSUUnfH1kLR766nHTMSjEQln8T6OBgS36YvboJ/HboT9DgjMu9OckIkvSWvmXXDrn5DCz4+RPFi7UnadlXg6IDkaS0UnfHFmHtvHpyErpYToKhYDH60VVOIr/KQQEOid2wOTMieiQ1BbL934CpVVYMxCRWVrK/Tv6rXvgxNfyjJ9+GfZEVKu/fP4oVh34zHQMCjITxf9UQgtc1P48zCmYhe/3vxHyjI8AIopgUm8+7cvTfqjxVTizUN182od7Vv0Bm8q3mI5CQWK6+J/KAYkJncfi3cJZuKH3FNNxiCgMJMRnp3992leaIwAWUu6rwI+W/5pPBkQAj8djmeJ/qpp9Bi7DnILncUWP8abjEFEIKQf+d+rXpzUADi05AmAxB6oP4ofLf4k9bq4UaFcejwdV1dWmY9QrVsbi1l7X4q2xz2Js5/NNxyGiYBOAyyEXnvGtU8ycKfOGrDwKicSwBqMGtYtvg3/k/AGdEjhH007sUPxrc9h7FI988RQW7Vre8IuJyPIUlH/F5HkuCOgT3xNnviinpGCxhBwe3mgUiFaxLfHwsN+je3IX01EoANUeD6ptWPxPtc9zAA9++i98sv+Lhl9MRJbld6odK6+cd9oSoWdNARZKfhK+SNQYB6oP4ralP8PK/Z+ajkINiITiDwDpMa1w/7D/w7MXPIReaXwslciuHMJx1hy/s58BEmADYGHlvgr8ZOVMvLO1zHQUqkOkFP9TdYhvj38M/yMey38AnZN4G4rIbrQDH535PceZ3+g0pZcQUs8ITyRqCgWFxXtXYG/VfuSmZ8Mhzvo1kiHV1dWo9nhMxwiZFjGpmNC1EEPaDMCq/WtQ6Wv+JkZEFHoyQf90+4vrd5/6vbPmABSUFsQe8styKeEMXzRqqqyUHrhv0M+Rkcjd30yL9OJ/FgGsPvA5/rTqIRz1lptOQ0R1EVp7e+yLXTVklfe0b9f22pySgk8k5MDwJKPminPE4kfn3IKJGYWmoxi1tWI7lu5dhUszChDniA3ruaOu+J9CQ2Pp3pV44NNHUemz3loHRNFOu/z7ll/xXpszv1/r2HHGtJ6DADEk9LEoGHzaj8V7V+DTg1/i3JZ9om7nN7/246WNb+L/PvkzluxbgeLt78ElXchK6QGHCP1St1XV1fBEafEHTuwz0BGTMyeifVJbrOA+A0SWoh1i6Y7Z62ed+f1aG4COU7NaC4GJoY9FwbTLvQdzttVMDuyTlhUVcwM+O/glfr7qPry387/waz8AwO2vwrJ9H6Nsx4dIciUiM7kbhKh1sKvZor34n0pAoHtyF0zJnIjUuFSs2vsZ9HePHBORITJW/Gv7K+uXnvn9Wj8V8+aM7w2H+jr0sShU2se3xe29r8dF7UdB1P5rtrXtlTvx72+ew4Ldixp8bUZiJ9ySdQ0ubD8yqH8XLP7182kvZm+cg+e+nW06iuWlxCQh3hEPl3TBq7xw+6pQ6XfDp3ymo5HdCQCp/p7LCt5bX9uPzlazIuBBSKSGOhuFVmZKN9zS8xqMaptrOkpQ7HbvxXMbXkXxtvknr/gD1TOlO2ZkTcfwNkObnYPFP3BVqhrPrX0Vb24sMR3FiBgZg9x2g3Fuq37olpKB9LhWSHYmIsYRW3OLqp5BEiEEFBR82o9KXyUOVR/Brord+OrIOizZuRLbK3aG7/8I2ZJwas/SK8riTl0B8OTP6npTbnHRPCEwJrTRKFwyk7vh6u6XYXSHfDiF/R7wWH9sE17e+NZpQ/1N1a9Fb9yWdT0Gt+rfpPdXVVXB4/U2/EI6TYW/Ev/+8j+Yv31hwy+2sbbx6ZjQbSyy089Fh4R2iBUxITuXhsZhzxGsPboR/925BP/dvhgKnH9B39EufLv8irm9a/tZnQ1AXknhvYD4TehikQmtYlviks6jcUnnsWgf39Z0nHp5lRcL9yzFW1tK8cnBz4N+/GGtB2FGr+k4JzUr4Pew+DffYe8RPPz5k1iye6XpKEEzpM25uKL7Jeib1guxMnQFvyEaGnurD+B/u5bixbVvotJXaSwLWYOOxzPLL517U20/q7MByCkpHC0h3gtdLDJJQGBQq/64uP15OL/dCKTFpJiOBABQWuPTg1/g/V0L8cGu/+FYGJ4vP69tHm7NurbBPRbcVVXwsvgHzb7qA/jrZ4/i0/323IU8I7kTbjnnGgxu1Q9O4TId52wC2Ft1AHO2lOGN9cUcGYhSMkGPXTKhrNZaXmcDMGDe6MR4j+swFwSKfA7hQP8W5yA3PRu56dnITO4OGaJZ87U55DmMVfvXYOm+j7F038c47DkStnOfIIXA6Pbn4+asaeiY0P6sn7P4h84O9y786ZNHsO7wBtNRArfmqDMAACAASURBVDKuy8WY1vMKtIppaTpKwBQUPjnwOf625jHsdx80HYfCRUADiYnLJr9e65Kd9X7K55UULANkTmiSkVUlORPRr0Vv9G9xDnqmdEeP5K5oF98mKDPo3X43Nh7bgrVHN+Lrw+vwxeGvsbl8WxBSB4dDODC+82jckHk12sS1BsDiHy4byrfgj6sesuzEtht7X42J3YpCek8/5ITAxvIt+Ntn/8K6w5tMp6FQc2LbsivnZtT14/obgOKiP0Pg58FPRXYT74hD+4S26BDfDm3iWyMtJgWprhQkuRLhki64hAsOKaG0gsfvRaW/Eke95TjsOYIDVYewu2ovdlTuwv4qe1x9xMgYXN6lCNd1mQzhj7zHKC1LCHx1+Bv8YfVDlrlSnd5rEq7qMRGuCBsM3VixFX9a/TC2HttuOgqFiIgTLy2dWDqtzp/X9+a84qJxECgOfiwi69NuoIUjFb/KvhP9W5xT7+NaFGQCWH1gDf60+mEc9ZjZZ+C8jsPx4363It4Rb+T8YXH87/l3Hz/IZZwjkE5Uly6/ZN6cun5ebwOQPf/i1BiP8yAgQ7+eKpGFaLcGTlmDpX1CW/wq+05kpfSA1uwEwkVDY/HelXjg03+iyheeLZZbxbbAn/J+jS4J0bPBloLCc+tm45V1b5mOQsEioGPbVKYsvGBhnR10g2ObOcVFK6RA81dOIbIDDaBKQ9exAFv3lC64Z/AdyEjoGNZY0U4Ljfe3L8RDnz8Bn2reOhD1md5rEqb1uAIBfDRGpD3V+/Hzpfdid+Ve01GouZx627Iry+q8/w/UsRfAqTKm9uwKgVHBS0VkURrQVadf+Z/pUPURvLt5Hj458DnObd0XSc7E8OWLYgICPVK6YkrmRKTEJmP13jVB3WcgxZWMx/L/ghFtchCtxR8AkpwJuKxrIaq1B18d/NZ0HGoG7ZJv7Hh1XZ3D/0AADUDHq7OUELg+aKmILEpXod7if6p97gN4e9NcrD2yEQNb943s+8QWIiHRO7UnJvecCId0YM2Br5p9zJHtc/DwiN8j1WWNtTDMExjcagBy22Xjve0LubOjHQnAmeD40bYX125t4GX1KygtiD2icRCQCcFLR2QtZ97zb6zzO47AD/rdiGRHUvBCUYOqVBX+s/ZVvLWxtEnvv2PALRjXeTTnddSh0l+JO5b8H58UsBkl4ItvUxm/8IKF9X6qBTTWlVtcVCIEioITjchCAhj2b4zxXcfglt7TECfjgnNACkiFvxKPfvksPtj+UUCvl5D4x6g/oGdy9xAnsz8tgN+v/hsW7VpuOgoFKsa/Ztnl753b0MsC2jC+09VZbYRAQfNTEVnI8Ql/wSr+ALD28Aa8sv5tKCj0adkLDhHQPzFqphjpwoi2w3BJ1zHYUbkL28vrXkwowZmA5y78BzoldAhjQvsSAPI75MEHP744+I3pOBSIWPGv7S+vb3DXrYA+nTKmdz8ELX/Q/FRE1qHdAEI0ofzzg1/j5fVvIiEmHlmpPSAFn6QNhzhHHM5vPwJjMy7AhqObsce977Sft4hNw6wLH0GKK9lQQvsa1KofkmOT8fHeT01HofpIwBnjuHnrS+sONfTSwKa7aoi8kqK1EMhsdjgiK3DX/ahfsDmlxA/63YyxnS6EjOIZ5iZsr9yJ+z/9B9Yd3oQ28a3x1Pl/t/dSvhbw/s6P8MCnj5qOQXWROLDsqrmtA3lpwJ9GeSWFfwfEnU1PRWQB+sSVf/gnfcU6YvGTgbcjv20uovlRMxM2lG9Gp8QOLP5BUrb9Q/x9zeOmY1AtRJx+aenEsjqX/z3V/7d352FyVWUawN/v3FtVvWRjx0mIIxBUFgUTkg6DMnFAku5OjAsgBAbBCOIyDqCAOgPGHQSdQZQRFDEKDgQUQm/ZIJ2ll4QmJEKckI3s+9bptaru+eaP7kBAEnqpqnOr6v09Dxof+p77aiTnu2ft8QTlKVNGJAC5tu+xiBxTAI46fwAINMDCbQ14ZkMNTh00/B1vHaT0ODY6BD7XY6TM6YPeh6JoMZp2LXcdhQ4ngB/1v7bxT69t6MmP93hi8kDrgEWwaO57MiK3tF2hjjr/w7XEW/AfS36CK+fdiFcO/B8HAygrfea9pfjUqdwcFibq27g38ODinv58j0viXTNWBqdcffpHADmrb9GIHFFA2wCE7DyT9qADszfNx/NbF+Hs4z6A4wqy5355IgAYdcK5WHVgDba2bncdhQAYI/WLyub+tsc/35vGVfTZ3kcicki7D/mx7r/8j2Rr63Z8ZeEduGnhbdjYduTta0Sho8D3Rt2O4wtZvIZBEJWHevPzvSoAEpFkBSwSvYtE5I62a9q2+qXa2ubX8cX5N+OWhjuxvWPXuz9AFAIGBr/66N0wvetOKMWsr0HhwNZeXefYq1Ux2/6wrnPYlBElIhjRu2hEGaaAtmnohv17ouuegSqsbl6Hc48/G4UeTxWkcCswMXzw2BGYt2Wh6yj5K4JliyfMe6A3j/S6ZBPRp3r7DFFGvTHs7zpI/zTueAmfm3sjfrLiARwMWl3HITqqkcd9GB8fxotjXfHE6/W+zF4XAMnO2EyLNF7ITdQfCqANWTPs3xMvbF6Iz866Hr9c+QjabYfrOERH9I0P3YQBUV6IlXEG2lnc+WRvH+vTBqSxlRPmAHJxX54lSpssHvbvjSkjPo0rT/80IhJxHYXo77x2cC2+tvDbrmPklxiWN3yq+tzePtanVRsKPNGX54jSxgLIgWH/nnhs9Z9RXn01/ryhEslcGuqgnHDGwNPwsaEXuI6RXyLeg315rE8FgK/mae4GoNDQQ4f8uA6SWb9+dTo+WXM1arY8D4vwbnOk/HPrOTe6jpA3rK+BNck/9eXZPp2NufHx1R3Drj5tpEA+0JfniVJGNZSH/GSKVUXDjiY8vf45DB3wHgwfMBTCowXJMV98DC4YhKU7l7mOkvuiaFgysSZzIwAAADWP9/lZolQI6Ql/LnQkO/HDpp/js3On4sXdvK6V3Js4/BMo8rmFNd1MFD/v87N9fTBhTYVVtPT1eaJ+sfmx4K+3WuIt+M6SH+OqeV/iPQPklKjglnO/7DpGbotofDDwXF8f73MB0DSpok3E9urUIaKUUOTNgr++2tO5D7cuvgvXzf861hxcDxFWApR5F544GkV+kesYOUuNzKkprens6/P9O7tRven9ep6ot7q//JWdf48cumfgK4tvx6a2La7jUJ4RCL7+oS+6jpGbDGAick8/m+i7hqWjnrewG/vTBlGPqebECX8urN6/HlPn34JvNk7Djk7eM0CZ89GTx/CegDSwHvbWl1X16+zlPu0CeENtrZ5y1RnHiuCifrVD9G4soO1g599PO9p34S/rq7CmeT3OPf4s3jNAaWdgIAZYvmel6yg5xcTwwOYPrJnTrzb6G8KHPNrfNoiOyubG2f5h0rCjCZ+beyPuWfFLtPCeAUqz8vd+wnWE3OIJErHgF/1tpt8FwKLyynWAzu9vO0TvyHKrXzrN27wAn5l1PR7826O8Z4DSZrA/CCOGvM91jNzhYcWL42dv6m8zqZmYUXkkJe0QHc5q11Y/5Sl36fbM+mpMrrkW09c8iQSSruNQDrr2jCtcR8gNApgofpqKplJSAGhr0VMWdl8q2iIC8OaXP/v+jHrstadRXjUFT2+oQsB7BiiFPnzc2a4j5ASJ2PZBxs5IRVv9WwTYbfNTK5PDp4w4CZCxqWiP8tyhOX92/s407VqOJ9b+BccXHofTBv8jjxemfvPEw7I9f8Wu9j2uo2Q1icoj8yfWPJuKtlK2N0OM/XWq2qI8FvCEv7BIWoufLf8fTJ51LRbubISyIqN++tSpZa4jZDdP4HmmX3v/D5fSsr7kudJ5YvDxVLZJecQC2grw0z+cBkUH4I7z/g0jj/8wf4uoT5qTB3HZ7KmuY2QtW4hlSz5Z/ZFUtZfS0xnEs326kYjojQV/7FlCqznegm83/ghXzf0SXj2wivcMUK8NjgxC1ERdx8hOBoh48oMUN5k68RN3PWuhW1PZJuU+DbjgL5vs6dyHWxbfiS/MvxlrWta7jkNZRFUxbug/uY6Rnbyg2S9unZnSJlPZ2LaHttlhV51RKMJpAOohq0Cb6xDUF82Jg6jaMBeNu5rwoePOxKDIQNeRKAt4nocXtixyHSP7FHj3LB4/d14qm0z5Ac0RYx+yFjxRhN7VG1/+lNVW71+PL8y/Gd9snIadnbtdx6GQO33QP7qOkHWshySiyf9KdbspLwAWldbsMsAfU90u5ZgAQBu3+uWSFXtW4pp5X8G0l36K/YkDruNQSA2ODnIdIev4UTzVMH723lS3m5YrmtTo/elol3JE0L3Pn3JS3fYXccWcG3Dvil+iJeAQD72VBw9FfpHrGNnDBwJPvpeOplO6BuCQzY+v2Tn0qhEfFcGp6WifsljAQ37yxbrmDXhy7bNoDdpw9rEfhC++60gUEqub12FjyxbXMbKCRoKljZ+s+XE62k7bJc2esT9LV9uUnfTQIT/s/PPKX9ZV4ZM1/4o/rJ3BewYIAHDGYH4b9ogRIOp9J23Np6vhugk11bD4a7rapyyTRNecP+WtP656CpOqrsFfeM9A3hs+YKjrCNnBw+uNpdVz09V82goACFQ9e3fa2qfskeScP3WxsPifV3+PSTXXYPaW+VDh/y/y0QmFx7mOEH4G0AJzByR9Y6bpKwAAxArbn7CwG9L5Dgq5QKEd/EOe3ippA9y3/EFMnnUtFu1cwnsG8kxRpNh1hNBTH7uGtxY+lc53pLUAqB1XmxTIvel8B4WXJnnCHx1dR7IT33/xPlw+dype2ruCxwvniSKv0HWEcBPAxDBtxuUz0jpXltYCAAASgfcIYHk6SL5JAuCwP/VQc7wF32r4IaY8fxNWHlgFCCuBXBY13BFyNBqxB6NFbb9N93vSXgA0TapoUwh3BOQR5Zw/9dHu9r24efGdmFr771jb8rrrOJQmImnverKXASTm/7h2XG3aT9TNyO+CSUQegEXKTzGiEEoqwDl/6qdNLVvx5QW346t138bmNt4vlms8ScsRNLnBQ2ubH8/IYXoZKQDqJs88qEbvy8S7yB1NANoOzvlTyqzevxZfmH8zZrye0kvQyDEu+jwCAVBgfrTi0jmtmXhdxsZhrOgDFnZfpt5HGZYAv/wpbXa2cxlRLrFqXUcIpwha2/z4f2fqdRkrAJaU1jQbNVwLkIsS4FY/SquOZKfrCJRCliMAf08A8XB3pr7+gQwWAAAQGHs/1wLkFk1ynz+l34H4QdcRKIUSQdx1hPDx0Rod1PbzTL4yowXAktKaZhX8JJPvpDRKKtDuOgTlg21tO1xHoBRqS/IPjrcQQGLy3dpxtS2ZfG3m92K0Fj1goVzWm+0OLfgjyoCtrfwjI5e0JDM2yp0VJCp7o8WtD2T6vRkvABqueKpdND13G1NmKOf8KcOS1nLleA7Z2b7HdYTwMAKJ6u2Z2Pf/d6/O9AsBIHHyjkesxVoX76Z+4mp/ciSuCdcRKEU2HNzoOkJoWE+3RoraHnXxbicFQNOopoQYvdPFu6nvNM4vf3LnYCKj06OURqv2r3MdIRTEA7yY+ffacbVJF+93dh5jw5LR/wvYJlfvp97RuAKd7PzJHS4EzB3L97ziOkIoaExfrS+rTOuNf0fj7kDmadOsCm519n7qubgC3IZNjq3cu8p1BEqBQJM81wEAfECMuQHibnGL0xsZGkprahX2WZcZ6Og0rlD+s0ohUL+TA4a5YG/igOsI4RBBVX15VZ3LCM6vZAogt1kLJ/MfdHTKL38Kkb/tfY07AXLAqv1c/60xG/ie+ZrrHM4LgKVl1a8Zow+6zkFvw86fQmh/nF+P2W7htgbXEdwSQD3zq0Xllc5XQjovAAAg2RmbxouCQoTD/hRSqw6scR2B+kOARdvqXadwSqPaUhhEQ7ELLhQFwNJPP7PHqPkP1zkI0E6w86fQqtr4vOsI1A/7OvcjafP4JkAjkKjcXPupZ/e7jgKEpAAAgGFtxb9W6HLXOfJaJ7qG/olCqnFHE2+Sy2Iv7VnhOoJbBVjZsGT0I65jHBKaAmDG5TMCY90vishbnd2L/ohCblPbFtcRqI9mrH3OdQR3IoAaXI9p00IzBBKaAgAA6iZWLoTiMdc58o2y86csUrFhtusI1AftQTvWN+fvEcAalccby6saXec4XKgKAACQpH+bVfDMzwzRTuWwP2WVivVzuB0wCy3dnb8zvBLTdhNN3Ow6x9uFrgComzxzqwG+4zpHXuhUIO46BFHvWFisbuZe8mzz27/l6eCuB2hUbqm/dM5O11HeLnQFAAAMayv+Je8JSC/tVCg7f8pSD+drZ5Kldsf3Yntb6Pq/9BMAUSxvWDL6IddR3kkoC4AZl88INPBvAPJ5v0j6KL/8Kcut2LMSrUGb6xjUQ0+vq3AdwQ1fLXxcE6aFf4cLZQEAAA2TKl4C5H7XOXJOB9j5U0545vUq1xGoBxKawJ/XVbqOkXkiQKH5eUNZ9V9dRzmS0BYAACCJyJ2w2Ow6R67QDkATXDxFuWH6qhlIauA6Br2LWVvmu47ghETt9kTShOLEvyMJdQFQN3nmQfHsja5z5ALtAMDOn3LM3C21riPQUVhYPPjKo65jZJxEAI141zRNqgj1PFWoCwAAqCutqYJiuusc2Uw7lJ0/5aRfvPIwAnAUIKxqNj+PpM2zy14NgAh+31BeOdd1lHcT+gIAANRP3gzY7a5zZKOuzt91CqL0SFqL5zbyYKAwSmqAX77yW9cxMi+me+KFia+7jtETWVEANIyfvReQm1znyDrtYOdPOe/BVx5Fh+UNVmHzxzUz8u7iH4kA4plrmy6ZmxX3VmdFAQAA9WXVz0DxhOsc2ULbAU1y2J/yw/2v/MZ1BDpMc/Ig/rT6L65jZJYAiNon6sursmbLQ9YUAAAQt+argN3hOkeoKYB2Bdj5Ux6Zt3kBLwkKCRHB95t+5jpG5hXqHo3ol13H6I2sKgCaJlXsFsH1rnOElnbN+WuerbkhAoDb678P8I4A55buXoYVe1a6jpFZEYF6cmXXdHX28FwH6K1Nj61ZfcqU098DyCjXWcJGOwCw86c81R50wDMG5xx7pusoeSuuCXxpwW2wmkdz/0YghXiwobz6F66j9FZWjQAcEi1q+wYUa1znCJV2cNif8t7vVz3JqQBHRAR3Lr07v7b9CWCjdkPcmm+4jtIXWVkA1I6rbTHGXsO7AtA17N+uXPBH1O2Wujt5QqADsze/gGW7Q3vqbXpE1PoR+WzYD/w5kqwsAABgcWlNAyDfd53DKQXQoRz2JzpMc7wF05ru7VqVTRmxrWM77l3+oOsYmeUDGjV31pVVv+g6Sl9lbQEAANGith8odKHrHK50bfVznYIofJbsfAkz1s90HSMvxDWBLy/4lusYmSUAfFk0vK34J66j9EdWFwC142qTSS+YYmH3uc6ScW0KBBz2JzqS36x8DC/ve9V1jJymAtxS/59oS2blCHifSQzNBv4VMy6fkdVzTVldAADAi+NnbzKQ/NkaqIC2KTjFSfTubq//HrZ18BTxtBDgBy/9DKv3r3edJLMiAvhyVd3kmVtdR+mvrC8AgK5TAhX6K9c50k7RtdqfnT9Rj02dfyv2J7LiZNas8uu/TceibY2uY2SWEdgC/UU2nfZ3NDlRAABArKjtVmuxzHWOdNJ2hXLYn6hXkjaJ6174N7QE+TVMnU7T1zyJP6/LiT6w5wRATJcfK/pN11FSJafWyV5QNf40DUwTDAa7zpJSCmgbAMvOn6ivBkQH4NFx92OgV+w6SlZ7bO1TmL5qhusYGWcL0eJ5cnZ9edUG11lSJWdGAACgrrRmrQiudZ0jpbr3+bPzJ+qflngLrp53E/bF97uOkp1E8ND//SEvO39EBX5Er8ilzh/IsQIAAOrKq54F9Keuc6SKtivn/IlSpCPZiaufvwkbeVpgrygUP375fjy9rsJ1lMzzAYniR3WlNVWuo6RazhUAABAtavt21p8PoIC2gp0/UYolrcUX59+Cxl1NrqNkhaQm8fX6/8T8LYtcR8k8AyCChcPaiu90HSUdcmoNwOHOryg92Yg2Gcg/uM7Se9rV+fOgY6K0umLEZFw/4krXMUJrd3wvbqq9Dc2Jg66juFFgt/tR+dCi0ppdrqOkQ84WAABQ8lzZaIUuMAYx11l6TDnsT5RJHzz2DNw9+j8RM1HXUUJl8a4l+N7S+1zHcCcmCXimpGFSxUuuo6RLThcAADCmovTzRvA71zl6pPuQH375E2WWb3zcM/ZOnDX4/a6jOJfUAHcvvx8Ltja4juKMRAEt0KsbSmsec50lnTzXAdJty+OrXx425fRjBTLGdZajUgDt7PyJXLBqMWvTC9jVsQejTzwXRnJyedS7eq15DW5Y8E2sOZBnp/sdzgckJj9rKKu+13WUdMv5EQAAGPniyEhkxwmzBGac6yzviF/+RKERNVF8b8zt+Mix50A1P7bfdto47v3rg1iwpc51FLeMQIp1frSo7ZLacbU5f9VaXhQAAHD+nycf58c66gEzwnWWt1DtPuTHdRAiOtyIIafhzpG34MTY8a6jpJGiavM8/PeKh10HcU8AjWFdxDejFpVX5sUFc3lTAADA+ZUTzjDQBgNzjOssAPjlT5QF/nnohfjyWZ/HYH+g6ygptWT3Mtz98gNoibe4jhIKUoQD4uvIutKata6zZEpeFQAAcEFF6bhAMdsY+E6D2EMn/DlNQUQ99IlT/hnXv/9KHBMd4jpKn6kAL+5ahnuXP4j9nbwg6RCNaeD53ri6iZXZfX5ML+VdAQAAJZUTpgrE3ZiXAmhTKDt/oqzzoePOxJfO+jxOG/Be11F6rN12YN6Whfj1q9MRt3HXcUJFogKN6bUNZdXTXWfJtLwsAABgbEXp3RDclvEX88ufKCcU+QW47oNX4aL3XBDK6QELxdqD6/H7VU9g6c6XXccJJ18ghfrD+rLq/3AdxYW8LQBw111mzOglfzSQzB0DxgV/RDnpxMLjMWXEZ3D+iefiuNixXaN8DiSQxLrm11GxYQ5mb5rvJkSWEB/QKP7YMLH6XyGufsfcyt8CAMD4qvGx/YrqjGwP5Jc/UV7wjcHHh34MF75nDM4YdCqGxIZA0tS9xDWBrW3b8fKeV1C9cR5eb96UnhflGg8wBfb5/e2DJqy8fEbezonkdQEAACPnXDw42hFdCINz0vYS273aPy9rTCI6sfB4lJw8Eh8Ycjr+oehkHF94HIq9QkRNBJ6JQAAI5M1zBwSAAhYWCZtEh+1Ec2czdnTswoaWzVi2669YtnsFkpZfFL1mAC3UV70gOrZu8sw8veSgS94XAAAwumr8MC8w9TAYlvLGLbqG/fPkQBEiotAygC3QrbGIjlo4YdY213Fcy8/zLt9mSWnN5sCzlwK6J6UNW+3+8mfnT0TklAA2ovv8iH6cnX8XFgDdlpTWrIToBKtIzakYb3z5p6Q1IiLqjyhajedfXDdh1irXUcKCBcBh6ktrlnrAJGvR2a+GOOdPRBQOAmihxiUipbl8tW9fsAB4m7ryqhc8wRUWNuhTAwE7fyKisNCYBsYzn64vr1rgOkvYsAB4B3XlVc8K5HrYXnbjHPYnIgoNiUIlIv9aX15V6TpLGLEAOIKGsurpYvTGHj9waMEfe38iIvcKBIjhCw1l1Y+7jhJWLACOoq6s+mEovvJuP6cBoK1g309EFAYxgfhyY31Z9e9cRwkzFgDvor686ldq5eYj/oBVoJ09PxFRGEhMgKh+rb688iHXWcKOBUAPNEys/C/Vv784SAPO+RMRhYXEAET1Gw1l1Q+4zpINeBJgL5RUlH5TBPcAeHO1PxERuRcTaFRvbSyr/pnrKNmCBUAvja2c8HWo/Je2sPMnIgqFAgEi+jV++fcOC4A+GFtR+mUE+kttd52EiCi/SQEA39zIOf/eYwHQRyWVE6ZKHA9pJ/83JCLKOAEQgUoMX+Bq/75h59UPYytKr7FB8Kh0GMOFgEREmWMLNfA8c019edWfXGfJViwA+mnMc2WTYIMZ0m6i3A5ARJRmAmiBxruP9+UJf/3AAiAFLqgoHWeTtgKdUsQagIgoTQwgUWkVTybUTaxc6DpOtmMBkCIXVE4YFQQ6WzrkGFjXaYiIcowIbAH2ehF7cX1pzTLXcXIBC4AUGlNR+kFRnY0ODEPf7hIkIqK3MwAKZFPg6cVLy6pfcx0nV/AkwBRqLK/6mwkiY0xM/iq+6zRERDnAB1BsXw4MRrPzTy0WAClWN3nm1qRvL7Qx87xEOcBCRNRXEgG0ALNNIvaxpeVV213nyTXsodLkzCcviw4qbvkt4rgana7TEBFlmahAYvpo/KSdNzSNakq4jpOLWACkk0LGVpb+EIF+i6cGEhH1jHQd7fu9+tLq70K4typdWABkwJiK0s8jiYdNXH3lDgEioncmgBQiob5e11Ba85jrOLmOBUCGlFSNv0iT8ozpxBDlDgEiorcygMaCfeJ7ExvKqhe7jpMPuAgwQxpKa2ohZjQKsRo+6y4iojf4gBbqqogXGcXOP3NYAGRQ48TK1R7MGCnUudwhQEQESFSgBTK7IBkrWVReuc51nnzCAiDDFpVX7osWtU3QKO6TQnAShojylhQKNKZ3D28rLq391LP7XefJN+x+HCqpGj/Fxs1vvYTGuC6AiPKGCDSW7ETEu7axrPoJ13HyFQsAx8ZUlI00Vp/RuA5D0nUaIqI08wRaYDf68CYtnli53HWcfMYCIATGzrrkRI1H/iRJfFw7ueWViHKTxAD1zZyEylVNkyp2u86T77gGIATqL52z85T24k9oVH8gRQII6zIiyiECSExUI/LdU9qLJrDzDwf2NCFzQdX40sDqY9LuDUHA0QAiynJGoAV2n+fjc3WlNbNdx6E3sQAIobEVpe+1wAyTwPmcEiCirBUF4GtjMmove3H87E2u49BbcQoghOrLqzYcPpuyygAACgpJREFUY+xHEdWfowgs04gou0jXFj+J4afNHQM/xs4/nNi1hNwFVeNL1WK6dpjjkORoABGFnCdAxO42UUzhkH+4cQQg5OpKa6okGf0QYnheCoQlGxGFVwxAIWarRM5m5x9+LACyQN3kmVtPaS/+hEb0O7ZAA/FcJyIiOowBtECSiMhtDUvPn9D4yed2uI5E747fk1lmTEXZSKh9TBLyfsQ5JUBEbkkU0Ki+amCuriuvetl1Huo5jgBkmcbyyiZpKz4PMb1figEY1nBE5IAAEoNqVO6LFbePYueffdh7ZLGSirKLJQge1UCGIu46DRHljQggvm4Rz1xTV171gus41DccAchiDeWVcz3PO0dieFSKhL+bRJReBpAiQKLym3hR8ix2/tmNIwA5oqSidLxYeViTOoxrA4go5brm+jdCZGpjWfUc13Go/1gA5JDRVeMHeSr3wOJGbQdgXScioqxnABQAYuSBaHHrt2rH1ba4jkSpwQIgB42tnPBxG+jDEsipiAPggAAR9YHEABishidT68urFrjOQ6nFWeMcVF9W/by0DzhbovihxiQJj3UeEfWceIAUaUIj8t3BET2HnX9uYs+Q4/6p+tKzbOD9jyZxITqVowFEdGQCSAEAH/PF2C/VTZi1ynUkSh8WAPngrrtMyflLr1ME90rcDOGWQSJ6O4kCiGCvwtzSUF45HcLPhVzHAiCPjJxZfnzUC36AhNyApIomXSciItfEE6AgsArvQUSSdzaMn73XdSbKDBYAeWhMRdlIiP2FSWIsOgHlbgGi/CPStcjPxyKj8tXFEyuXu45EmcUCIF/ddZcpGb3kamP1p5o0J2qc6wOI8kZUAM9uhy+3NpRW/4nD/fmJBUCeG101fpBnzR1BEreYQGNIuE5ERGnjCzSqHWLkp7Hi1nu4pz+/sQAgAMA/zSwfbo39ERRTtFMBrg8gyhniAYgJYDA9MPY7S0prNrvORO6xAKC3GFs1/nxVuU8CfFQ7AQSuExFRnxkAMYH4Ol8D79aGSRUvuY5E4cECgP6eQkqqx5er4keSMGcjrjxWmCibGECiAo3ociP67boJNdWc56e340mA9PcE2lBa89zw1oHnGh/XSDHWo4C3DRKFngAoEGihrIUnVzYsGf2RutKaKnb+9E44AkDv6swnL4sOHHDwC0b1Tk14J3NEgChkDICIABHdJjDfjZ+8/XdNo5q4pJeOigUA9VjJE58tlAGtN2hS74DKyegUQPlhQeSMARAFENGtgPw4VtT2m9pxtR2uY1F2YAFAvVbyxGcLpbjti2pxh6i+RzvBEQGiTDKARAQwdgs886Nocesj7Pipt1gAUJ9d9MJFBZ1tRVMlkNtVdZh0CtRyRIAobQyAGKC+boTgJ8cAj9SU1nS6jkXZiQUA9dvIF0dGIjtOvFKs3K4WZyIOIGAhQJQq4gk0CqhvX/HU3N158o4nOMdP/cUCgFLnrrtMyZjGMlXcYQJzgSYUPFmQqO8kAiAKqMFCUbm7vqyKK/opZVgAUFqMqRp/oVG5GaqTNS4GCfCuAaIekqgAUWsV5s8C/Ly+vKrOdSbKPSwAKK1GPzvxfZ4XfBVWpqrVQdxCSHQEbyzsQ7P6+pCoPFBfXrXBdSzKXSwAKCMueGbSQPWT11nFvxnV05AANAmOClDekwgAXwDfrlbI/SYR+X3d5JkHXeei3McCgDLrrrvMmNFL/sUANwWqk0xCPCTAUQHKLwIgCljfBgbeM+LZB+sbx7yAadP4TwJlDAsAcqbkubKhEJ0qEnwRgRmqcQGSHBKg3CURQH2BeNgE4CFJ+o/UTZ651XUuyk8sAMi5i164yO9sL5wgKtcFgUz0AvhIKpQ3EVIuMAAigHiSUMFMEfwuWtw6q3ZcLS/dJqdYAFCojJ11yYmaiEwRxXUAztEEIEmFcmCUsogYQD3p+uL3dLkAv4sH3mNNkyp2u85GdAgLAAonhVxQNWGkBa4R6BWaNCchqQAXDlKYRQDxBfCD7YD5Xw28PzRMqnjJdSyid8ICgELvohcu8jvaisYZ4KoA9jNe0huoLAYoJMQXIKIQkQOBwdPG2MeHtQycP+PyGZzEolBjAUBZpeSJzxbKwJYyKC5DYMqgKNYkuk8cZDVAGRIBxAesJy0GqLTAkwXFrVW8kIeyCQsAylrd1xNfqsBnJJBJqhgkgXadL8A1A5RKBoDX/bUvOKCenanWe6pgQMtsdvqUrVgAUE4YXzU+1gz8i6pMArRcrQyVpECTCnAglvpAPAA+oD4gkM0QVFjRmQdbB8xbefmMuOt8RP3FAoByj0IuqCz9sALlEJ0IldE4NDKQFEA5VUDvQKT7Kx+AQNWgUQUVvkrF4vLKFbyEh3INCwDKeWOenXiS8YJPqNhLBLgE1pzcNTIgXdcW84/1/CR4o8NXI4BgmwjmCDBHI4nZ9ZfO2ek6IlE6sQCg/KKQkqoJZytwiYFeAujHEHhFGnRPFQRgQZDL/DeH9qHSCsECFczxvGD24vGzVvIrn/IJCwDKayNfHBkp2HnCyEDlY1C5SCwuhGAQkoDa7qKACwqzUtdhPN0dvieA4oB6uggqtQosSJ6846WmUU0J1zmJXGEBQHSYy568zNtU0P5hMfZCK1pigBKovE8PjQ4EACynDcKna/4evkJM169V7DqxpgGCRhi7cFjLwBXcm0/0JhYARO9i7KxLTtTAGyPWlKiiRI09z1hzjFpAbPedBRYcKcgUOfRVj67teUYAYK8VLDNAoxrbIF7QyDl8oqNjAUDUWwoZW1k6HKLnATgPKudBcR4Ew7qKAnSNElh03WHAwqBvTNdfYroW6Un3XnwoNkF0GYBlorJMrFm2eGLFJs7fE/UOCwCiFBk55+LBBQn/g4E1ZwlwJsSeCTVnQXDKoRECtQBUIW/8Gvk7nSDd/2IAGO36kjd44wvfwm401ryqgpVi7Eprzatq7N+WlNY0uw1OlBtYABCl2ciZ5UVR0VNh7OlQOR2ip1uV043itEAxzAh8gUKtQLR75EAB2O4zC7KxSJCuv0QAiEANIKJQEYinUAisIukJNsPoGqisgegaUVmjKmvjKuuaJlW0uf6vQZTLWAAQOXTZk5d5W6KdJwV+8hQDGW7FniIqwwU4GaInAXoSrDkJBse+UQhoV13wRtHQ/e9A1987NBKuCkAFh6qHN3/V/evu/yBypPpCANHD/r50d+pdHTgEENP1azn0eukasgd0D6zsgNGdUNkB0W0W2GREN1prNkW9YOPChpIdmDaNEyREjrAAIMoCI18cGYltHnqCeMEJgRcMMdYMCYBjRGWIGDtEgWMEKLZAkUCLoKZQgCKIFgFaCMBXwFPAM1274D1rjQcAxtgAQGC7zkkMpGuvQxKQdqi0KdAGse0KaTNAmwKtAuxTa/YD2GdE91tj93uBt9/4yZ1tJ+zeze11ROH3/wkDtKW8QitpAAAAAElFTkSuQmCC"

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(9);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 9 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(11);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(8)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(false);
// imports


// module
exports.push([module.i, ".About-button {\r\n  cursor: pointer;\r\n}\r\n\r\n.bonfire-slideout-content {\r\n  background: black;\r\n}\r\nh1 {\r\n  color: white;\r\n}\r\n.bonfire-slideout {\r\n  position: fixed;\r\n  z-index: 100;\r\n  bottom: 0;\r\n  left: 0;\r\n  top: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  transform: translateY(100%);\r\n  transition: transform 0.8s ease, left 0s ease;\r\n  background: black;\r\n}\r\n.bonfire-slideout-inner {\r\n  max-width: 100%;\r\n  max-height: 100%;\r\n  overflow: auto;\r\n  overflow-x: hidden;\r\n}\r\n.bonfire-slideout-inner-inner {\r\n  padding: 10%;\r\n}\r\n.bonfire-slideout-active {\r\n  opacity: 0.99 !important;\r\n  left: 0 !important;\r\n}\r\n.bonfire-slideout-active-translate {\r\n  transform: translateY(0);\r\n}\r\n\r\n.bonfire-slideout-content {\r\n  max-width: 920px;\r\n  text-align: center;\r\n  margin: 6em auto 0 auto;\r\n  padding: 0;\r\n  font-size: 22px;\r\n  line-height: 30px;\r\n  color: #ccc;\r\n}\r\n.bonfire-slideout-content h3 {\r\n  position: relative;\r\n  display: inline-block;\r\n  /* margin: 0 auto;\r\n  padding: 0; */\r\n}\r\n.bonfire-slideout-content h3::before,\r\n.bonfire-slideout-content h3::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 50%;\r\n  height: 0.5px;\r\n  width: 300px;\r\n  background-color: white;\r\n}\r\n.bonfire-slideout-content h3::before {\r\n  left: 150px;\r\n}\r\n.bonfire-slideout-content h3::after {\r\n  right: 150px;\r\n}\r\n\r\n.bonfire-slideout-close {\r\n  color: white;\r\n  cursor: pointer;\r\n}\r\n.bonfire-slideout-close:hover {\r\n  opacity: 0.5;\r\n}\r\n.bonfire-slideout-close {\r\n  /* background-color: red; */\r\n  opacity: 1;\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  cursor: pointer;\r\n  /* margin: 20px 40px 0 0; */\r\n  /* padding: 20px;\r\n  width: 36px;\r\n  height: 36px; */\r\n  transition: all 0.25s ease;\r\n\r\n  /* \tbackground:url(images/close.png) no-repeat center center; */\r\n\r\n  color: white;\r\n  /*    z-index:1; */\r\n}\r\n.bonfire-slideout-close .X {\r\n  display: none;\r\n}\r\n.esc {\r\n  margin: 20px;\r\n}\r\n@media screen and (max-width: 1024px) {\r\n  .bonfire-slideout-close .esc {\r\n    display: none;\r\n  }\r\n  /* .bonfire-slideout-close .X {\r\n    display: block;\r\n    font-size: 3em;\r\n    margin: 20px;\r\n  } */\r\n}\r\nspan {\r\n  color: #ff7f00;\r\n}\r\ndiv.bonfire-slideout-content p:nth-of-type(1) {\r\n  position: relative;\r\n  display: inline;\r\n}\r\ndiv.bonfire-slideout-content p:nth-of-type(1)::before,\r\ndiv.bonfire-slideout-content p:nth-of-type(1)::after {\r\n  position: absolute;\r\n  content: '';\r\n  top: 100%;\r\n  background: #ff7f00;\r\n}\r\ndiv.bonfire-slideout-content p:nth-of-type(1)::before {\r\n  left: 0;\r\n  width: 100%;\r\n  height: 1px;\r\n}\r\ndiv.bonfire-slideout-content p:nth-of-type(1)::after {\r\n  right: 0;\r\n  height: 1px;\r\n  width: 20px;\r\n}\r\n\r\n/* My Skills */\r\n.ends i {\r\n  font-size: 2em;\r\n  padding: 10px;\r\n}\r\n\r\n.ahref {\r\n  text-decoration: none;\r\n  color: #ff7f00;\r\n}\r\n.contact {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 100%;\r\n  font-size: 2em;\r\n}\r\n.contact :first-child {\r\n  padding: 0 20px;\r\n  color: #ff8000;\r\n}\r\n.contact a:hover svg path {\r\n  fill: red;\r\n}\r\n@media (max-width: 900px) {\r\n  .contact {\r\n    background: #ff8000;\r\n  }\r\n  .contact :first-child {\r\n    color: white;\r\n  }\r\n  .contact {\r\n    font-size: 1em;\r\n  }\r\n}\r\n", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(12);
$('.toggleSocial').hide();
$('.Social-button').click(function(e) {
  e.preventDefault();
  $('.toggleSocial').animate({ width: 'toggle' });
});

// $('.Social-button').click(function() {
//   // $('.CircleSocialIcon').RemoveClass('moved-social');
//   if ($('.toggleSocial').hasClass('transformed-social')) {
//     $('.CircleSocialIcon').removeClass('moved-social');
//     $('.toggleSocial').removeClass('transformed-social');
//   } else {
//     $('.toggleSocial').addClass('transformed-social');
//     $('.CircleSocialIcon').addClass('moved-social');
//   }
// });


/***/ })
/******/ ]);