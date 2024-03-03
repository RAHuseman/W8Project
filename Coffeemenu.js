// Class for parent of coffee drinks
class Drink {
    constructor(drink){
        this.drink = drink;
        }
    describe() {
        return `You've selected ${this.drink}.`;
    }
    
  }

// Class for Mocha and extends from the Drink Class
class Mocha extends Drink {
    constructor(drink,flavor){
        super(drink);
        this.flavor = flavor;
        
    }
}

// Class for Coffee and extends from the Drink Class
class Coffee extends Drink {
    constructor (drink, flavor) {
        super(drink);
        this.flavor = flavor;
       
    }
}
// Class for Espresso and extends from the Drink Class
class Espresso extends Drink {
    constructor(drink, flavor) {
        super(drink);
        this.flavor = flavor;
        
    }
}
// let mochaDrink = new Coffee ('Mocha','Excelsa Beans');
// let espressoDrink = new Espresso ('Espresso','Bold');
// let coffeeDrinnk = new Coffee ('Coffee','Excelsa Beans');

//  Class Menu with this. drinksArray = to an empty array
class Menu {
    constructor(){
        this.drinksArray = [];
      
}
// Switch case for the Main Menu if the user inserts 1 then this. selectDrinks is called
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

// showMainMenuOptions Method   Returns the prompt for the user to see thier options 
// for selecting the main options.
        showMainMenuOptions(){
            return prompt(`
            COFFEE HOUSE
            1) Drink Selections
            2) Your Order
            3) Delete Item
            0) Exit
            `);
        }
// showDrinkMenuOptions  Method returns Prompt for the user to see if they chose 1 for MainMenuOptions
        showDrinkMenuOptions() {
            return prompt(` 
            1) Coffee
            2) Mocha
            3) Espresso
            0) Back
            `);
        }
    // Method selectDrinks switch for the user to select what drink and this will push below to the array.
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
            // Method youOrder allows the user to see thier choices because it will
            // add them to the array drinksArray with the loop.
            youOrder(){
                // prompt(`${this.drinksArray[i]}`);
            // let orderString = '';
            // for (let i = 0; i < this.drinksArray.length; i++) {
            //     prompt(`${this.drinksArray}`) + '\n';

            // }
//  
            let drinkString = '';
            for (let i = 0; i < this.drinksArray.length; i++) {
            drinkString += i+ ') ' + this.drinksArray[i].name + '\n';
            }
            alert(drinkString);
        }
            //   Method drinkString to allow the user to delete thier choice and remove it from
            // the array. Using the splice method
            deleteItem (){
               
                // prompt(`${this.drinksArray[i]}`); 
                let drinkString = '';
            for (let i = 0; i < this.drinksArray.length; i++) {
            drinkString += i+ ') ' + this.drinksArray[i].name + '\n';
            }
            

                let index = prompt(`${drinkString} \nEnter the number you would like to remove.`);
                if (index > -1 && index < this.drinksArray.length) {
                    this.drinksArray.splice(index,1);
                }
            }
    
    
    }
            
            
    
    




let menu = new Menu();
menu.start();        

