<script>
export default {
  props: {
    msg: String,
  },
};
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
