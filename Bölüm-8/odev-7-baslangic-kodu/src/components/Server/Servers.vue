<template>
  <div class="col-xs-12 col-sm-6">
    <ul class="list-group">
      <server v-for="(ser, i) in servers" :server="ser" :key="i"></server>
    </ul>
  </div>
</template>

<script>
import Server from './Server';
import {eventBus} from '../../main';

export default{
  data : function(){
    return {
      servers : [
        {id : 1, status : "Kritik"},
        {id : 2, status : "Normal"},
        {id : 3, status : "Tehlike"},
        {id : 4, status : "Bilinmiyor"},
        {id : 5, status : "Normal"}
      ]
    }
  },
  components : {
    server : Server
  },
  created(){
    eventBus.$emit("serversData", this.servers);
  }
}
</script>