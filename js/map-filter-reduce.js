const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];



// 2
let userWithThreePlusLanguages = users.filter((user) => user.languages.length > 2);
console.log(userWithThreePlusLanguages);



// 3
let usersEmails = users.map(user => user.email);
console.log(usersEmails);



// 4
let totalUsersExperience = users.reduce((experience, user) => experience + user.yearsOfExperience, 0);
console.log(totalUsersExperience);

let averageExperience = totalUsersExperience / users.length;
console.log(averageExperience);



// 5
let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email;
    } else {
        return longest;
    }
}, "");
console.log(longestEmail)




// 6
let listOfUsers = users.reduce((names, user, index, arr) => {
    if (index === arr.length - 1) {
        return `${names}${user.name}.`
    } else {
        return `${names}${user.name}, `
    }
}, "The list of users: ");

console.log(listOfUsers);




// bonus
let uniqueLanguageList = users.reduce((language, user) => {
    user.languages.forEach(i => {
      if (language.indexOf(i) === -1) {
          language.push(i);
      }
    })
    return language;
}, [])
console.log(uniqueLanguageList);

