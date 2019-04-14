<template>
  <div id="page" class="ff-heebo bg-grey h-100">
    <header class="relative after-h6 after-dt after-w-100 z-1-m mb1">
      <nav class="bg-white fixed t0 l0 w-100 df-m justify-between-m bwb1-m bc-grey-m bs-solid-m">
        <div class="df justify-between justify-start-m pa2 items-center">
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
        <ul v-bind:class="[menuOpen ? '' : 'dn', 'bg-blue', 'df-m']">
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="white" to="/docs">Docs</nuxt-link>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <a class="white" href="https://github.com/uposcartech/Preon">Github</a>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="white" to="#get-started">Get started</nuxt-link>
          </li>
        </ul>
      </nav>
    </header>
    <section class="page mr1 w-70-m w-60-l ml-20-l mt3-m maxw-xxxsuper-l">
      <div class="ml3-m ml4-l pa2 pt6-m pt3-m pb1 bg-white mb1 mb2-m">
        <h2 class="mb1">Account</h2>
        <span class="h0 bwb1 bc-blue bs-solid dt w-100 mb3"></span>
        <div>
          <div class="df-s items-center-s mb3">
            <div class="w-30-s blue fs1 mb1 mb0-m">Email address</div>
            <div class="w-70-s bwb2 bc-blue bs-solid bg-grey ml1 ml0-m">
              <input
                type="text"
                placeholder="Email address"
                class="bg-transparent w-100 h-100 bw0 fs2 pa2"
              >
            </div>
          </div>
        </div>
        <div>
          <div class="df-s items-center-s justify-start mb3">
            <div class="w-30-s blue fs1 mb1 mb0-m">Display name</div>
            <div class="w-70-s bwb2 bc-blue bs-solid bg-grey ml1 ml0-m">
              <input
                type="text"
                placeholder="Display name"
                class="bg-transparent w-100 h-100 bw0 fs2 pa2"
              >
            </div>
          </div>
        </div>
        <div>
          <div class="df-s items-center-s mb3">
            <div class="w-30-s blue fs1 mb1 mb0-m">Password</div>
            <div class="w-70-s bwb2 bc-blue bs-solid bg-grey ml1 ml0-m">
              <input
                type="password"
                placeholder="Password"
                class="bg-transparent w-100 h-100 bw0 fs2 pa2"
                style
              >
            </div>
          </div>
        </div>
        <div>
          <div class="df-s items-center-s mb1 mb2-m">
            <div class="w-30-s blue fs1 mb1 mb0-m">Language</div>
            <div class="w-70-s bwb2 bc-blue bs-solid bg-grey pa2 ml1 ml0-m">
              <select class="bg-transparent w-100 h-100 bw0 fs2 h4">
                <option>English</option>
                <option>French</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div class="ml3-m ml4-l pa2 pt6-m pt3-m pb1 bg-white mb3">
        <p class="fs1 mb3">Your account information is private.</p>
      </div>
    </section>
    <footer
      v-bind:class="[footerOpen ? 'h-100' : '', 'mt2 ml1-m ml2-l relative fixed bg-white bwt1 bwt0-m bg-grey-m bc-grey-m bs-solid grey-dark b0 l0 w-100 h-100-m t5-m w-30-m w-20-l pt2-m']"
    >
      <div
        v-on:click="footerOpen = !footerOpen"
        class="bg-blue white df justify-between pa2 pt1 pb1 items-center"
      >
        <div class="fs1 fwb fs1">Account</div>
      </div>
      <ul v-bind:class="[footerOpen ? '' : 'dn', 'db-m h-100 scroll']">
        <li
          v-bind:key="section[1]"
          v-for="section in sections"
          class="blue df justify-center bg-white justify-start-m pa2 pt1 pb1 bwb1 bs-solid bc-blue"
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
        ['Settings', '#settings'],
        ['Privacy and safety', '#privacy'],
        ['Billing', '#billing'],
        ['Notifications', '#notifications'],
        ['Apps', '#apps'],
        ['Accessibility', '#accessibility'],
        ['Your data', '#your-data']
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
