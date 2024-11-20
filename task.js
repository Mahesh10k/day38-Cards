


async function store() {
    try{
        let api=await fetch("https://fakestoreapi.com/products");
        apiData=await api.json()
        let itemsDiv=document.getElementById("cardsDiv");
        for(ele of apiData){
            if(ele.rating.rate>3.5 && ele.price>200){
            itemsDiv.innerHTML+=
        `<div style="width:300px;text-align:center;background-color:white;padding:10px;border-radius:10px; box-shadow:3px 3px 3px gray"">
        <img src="${ele.image}" style="min-width:250px;max-width:300px;min-height:250px;max-height:300px;">
        <p>${ele.title}</p>
        <p>Price: $ ${ele.price}</p>
        <p>Rating: ${ele.rating.rate}</p>
        </div>`
        }
        }
    }
    catch(err){
        console.log(err);    
    }
}
store()

