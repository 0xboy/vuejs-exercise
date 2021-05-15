<template>
    <div>
        <p>Lamba durumu : {{status}} </p>
        <button @click="openLamb">Lambayı Aç/Kapat</button>
        <hr>
    </div>
</template>

<script>
export default{
    data : function() {
      return {  status : "Kapalı"}
    },
    methods: {
        openLamb(){
            this.status = "Açık"
        }
    }
}
</script>
<style >

</style>