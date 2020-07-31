"use strict";


// taking the API from Github to get a users last commit time but passing the username into the function
const myPromiseFunction = function (username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    let githubPromise = fetch(url, {headers: {'Authorization': PERSONAL_ACCESS_KEY}})
    return githubPromise;
}

let myPromise = myPromiseFunction('jonathan-m-phillips');
myPromise.then(response => response.json()).then(data => console.log(data[0].created_at));




// setting a timeout inside of promise to occur whenever the function reaches a set amount of time set in the parameter
let wait = function (time) {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (time === 1000) {
                resolve(alert("One second"));
            } else if (time === 3000) {
                resolve(alert("Three seconds"));
            } else {
                reject(alert("Error"));
            }
        }, time);
        console.log(time)
    });
}

wait(1000).then(() => console.log('You\'ll see this after 1 second'));
wait(3000).then(() => console.log('You\'ll see this after 3 seconds'));