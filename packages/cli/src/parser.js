module.exports.parse = (string, prefix) => {
  return string.replace(/\s/g, '')
    .replace(/^\$[a-z-0-9]+:\(/g, '')
    .replace(/\);$/, '')
    .replace(/'/g, '')
    .trim(',')
    .split(',')
    .filter(i => i !== '')
    .reduce((a, b) => {
      let item = b.split(':')
      a[`${prefix}${item[0]}`] = item[1]
      return a
    }, {})
}
