const isObj = yourVariable => typeof yourVariable === 'object' && yourVariable !== null
const prettier = require("prettier")

let generator = (config) => {
    if (!isObj(config)) {
        return ''
    }

    return `${Object.entries(config).map(([label, values]) => {
        if (isObj(values)) {

            return `
${label}: (
    ${Object.entries(values).reduce((accum, [key, val]) => {
                    accum.push(`'${key}': ${val}`)
                    return accum;
                }, []).join(",\n")});
                    `
        }

        return `
${ label}: ${values};
`
    }).join('')}`
}

module.exports = (config) => {
    return prettier.format(generator(config), { parser: 'scss' })
}
