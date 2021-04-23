<template>
  <div class="tag" :class="this.type || ''" >
    {{ text }}
  </div>
</template>

<script>
export default {
  name: 'Tag',
  props: {
    text: {
      type: String,
      default: ''
    },
    type: {
      validator: val => {
        return ['new', 'hot'].includes(val)
      }
    }
  }
}
</script>
