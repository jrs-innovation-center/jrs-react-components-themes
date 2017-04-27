'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var backgroundColor = 'bg-dark-gray';
var textColor = 'washed-green';
var paddingAll = 'pa2';
var borderRound = 'br2';
var h2 = 'fw1 f3 mt1 mb0';
var childBorderColor = 'b--black-10';

var dark = {
  themeName: 'dark',
  themeStyles: {
    panelBorder: ("ba " + borderRound + " " + backgroundColor + " " + childBorderColor),
    panelHeader: (paddingAll + " " + backgroundColor + " " + textColor),
    panelH2: ("" + h2),
    panelChildrenSection: (paddingAll + " " + backgroundColor),
    panelFooter:  (paddingAll + " " + backgroundColor + " " + textColor),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll + " " + backgroundColor + " " + textColor),
    listUl: ("list pl0 mt0 measure ba " + borderRound + " " + childBorderColor),
    imageListItemLi: ("flex items-center lh-copy " + paddingAll + "  bb b--black-10 " + backgroundColor),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto ",
    imageListItemSpanTitle: ("f4 db " + textColor),
    imageListItemSpanDescription: ("f6 db " + textColor),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll + " bb b--black-10 " + backgroundColor),
    simpleListItemDiv: "pl3 flex-auto ",
    simpleListItemSpanTitle: ("f4 db " + textColor),
    simpleListItemSpanDescription: ("f6 db " + textColor),
    cardArticle: ("mw5 " + backgroundColor + " " + borderRound + " " + paddingAll + " pa2-ns mv3 ba " + childBorderColor),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor + " " + paddingAll),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor + " mt0"),
    button: ("f6 link dim br1 ba ph3 pv2 mb2 dib " + textColor + " " + backgroundColor)
  }
};

var backgroundColor$1 = 'bg-near-white';
var textColor$1 = 'near-black';
var paddingAll$1 = 'pa2';
var borderRound$1 = 'br2';
var h2$1 = 'fw1 f3 mt1 mb0';
var childBorderColor$1 = 'b--black-10';

var light = {
  themeName: 'light',
  themeStyles: {
    panelBorder: ("ba " + borderRound$1 + " " + backgroundColor$1 + " " + childBorderColor$1),
    panelHeader: (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelH2: ("" + h2$1),
    panelChildrenSection: (paddingAll$1 + " " + backgroundColor$1),
    panelFooter:  (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    listUl: ("list pl0 mt0 measure ba " + borderRound$1 + " " + childBorderColor$1),
    imageListItemLi: ("flex items-center lh-copy " + paddingAll$1 + "  bb b--black-10 " + backgroundColor$1),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto ",
    imageListItemSpanTitle: ("f4 db " + textColor$1),
    imageListItemSpanDescription: ("f6 db " + textColor$1),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll$1 + " bb b--black-10 " + backgroundColor$1),
    simpleListItemDiv: "pl3 flex-auto ",
    simpleListItemSpanTitle: ("f4 db " + textColor$1),
    simpleListItemSpanDescription: ("f6 db " + textColor$1),
    cardArticle: ("mw5 " + backgroundColor$1 + " " + borderRound$1 + " " + paddingAll$1 + " pa2-ns mv3 ba " + childBorderColor$1),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor$1 + " " + paddingAll$1),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor$1 + " mt0"),
    button: ("f6 link dim br1 ba ph3 pv2 mb2 dib " + textColor$1 + " " + backgroundColor$1)
  }
};

var backgroundColor$2 = 'bg-washed-blue';
var textColor$2 = 'near-black';
var paddingAll$2 = 'pa2';
var borderRound$2 = 'br2';
var h2$2 = 'fw1 f3 mt1 mb0';
var childBorderColor$2 = 'b--black-10';

var icy = {
  themeName: 'icy',
  themeStyles: {
    panelBorder: ("ba " + borderRound$2 + " " + backgroundColor$2 + " " + childBorderColor$2),
    panelHeader: (paddingAll$2 + " " + backgroundColor$2 + " " + textColor$2),
    panelH2: ("" + h2$2),
    panelChildrenSection: (paddingAll$2 + " " + backgroundColor$2),
    panelFooter:  (paddingAll$2 + " " + backgroundColor$2 + " " + textColor$2),
    panelButtonDiv: "fr",
    panelButton: ("ba dim " + paddingAll$2 + " " + backgroundColor$2 + " " + textColor$2),
    listUl: ("list pl0 mt0 measure ba " + borderRound$2 + " " + childBorderColor$2),
    imageListItemLi: ("flex items-center lh-copy " + paddingAll$2 + "  bb b--black-10 " + backgroundColor$2),
    imageListItemImg: "w2 h2 w3-ns h3-ns br-100",
    imageListItemDiv: "pl3 flex-auto ",
    imageListItemSpanTitle: ("f4 db " + textColor$2),
    imageListItemSpanDescription: ("f6 db " + textColor$2),
    simpleListItemLi: ("flex items-center lh-copy " + paddingAll$2 + " bb b--black-10 " + backgroundColor$2),
    simpleListItemDiv: "pl3 flex-auto ",
    simpleListItemSpanTitle: ("f4 db " + textColor$2),
    simpleListItemSpanDescription: ("f6 db " + textColor$2),
    cardArticle: ("mw5 " + backgroundColor$2 + " " + borderRound$2 + " " + paddingAll$2 + " pa2-ns mv3 ba " + childBorderColor$2),
    cardDiv: "tc",
    cardImg: ("br-100 h4 w4 dib ba " + childBorderColor$2 + " " + paddingAll$2),
    cardH1: "f3 mb2",
    cardH2: ("f5 fw4 " + textColor$2 + " mt0"),
    button: ("f6 link dim br1 ba ph3 pv2 mb2 dib " + textColor$2 + " " + backgroundColor$2)
  }
};

var colorThemes = [dark, light, icy];

exports.dark = dark;
exports.light = light;
exports.icy = icy;
exports.colorThemes = colorThemes;
