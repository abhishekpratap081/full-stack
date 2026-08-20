// function login(msg, error) {
//     if (error) {
//         console.log("username or password is incorrect");
//     } else {
//         console.log(msg);
//     }
// }

// function loginHandler(username, password, clbk) {
//     const myUsername = "aman";
//     const myPassword = "12345";

//     if (username === myUsername && password === myPassword) {
//         clbk("Success", null);
//     } else {
//         clbk(null, true);
//     }
// }


// loginHandler("aman", "12345", login); 
// loginHandler("aman", "wrong", login); 


// setTimeout(() => {
//     console.log(1);

//     setTimeout(() => {
//         console.log(2);

//         setTimeout(() => {
//             console.log(3);

//             setTimeout(() => {
//                 console.log(4);

//                 setTimeout(() => {
//                     console.log(5);

//                     setTimeout(() => {
//                         console.log(6);

//                         setTimeout(() => {
//                             console.log(7);

//                             setTimeout(() => {
//                                 console.log(8);
//                             }, 1000);

//                         }, 1000);

//                     }, 1000);

//                 }, 1000);

//             }, 1000);

//         }, 1000);

//     }, 1000);

// }, 1000);


// console.log("one");
// setTimeout(() => {
//     console.log("two");
// }, 1000);
// console.log("three");


// function sumofsqrt(a,b) {
//     return Math.sqrt(a) + Math.sqrt(b);
// }
// console.log(sumofsqrt(4,9)); 

// function sumofsqrtwithnames(name,clbk) {
//     const a = 4;
//     const b = 9;
//     const result = Math.sqrt(a) + Math.sqrt(b);
//     clbk(name, result);
// }


// mypromise.then((msg)=> {
//     console.log(msg)
// })
// .catch(msg => {
//     console.log(msg)
// })
// .finally(() => console.log("I will run no matter what"));

function loginHandler(){
    try {
        const loginstatus=await mypromise;
        console.log(loginstatus)
        } catch(e){
            console.log(e)
        } finally {
            console.log("I will run no matter what")
        }
}
loginHandler();