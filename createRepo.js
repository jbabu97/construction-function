
userOne.createRepo('Learn Python', 'Muktadir Nayeem');
userOne.createRepo('Learn TyperScript', 'Jillur Rahman');
userOne.createRepo('Learn JavaScript', 'Jabbar Babu');

const element =document.querySelector('.element');
const heading = document.createElement('h1');
heading.setAttribute('class', 'heading');
heading.innerText = 'Practicing Construction Function';
element.appendChild(heading)
// console.log(heading);
// const repoDiv = document.createElement('div');
// element.appendChild(repoDiv);
// const user = document.createElement('p');
// repoDiv.appendChild(user);
// console.log(element);


const allRepo = userOne.getRepos();
// console.log(allRepo);
// const singleRepo = allRepo[0];
// console.log(singleRepo);

// const repoName = document.createElement('h2');
// const creator = document.createElement('p');
// const createAt = document.createElement('p');

// repoName.innerText = `Repo Name: ${singleRepo.name}`;
// element.appendChild(repoName);
// creator.innerText = `Repo Name: ${singleRepo.creator}`;
// element.appendChild(creator);
// createAt.innerText = `Repo Name: ${singleRepo.createAt}`;
// element.appendChild(createAt);

allRepo.map(r => {
    // console.log(r.name);
    const repoDiv = document.createElement('div');
    element.appendChild(repoDiv);
    console.log(repoDiv);
    repoDiv.innerHTML = 
    `
    <h2>${r.name}</h2>
    <p>${r.creator}</p>
    <p>${r.createAt}</p>
    `
})
