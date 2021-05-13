new Vue({
	el : "#app",
  data : {
  	player_heal : 100,
    monster_heal : 100,
    game_is_on : false
  },
  methods : {
  	start_game : function(){
      this.game_is_on = true;
      console.log(game_is_on);
    },
    attack : function(){
    
    },
    special_attack : function(){
    
    },
    heal_up : function(){
    
    },
    give_up: function(){
    
    }
  }
});