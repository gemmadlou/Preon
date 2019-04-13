<template>
  <div id="page" class="ff-heebo">
    <header class="relative after-h6 after-dt after-w-100 z-1-m">
      <nav class="fixed t0 l0 w-100 df-m justify-between-m bwb1-m bc-grey-m bs-solid-m bg-white">
        <div class="df justify-between pa2 items-center">
          <nuxt-link to="/" class="blue db fwb">Preon</nuxt-link>
          <div
            v-on:click="menuOpen = !menuOpen"
            v-bind:class="['c-hamburger', menuOpen ? 'c-hamburger--open' : '', 'dn-m']"
          >
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
          </div>
        </div>
        <ul v-bind:class="[menuOpen ? '' : 'dn', 'bg-grey', 'df-m']">
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" to="/docs">Docs</nuxt-link>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <a class="grey-dark" href="https://github.com/uposcartech/Preon">Github</a>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" to="#get-started">Get started</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <section class="page pa2 s-page w-70-m ml-30-m ml-30-l w-60-l maxw-xxxsuper-l pt6 pb6">
      <h1>Preon</h1>
      <hr>
      <h2 id="summary">Summary</h2>
      <p>
        Preon is a functional css library. It was created after
        stumbling over functional css and the wonderful Tachyons.
        For a little extra customisation and a Sass flavour, Preon was born
        to make managing functional css projects a little easier.
      </p>
      <h2 id="get-started">How does it work</h2>
      <p>TBC</p>
      <h2 id="get-started">Get started</h2>
      <p>TBC</p>
      <div>
        <pre v-highlightjs="getStarted">
          <code class="html xml"></code>
        </pre>
      </div>
      <h2 id="functional-css">Functional css</h2>
      <p>
        It's an extremely modular approach to css. The main benefit for me, is that at some point,
        I don't have to write any more css. All the rules I need are completely defined.
        As more and more modules and styles are created by the designer, I simply
        need to code it in the HTML.
      </p>
      <p>
        That leads to the second benefit, it's easy
        to reuse styles and tweak them on a case-by-case basis, lending itself to more
        interesting looking sites that don't have to fit stock components out of fear of BEM-bloat.
      </p>
      <p>
        Actually, that last point isn't trivial. Designers are fantastic.
        They know how to make things look good. However, things aren't
        always by the rules. Sometimes they have text in a 4/12 width block
        left aligned. A very similar looking module on the same page has 5/12 block.
        Writing reusable components with modifiers becomes painful when they deviate
        from rules we developers try to apply to prevent the css from going wild.
        So functional css helps be more flexible and align ourselves with designers closely.
      </p>
      <h2 id="API Reference">API Reference</h2>
      <div v-bind:key="index" v-for="(rule, index) in rules" class="mb4">
        <h3 id="api-colors">{{ rule.label }}</h3>
        <p>{ {{ rule.rule }} : __RULE__ }</p>
        <table v-bind:key="index" v-for="(configRule, index) in rule.configs">
          <tr v-bind:key="index" v-for="(configItem, label, index) in config[configRule]">
            <td class="w-50 w-30-m">.{{ rule.prefix }}{{ label }}</td>
            <td class="w-50 bwl1 bs-solid bc-blue pl3">{{configItem}}</td>
          </tr>
        </table>
      </div>
    </section>
    <footer
      v-bind:class="[footerOpen ? 'h-100' : '', 'relative fixed bg-white bwt1 bwt0-m bg-grey-m bc-grey-m bs-solid grey-dark b0 l0 w-100 h-100-m t5-m w-30-m w-20-l pt2-m']"
    >
      <div
        v-on:click="footerOpen = !footerOpen"
        class="df justify-between pa2 pt1 pb1 items-center"
      >
        <div class="fs1 fwb fs1">Table of contents ></div>
      </div>
      <ul v-bind:class="[footerOpen ? '' : 'dn', 'bg-grey db-m h-100 scroll']">
        <li
          v-bind:key="section[1]"
          v-for="section in sections"
          class="blue df justify-center justify-start-m pa2 pt1 pb1 bwb1 bs-solid bc-white bwb0-m"
        >
          <nuxt-link class="grey-dark" v-bind:to="section[1]">{{section[0]}}</nuxt-link>
        </li>
      </ul>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false,
      footerOpen: false,
      sections: [
        ['Summary', '#summary'],
        ['Get started', '#get-started'],
        ['Functional css', '#functional-css'],
        ['Color', '#color'],
        ['Height', '#height']
      ],
      getStarted: `
<!DOCTYPE html>
<html lang="en">
  <title>Hello there!</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="./preons.scss">
  <body>

  </body>
</html>
      `,
      config: {
        colors: {
          blue: '#365e86',
          white: '#ffffff',
          grey: '#f1f5f1',
          'grey-dark': '#89969d'
        },
        'border-style': { solid: 'solid', dotted: 'dotted', dashed: 'dashed' },
        display: {
          b: 'block',
          i: 'inline',
          ib: 'inline-block',
          t: 'table',
          f: 'flex',
          if: 'inline-flex',
          n: 'none'
        },
        overflow: { scroll: 'scroll', hidden: 'hidden', auto: 'auto' },
        position: {
          relative: 'relative',
          absolute: 'absolute',
          fixed: 'fixed'
        },
        scaled: {
          '0': '0',
          '1': '1rem',
          '2': '2rem',
          '3': '3rem',
          '4': '4rem',
          '5': '5rem',
          '6': '6rem',
          '7': '7rem',
          '8': '8rem',
          '9': '9rem',
          '10': '10rem',
          n1: '-1rem',
          n2: '-2rem',
          n3: '-3rem',
          n4: '-4rem',
          n5: '-5rem',
          n6: '-6rem',
          n7: '-7rem',
          n8: '-8rem',
          n9: '-9rem',
          n10: '-10rem'
        },
        'negative-scaled': {
          '1': '-1rem',
          '2': '-2rem',
          '3': '-3rem',
          '4': '-4rem',
          '5': '-5rem',
          '6': '-6rem'
        },
        scaledsmall: {
          '0': '0',
          '1': '0.5rem',
          '2': '1rem',
          '3': '1.5rem',
          '4': '2rem',
          '5': '2.5rem',
          '6': '3rem'
        },
        decimal: {
          '0': '0',
          '-10': '.1',
          '-20': '.2',
          '-30': '.3',
          '-40': '.4',
          '-50': '.5',
          '-60': '.6',
          '-70': '.7',
          '-80': '.8',
          '-90': '.9',
          '-100': '1'
        },
        'special-sizes': { x: 'none', '-au': 'auto' },
        tiny: {
          '0': '0',
          '1': '1px',
          '2': '2px',
          '3': '3px',
          '4': '4px',
          '5': '5px'
        },
        discrete: {
          '-wire': '1px',
          '-thin': '3px',
          '-small': '1.5rem',
          '-icon': '3.2rem',
          '-medium': '7rem',
          '-big': '10rem',
          '-xbig': '16rem',
          '-xxbig': '22rem',
          '-xxxbig': '32rem',
          '-super': '42rem',
          '-xsuper': '52rem',
          '-xxsuper': '62rem',
          '-xxxsuper': '72rem'
        },
        numbers: { '1': '1', '2': '2', '3': '3', '4': '4', '5': '5' },
        text: { u: 'uppercase', c: 'capitalize' },
        alignment: { '-center': 'center', '-right': 'right', '-left': 'left' },
        weight: { b: '700' },
        decoration: { x: 'none', u: 'underline' },
        'letter-spacing': { '1': '1px', '2': '2px', '3': '3px', '4': '4px' },
        'font-size': {
          '1': '1.3rem',
          '2': '1.6rem',
          '3': '2.0rem',
          '4': '2.4rem',
          '5': '2.7rem',
          '6': '3.2rem',
          '7': '3.8rem',
          '8': '4.8rem',
          '9': '6.4rem',
          '10': '7.6rem'
        }
      },
      rules: [
        {
          label: 'Colors',
          rule: 'background-color',
          prefix: 'bg-',
          configs: ['colors']
        },
        {
          label: 'Fill',
          rule: 'fill',
          prefix: 'bg-',
          configs: ['colors']
        },
        {
          label: 'Font color',
          rule: 'color',
          prefix: '',
          configs: ['colors']
        },
        {
          label: 'Position',
          rule: 'position',
          prefix: '',
          configs: ['position']
        },
        {
          label: 'Height',
          rule: 'height',
          prefix: 'h',
          configs: ['scaled', 'percentaged', 'discrete']
        },
        {
          label: 'Width',
          rule: 'width',
          prefix: 'w',
          configs: ['scaled', 'percentaged', 'discrete']
        },
        {
          label: 'Max width',
          rule: 'max-width',
          prefix: 'maxw',
          configs: ['special-sizes', 'percentaged', 'discrete']
        },
        {
          label: 'Max height',
          rule: 'max-height',
          prefix: 'maxh',
          configs: ['special-sizes', 'percentaged', 'discrete']
        },
        {
          label: 'Min height',
          rule: 'min-height',
          prefix: 'minh',
          configs: ['special-sizes', 'percentaged', 'discrete']
        },
        {
          label: 'Min width',
          rule: 'min-width',
          prefix: 'minw',
          configs: ['special-sizes', 'percentaged', 'discrete']
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.s-page {
  line-height: 2.7rem;
  font-size: 1.8rem;

  hr {
    border: 0;
    height: 1px;
    background-color: map-get($colors, 'grey');
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 3rem;
  }
  h2 {
    letter-spacing: 0.1ch;
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
  h3 {
    margin-bottom: 2rem;
    font-weight: bold;
  }
  p {
    margin-bottom: 3rem;
  }
  pre {
    margin: 0;
  }
  code {
    font-family: 'Courier New', monospace, sans-serif;
    font-size: 1.5rem;
    padding: 0 2rem;
  }
  table {
    width: 100%;
    border-top: 1px solid gainsboro;
  }
  tr {
    border-bottom: 1px solid gainsboro;
  }
  .highlight {
    background-color: gainsboro;
    display: inline-block;
    padding: 2rem;
  }
}
</style>