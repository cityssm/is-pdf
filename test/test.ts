import assert from 'node:assert'
import fs from 'node:fs/promises'
import { describe, it } from 'node:test'

import isPdf from '../index.js'

await describe('is-pdf', async () => {
  await it('Should return `true` when the buffer contains a PDF', async () => {
    const buffer = await fs.readFile('test/samples/test.pdf')
    assert(isPdf(buffer))
  })

  await it('Should return `false` when the buffer is undefined', () => {
    assert(!isPdf(undefined))
  })

  await it('Should return `false` when the buffer does not contain a PDF', async () => {
    const buffer = await fs.readFile('test/samples/test.png')
    assert(!isPdf(buffer))
  })
})
