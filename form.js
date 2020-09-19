class Form{
constructor(){

}
display(){
    var title = createElement("h1")
    title.html("ROCK CARS")
    title.position(130,10)
    var input = createInput("name")
    input.position(130,160)
    var button = createButton("PLAY")
    button.position(130,200)
    var greeting = createElement("h3")
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value()
        playerCount = playerCount+1
        player.updateName(name)
        player.updateCount(playerCount)
     greeting.html("HELLO"+name)
     greeting.position(130,160)
    })
    
}

}