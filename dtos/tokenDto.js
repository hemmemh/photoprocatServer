class UserDto{
    constructor(user){
        this.id = user._id
        this.email = user.mail
        this.name = user.name
        this.sername= user.sername
        this.tell= user.tell
        this.birthDate= user.birthDate
        this.basket= user.basket
        this.compare= user.compare
        this.loves= user.loves
        this.orders= user.orders
    }
}

module.exports =  UserDto