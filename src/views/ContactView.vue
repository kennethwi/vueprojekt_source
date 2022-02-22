<script>
  import KontaktPlats from '../components/KontaktPlats.vue'

  export default {
    components: {
      KontaktPlats
    }
  }
</script>
<template>
  <section class="dummy">
    <h1 style="padding-left: 12px">Kontakt</h1>
    <p />
    <p style="text-align: center">
      <KontaktPlats msg="Vi finns i Sverige" />
    </p>

    <section class="dummy" style="bottom: 0px">Kontaktuppgifter...</section>

    <!-- <extrakomponent>
      <input type="textarea" start="Inget meddelande" style="top: 10px" />
    </extrakomponent> -->
  </section>
</template>
