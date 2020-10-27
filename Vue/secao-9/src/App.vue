<template>
  <div>
    <the-header></the-header>
    <button @click="setSelectedComponent('active-goals')">Objetivos Ativos</button>
    <button @click="setSelectedComponent('manage-goals')">Gerenciar Objetivos</button>
    
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
    <component :is="selectedComponent"></component>
    </keep-alive>

    <!-- <badge-list></badge-list>
    <user-info
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    ></user-info>
    <course-goals #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
        <p>{{ slotProps['another-prop']}}</p>
    </course-goals> -->
  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
// import BadgeList from './components/BadgeList.vue';
// import UserInfo from './components/UserInfo.vue';
// import CourseGoals from './components/CourseGoals.vue'
import ActiveGoals from './components/ActiveGoals.vue'
import ManageGoals from './components/ManageGoals.vue'

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals
    ActiveGoals,
    ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Leonardo Ferreira',
        description: 'Proprietário e administrador do site',
        role: 'admin',
      },
    };
  },
  methods: {
    setSelectedComponent(argument) {
      this.selectedComponent = argument
    }
  }
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>