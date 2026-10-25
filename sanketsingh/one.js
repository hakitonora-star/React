function promisetime(){
    return new Promise (function(resolve,reject){
        console.log("Entering the executer in the Promise contructor");
        setTimeout(function(){
              let num=Math.floor(Math.random()*10);
              if(num%2==0){
                resolve(num);
              }
              else{
                reject(num);
              }


        },10000);

      console.log("Exiting the executer in the Promise contructor ");


    })
}
console.log("Starting");
let p=promisetime();

p
.then(
    function fulfillHandler(value){ console.log(`Inside Fulfill Handler value is :${value}`)},
    function rejectionHandler(value){console.log(`Inside rejection Handler value is :${value}`)}
)
