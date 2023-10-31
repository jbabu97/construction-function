const UserAccount = function(name, email, usrName){
    this.name = name;
    this.email = email;
    this.usrName =usrName;
    this.repos = [];
    
    this.getRepos = function(){
        return this.repos;
    }
    this.createRepo = function(repoName, creator){
        const date = new Date();
        console.log(date);
        const repo = {
            name: repoName,
            creator:  creator,
            createAt:  date.toLocaleTimeString()
        };
        this.repos.push(repo);
    };

    this.updateRepo = function(index, name){
};
};


const user = new UserAccount('Jabbar Babu', 'muaj1997@gmail.com', 'jb97');

user.createRepo('java', 'jbabu');
user.updateRepo(0, 'Abdul')
console.log(user.getRepos());
// console.log(user);