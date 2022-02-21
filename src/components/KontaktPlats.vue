<script>
export default {
  props: {
    msg: String,
  },
  methods: {
    onClick() {
      this.counter = this.counter + 1;
      this.$emit("value-incremented");
      this.$store.commit("increment", 3);
    },
  },
  data() {
    return {
      counter: 0,
    };
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
  Var finns vi?
  <span>{{ msg }}</span>

  Var exakt? Det säger jag inte. Nu har du faktiskt frågat:

  <input :value="counter" @click="onClick" type="button" /> ggr.

  <p>
    Om tre besökare frågar så - då kommer frågan hela
    {{ $store.state.counter }}
    gånger
  </p>
</template>
