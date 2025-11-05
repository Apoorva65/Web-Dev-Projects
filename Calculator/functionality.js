let n1;
let n2;
for(let i=0;i<10;i++){
    document.getElementById(i).addEventListener('click',function(e){
        n1 = parseInt(e.target.innerHTML);
        console.log(n1);
        
    })
}
// for(let i=0;i<10;i++){
//     document.getElementById(i).addEventListener('click',function(e){
//         n2 = parseInt(e.target.innerHTML);
//         console.log(n2);
        
//     })
// }

// const add = document.getElementById('+').addEventListener('click',function(e){
//     console.log(n1+n2);
    
// })

