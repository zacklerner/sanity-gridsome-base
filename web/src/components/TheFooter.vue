<template>
  <footer class="the-footer">
    <span class="the-footer__copyright">Copyright © {{ new Date().getFullYear() }}.</span>
    <span class="the-footer__links">
      Powered by
      <a href="//gridsome.org">Gridsome</a> &amp;
      <a href="//www.sanity.io">Sanity.io</a>
    </span>
  </footer>
</template>

<style>
.the-footer {
  background-color:#ff7500;
  padding: var(--common-spacing);
  font-size: 0.75rem;
  display: flex;
  justify-content: space-between;
  box-shadow: var(--primary-shadow);
}
</style>