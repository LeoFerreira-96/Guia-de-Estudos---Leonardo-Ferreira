<template>
  <user-alert v-if="alertIsVisible" title="Excluir um usuario?" @close="hideAlert">
    <p>Você quer continuar com a exclusão do usuario?</p>
  </user-alert>
  <section>
    <h2>Excluir um usuario</h2>
    <button @click="showAlert">Excluir usuario</button>
  </section>
</template>

<script>
import useAlert from '../hooks/alert.js'
import UserAlert from './UserAlert.vue'

export default {
  components: {
    UserAlert,
  },
  setup() {
    const [alertIsVisible, showAlert, hideAlert] = useAlert()
    return {
      alertIsVisible,
      showAlert,
      hideAlert,
    };
  },
};
</script>