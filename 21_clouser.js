
// function init(){
//     let name = "shivani";
//     function displayName(){
//         console.log(name)
//     };
//     return displayName;
// };

// const myFun = init();
// console.log(myFun)

//closure created every time a function is created
//if we have other variables also like age and all but we don't have any refrance for the same in the return statement it will not include inside the closure.

function startCompany(){

    function ca(name){
        return `Name of ur company ${name}`

    };
    return ca
}

const startCompany1 = startCompany();
const myCompany = startCompany1("Zomato")


function eternal(guest){
    const guestNmae = guest;
    let count = 0 ;
    function zomato(){
        console.log(`hi ${guestNmae} from Zomato`)
    };

     function blinkit(){
        if(count === 1) return;
        console.log(`hi ${guestNmae} from blinkit`)
        count++;
    };
    //from here it is prefer to return aaaaaaaaaaall of them inside {}
    return {
        zomato,
        blinkit
    };
}

const hitesh = eternal("shivani");
hitesh.blinkit()
hitesh.blinkit()
hitesh.blinkit()


//here we used count ---> mean this is useMemo of react. if function is not changing return the same don't need to calcuate again
//we use map for iterating over array if it already gone through 0,1 index how it is able to remember to restatrt from that point only bcoz of closure.

// Clove,closure are name of the same

//BEST PLACE TO VISUALIZE JS https://www.jsv9000.app/

//practical use case of closure 
// we can have functions call for sum and finding squares but hitting db again and again or calling function 
// again and again can cause issue specailly when it comes to 10M users .we can make cache with the help of closure which prevent us to call function again if it is a same 
// value.

function createOptimisedVersion(fn){
    const cache = {};
     return function(...args){
        const key = JSON.stringify(args);
        if(cache[key]){
            console.log(`Returning from cache`,key)
        }

        const result = fn(...args);
        cache[key]= result;
        return result;
     }
};

function add(a,b){
    return a+b
};

function square(n){
    return n*n
};

const optimizedSquare = createOptimisedVersion(square)


//memory leak holding a refrance of something jo exist nhi karti .

// ek btn banaya usko document method ko use karke remove kiya refrance abhi tha to issue hua but jab btn=null kar diya ab garbage collector usko pick kar lega.
// ye unneccasy ko null karna apki help karta hai website me lag kam aata hai fir
