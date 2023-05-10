 const btnE = document.getElementById('btn')
 const jokeE =document.getElementById('joke')

const apikey = "+lRX81326tpc6VKXtfo/WQ==fd8WUUW8Qgfbzx7x"

const option = {
    method: 'GET',
    headers:{
        "X-Api-Key":apikey,
    }
}
 
const apiURL= "https://api.api-ninjas.com/v1/dadjokes?limit="

async function getJoke(){

    
    jokeE.innerText="Updating ...";

    btnE.disabled =true;
    btnE.innerText="Loading"

    const response =await fetch(apiURL,option)
    const data =await response.json()

    btnE.disabled =false;
    btnE.innerText="Tell me a joke"

    jokeE.innerText = data[0].joke;
}

 btnE.addEventListener('click',getJoke)