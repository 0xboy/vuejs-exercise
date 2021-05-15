<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <div class="row">
      <app-servers></app-servers>
      <app-server-details :servers="servers"></app-server-details>
    </div>
    <hr>
    <app-footer></app-footer>
  </div>
</template>

<script>
  import Header from "./components/Common/Header";
  import Footer from "./components/Common/Footer";
  import Servers from "./components/Server/Servers";
  import ServerDetails from "./components/Server/ServerDetails";
  import Server from "./components/Server/Server";
  import {eventBus} from './main';

  export default {
    components : {
      appHeader : Header,
      appFooter : Footer,
      appServers : Servers,
      appServerDetails : ServerDetails,
      appServer : Server
    },
    data : function(){
      return {
        servers : {}
      }
    },
    created () {
      eventBus.$on("serversData", (val) => {
        this.servers = val;
      })
    }
  }
</script>

<style>

</style>
