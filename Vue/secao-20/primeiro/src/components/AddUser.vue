<template>
  <user-alert v-if="alertIsVisible" :title="title" @close="hideAlert">
    <p>Você quer continuar com adição do usuario?</p>
  </user-alert>
  <section>
    <h2>Adicionar Usuario</h2>
    <button @click="showAlert">Adicionar Usuario</button>
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
      title: "Adicionar um Usuario"
    }
  },
  mixins: [alertMixin],
};
</script>