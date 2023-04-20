<template>
    <svg aria-hidden="true">
      <use :xlink:href="symbolId" />
    </svg>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  const props = defineProps({
    name: {type: String,required: true,},
    color: {type: String,default: ''}
  })

  const symbolId = computed(() => `#icon-${props.name}`);
  </script>
  
