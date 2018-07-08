module.exports = class User {

    
    constructor(username, email, password) {
        this.User = [];
        this.username = username;
        this.email = email;
        this.password = password;
        this.userId = 0;
        
    }
   

    createUser () {
        
        this.userId += 1 ; 
        const  user = {
             userId: this.userId,
             email : this.email,
             password: this.password,
             username: this.username,
         };
         
         this.User.push(user);
        
    }

    getUser() {
        return this.User;
    }

}