#!/usr/bin/env node

const path = require('path')
const yaml = require('yaml')
const prettier = require("prettier")
const fs = require('fs')
const commandLineArgs = require('command-line-args')
const options = commandLineArgs([{
    name: 'verbose',
    alias: 'v',
    type: Boolean
  },
  {
    name: 'src',
    alias: 's',
    type: String,
    multiple: false
  },
  {
    name: 'dist',
    alias: 'd',
    type: String,
    multiple: false
  }
])

let main = (async () => {
  try {
    let file = path.join(process.cwd(), ...options.src.split('/'))
    let contents = fs.readFileSync(file, 'utf8')
    let set = yaml.parse(contents)

    let sassMaps = Object.entries(set.preons.rules).map(([key, values]) => {
      return `$${key}: (
      ${Object.entries(values).map(([key, value]) => `"${key}": ${value}`).join(",\n")}
      );`
    }).join("\n")

    let breakpoints = `$breakpoints: (
      ${Object.entries(set.preons.breakpoints).map(([key, value]) => `"${key}": ${value}`).join(",\n")}
    );`

    let preons = set.preons.classes.map((rule) => {
      return `@include preonize("${rule.label}", ${rule['css-property']}, map-collect(${rule.rule.map(i => `$${i}`).join(', ')}), $breakpoints);`
    }).join("\n")

    let grid = fs.readFileSync(path.join(__dirname, '..', '..', 'preon', '_grid.scss'))

    let preonize = fs.readFileSync(path.join(__dirname, '..', '..', 'preon', '_preonize.scss'))

    let baseline = `$baseline: ${set.preons.baseline}`

    let gutter = `$gutter: ${set.preons.gutter}`

    let formatted = prettier.format(`
      ${baseline}
      ${gutter}
      ${sassMaps}
      ${breakpoints}
      ${grid}
      ${preonize}
      ${preons}
    `, { semi: false, parser: "scss" });

    let outfile = path.join(process.cwd(), ...options.dist.split('/'))
    fs.writeFileSync(outfile, formatted, 'utf8')

    console.log(formatted)
  } catch (e) {
    console.error(e)
  }
})()