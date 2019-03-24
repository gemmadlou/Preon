const commandLineArgs = require('command-line-args')
const options = commandLineArgs([{
    name: 'verbose',
    alias: 'v',
    type: Boolean
  },
  {
    name: 'src',
    type: String,
    multiple: true,
    defaultOption: true
  }
])
const fs = require('fs')
const parse = require('./parser').parse

let main = (async () => {
  try {
    let data = options.src.map(item => fs.readFileSync(item, {
        encoding: 'utf8'
      }))
      .join('')
      .replace(/\s+/g, '')
      .match(/(\$[a-z-]+:\s?\([a-z-:0-9,.#']+\);)/g)
      .reduce((a, b) => {
        let parsed = b.match(/^\$[a-z-0-9]+:\(/g, '')[0].replace(/(\$|:|\()/g, '')
        let values = parse(b, '')
        a[`${parsed}`] = values
        return a
      }, {})
    console.log(data)
  } catch (e) {
    console.error(e)
  }
})()
