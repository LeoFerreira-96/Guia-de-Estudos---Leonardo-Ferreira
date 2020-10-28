<template>
    <section>
        Filtro
    </section>
    <section>
        <div>
            <button><router-link to="/register">Registre um Treinador</router-link></button>
        </div>
        <ul v-if="hasCoaches">
            <coach-item v-for="coach in filterCoaches" :key="coach.id" :id="coach.id" :firstName="coach.firstName" :lastName="coach.lastName" :rate="coach.hourlyRate" :areas="coach.areas"></coach-item>
        </ul>
        <h3 v-else>Sem Treinadores no Momento</h3>
    </section>
</template>

<script>
import CoachItem from '../../components/coaches/CoachesItem.vue'

export default {
    components: {
        CoachItem
    },
    computed: {
        filterCoaches() {
            return this.$store.getters['coaches/coaches']
        },
        hasCoaches() {
            return this.$store.getters['coaches/hasCoaches']
        }
    }
}
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>