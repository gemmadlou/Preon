const rulesToClasses = require('../lib/rules-to-classes')

it('should generate a called preonize function', () => {
    let rules = {
        $breakpoints: {
            's': 'only screen and(min - width: 320px)',
            'ns': 'only screen and(min - width: 600px)',
            'm': 'only screen and(min - width: 768px)',
            'l': 'only screen and(min - width: 996px)',
            'xl': 'only screen and(min - width: 1200px)'
        },
        $colors: {
            'blue': '#365e86',
            'white': '#ffffff',
            'grey': '#eef0ee',
            'grey-dark': '#89969d'
        }
    }

    let style = [
        'bg-',
        'background-color',
        rules.$colors,
        rules.$breakpoints
    ]

    let result = rulesToClasses(rules, style)
    expect(result).toEqual(`@include preonize("bg-", background-color, $colors, $breakpoints);`)
})