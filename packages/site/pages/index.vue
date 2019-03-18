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
            <a class="grey-dark" href="https://github.com/uposcartech/Preon">
              Get started
            </a>
          </li>
        </ul>
      </nav>
    </header>
    <section class="page pa2">
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
          <li class="blue df justify-center justify-start-m pa2 bwb1 bs-solid bc-white bwb0-m">
            <nuxt-link class="grey-dark" to="/docs">
              Summary
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
      footerOpen: false
    }
  }
}
</script>