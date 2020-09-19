class Player{
    constructor(){
    }
    getCount(){
        var gameRef = database.ref("playerCount")   
        gameRef.on("value",function(data){
            gameState = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
           playerCount:count
        })
    }

    updateName(name){
   var playerIndex = "player"+playerCount;
   database.ref(playerIndex).set({
       name:name
   })
   
    }
}