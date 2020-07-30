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


let userWithThreePlusLanguages = users.filter((user) => user.languages.length > 2)


let usersEmails = users.map((user) => user.email)


let totalUsersExperience = users.reduce((experience, user) => {
    return experience + user.yearsOfExperience
}, 0)

console.log(totalUsersExperience)

let averageExperience = totalUsersExperience / users.length;


let longestEmail = users.reduce((emails, user) => {
    if (user.email.length > 17) {
        return user;
    }
}, 0)

console.log(longestEmail)


let usersNames = users.reduce((str, user) => {
    if (user.name) {
        return `The user names are ${str}${user.name}, `
    } else  {
        return "hello"
    }
}, "");

console.log(usersNames)

