<script>
import CitiesList from "./components/CitiesList.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Test from "./components/Test.vue";

export default {
  components: {
    CitiesList,
    HelloWorld,
    //  Test,
  },
};
</script>

<style></style>

<template>
  <!--

  <HelloWorld msg="Hello World!" />
  <CitiesList />
  <Test />
 -->

  <nav style="text-align: center">
    <p>
      <a>
        <RouterLink to="/">Start </RouterLink>
      </a>

      <a>
        <RouterLink to="/about">Om </RouterLink>
      </a>

      <a>
        <RouterLink to="/contact">Kontakt </RouterLink>
      </a>
    </p>
  </nav>

  <!--
  <main>
    <RouterView />
  </main> -->

  <transition name="fade" mode="out-in">
    <router-view />
  </transition>
</template>
