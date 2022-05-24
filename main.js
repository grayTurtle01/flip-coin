document.querySelector("button").onclick = function(){
    url = 'http://http-server-node.herokuapp.com/api'

    fetch(url)
    .then( res => res.json() )
    .then( data => {
        console.log(data)
        document.querySelector("#random").innerText = data.random
        document.querySelector("#coin-value").innerText = data.flag
    })

}
