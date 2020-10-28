<template>
  <button @click="inc">adicionar 2</button>
  <button @click="increase({value: 11})">adicionar 11</button>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  methods: {
    ...mapActions('numbers', {
      inc: 'increment',
      increase: 'increase'
    })
  }
}
</script>