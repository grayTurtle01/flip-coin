coin = 'quarter'

document.querySelector("button").onclick = function(){
    url = 'https://express-random-api.herokuapp.com/api/coin'
    //~ url = 'http://localhost:8000/api/coin'

    fetch(url)
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        document.querySelector("#random").innerText = data.random
        document.querySelector("#coin-value").innerText = data.flag


        // change image
        img = document.querySelector("img")

        if( data.flag )
            img.src = `images/${coin}-head.jpg`
        else
            img.src = `images/${coin}-tail.jpg`


        //update counter values
        document.querySelector("#heads").innerText = 'Heads: ' + data.heads    
        document.querySelector("#tails").innerText = 'Tails: ' + data.tails    
        
    })
    .catch(err => console.log(err))


}

document.querySelector("select").onchange = function(){
    coin = this.value
    
}

