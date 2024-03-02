// Types of coffee drinks
class Drink {
    constructor(drink){
        this.drink = drink;
        }
    describe() {
        return `You've selected ${this.drink}.`;
    }
    
  }


class Mocha extends Drink {
    constructor(drink,flavor){
        super(drink);
        this.flavor = flavor;
        
    }
}


class Coffee extends Drink {
    constructor (drink, flavor) {
        super(drink);
        this.flavor = flavor;
       
    }
}

class Espresso extends Drink {
    constructor(drink, flavor) {
        super(drink);
        this.flavor = flavor;
        
    }
}
// let mochaDrink = new Coffee ('Mocha','Excelsa Beans');
// let espressoDrink = new Espresso ('Espresso','Bold');
// let coffeeDrinnk = new Coffee ('Coffee','Excelsa Beans');


class Menu {
    constructor(){
        this.drinksArray = [];
      
}

start(){
    let selection = this.showMainMenuOptions();
    while (selection != 0) {
        switch(selection) {
            case '1' :
                this.selectDrinks();
                break;
            case '2' :
                this.youOrder();
                break;
            case '3' :
                this.deleteItem();
                break;
            default:
                selection = 0;
             }
             selection = this.showMainMenuOptions();
            }
            alert('Goodbye!')
        }


        showMainMenuOptions(){
            return prompt(`
            COFFEE HOUSE
            1) Drink Selections
            2) Your Order
            3) Delete Item
            0) Exit
            `);
        }

        showDrinkMenuOptions() {
            return prompt(` 
            1) Coffee
            2) Mocha
            3) Espresso
            0) Back
            `);
        }
    
        selectDrinks(){
        let selection1 = this.showDrinkMenuOptions();
        while (selection1 != 0) {
            switch(selection1) {
                case '1' :
                    this.Coffee();
                    break;
                case '2' :
                    this.Mocha();
                    break;
                case '3' :
                    this.Espresso();
                    break;
                case '0':
                    this.showMainMenuOptions();
                 }
                 selection1 = this.showDrinkMenuOptions();
                }
                // alert('Goodbye!')
            }
            
            Coffee (){
    //          Returning as undefined 
                // let coffeeDrink =('Coffee','Excelsa Beans');
                // this.drinksArray.push(coffeeDrink);

                this.drinksArray.push(Coffee);
            }
            
            Mocha (){
                // Returning as undefined
                // let mochaDrink = new Mocha ('Mocha','Excelsa Beans');
                // this.drinksArray.push(mochaDrink);

                   this.drinksArray.push(Mocha);
            }
            Espresso () {
                // Returning as undefined
                // let espressoDrink = new Espresso ('Espresso','Bold');
                // this.drinksArray.push(espressoDrink);

                  this.drinksArray.push(Espresso);
            }
            
            youOrder(){
                // prompt(`${this.drinksArray[i]}`);
            // let orderString = '';
            // for (let i = 0; i < this.drinksArray.length; i++) {
            //     prompt(`${this.drinksArray}`) + '\n';

            // }
            let teamString = '';
            for (let i = 0; i < this.drinksArray.length; i++) {
            teamString += i+ ') ' + this.drinksArray[i].name + '\n';
            }
            alert(teamString);
        }
              
            deleteItem (){
               
                // prompt(`${this.drinksArray[i]}`); 
                let teamString = '';
            for (let i = 0; i < this.drinksArray.length; i++) {
            teamString += i+ ') ' + this.drinksArray[i].name + '\n';
            }
            

                let index = prompt(`${teamString} \nEnter the number you would like to remove.`);
                if (index > -1 && index < this.drinksArray.length) {
                    this.drinksArray.splice(index,1);
                }
            }
    
    
    }
            
            
    
    




let menu = new Menu();
menu.start();        

