<template>
  <div id="page" class="ff-heebo">
    <header class="relative after-h6 after-dt after-w-100 z-1-m">
      <nav class="fixed t0 l0 w-100 df-m justify-between-m bwb1-m bc-grey-m bs-solid-m bg-white">
        <div class="df justify-between pa2 items-center">
          <nuxt-link to="/" class="blue db fwb">
            Preon
          </nuxt-link>
          <div
            v-on:click="menuOpen = !menuOpen"
            v-bind:class="['c-hamburger', menuOpen ? 'c-hamburger--open' : '', 'dn-m']">
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
            <span class="c-hamburger__line"></span>
          </div>
        </div>
        <ul v-bind:class="[menuOpen ? '' : 'dn', 'bg-grey', 'df-m']">
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" to="/docs">
              Docs
            </nuxt-link>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <a class="grey-dark" href="https://github.com/uposcartech/Preon">
              Github
            </a>
          </li>
          <li class="df justify-center pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" to="#get-started">
              Get started
            </nuxt-link>
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
      <p v-if="1==2">
        <pre v-highlightjs="getStarted">
          <code class="html xml"></code>
        </pre>
      </p>
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
      <h3 id="api-colors">Colors</h3>
      <table>
        <tr>
          <td>.grey</td>
          <td><span class="highlight">color: #f1f5f1</span></td>
        </tr>
      </table>
    </section>
    <footer v-bind:class="[footerOpen ? 'h-100' : '', 'relative fixed bg-white bwt1 bwt0-m bg-grey-m bc-grey-m bs-solid grey-dark b0 l0 w-100 h-100-m t5-m w-30-m w-20-l pt2-m']">
      <div 
        v-on:click="footerOpen = !footerOpen"
        class="df justify-between pa2 pt1 pb1 items-center">
        <div class="fs1 fwb fs1">
          Table of contents >
        </div>
      </div>
      <ul v-bind:class="[footerOpen ? '' : 'dn', 'bg-grey db-m h-100 scroll']">
          <li v-bind:key="section[1]" v-for="section in sections" class="blue df justify-center justify-start-m pa2 pt1 pb1 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" v-bind:to="section[1]">
              {{section[0]}}
            </nuxt-link>
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
      `
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
    letter-spacing: .1ch;
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
    font-family: "Courier New", monospace, sans-serif;
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