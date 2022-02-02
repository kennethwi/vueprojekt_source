<template>
  <h1>Länkar från {{ $route.params.artikeltitel }}</h1>
  <h3>- Hämtade genom store.state.laenklistan</h3>

  {{ $store.state.laenklistan }}

  <Laenklista></Laenklista>
</template>
