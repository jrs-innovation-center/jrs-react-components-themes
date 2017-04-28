const backgroundColor = 'bg-dark-gray'
const textColor = 'washed-green'
const paddingAll = 'pa2'
const borderRound = 'br2'
const h2 = 'fw1 f3 mt1 mb0'
const parentBorderColor = 'b--black-90'
const childBorderColor = 'b--black-10'
const secondaryTextColor = 'black-50'

const dark = {
  themeName: 'dark',
  themeStyles: {
    panelBorder: `ba ${borderRound} ${backgroundColor} ${childBorderColor}`,
    panelHeader: `${paddingAll} ${backgroundColor} ${textColor}`,
    panelH2: `${h2}`,
    panelChildrenSection: `${paddingAll} ${backgroundColor}`,
    panelFooter:  `${paddingAll} ${backgroundColor} ${textColor}`,
    panelButtonDiv: `fr`,
    panelButton: `ba dim ${paddingAll} ${backgroundColor} ${textColor}`,
    listUl: `list pl0 mt0 measure ba ${borderRound} ${childBorderColor}`,
    imageListItemLi: `flex items-center lh-copy ${paddingAll}  bb b--black-10 ${backgroundColor}`,
    imageListItemImg: `w2 h2 w3-ns h3-ns br-100`,
    imageListItemDiv: `pl3 flex-auto `,
    imageListItemSpanTitle: `f4 db ${textColor}`,
    imageListItemSpanDescription: `f6 db ${textColor}`,
    simpleListItemLi: `flex items-center lh-copy ${paddingAll} bb b--black-10 ${backgroundColor}`,
    simpleListItemDiv: `pl3 flex-auto `,
    simpleListItemSpanTitle: `f4 db ${textColor}`,
    simpleListItemSpanDescription: `f6 db ${textColor}`,
    cardArticle: `mw5 ${backgroundColor} ${borderRound} ${paddingAll} pa2-ns mv3 ba ${childBorderColor}`,
    cardDiv: `tc`,
    cardImg: `br-100 h4 w4 dib ba ${childBorderColor} ${paddingAll}`,
    cardH1: `f3 mb2`,
    cardH2: `f5 fw4 ${textColor} mt0`,
    button: `f6 link dim br1 ba ph3 pv2 mb2 dib ${textColor} ${backgroundColor}`,
    tileBackgroundColor: `${backgroundColor}`,
    tileDivParentWrapper: `${paddingAll} fl tc ${textColor}`,
    tileDivH1: `pa1 fl v-mid ${textColor}`,
    tileH1MainText: `f3 fw2 ${textColor}`,
    tileH1SecondaryText: `f5 fw1`,
    tileDivChildrenWrapper: `${paddingAll} fl mt3 mt2-m`,
    tileDivH2: `fl w-100`,
    tileH2: `f3 fw2 ${secondaryTextColor} mt0 lh-copy`
  }
}

export default dark
