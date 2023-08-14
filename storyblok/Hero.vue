<script setup>
defineProps({
  blok: Object,
})
</script>

<template>
  <div class="hero" v-editable="blok">
    <div class="container">
      <div class="col">
        <img :src="blok.image.filename" :alt="blok.image.alt"/>
      </div>
      <div class="col">
        <h1>{{ blok.title }}</h1>
        <h2>{{ blok.subtitle }}</h2>
      </div>
    </div>
  </div>
</template>
