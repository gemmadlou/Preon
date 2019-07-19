const rules = require('./rules')

module.exports = [[
    'bg-',
    'background-color',
    rules.$colors,
    rules.$breakpoints
], [
    'fill-',
    'fill',
    rules.$colors,
    rules.$breakpoints
], [
    '',
    'background-color',
    rules.$colors,
    rules.$breakpoints
], [
    '',
    'position',
    rules.$position,
    rules.$breakpoints
], [
    'h',
    'height',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    'w',
    'width',
    [rules.$scaled, rules.$percentaged, rules.$discrete], ,
    rules.$breakpoints
], [
    'maxw',
    'max-width',
    [rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'minw',
    'min-width',
    [rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'maxh',
    'max-height',
    [rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'minh',
    'min-height',
    [rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    't',
    'top',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    'b',
    'bottom',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    'l',
    'left',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    'r',
    'right',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    't',
    'top',
    [rules.$scaled, rules.$percentaged, rules.$discrete],
    rules.$breakpoints
], [
    'pa',
    'padding',
    [rules.$scaled, rules.$discrete],
    rules.$breakpoints
], [
    'pl',
    'padding-left',
    [rules.$scaled, rules.$discrete],
    rules.$breakpoints
], [
    'pr',
    'padding-right',
    [rules.$scaled, rules.$discrete],
    rules.$breakpoints
], [
    'pt',
    'padding-top',
    [rules.$scaled, rules.$discrete],
    rules.$breakpoints
], [
    'pb',
    'padding-bottom',
    [rules.$scaled, rules.$discrete],
    rules.$breakpoints
], [
    'ma',
    'margin',
    [rules.$scaled, rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'ml',
    'margin-left',
    [rules.$scaled, rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'mr',
    'margin-right',
    [rules.$scaled, rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'mb',
    'margin-bottom',
    [rules.$scaled, rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'mt',
    'margin-top',
    [rules.$scaled, rules.$discrete, rules["$special-sizes"], rules.$percentaged],
    rules.$breakpoints
], [
    'bda',
    'border-radius',
    [rules["$limited-percentage"], rules.$scaledsmall],
    rules.$breakpoints
], [
    'bdbl',
    'border-bottom-left-radius',
    [rules["$limited-percentage"], rules.$scaledsmall],
    rules.$breakpoints
], [
    'bdbr',
    'border-bottom-right-radius',
    [rules["$limited-percentage"], rules.$scaledsmall],
    rules.$breakpoints
], [
    'bdtl',
    'border-top-left-radius',
    [rules["$limited-percentage"], rules.$scaledsmall],
    rules.$breakpoints
], [
    'bdtr',
    'border-top-right-radius',
    [rules["$limited-percentage"], rules.$scaledsmall],
    rules.$breakpoints
], [
    't',
    'text-transform',
    rules.$text,
    rules.$breakpoints
], [
    'align',
    'text-align',
    rules.$alignment,
    rules.$breakpoints
], [
    'fw',
    'font-weight',
    rules.$weight,
    rules.$breakpoints
], [
    'td',
    'text-decoration',
    rules.$decoration,
    rules.$breakpoints
], [
    'ls',
    'letter-spacing',
    rules["$letter-spacing"],
    rules.$breakpoints
], [
    'fs',
    'font-size',
    rules["$font-size"],
    rules.$breakpoints
], [
    'lh',
    'line-height',
    rules.$baselined,
    rules.$breakpoints
], [
    'd',
    'display',
    rules.$display,
    rules.$breakpoints
], [
    'box-shadow',
    'shadow',
    rules.$shadow,
    rules.$breakpoints
], [
    'hover-color-',
    'color',
    rules.$colors,
    rules.$breakpoints,
    'hover'
], [
    'bghover-color-',
    'background-color',
    rules.$colors,
    rules.$breakpoints
], [
    'o',
    'opacity',
    rules.$decimal,
    rules.$breakpoints
]]