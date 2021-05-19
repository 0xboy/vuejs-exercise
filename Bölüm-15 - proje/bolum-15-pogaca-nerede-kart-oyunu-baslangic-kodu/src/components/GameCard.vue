<template>
    <div class="game-area">
        <p>{{answer}}</p>
        <h1 class="title">Poğaca <span>Nerede</span> <strong>?</strong></h1>
        <h4 class="description">Açık kartlardan birini seçiniz</h4>
        <div class="container">
            <transition-group name="rotate-all" class="card-container" appear>
                <appCard :key="card.id" :class="{'shadow' : selectedCard == card.id}" v-for="card in cards" :card="card" @click.native="selectedCard = card.id"></appCard>
            </transition-group>            
        </div>
        <div class="container">
            <transition name="rotate" mode="out-in">
                <component :card="answer" @click.native="showCard(answer)" :is="activeCard">
                </component>
            </transition>         
        </div>
    </div>
</template>
<script>
import Card from './Card';
import DefCard from './DefaultCard';
export default{
    methods:{
        showCard(answer){
            if(this.selectedCard === null){
                alert("Kart seçilmedi...!");
                return;
            }
            this.activeCard = answer.component;
            setTimeout(()=>{
        if(answer.id == this.selectedCard){
                        this.$emit("activeCompEvent", "appCelebrate");
                    }else{
                        this.$emit("activeCompEvent", "appFailure");
                    }
            },2000);
            
            
        }
    },
    created(){
        let answer = Math.ceil(Math.random() * this.cards.length);
        this.answer = this.cards[answer-1];
    },
    data(){
        return{
            activeCard : DefCard,
            answer:null,
            selectedCard : null,
            cards : [
                {id : 1, component:"appCard", img:"/src/assets/card-1.jpg"},
                {id : 2, component:"appCard", img:"/src/assets/card-2.jpg"},
                {id : 3, component:"appCard", img:"/src/assets/card-3.jpg"},
                {id : 4, component:"appCard", img:"/src/assets/card-4.jpg"},
                {id : 5, component:"appCard", img:"/src/assets/card-5.jpg"}
                ]
        }
    },
    components:{
        appCard : Card,
        appDefCard: DefCard
    }

}

</script>

<style scoped>

.title{
    text-align: center;
    font-family: sans-serif;
    color:rosybrown;
}

.title span{
    color: mediumpurple;
}

.title strong{
    color : darkred;
}

.description{
    color:grey;
    text-align:center;
}

.container, .card-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
}

.shadow{
    box-shadow: 0px 5px 48px #30969f!important;
    transition: 1s;
}

/*********************** Açık kartların transition tanımları */

.rotate-all-enter{

}

.rotate-all-enter-active{
    animation: rotate-all ease-in-out 2s forwards;
}

.rotate-all-leave{

}

.rotate-all-leave-active{

}
@keyframes rotate-all{
    from{
        transform: rotateY(0);
    }
    to{
        transform: rotateY(1080deg);
    }
}


/**************kapalı kartın animasyonu */

.rotate-enter{

}

.rotate-enter-active{
    animation: rotate-in 1s ease-in-out forwards;
}

.rotate-leave{

}

.rotate-leave-active{
 animation: rotate-out 1s ease-in-out forwards;
}

@keyframes rotate-in{
    from{
        transform: rotateY(90deg);
    }
    to{
        transform: rotateY(0deg);
    }
}

@keyframes rotate-out{
    from{
        transform: rotateY(0deg);
    }
    to{
        transform: rotateY(90deg);
    }
}
</style>
