

// let a=new Promise((x,y)=>{
//     if("mahesh"){
//        setTimeout(()=>{
//         x("passed")
//        },3000)
//     }
//     else{
//         y("failed")
//     }
// })
// a.then(res=>console.log(res)).catch(err=>console.log(err));


// async function add(){
// try{
//     let a=await new Promise((x,y)=>{
//         if(true){
//            setTimeout(()=>{
//             x("solved")
//            },3000)
//         }else{
//             y("failed to solve")
//         }
//     })
    
//     let b=await new Promise((x,y)=>{
//         if(true){
//            setTimeout(()=>{
//             x("passed")
//            },1000)
//         }else{
//             setTimeout(()=>{
//                 y("failed")
//             },3000)
//         }
//     })
    
//     console.log(a);
//     console.log(b);
// }
// catch(err){
//     console.log(err); 
// }
// }
// add()


async function a(){
    try{
        let api=await fetch("https://jsonplaceholder.typicode.com/posts")
        let apiData=await api.json()
        // console.log(apiData);
        let filter=apiData.filter(x=>x.id>=97 && x.title=="at nam consequatur ea labore ea harum")
        // console.log(filter);
    
    }catch(err){
        console.log(err);  
    }
}
a()



