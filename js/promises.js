"use strict";


// taking the API from Github to get a users last commit time but passing the username into the function
// const myPromiseFunction = function (username) {
//     let url = `https://api.github.com/users/${username}/events/public`;
//     let githubPromise = fetch(url, {headers: {'Authorization': GITHUB_KEY}});
//     return githubPromise;
// }
//
// let myPromise = myPromiseFunction('jonathan-m-phillips');
// myPromise.then(response => response.json()).then(data => console.log(data[0].created_at));


const lastDateOfCommit = username => {
    return fetch(`https://api.github.com/users/${username}/events/public`, {headers: {'Authorization': GITHUB_KEY}}).then(resp => resp.json()).then(data => {
        let date = "";
        for (let datum of data) {
            if (datum.type === "PushEvent") {
                date = datum.created_at;
                break;
            }
        }
        return date;
    }).then(date => document.getElementsByTagName("body")[0].innerHTML = date);
}

lastDateOfCommit('jonathan-m-phillips')



// setting a timeout inside of promise to occur whenever the function reaches a set amount of time set in the parameter
// let wait = function (time) {
//
//     return new Promise ((resolve, reject) => {
//         setTimeout(() => {
//             if (time === 1000) {
//                 resolve(alert("One second"));
//             } else if (time === 3000) {
//                 resolve(alert("Three seconds"));
//             } else {
//                 reject(alert("Error"));
//             }
//         }, time);
//     });
// }

const wait = (time) => new Promise (resolve => setTimeout(() => {
    resolve(`You'll see this message after ${time} millisecond(s).`)
}, time));


wait(1000).then((message) => console.log(message));
wait(3000).then((message) => console.log(message));