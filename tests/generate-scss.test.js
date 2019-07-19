const configToStyle = require('../lib/config-to-style')
const prettier = require("prettier")

describe('Given configToStyle', () => {
    it('when given no data it should return empty', () => {
        let result = configToStyle()
        expect(result).toBe('')
    })

    it('when given null, it should return empty', () => {
        let result = configToStyle(null)
        expect(result).toBe('')
    })

    it('when given a string, it should return empty', () => {
        let result = configToStyle('a normal string')
        expect(result).toBe('')
    })

    it('when given a config object of sass variables as js, it should generate sass config variables', () => {
        let config = {
            $scaledsmall: {
                0: 0,
                1: '0.5rem',
                2: '1rem',
                3: '1.5rem',
                4: '2rem',
                5: '2.5rem',
                6: '3rem'
            },
            $baseline: '1.2rem',
            $baselined: {
                '-small': '2rem',
                '-large': '4rem',
                1: '$baseline * 2',
                2: '$baseline * 2.5',
                3: '$baseline * 3',
                4: '$baseline * 4',
                5: '$baseline * 5',
                6: '$baseline * 6',
                7: '$baseline * 6.5',
                8: '$baseline * 7.5'
            }
        }

        let result = configToStyle(config)

        expect(result).toBe(prettier.format(`
$scaledsmall: (
  "0": 0,
  "1": 0.5rem,
  "2": 1rem,
  "3": 1.5rem,
  "4": 2rem,
  "5": 2.5rem,
  "6": 3rem
);

$baseline: 1.2rem;

$baselined: (
  "1": $baseline * 2,
  "2": $baseline * 2.5,
  "3": $baseline * 3,
  "4": $baseline * 4,
  "5": $baseline * 5,
  "6": $baseline * 6,
  "7": $baseline * 6.5,
  "8": $baseline * 7.5,
  "-small": 2rem,
  "-large": 4rem
);`, { parser: 'scss' }))
    })
})