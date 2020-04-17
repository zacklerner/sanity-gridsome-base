<template>
  <div
    class="hero-video__wrapper"
    id="heroVideoWrapper"
    v-if="mp4Source !== null || oggSource !== null || webmSource !== null"
  >
    <div class="hero-video__content" @click="playPause">
      <h2>{{ heroHeading }}</h2>
      <p class="hero-video__subtitle h3">{{ heroSubtitle }}</p>
      <button class="hero-video__play-button"><span>&#9654;</span> Play Video</button>
    </div>
    <div class="hero-video__overlay"></div>
    <div class="hero-video__poster">
      <img :src="poster.asset.url" alt="" />
    </div>
    <BaseVideo
      :mp4Source="mp4Source"
      :oggSource="oggSource"
      :webmSource="webmSource"
      :poster="poster"
      @ended="onEndedChild"
    />
  </div>
</template>

<script>
export default {
  props: {
    heroHeading: String,
    heroSubtitle: String,
    mp4Source: String,
    oggSource: String,
    webmSource: String,
    poster: Object
  },
  methods: {
    playPause () {
      let vid = document.getElementById('Video')
      let wrapper = document.getElementById('heroVideoWrapper')
      if (wrapper.classList.contains('video--playing')) {
        vid.pause()
        wrapper.classList.remove('video--playing')
      } else {
        vid.play()
        wrapper.classList.add('video--playing')
      }
    },
    onEndedChild () {
      document.getElementById('heroVideoWrapper').classList.remove('video--playing')
    }
  }
}
</script>

<style>
.hero-video__wrapper {
  position: relative;
  display: flex;
}
.hero-video__wrapper:hover img,
.hero-video__wrapper:hover video {
  filter: grayscale(0);
}
.hero-video__wrapper:hover .hero-video__overlay {
  opacity: 0;
}
.hero-video__content {
  z-index: 3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.hero-video__subtitle {
  transition: all 0.25s linear;
}
.hero-video__play-button {
  background-color: var(--primary-color);
  border: none;
  padding: 20px;
  font-size: 1.25rem;
  transition: opacity 0.25s linear 0.25s, transform 0.25s linear 0.25s, var(--button-transition);
}
.hero-video__play-button:hover {
  background-color: var(--dark-gray);
}
.hero-video__content,
.hero-video__poster,
.hero-video__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.hero-video__poster {
  z-index: 1;
  transition: opacity 0.5s linear;
  overflow: hidden;
}
.hero-video__poster img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero-video__overlay {
  background-color: #fff;
  opacity: 0.25;
  transition: opacity 0.25s linear;
  z-index: 2;
}
.video--playing .hero-video__overlay,
.video--playing .hero-video__poster {
  opacity: 0;
}
.video--playing .hero-video__content h2,
.video--playing .hero-video__content p,
.video--playing .hero-video__content button {
  transform: translateY(-20%);
  opacity: 0;
}
</style>
