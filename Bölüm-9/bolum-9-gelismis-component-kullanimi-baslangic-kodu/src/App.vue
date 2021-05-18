<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">

        <br><br>
        <button @click="selectedComponent = 'appNewMemory'" class="btn btn-sm btn-primary">AppNewMemory</button>
        <button @click="selectedComponent = 'appMemory'" class="btn btn-sm btn-primary">AppMemory</button>
        <button @click="selectedComponent = 'appAuthor'" class="btn btn-sm btn-primary">AppAuthor</button>
        <hr>
        <p>{{ selectedComponent}}</p>
        <hr>
        <keep-alive>
          <component :is="selectedComponent">
            <h1 slot="heading">Güzel bir gün...</h1>
            <p> Bu çok güzel bir anıdır...</p>
          </component>
        </keep-alive>
        

        <!-- <app-memory>
          <h1 slot="heading">Güzel bir gün...</h1>
          <p> Bu çok güzel bir anıdır...</p>
          <h3 slot="author">Ahmet can</h3>
        </app-memory> -->
      </div>
    </div>
  </div>
</template>

<script>
  import Memory from "./components/Memory";
  import NewMemory from "./components/NewMemory";
  import Author from "./components/Author";

  export default {
    components : {
      appMemory : Memory,
      appNewMemory : NewMemory,
      appAuthor : Author
    },
    data : function(){
      return { 
        selectedComponent : "appMemory"
      }
    }
  }
</script>
