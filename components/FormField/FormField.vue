<template>
  <div>
    <label :for="id" class="font-medium text-cool-gray-600">
      {{ label }}
    </label>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
  },
}
</script>
