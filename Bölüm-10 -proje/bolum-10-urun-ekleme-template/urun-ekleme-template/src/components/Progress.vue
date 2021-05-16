<template>
    <div class="progress">
      <div class="progress-bar bg-info" role="progressbar" :style="{width: progress +'%'}" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
        {{currentItem}}/10
      </div>
    </div>
</template>
<script>
import {eventBus} from '../main';

export default{
  data(){
    return {currentItem : null, progress : 0}
  },
  created(){
    eventBus.$on("progressBarUpdated", (productLength) => {
      this.currentItem = productLength;
      this.progress = productLength * 10; 
    });
  }
}
</script>
