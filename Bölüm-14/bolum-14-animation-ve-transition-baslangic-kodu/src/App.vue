<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr>
        <select id="form-control">
          <option value="fade">fade</option>
          <option value="slide">slide</option>
        </select>



        <button class="btn btn-primary" @click="show = !show">Kutuyu Göster/Gizle</button>
        <br><br>
        <transition name="slide" mode="out-in">
            <div class="alert alert-warning" v-if="!show" key="warning">Bu bir alert</div>
            <div class="alert alert-danger" v-else key="danger">Bu bir alert</div>
        </transition> 
       
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data(){
    return {
      show : false,
      activeEffect : ''
    }
  }

}
</script>

<style>
.fade-enter{
opacity: 0;
}
.fade-enter-active{
transition: opacity 1s;
}
.fade-leave-enter{

}
.fade-leave-active{
transition: opacity 1s;
opacity: 0;
}

.slide-enter{
  opacity: 0;
}
.slide-enter-active{
  animation: slide-in 1s ease-in-out forwards;
  transition: opacity 0.5s;
}
.slide-leave-enter{

}
.slide-leave-active{
  animation: slide-out 1s ease-in-out forwards;
  transition : opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from{
    transform:translateY(20px)
  }to{
    transform: translateY(0px);
  }
}

@keyframes slide-out {
  from{
    transform:translateY(0px)
  }to{
    transform: translateY(20px);
  }
}
</style>
