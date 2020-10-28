<template>
  <div>
    <the-navigation></the-navigation>
    <main>
      <router-view></router-view>
    </main>
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation
  },
  data() {
    return {
      teams: [
        { id: 't1', name: 'Frontend Engenheiros', members: ['u1', 'u2'] },
        { id: 't2', name: 'Backend Engenheiros', members: ['u1', 'u2', 'u3'] },
        { id: 't3', name: 'Consultoria de cliente', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engenheiro' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engenheiro' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engenheiro' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultor' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultor' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>