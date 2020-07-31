"use strict";

const myPromiseFunction = function (username) {
    let url = `https://api.github.com/users/${username}/events/public`;
    const githubPromise = fetch(url, {headers: {'Authorization': PERSONAL_ACCESS_KEY}});

    // githubPromise.then(response => response.json()).then(data => console.log(data[0].created_at));
    // githubPromise.catch(error => console.error(error));
    return githubPromise;
}


let myPromise = myPromiseFunction('tim');
myPromise.then(response => response.json()).then(data => console.log(data[0].created_at));