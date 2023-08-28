async function getPizza(){
    var  response =await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
    var  data = await response.json();
    console.log("pizza",data.recipes);
}

async function getPasta(){
    var  response =await fetch("https://forkify-api.herokuapp.com/api/search?q=pasta");
    var  data = await response.json();
    console.log("pasta",data.recipes);
}

function finish(){
    console.log("finish");
}

getPizza();
getPasta();
finish();
