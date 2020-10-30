<template>
  <user-alert v-if="alertIsVisible" title="Adicionar um usuario?" @close="hideAlert">
    <p>Você quer continuar com a adição do usuario?</p>
  </user-alert>
  <section>
    <h2>Adicionar um usuario</h2>
    <button @click="showAlert">Adicionar usuario</button>
  </section>
</template>

<script>
import useAlert from '../hooks/alert.js'
import UserAlert from './UserAlert.vue';

export default {
  components: {
    UserAlert,
  },
  setup() {
    const [alertIsVisible, showAlert, hideAlert] = useAlert()
    return {
      alertIsVisible,
      showAlert,
      hideAlert
    }
  }
};
</script>