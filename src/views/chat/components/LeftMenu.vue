<template>
    <div class="h-screen dark flex-shrink-0 bg-gray-900 md:flex w-[320px] md:w-[260px] md:flex-col">
      <div class="relative flex h-full w-full max-w-xs flex-1 flex-col bg-gray-900" data-headlessui-state="open">
        <div class="absolute top-0 right-0 -mr-12 pt-2" v-if="showMenu">
          <button type="button"	class="ml-1 flex h-10 w-10 items-center justify-center focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white text-white rounded-md"
            tabindex="0" @click="closeMenu">
            <span class="sr-only">Close sidebar</span>
            <icon-svg name="close" class="w-6 h-6"></icon-svg>
          </button>
        </div>
        <div class="scrollbar-trigger flex h-full w-full flex-1 items-start border-white/20">
          <nav class="flex h-full flex-1 flex-col space-y-1 p-2">
            <a class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm mb-1 flex-shrink-0 border border-white/20">
              <icon-svg name="plus" class="w-4 h-4"></icon-svg>New chat
            </a>
            <div class="flex-col flex-1 overflow-y-auto border-b border-white/20 -mr-2"></div>
            <a	class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <icon-svg name="delete" class="w-4 h-4"></icon-svg>Clear conversations</a>
            <a class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <icon-svg name="setting" class="w-4 h-4"></icon-svg>Settings
            </a>
            <a href="https://help.openai.com/en/collections/3742473-chatgpt" target="_blank"
              class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <icon-svg name="share" class="w-4 h-4"></icon-svg>Get help
            </a>
            <a class="flex py-3 px-3 items-center gap-3 rounded-md hover:bg-gray-500/10 transition-colors duration-200 text-white cursor-pointer text-sm">
              <icon-svg name="logout" class="w-4 h-4"></icon-svg>Log out
            </a>
          </nav>
        </div>
      </div>
    </div>
</template>
<script setup>
import { ref  } from "vue"

defineProps({
  showMenu:Boolean
})
const emit = defineEmits(['close'])
function closeMenu(){
  emit('close')
  console.log('close',this)

}
</script>
<style lang='scss' scoped>
</style>