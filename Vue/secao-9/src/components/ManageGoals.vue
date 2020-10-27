<template>
    <div>
        <h2>Gerenciar Objetivos</h2>
        <input type="text" ref="goal"/>
        <button @click="setGoal">Adicionar</button>
        <error-alert v-if="inputIsInvalid">
            <h2>Input  invalido</h2>
            <p>Por favor insira Objetivo</p>
            <button @click="confirmError">Beleza</button>
        </error-alert>
    </div>
</template>

<script>
import ErrorAlert from './ErrorAlert.vue'

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            inputIsInvalid: false
        }
    },
    methods: {
        setGoal() {
            const enteredValue = this.$refs.goal.value;
            if(enteredValue === '') {
                this.inputIsInvalid = true
            }
        },
        confirmError() {
            this.inputIsInvalid = false
        }
    }
}
</script>