var backgroundColor = 'bg-black-40';
var textColor = 'near-white';
var paddingAll = 'pa2';
var h2 = 'fw1 f3 mt1 mb0';

var Dark = {
  themeName: 'Dark',
  themeStyles: {
    panelBorder:  ("ba br2 " + backgroundColor + " b--black-90"),
    panelHeader: (paddingAll + " " + backgroundColor + " " + textColor),
    panelH2: ("" + h2),
    panelChildrenSection: (paddingAll + " " + backgroundColor),
    panelFooter:  (paddingAll + " " + backgroundColor + " " + textColor),
    panelButtonDiv: "fr",
    panelButton: ("ba grow " + paddingAll + " " + backgroundColor + " " + textColor)
  }
};

var backgroundColor$1 = 'bg-white';
var textColor$1 = 'black';
var paddingAll$1 = 'pa2';
var h2$1 = 'fw1 f3 mt1 mb0';

var Light = {
  themeName: 'Light',
  themeStyles: {
    panelBorder:  ("ba " + backgroundColor$1 + " b--black-90"),
    panelHeader: (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelH2: ("" + h2$1),
    panelChildrenSection: (paddingAll$1 + " " + backgroundColor$1),
    panelFooter:  (paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1),
    panelButtonDiv: "fr",
    panelButton: ("ba grow " + paddingAll$1 + " " + backgroundColor$1 + " " + textColor$1)
  }
};

export { Dark, Light };
