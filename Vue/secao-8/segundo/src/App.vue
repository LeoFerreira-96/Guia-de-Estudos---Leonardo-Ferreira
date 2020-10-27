<template>
  <div>
    <active-element
      :topic-title="activeTopic && activeTopic.title"
      :text="activeTopic && activeTopic.fullText"
    ></active-element>
    <knowledge-base></knowledge-base>
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basico',
          title: 'O básico',
          description: 'Noções básicas do Core Vue que você precisa saber',
          fullText:
            'O Vue é uma ótima estrutura e tem alguns conceitos-chave: vinculação de dados, eventos, componentes e reatividade - isso deve lhe dizer algo!',
        },
        {
          id: 'components',
          title: 'Componentes',
          description:
            'Componentes são um conceito central para a construção de interfaces de usuário e aplicativos Vue',
          fullText:
            'Com os componentes, você pode dividir a lógica (e marcação) em blocos de construção separados e, em seguida, combinar esses blocos de construção (e reutilizá-los) para construir interfaces de usuário poderosas.',
        },
      ],
      activeTopic: null,
    };
  },
  provide() {
    return { 
      topics: this.topics,
      selectTopic: this.activateTopic
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },
  mounted() {
    setTimeout(() => {
      this.topics.push({
        id: 'eventos',
        title: 'Eventos',
        description: 'Os eventos são importantes no Vue',
        fullText: 'Os eventos permitem que você acione o código sob demanda!'
      });
    }, 3000);
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
section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>