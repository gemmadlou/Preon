const path = require('path')
const yaml = require('yaml')
const fs = require('fs')
const commandLineArgs = require('command-line-args')
const options = commandLineArgs([{
    name: 'verbose',
    alias: 'v',
    type: Boolean
  },
  {
    name: 'src',
    type: String,
    multiple: false,
    defaultOption: true
  }
])
const parse = require('./parser').parse

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
    )`

    let preons = set.preons.classes.map((rule) => {
      return `@include preonize("${rule.label}", ${rule['css-property']}, map-collect(${rule.rule.join(', ')}), $breakpoints);`
    }).join("\n")

    console.log(preons)
  } catch (e) {
    console.error(e)
  }
})()