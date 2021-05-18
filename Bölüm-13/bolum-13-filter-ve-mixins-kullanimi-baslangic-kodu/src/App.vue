<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Filter ve Mixins</h3>
        <p>{{message | toUpperCase | toLowerCase}}</p>
        <input type="text" v-model="searchText"/>
         <ul>
        <li v-for="product in  filtered">{{product}}</li>
      </ul>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      message : "Selamlar",
      products : ["Monitör", "Klayve","Mouse"],
      searchText : ''
    }
  },
  filters : {
    toUpperCase(value){
      return value.toUpperCase();
    }
  },
  computed:{
    filtered(){
      return this.products.filter((element)=>{
        return element.match(this.searchText)
      })
    }
  }
}
</script>

<style>

</style>
