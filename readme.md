# is-pdf

[![npm (scoped)](https://img.shields.io/npm/v/@cityssm/is-pdf)](https://www.npmjs.com/package/@cityssm/is-pdf)
[![Maintainability](https://api.codeclimate.com/v1/badges/fd9d2e87b1e046229930/maintainability)](https://codeclimate.com/github/cityssm/is-pdf/maintainability)
[![codecov](https://codecov.io/gh/cityssm/is-pdf/graph/badge.svg?token=5GWMJ3KDF7)](https://codecov.io/gh/cityssm/is-pdf)
[![DeepSource](https://app.deepsource.com/gh/cityssm/is-pdf.svg/?label=active+issues&show_trend=true&token=TJ0udt31xhowoAUY3N_DuUU1)](https://app.deepsource.com/gh/cityssm/is-pdf/)

Checks if a Buffer/Uint8Array is a PDF file.
Useful for testing PDF generating modules.

## Installation

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
