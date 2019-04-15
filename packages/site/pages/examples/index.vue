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

      <p>Error input</p>
      <div class="bwb2 bc-red bs-solid bg-grey mb2">
        <input
          type="password"
          placeholder="Password"
          class="bg-transparent w-100 h-100 bw0 fs2 pa2"
          style
        >
      </div>

      <hr>
    </section>
  </div>
</template>
