class Customer{

    private _firstName: string;
    private _lastName: string;

    constructor(theFirst: string, theLast: string){
        this._firstName = theFirst;
        this._lastName = theLast;
    }

    public getFirstName():string{
        return this._firstName;
    }

    public setFirstName(theFirst:string):void{
        this._firstName = theFirst;
    }

    public getLastName():string{
        return this._lastName;
    }

    public setLastName(theLast:string):void{
        this._lastName = theLast;
    }

}

// let's create an instance

let myCustomer = new Customer("Martin","Dixon");

console.log(myCustomer.getFirstName());

myCustomer.setLastName("Selen");

console.log(myCustomer.getLastName());