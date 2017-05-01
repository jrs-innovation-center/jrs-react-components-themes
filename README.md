# JRS React Components Themes

Pass one the following themes to a [JRS React Component](https://github.com/jrs-innovation-center/jrs-react-components) and achieve ultimate [tachyons](http://tachyons.io/) css styling goodness for the win!

## Available themes

- [dark](./src)
- [light](./src)
- [icy](./src)

## Install

```
npm install jrs-react-components-themes --save
```

## Showcase

Our [showcase](https://jrscomponentshowcase.now.sh/) displays the various available themes applied to our JRS React Components.

## Code Example

The code example uses the `List`,`ImageListItem`, and `Button` components from [jrs-react-components](https://github.com/jrs-innovation-center/jrs-react-components) along with the [dark](./src/dark.js) theme.   Components may optionally be passed a `themeStyles` object as props.  `themeStyles` provides the tachyons css classes to the component.

```
import React from 'react'
import {
  List,
  ImageListItem,
  Button
} from 'jrs-react-components'

import {dark} from 'jrs-react-components-themes'

const ExampleTheme1 = (props) => {
  return (
    <div className='pa4'>
      <h1 className='tc'>Theme Example 1</h1>
      <h2 className=''>List and ImageListItem</h2>
      <List themeStyles={dark.themeStyles}>
        <ImageListItem themeStyles={dark.themeStyles}
          title='Hello'
          image='http://fillmurray.com/100/100'
          link={<Button onClick={e => alert('Check out fillmurray.com')}>Click Here</Button>}
        />
      </List>
    </div>
  )
}

export default ExampleTheme1
```

## Exploring a theme object

Here's a partial look at the structure of the `dark` theme object:

```
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
    listUl: `list pl0 mt0 measure ba br2 b--black-10`,
    ... remaining themeStyles keys omitted for brevity ...
```

A theme object contains a `themeName` and a `themeStyles` object.  The former is used to identify the theme. `themeStyles` contains a series of key and value pairs.  Each key is used within a particular [jrs-react-components](https://github.com/jrs-innovation-center/jrs-react-components).  For example, the `listUl` key contains the tachyons css style classes for the List component's `<ul>` tag.  

## License

MIT

## Contributions

Contributions are welcome, all code is styled using standard and formatted using prettier.
