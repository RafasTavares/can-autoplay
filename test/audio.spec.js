import test from 'ava'

import { mockPlay } from './common'
import { audio } from '../lib/index'

test.serial('returns true for available audio auto-playback', t => {
  mockPlay(() => Promise.resolve())
  return audio().then(result => t.true(result))
})

test.serial('returns false for unavailable audio auto-playback', t => {
  mockPlay(() => Promise.reject(new Error()))
  return audio().then(result => t.false(result))
})
