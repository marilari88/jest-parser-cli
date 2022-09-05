#!/usr/bin/env node
import { parse } from 'jest-editor-support'

const args = process.argv.slice(2)

if (!args[0]) {
  throw 'path not found'
}

const a = parse(args[0])
console.log(a)
