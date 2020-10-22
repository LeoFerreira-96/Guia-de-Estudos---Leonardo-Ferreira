_____ Renderização Condicional _____

v-if="condição em javascript"
v-else-if="condição em javascript"
v-else

// Para o v-else funcionar corretamente, precisa ser indicado logo apos de um  componente com v-if caso tenha algum elemento entre eles entao o v-else não ira funcionar

v-show="consdição em javascript"

//Parecido com v-if porem, ao contrario do v-if ele nao retira o conteudo da tela, apenas aplica um hidden="none" fazendo com que o compomente fique "escondido"

criar uma lista usando v-for

<ul>
    <li v-for="(item, index ) in items" key="id ou item">{{item}}</li>  // o nome que for definido em for devera ser utilizado na interpolação. *item* in items --> {{*item*}} e o *items* sera definido através do array criado em Data()
</ul>

key pode ser interessante ser adicionado para nao perder os dados daquele elemento quando algum outro elemento da lista sofrer alteração. assim o que contiver alteração nao as perdera pois com a key fica mais facil pra o Vue destinguir um elemento do outro.