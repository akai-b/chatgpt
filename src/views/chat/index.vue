<script setup>
import { provide, reactive, ref } from "vue";
import LeftMenu from "./components/LeftMenu.vue";
import pageFooter from "./components/Footer.vue";
import swiperPage from "../../components/swiper.vue"



const rooms = reactive([])

const count = ref(0);
let showMenu = ref(false);
provide(rooms)
</script>

<template>
	<div class="overflow-hidden w-full h-full relative flex">
		<left-menu class="hidden md:block"></left-menu>
		<div class="z-40 relative block md:hidden " >
			<Transition>
				<div class="fixed block bg-opacity-75 inset-0 bg-gray-600 md:hidden" @click="showMenu=false" v-if="showMenu"></div>
			</Transition>
			
			<left-menu class="fixed z-40 mobile-menu" :class="{'menu-hidden':!showMenu}" :showMenu="showMenu" @close="showMenu=false"></left-menu>
		</div>
		<div class="flex h-screen max-w-full flex-1 flex-col">
			<div
				class="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
				<button type="button" @click="showMenu = true"
					class="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white">
					<span class="sr-only">Open sidebar</span>
					<icon-svg name="menu" class="w-6 h-6"></icon-svg>
				</button>
				<h1 class="flex-1 text-center text-base font-normal">New chat</h1>
				<button type="button" class="px-3">
					<icon-svg name="plus" class="w-6 h-6"></icon-svg>
				</button>
			</div>
			<!-- <swiper-page></swiper-page> -->
			<main class="relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1">
				<div class="flex-1 overflow-hidden">
					<div class="react-scroll-to-bottom--css-mbafh-79elbk h-full dark:bg-gray-800">
						<div class="react-scroll-to-bottom--css-mbafh-1n7m0yu">
							<div class="flex flex-col items-center text-sm dark:bg-gray-800">
								<div
									class="text-gray-800 w-full md:max-w-2xl lg:max-w-3xl md:h-full md:flex md:flex-col px-6 dark:text-gray-100">
									<h1
										class="text-4xl font-semibold text-center mt-6 sm:mt-[20vh] ml-auto mr-auto mb-10 sm:mb-16 flex gap-2 items-center justify-center">
										ChatGPT
									</h1>
									<div class="md:flex items-start text-center gap-3.5">
										<div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">

											<h2
												class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
												<icon-svg name="examples" class="w-6 h-6"></icon-svg>
												Examples
											</h2>
											<ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
												<button
													class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
													"Explain quantum computing in simple terms" →</button><button
													class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
													"Got any creative ideas for a 10 year old’s birthday?"
													→</button><button
													class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md hover:bg-gray-200 dark:hover:bg-gray-900">
													"How do I make an HTTP request in Javascript?" →
												</button>
											</ul>
										</div>
										<div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
											<h2
												class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
												<icon-svg name="capabilities" class="w-6 h-6"></icon-svg>
												Capabilities
											</h2>
											<ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													Remembers what user said earlier in the conversation
												</li>
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													Allows user to provide follow-up corrections
												</li>
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													Trained to decline inappropriate requests
												</li>
											</ul>
										</div>
										<div class="flex flex-col mb-8 md:mb-auto gap-3.5 flex-1">
											<h2
												class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
												<icon-svg name="limitations" class="w-6 h-6"></icon-svg>
												Limitations
											</h2>
											<ul class="flex flex-col gap-3.5 w-full sm:max-w-md m-auto">
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													May occasionally generate incorrect information
												</li>
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													May occasionally produce harmful instructions or
													biased content
												</li>
												<li class="w-full bg-gray-50 dark:bg-white/5 p-3 rounded-md">
													Limited knowledge of world and events after 2021
												</li>
											</ul>
										</div>
									</div>
								</div>
								<div class="w-full h-32 md:h-48 flex-shrink-0"></div>
							</div>
						</div>
					</div>
				</div>
				<page-footer></page-footer>
			</main>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.mobile-menu{
		transition: all 0.3s;
	&.menu-hidden{
			transform: translateX(-100%);
	}
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
