class BankAccount{
    constructor(balance){
        this.balance=balance
    }
    withdraw(){
        console.log('You are withdrawing some money')
    }
}

class CheckingAccount extends BankAccount{
    constructor(balance){
        super(balance);
    }
    static doSomething(){
        console.log("Here I go doing something")
    }
   /* withdraw(){
        console.log('You are withdrawing from a checking account');
    }*/
}

let account = new CheckingAccount(100);
CheckingAccount.doSomething();
account.withdraw()