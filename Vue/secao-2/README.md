Em um codigo de HTML onde queremos modificar apenas uma seção com Vue.

podemos utilizar o codigo abaixo:

__________ Codigo Javascript __________

const app = Vue.createApp({         //Vue é instanciado e armazenado em uma variavel javascript
    data() {            //Data sempre retorna um Objeto.
        return {
            text: "Entendendo Vue"          //Objeto retornado que podera ser usado na DOM  // poderemos esse text na DOM utilizando {{text}}
            vueLink: "http://vuejs.org/"    
        };
    },
    Methods: {

    }                           
});
app.mount('#idDaSeção')         //criamos o mount e identificamos com o id qual seção HTML devera ser modificada

__________ Codigo HTML __________

<section id="idDaSeção">
    <h2>Title</h2>
    <p>{{text}}</p>
    <p>Aprenda mais sobre <a v-bind:href="vueLink">Vue</a></p>          // diferente da interpolação para mostrar o text direto na DOM precisamos usar o v-bind: para fazer essa "interpolação" em um atributo. **Hoje em dia costumamos ao inves de usar 'v-bind:' apenas usamos ':' antes do atributo.
</section>

v-model => permite ao usuario criar uma especie de "atalho" substituindo o v-on para escutar evento e v-bind para atribuir valor, ou seja ele cria uma via de "mao dupla". 
v-once: => permite iniciar e manter a aplicação com valores iniciais nao sendo alterado mesmo que os dados de Data forem modificados.
v-bind: ou : => permite adicionar variaveis em atributos das tags.
v-html => permite interpretar um texto com tag HTML e transformar em HTML na DOM.
v-on: ou @ => permite ficar "escutando" o evento definido por exemplo v-on:click
v-on:input="setText" => permite ouvir o evento do input e apontar uma função que ira executar o metodo e atribuir para uma variavel o valor vindo do evento exemplo: 
                        setText(event) {
                            this.variable = event.target.value
                        }

Outro opção para usarmos junto do Data, seria Methods que permite definir funções que devem ser executadas apartir de um evento.
podemos refernciar nossos dados dentro da DATA usando this.text por exmplo assim podemos usar esses dados em funções que serao construidas dentro de Methods

Modificadores podem ser usados depois de um evento exmplo do preventDafault() => v-on:submit.prevent="function"

a Terceira Opção alem do Data e Methods, é o Computed que cacheia suas informações alterando na DOM somente quando alguma de suas dependencias sofre alteração, evitando assim ser re-executada diversas vezes, ajudando a melhorar o desempenho da aplicação.

Watch servem para ficar obeservando uma variavel, um dado, uma dependencias
