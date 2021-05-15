<template>
  <div class="col-xs-12 col-sm-6">
    <p v-for="(server, i) in servers"> {{server.id}} - {{server.status}} <button @click="server.status = 'Normal'">Durumu Düzelt</button></p>
  </div>
</template>
<script>
export default{
  props : {
    servers : {
      type : Object
    }
  }
}
</script>