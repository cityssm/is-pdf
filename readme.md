# is-pdf

Checks if a Buffer/Uint8Array is a PDF file.
Useful for testing PDF generating modules.


## Install

```bash
npm install @cityssm/is-pdf
```

## Usage

```js
import fs from 'node:fs/promises'
import isPdf from '@cityssm/is-pdf'

var read = require('fs').readFileSync
var isPdf = require('is-pdf')

const pdfBuffer = await fs.readFile('path/to/file.pdf')
console.log(isPdf(pdfBuffer))

const imageBuffer = await fs.readFile('path/to/file.jpg')
console.log(isPdf(imageBuffer))
//=> false
```

## Related Project

[pdf-puppeteer](https://github.com/cityssm/pdf-puppeteer)<br />
A simple NPM package to convert HTML to PDF for Node applications by using Puppeteer.
