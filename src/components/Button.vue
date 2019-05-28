<template>
  <div class="btn">
    <div class="btn__copy">{{ buttonCopy }}</div>
  </div>
</template>

<script>
export default {
  name: 'Button',
  props: {
    buttonCopy: String
  }
}
</script>