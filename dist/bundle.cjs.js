'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backgroundColor = 'bg-black-40';
var textColor = 'near-white';
var paddingAll = 'pa2';
var borderRound = 'br2';
var h2 = 'fw1 f3 mt1 mb0';
var childBorderColor = 'b--black-10';

var dark = {
  themeName: 'dark',
  themeStyles: {
    panelBorder: ("ba " + borderRound + " " + backgroundColor + " b--black-90"),
    panelHeader: (paddingAll + " " + backgroundColor + " " + textColor),
    panelH2: ("" + h2),
    panelChildrenSection: (paddingAll + " " + backgroundColor),
    panelFooter:  (paddingAll + " " + backgroundColor + " " + textColor),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll + " " + backgroundColor + " " + textColor),
    listUl: "list pl0 mt0 measure center",
    imageListItemLi: ("flex items-center lh-copy " + paddingAll + " ph0-l bb b--black-10"),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto",
    imageListItemSpanTitle: ("f6 db " + textColor),
    imageListItemSpanDescription: ("f6 db " + textColor),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll + " ph0-l bb b--black-10"),
    simpleListItemDiv: "pl3 flex-auto",
    simpleListItemSpanTitle: ("f6 db " + textColor),
    simpleListItemSpanDescription: ("f6 db " + textColor),
    cardArticle: ("mw5 center " + backgroundColor + " " + borderRound + " " + paddingAll + " pa4-ns mv3 ba " + childBorderColor),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor + " " + paddingAll),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor + " mt0"),
    button: ("f6 link dim ph3 pv2 mb2 dib " + textColor + " " + backgroundColor)
  }
};

var backgroundColor$1 = 'bg-white';
var textColor$1 = 'black';
var paddingAll$1 = 'pa3';
var borderRound$1 = 'br2';
var h2$1 = 'fw1 f3 mt1 mb0';
var parentBorderColor$1 = 'b--black-90';
var childBorderColor$1 = 'b--black-10';

var light = {
  themeName: 'light',
  themeStyles: {
    panelBorder: ("ba " + backgroundColor$1 + " " + parentBorderColor$1),
    panelHeader: (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelH2: ("" + h2$1),
    panelChildrenSection: (paddingAll$1 + " " + backgroundColor$1),
    panelFooter:  (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    listUL: "list pl0 mt0 measure center",
    imageListItemLi: ("flex items-center lh-copy " + paddingAll$1 + " ph0-l bb " + childBorderColor$1),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto",
    imageListItemSpanTitle: ("f6 db " + textColor$1),
    imageListItemSpanDescription: ("f6 db " + textColor$1),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll$1 + " ph0-l bb " + childBorderColor$1),
    simpleListItemDiv: "pl3 flex-auto",
    simpleListItemSpanTitle: ("f6 db " + textColor$1),
    simpleListItemSpanDescription: ("f6 db " + textColor$1),
    cardArticle: ("mw5 center " + backgroundColor$1 + " " + borderRound$1 + " " + paddingAll$1 + " pa4-ns mv3 ba " + childBorderColor$1),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor$1 + " " + paddingAll$1),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor$1 + " mt0"),
    button: ("f6 link dim ph3 pv2 mb2 dib " + textColor$1 + " " + backgroundColor$1)
  }
};

exports.dark = dark;
exports.light = light;
