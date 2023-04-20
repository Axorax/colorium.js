<p align="center"><img src="https://raw.githubusercontent.com/Axorax/colorium.js/main/logo.svg"></p>

---

<p align="center">Lightweight terminal styling</p>

## ⚙️ Installation

```terminal
npm i colorium
```

## 📖 Documentation

#### ES6

```js
import colorium from 'colorium';

colorium('Hello world!').blue.log();
```

#### Commonjs

```js
const colorium = require('colorium');

colorium('Hello world!').blue.log();
```

#### Examples

```js
colorium('Hello world!').red.log();
```

```js
const log = console.log;
log(colorium('Hello world!').red);
```

```js
console.log("Hello world!".red.underline)
```

## 🙌 All styles

#### Modifiers
* `reset`
* `bold`
* `dim`
* `italic`
* `underline`
* `blink`
* `inverse`
* `hidden`
* `strike`
* `overline`

#### Foreground Colors
* `black`
* `red`
* `green`
* `yellow`
* `blue`
* `magenta`
* `cyan`
* `white`
* `gray`

#### Lighter Foreground Colors
* `lightBlack`
* `lightRed`
* `lightGreen`
* `lightYellow`
* `lightBlue`
* `lightMagenta`
* `lightCyan`
* `lightWhite`

#### Background Colors
* `bgBlack`
* `bgRed`
* `bgGreen`
* `bgYellow`
* `bgBlue`
* `bgMagenta`
* `bgCyan`
* `bgWhite`
* `bgGray`

#### Lighter Background Colors
* `bgLightBlack`
* `bgLightRed`
* `bgLightGreen`
* `bgLightYellow`
* `bgLightBlue`
* `bgLightMagenta`
* `bgLightCyan`
* `bgLightWhite`

#### Custom Foreground Colors
* `rgb()`

```js
colorium('Hello world!').rgb(12, 234, 23).log()
```

* `hex()`

```js
colorium('Hello world!').hex('#B9EDDD').log();
```

---

[Support me on Patreon](https://www.patreon.com/axorax) - 
[Check out my socials](https://github.com/axorax/socials)
