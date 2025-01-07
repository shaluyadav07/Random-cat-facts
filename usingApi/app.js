let url="https://catfact.ninja/fact";

// fetch(url)
// .then((res)=>{
//     return res.json();
//     })
//     .then((data)=>{
//         console.log("data1 = ",data.fact);
//     return fetch(url);
//     })
//     .then((res)=>{
//         return res.json();
//     })
//     .then((data)=>{
//         console.log("data2 = ",data.fact);
//     })


// .catch((err)=>{
//     console.log("ERROR - ",err);
// });

// console.log("I AM HAPPY");

//USING await KEYWORD

// async function getFacts(){

//     try{
//     let res = await fetch (url);
//     let data = await res.json();
//     console.log(data.fact);

//     let res2 = await fetch (url);
//     let data2 = await res.json();
//     console.log(data2.fact);}

//     catch(e){
//         console.log("error - ", e)
//     }

//     console.log("hii there these are yours facts");
// }

// console.log(getFacts());
let btn = document.querySelector("button");
let p=document.querySelector("p");
btn.addEventListener("click",async()=>{
    let body = document.querySelector("body");
body.style.backgroundColor = getRandomColor();


    let fact =await getFacts();
    console.log(fact);
    p.innerText = `Fact : ${fact}`;


});


async function getFacts(){

        try{
        let res = await axios.get(url);//using axios
       
        return res.data.fact;

        }
        catch(e){
            console.log("error - ",e);
            return "No fact found";
        }
        console.log("hii there these are yours facts");
    }


    function getRandomColor(){
        let red = Math.floor(Math.random()*255);
        let green = Math.floor(Math.random()*255);
        let blue = Math.floor(Math.random()*255);
        let color = ` rgb( ${red},${green},${blue})`;
     return color;
    }
