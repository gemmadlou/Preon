module.exports = {
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
    },
    $shadow: {
        '': '3px 5px 12px 2px rgba(0, 0, 0, 0.23)',
        '-large': '5px 11px 24px 2px rgba(0, 0, 0, 0.23)'
    },
    $display: {
        'b': 'block',
        'i': 'inline',
        'ib': 'inline-block',
        't': 'table',
        'f': 'flex',
        'if': 'inline-flex',
        'n': 'none'
    },
    $position: {
        relative: 'relative',
        absolute: 'absolute',
        fixed: 'fixed'
    },
    $scaled: {
        0: 0,
        1: '1rem',
        2: '2rem',
        3: '3rem',
        4: '4rem',
        5: '5rem',
        6: '6rem',
        7: '7rem',
        8: '8rem',
        9: '9rem',
        10: '10rem'
    },
    $nscaled: {
        n1: '1rem',
        n2: '2rem',
        n3: '3rem',
        n4: '4rem',
        n5: '5rem',
        n6: '6rem',
        n7: '7rem',
        n8: '8rem',
        n9: '9rem',
        n10: '10rem'
    },
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
    },
    $decimal: {
        0: 0,
        '-10': .1,
        '-20': .2,
        '-30': .3,
        '-40': .4,
        '-50': .5,
        '-60': .6,
        '-70': .7,
        '-80': .8,
        '-90': .9,
        '-100': 1
    },
    $percentaged: {
        '-5': '5%',
        '-10': '10%',
        '-15': '15%',
        '-20': '20%',
        '-25': '25%',
        '-30': '30%',
        '-35': '35%',
        '-40': '40%',
        '-45': '45%',
        '-50': '50%',
        '-55': '55%',
        '-60': '60%',
        '-65': '65%',
        '-70': '70%',
        '-75': '75%',
        '-80': '80%',
        '-85': '85%',
        '-90': '90%',
        '-95': '95%',
        '-100': '100%',
        '-third': '(100% / 3)',
        '-two-thirds': '(100% / 3 * 2)',
        '-1-12': '(100% / 12)',
        '-2-12': '(100% / 12 * 2)',
        '-3-12': '(100% / 12 * 3)'
    },
    '$special-sizes': {
        'x': 'none',
        '-au': 'auto'
    },
    '$limited-percentage': {
        '-50': '50%'
    },
    $discrete: {
        '-wire': '1px',
        '-thin': '3px',
        '-small': '1.5rem',
        '-icon': '3.2rem',
        '-medium': '7rem',
        '-big': '10rem',
        '-xbig': '14rem',
        '-xxbig': '20rem',
        '-xxxbig': '32rem',
        '-super': '38rem',
        '-xsuper': '46rem',
        '-xxsuper': '56rem'
    },
    $gutter: '2.5rem',
    $text: {
        'u': 'uppercase',
        'c': 'capitalize'
    },
    $alignment: {
        '-center': 'center',
        '-right': 'right',
        '-left': 'left'
    },
    $weight: {
        't': 300,
        'n': 400,
        'b': 700
    },
    $decoration: {
        'x': 'none',
        'u': 'underline'
    },
    '$letter-spacing': {
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px'
    },
    '$font-size': {
        1: '1.3rem',
        2: '1.6rem',
        3: '2.0rem',
        4: '2.4rem',
        5: '2.7rem',
        6: '3.2rem',
        7: '3.8rem',
        8: '4.8rem',
        9: '6.4rem',
        10: '7.6rem'
    }
}