<template>
  <div id="app">
    <TheHeader />

    <main class="main">
      <slot />
    </main>

    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '~/components/TheHeader'
import TheFooter from '~/components/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
:root {
  --color-primary: #d72132;
  --color-gray-dark: #4a4a4a;
  --color-gray-light: #e9e9e9;
  --common-spacing: 40px;
  --max-width--readable: 900px;
  --primary-shadow: 10px 10px 26px 10px rgba(0,0,0,0.75);
}
body {
  margin: 0;
  padding: calc(var(--common-spacing) * 1.5);
  background-color:#5e00b4;
  font-family: 'Open Sans', sans-serif;
}
body > #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body * {
  margin: 0;
}
h1, h2, h3 {
  font-family: 'Space Mono', monospace;
  font-weight: 400;
}
h2 {
  margin-bottom: calc(var(--common-spacing) / 2);
}
h3 {
  margin-bottom: calc(var(--common-spacing) / 3);
}
main.main {
  margin: var(--common-spacing) 0;
  flex: 1;
  color: blue;
}
main.main > *,
main.main > * > * {
  box-shadow: var(--primary-shadow);
  margin-bottom: var(--common-spacing);
}
main.main > * {
  background-color: yellow;
  padding: var(--common-spacing);
}
main.main > * > * {
  background-color: black;
}
main.main > * > *:last-child {
  margin-bottom: 0;
}
</style>
