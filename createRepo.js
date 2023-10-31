
user.createRepo('Python', 'Muktadir Nayeem');
user.createRepo('TyperScript', 'Jillur Rahman');
user.createRepo('JavaScript', 'Jabbar Babu');

// update userInfo

user.updateRepo(2, {name: 'js', creator: 'jbabu'})

const element =document.querySelector('.element');
const allRepo = user.getRepos();

allRepo.map(r => {
    // console.log(r.name);
    const repoDiv = document.createElement('div');
    element.appendChild(repoDiv);
    // console.log(repoDiv);
    repoDiv.innerHTML = 
    `
    <h2>${r.name}</h2>
    <p>${r.creator}</p>
    <p>${r.createAt}</p>
    `
})
