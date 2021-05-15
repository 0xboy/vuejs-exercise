<template>
  <div class="container">
    <Header></Header>
    <hr>
    <div class="row">
      <sunucu></sunucu>
      <sunucu-bilgisi></sunucu-bilgisi>
    </div>
    <hr>
    <Footer></Footer>
  </div>
</template>

<script>

import Header from './Components/Common/Header'
import Sunucu from './Components/Server/Sunucu'
import SunucuBilgisi from './Components/Server/SunucuBilgisi'
import Footer from './Components/Common/Footer'

export default{
  components: {
    Sunucu,
    SunucuBilgisi,
    Header,
    Footer
  }
}
</script>

<style>

</style>
