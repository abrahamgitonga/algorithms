//question 1
class pharmEmployee{
    constructor(title){
        this.title = title
    }
    medEmployee(){
        console.log(`${this.title} is a member of this Pharmacy`);
    }
}


class Pharmacist extends pharmEmployee{
    constructor(title){
        super()
        this.title = title
    }

    writePrescription(){
        super.medEmployee()
        console.log(`${this.title} Writes prescriptions to people`);
    }
}



class Cashier extends pharmEmployee{
    constructor(title){
        super()
        this.title = title
    }

    collectCash(){
        console.log(`${this.title} Collects cash`);
    }
    returnCash(){
        console.log(`${this.title} Returns cash to pharmacy`);
    }
}

console.log(new Cashier('Shakes').collectCash());
console.log(new Cashier('Shakes').medEmployee());


// Mixin class
let allTasksMixin = {
    collectCash(){
        console.log(`${this.title} Collects cash`);
    },
    returnCash(){
        console.log(`${this.title} Returns cash to pharmacy`);
    },
    writePrescription(){
        console.log(`${this.title} Writes prescription to people`);
    }
}


class Manager extends pharmEmployee{
    constructor(){
        super()
        this.title = "manager Jane"
    }
    manageEmployees(){
        console.log(`${this.title} manages employees`);
    }
}

// copying object properities
Object.assign(Manager.prototype, allTasksMixin)


// managers performing all tasks
console.log(new Manager('Manager John').medEmployee())
console.log(new Manager('Manager John').collectCash())
console.log(new Manager('Manager John').returnCash())
console.log(new Manager('Manager John').manageEmployees())

