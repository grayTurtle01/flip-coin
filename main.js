document.querySelector("button").onclick = function(){
    url = 'https://http-server-node.herokuapp.com/api'

    fetch(url)
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        document.querySelector("#random").innerText = data.random
        document.querySelector("#coin-value").innerText = data.flag


        img = document.querySelector("img")

        if( data.flag )
            img.src = "images/quarter-head.jpg"
        else
            img.src = "images/quarter-tail.jpg"
            
        
    })

}
