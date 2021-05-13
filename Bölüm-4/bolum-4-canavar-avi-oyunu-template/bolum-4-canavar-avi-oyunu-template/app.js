new Vue({
  el : "#app",
  data : {
    player_heal : 100,
    monster_heal : 100,
    game_is_on : false,
    logs : []
  },
  methods : {
    start_game : function(){
      this.game_is_on = true;
    },
    attack : function(){
      var point = Math.ceil(Math.random() * 10);
      this.monster_heal -= point;
      this.add_to_logs({turn : "p", text : "OYUNCU ATAGI ("+ point+")"});
      this.monster_attack();
      
    },
    special_attack : function(){
      var point = Math.ceil(Math.random() * 25);
      this.monster_heal -= point;
      this.add_to_logs({turn : "p", text : "OZEL OYUNCU ATAGI ("+ point+")"});
      this.monster_attack();
    },
    monster_attack:function(){
      var point = Math.ceil(Math.random() * 15);
      this.player_heal -= point;
      this.add_to_logs({turn : "m", text : "CANVAR ATAGI ("+ point+")"});
    },
    heal_up : function(){
      var point = Math.ceil(Math.random() * 20);
      this.player_heal += point;
      this.add_to_logs({turn : "p", text : "ILK YARDIM ("+ point+")"});
      this.monster_attack();
    },
    give_up: function(){
      this.player_heal = 0;
      this.add_to_logs({turn : "p", text : "OYUNCU PES ETTI!!!!"});
    },
    add_to_logs : function(log){
      this.logs.push(log);
    }
  },
  watch:{
    player_heal : function(value){
      if(value <= 0)
        {this.player_heal = 0; 
          if(confirm("Oyunu KAYBETTIN. Tekrar oynamak ister misin?")){
            this.player_heal = 100;
            this.monster_heal = 100;
            this.logs = [];
          }
        }
        else if(value >= 100){
          this.player_heal = 100;
        }
    },
    monster_heal : function(value){
      if(value <= 0)
        {this.monster_heal = 0; if(confirm("Oyunu KAZANDIN. Tekrar oynamak ister misin?")){
            this.player_heal = 100;
            this.monster_heal = 100;
            this.logs = [];
          }}
        
    },
  }
});