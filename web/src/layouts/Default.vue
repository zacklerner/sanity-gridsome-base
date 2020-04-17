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
  --color-gray-medium: #afafaf;
  --color-gray-light: #e9e9e9;
  --common-spacing: 40px;
  --max-width--readable: 900px;
  --shadow-primary: 6px 6px 6px 2px rgba(0,0,0,0.25);
  --border-primary: 3px solid black;
}
body {
  margin: 0;
  padding: calc(var(--common-spacing) * 1.5);
  background-color:#ffffff;
  font-family: 'Open Sans', sans-serif;
}
body > #app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
body * {
  margin: 0;
  transition: background-color 0.25s, box-shadow 0.25s;
}
a {
  color: black;
}
a:visited {
  color: gray;
}
button:focus {
  outline: 6px dashed orange;
  outline-offset: 11px;
}
video,
img {
  filter: grayscale(1);
  transition: filter 0.5s linear;
}
video:hover,
img:hover {
  filter: grayscale(0);
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
p:not(:last-child) {
  margin-bottom: calc(var(--common-spacing) / 2);
}
main.main {
  margin: var(--common-spacing) 0;
  flex: 1;
}
/* main.main,
header.the-header,
footer.the-footer {
  max-width: 1000px;
  width: 100%;
  margin-left: auto;
  margin-right: auto;
} */
header.the-header,
footer.the-footer,
main.main > *,
main.main > * > *,
.image-with-ratio__wrapper {
  border: var(--border-primary);
  box-shadow: var(--shadow-primary);
}
header.the-header:hover,
footer.the-footer:hover,
main.main > *:hover,
main.main > * > *:hover,
.image-with-ratio__wrapper:hover {
  box-shadow: none;
}
main.main > *,
main.main > * > *,
.image-with-ratio__wrapper {
  margin-bottom: var(--common-spacing);
}
header.the-header,
footer.the-footer,
main.main > * {
  padding: var(--common-spacing);
}
main.main > * {
  background-color: rgb(201, 201, 201);
}
main.main > *:hover {
  background-color: rgb(150, 247, 254);
}
main.main > * > * {
  background-color: rgb(152, 152, 152);
}
main.main > * > *:hover {
  background-color: rgb(203, 142, 216);
}
main.main > * > *:last-child {
  margin-bottom: 0;
}
.the-footer:hover,
.the-header:hover {
  background-color: rgb(255, 253, 204);
}
</style>
