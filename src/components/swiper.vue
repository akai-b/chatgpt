<template>
  <swiper
				:pagination="{
					dynamicBullets: true,
				}"
				:modules="modules"
				class="mySwiper"
			>
    <swiper-slide>Slide 1</swiper-slide>
    <swiper-slide>Slide 2</swiper-slide><swiper-slide>Slide 3</swiper-slide>
    <swiper-slide>Slide 4</swiper-slide><swiper-slide>Slide 5</swiper-slide>
    <swiper-slide>Slide 6</swiper-slide><swiper-slide>Slide 7</swiper-slide>
    <swiper-slide>Slide 8</swiper-slide><swiper-slide>Slide 9</swiper-slide>
  </swiper>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';
// import Swiper core and required modules
import { Pagination } from 'swiper';
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/pagination';

const modules = reactive([Pagination])

const onSwiper = (swiper) => {
	console.log(swiper);
};
const onSlideChange = () => {
	console.log('slide change');
};
</script>
<style lang='scss' scoped>
</style>