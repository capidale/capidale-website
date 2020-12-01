<template>
  <div
    class="flex items-center justify-center h-12 w-12 rounded-md shadow bg-gradient-to-br from-lime-500 to-lime-700 text-white"
  >
    <img :src="`/icons/${name}.svg`" class="h-8 w-8" />
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>
