# JRS React Components Themes

Pass one the following themes to a [JRS React Component](https://github.com/jrs-innovation-center/jrs-react-components) and achieve ultimate [tachyons](http://tachyons.io/) css styling goodness for the win!

## Install

```
npm install jrs-react-components-themes --save
```

## Showcase

Our [showcase]() displays the various available themes applied to our JRS React Components.

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

## Available themes

- [dark](./src/dark.js)
- [light](./src/light.js)
- [icy](./src/icy.js)

## Exploring a theme object



## License

MIT

## Contributions

Contributions are welcome, all code is styled using standard and formatted using prettier.
