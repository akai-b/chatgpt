<script setup>
import { ref } from "vue";
import LeftMenu from "./components/LeftMenu.vue";

const count = ref(0);
let showMenu = ref(false);
</script>

<template>
	<div class="overflow-hidden w-full h-full relative flex">
		<left-menu class="hidden md:block"></left-menu>
		<div class="z-40 relative" v-if="showMenu">
			<div class="fixed block inset-0 bg-gray-600 bg-opacity-75"></div>
			<left-menu class="fixed z-40"></left-menu>
		</div>
		<div class="flex h-full max-w-full flex-1 flex-col">
			<div
				class="sticky top-0 z-10 flex items-center border-b border-white/20 bg-gray-800 pl-1 pt-1 text-gray-200 sm:pl-3 md:hidden">
				<button type="button"
					class="-ml-0.5 -mt-0.5 inline-flex h-10 w-10 items-center justify-center rounded-md hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white dark:hover:text-white">
					<span class="sr-only">Open sidebar</span>
					<icon-svg name="menu" class="w-6 h-6"></icon-svg>
				</button>
				<h1 class="flex-1 text-center text-base font-normal">New chat</h1>
				<button type="button" class="px-3">
					<icon-svg name="plus" class="w-6 h-6"></icon-svg>
				</button>
			</div>
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
											
											<h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
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
											<h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
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
											<h2 class="flex gap-3 items-center m-auto text-lg font-normal md:flex-col md:gap-2">
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
				<div
					class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
					<form
						class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
						<div class="relative flex h-full flex-1 items-stretch md:flex-col">
							<div class="">
								<div class="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
							</div>
							<div
								class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
								<textarea tabindex="0" data-id="root" rows="1" placeholder="Send a message..."
									class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:ring-0 focus-visible:ring-0 dark:bg-transparent pl-2 md:pl-0"
									style="max-height: 200px; height: 24px; overflow-y: hidden"></textarea><button disabled=""
									class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
									<icon-svg name="send" class="w-4 h-4"></icon-svg>
									
								</button>
							</div>
						</div>
					</form>
					<div class="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
						<span><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank"
								rel="noreferrer" class="underline">ChatGPT Mar 23 Version</a>. Free Research Preview. ChatGPT may produce
							inaccurate
							information about people, places, or facts.</span>
					</div>
					<iframe id="xcanwin" src="/api/auth/session" style="height: 0px; width: 100%"></iframe>
				</div>
			</main>
		</div>
	</div>
</template>

<style scoped>
/* // @media (max-width: 768px) {
//   .flex {
//     flex-direction: column;
//   }
// } */
</style>
