<template>
	<div
		class="absolute bottom-0 left-0 w-full border-t md:border-t-0 dark:border-white/20 md:border-transparent md:dark:border-transparent md:bg-vert-light-gradient bg-white dark:bg-gray-800 md:!bg-transparent dark:md:bg-vert-dark-gradient pt-2">
		<form class="stretch mx-2 flex flex-row gap-3 last:mb-2 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
			<div class="relative flex h-full flex-1 items-stretch md:flex-col">
				<div class="">
					<div class="h-full flex ml-1 md:w-full md:m-auto md:mb-2 gap-0 md:gap-2 justify-center"></div>
				</div>
				<div
					class="flex flex-col w-full py-2 flex-grow md:py-3 md:pl-4 relative border border-black/10 bg-white dark:border-gray-900/50 dark:text-white dark:bg-gray-700 rounded-md shadow-[0_0_10px_rgba(0,0,0,0.10)] dark:shadow-[0_0_15px_rgba(0,0,0,0.10)]">
					<textarea tabindex="0" data-id="request-:R2hd6:-0" v-model="massege"
						rows="1" placeholder="Send a message." ref="massegeInput" @input="textChange" @keydown.enter="send"
						class="m-0 w-full resize-none border-0 bg-transparent p-0 pr-7 focus:outline-none dark:bg-transparent pl-2 md:pl-0"></textarea>
					<button disabled=""
						class="absolute p-1 rounded-md text-gray-500 bottom-1.5 md:bottom-2.5 hover:bg-gray-100 enabled:dark:hover:text-gray-400 dark:hover:bg-gray-900 disabled:hover:bg-transparent dark:disabled:hover:bg-transparent right-1 md:right-2 disabled:opacity-40">
						<icon-svg name="send" class="w-4 h-4"></icon-svg>
					</button>
				</div>
			</div>
		</form>
		<div class="px-3 pt-2 pb-3 text-center text-xs text-black/50 dark:text-white/50 md:px-4 md:pt-3 md:pb-6">
			<span><a href="https://help.openai.com/en/articles/6825453-chatgpt-release-notes" target="_blank" rel="noreferrer"
					class="underline">ChatGPT Mar 23 Version</a>. Free Research Preview. ChatGPT may produce
				inaccurate
				information about people, places, or facts.</span>
		</div>

	</div>
</template>
<script setup >
import { reactive, ref } from "vue"

const massegeInput = ref()

let massege = ref('')

function textChange(e){
	let txt = e.target
	txt.style.height = 'auto'
	txt.style.height = txt.scrollHeight+'px'
}
function send(e){
	e.preventDefault()
	console.log('massege',massege)
}
</script>
<style lang='scss' scoped></style>