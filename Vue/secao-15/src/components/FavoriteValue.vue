<template>
  <h3>{{ counter }}</h3>
  <p>Nos fazemos mais...</p>
</template>

<script>
export default {
  computed: {
    counter() {
      return this.$store.getters['numbers/normalizedCounter'];
    },
  },
};
</script>