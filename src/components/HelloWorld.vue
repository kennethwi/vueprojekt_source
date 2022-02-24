<script>
  export default {
    props: {
      msg: { type: String, default: '' }
    }
  }
</script>

<style>
  span {
    font-weight: bold;
  }
</style>

<template>
  <img alt="" />
  <span>{{ msg }}</span>
</template>
