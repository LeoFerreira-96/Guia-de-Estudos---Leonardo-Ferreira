<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>você quer continar com a exclusão do usuario?</p>
  </user-alert>
  <section>
    <h2>Excluir um Usuario</h2>
    <button @click="showAlert">Excluir Usuario</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert.js'

export default {
  components: {
    UserAlert
  },
  data() {
    return {
      title: "Excluir o usuario?"
    }
  },
  mixins: [alertMixin],
}
</script>