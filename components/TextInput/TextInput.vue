<template>
  <FormField :id="id" :label="label">
    <input
      :id="id"
      :name="name"
      :type="type"
      class="block w-full mt-1 border-cool-gray-300 rounded-md shadow-sm transition duration-150 ease-in-out focus:border-lime-500 focus:ring-lime-600 sm:text-sm"
    />
  </FormField>
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
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'text',
    },
  },
}
</script>
