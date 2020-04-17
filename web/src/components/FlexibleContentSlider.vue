<template>
  <div class="slider__wrapper">
    <span>{{ type }}</span>
    <h2>{{ title }}</h2>
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide
        v-for="slide in slides"
        :key="slide.key"
      >
        <h3>{{ slide.title }}</h3>
        <BaseImageWithRatio
          :src="slide.image.asset.url"
          :meta="$static.metadata.sanityOptions"
          v-if="slide.image !== null"
        />
        <BaseBlockContent :blocks="slide._rawText" />
        <a :href="slide.linkDestination">{{ slide.linkText }}</a>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  props: {
    type: String,
    title: String,
    slides: Array
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 2.75,
        initialSlide: 1,
        loop: true,
        spaceBetween: 30,
        centeredSlides: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
      }
    }
  }
}
</script>

<style>
.slider__wrapper {
  padding: var(--common-spacing);
}
.swiper-container {
  border: var(--border-primary);
  border-radius: 4rem;
  background-color: rgb(125, 125, 125);
}
.swiper-container:hover {
  background-color: orangered;
}
.swiper-slide {
  width: 60%;
  min-height: 300px;
  height: unset;
  box-sizing: border-box;
  padding: var(--common-spacing);
  margin-top: var(--common-spacing);
  margin-bottom: var(--common-spacing);
  background-color: white;
  border: var(--border-primary);
  transition: background-color 0.25s 0.1s;
}
.swiper-slide:hover {
  background-color: green !important;
}
.swiper-container:hover .swiper-slide {
  background-color: yellow;
}
.swiper-slide:nth-child(2n) {
  width: 40%;
}
.swiper-slide:nth-child(3n) {
  width: 20%;
}
.swiper-pagination-bullet-active {
  background-color: black;
}
.swiper-button-prev,
.swiper-button-next {
  color: black;
}
.swiper-button-prev {
  left: calc(var(--common-spacing) / 2);
}
.swiper-button-next {
  right: calc(var(--common-spacing) / 2);
}
</style>

<static-query>
query {
  metadata {
    sanityOptions{
      projectId
      dataset
    }
  }
}
</static-query>