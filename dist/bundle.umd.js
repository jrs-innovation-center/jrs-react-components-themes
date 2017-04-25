(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.JrsComponentsThemes = global.JrsComponentsThemes || {})));
}(this, (function (exports) { 'use strict';

var Dark = {
  themeName: 'Dark',
  themeStyles: {
    panelBorder: 'ba bg-black-50',
    panelBackgroundColor: 'bg-black-50',
    panelTextColor: 'white'
  }
};

var Light = {
  themeName: 'Light',
  themeStyles: {
    panelBorder: 'ba b--dark-gray',
    panelBackgroundColor: 'bg-white',
    panelTextColor: 'black-50'
  }
};

exports.Dark = Dark;
exports.Light = Light;

Object.defineProperty(exports, '__esModule', { value: true });

})));
