<template>
    <transition-group name="slideContainer" mode="out-in">
        <canvas id="canvas" key="canvas" v-show="activeComp == 'appCelebrate'"></canvas>
        <components key="mainComp" @activeCompEvent="activeComp = $event" :is="activeComp">
        </components>
        
    </transition-group>    
</template>
<script>
import GameCards from './components/GameCard';
import Failure from './components/Failure';
import Celebrate from './components/Celebrate';
export default {

    components:{
        appGameCards : GameCards,
        appFailure : Failure,
        appCelebrate : Celebrate
    },
    data(){
        return{
            activeComp : 'appGameCards'
        }
        
    }
}
</script>
<style>
.slideContainer-enter{

}
.slideContainer-enter-active{
        animation:slide-in .3s ease-in-out forwards
}
.slideContainer-leave{}
.slideContainer-leave-active{
    animation:slide-out .3s ease-in-out forwards
}

@keyframes slide-in{
    from{transform: translateX(-1000px);
    opacity: 0;}
    to{transform: translateX(0px);
    opacity: 1;}
}
@keyframes slide-out {
    from{transform: translateX(0px);
    opacity: 1;}
    to{transform:translateX(1000px);
    opacity: 0;}
}
</style>
