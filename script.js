function UserAccount (name, email, userName){
    this.name = name;
    this.email = email;
    this.userName = userName;
    this.repos = [];

    this.updateUser = function (fullName, email){
        if (fullName !== undefined) {
            this.name = fullName;
        };
        if (email !== undefined) {
            this.email = email;
        };
    };

    this.getRepos = function(){
        return this.repos;
    };

    this.createRepo = function(repoName, repoCreator){
        const date = new Date()
        const repo = {
            name : repoName,
            creator: repoCreator,
            createAt: date.toLocaleDateString()
            // createAt: Date.now()
        };
        this.repos.push(repo);
    };

    this.updateRepo = function (repoName, updatedInfo){
        const repoIndex = this.repos.findIndex(repo => repo.name === repoName);

        if (repoIndex !== -1) {
            const repoToUpdate = this.repos[repoIndex];
            Object.assign(repoToUpdate, updatedInfo)
            console.log(repoToUpdate, updatedInfo)
        } else {
            console.log(`Repository ${repoName} is not found.`);
        };
    }

};


const userOne = new UserAccount('Jabbar', 'Babu@gmail.com', 'jbabu97');

// Create some repositories for the user
userOne.createRepo('Learn JavaScript', 'jbabu97');
userOne.createRepo('Learn Python', 'Muktadir Nayeem');

// userOne.updateUser('Babu', 'jb@yahoo.com')

// const newRepo = userOne.createRepo('jsLearning', 'Nayeem')

const repoUpdate = userOne.updateRepo('Learn Python', {creator: 'Jillur Rahman', createAt: Date.now()});
userOne.updateRepo('Learn Python', {creator: 'Ariful Islam', createAt: Date.now()});

console.log(repoUpdate);
console.log(userOne.getRepos());

