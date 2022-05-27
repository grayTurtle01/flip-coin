coin = 'quarter'

document.querySelector("button").onclick = function(){
    url = 'https://http-server-node.herokuapp.com/api'
    //~ url = 'http://localhost:8000/api/coin'

    fetch(url)
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        document.querySelector("#random").innerText = data.random
        document.querySelector("#coin-value").innerText = data.flag


        img = document.querySelector("img")

        if( data.flag )
            img.src = `images/${coin}-head.jpg`
        else
            img.src = `images/${coin}-tail.jpg`
            
        
    })
    .catch(err => console.log(err))


}

document.querySelector("select").onchange = function(){
    coin = this.value
    
}

