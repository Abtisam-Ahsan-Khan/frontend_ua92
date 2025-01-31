let table_avaliability = 0
 if(table_avaliability = 1)
 {
 console.log("Table avaliable please wait to be seated");
 }
 else
 {
    console.log("Sorry,no tables are currently avaliable")
 }

 let drinkorder = "Coffee"
 switch(drinkorder) {
    case "Coffee":
        console.log("Your coffee will be ready shortly")
        break;

    case "Tea":
        console.log("Your tea will be served soon")
        break;

    case "Juice":
        console.log("Your juice is being prepared")
        break;
    default:
        console.log("Sorry, we dont have that drink")
 }

 let ordered_meal = "veg meal"; 
 let total_bill = 0;
 
 if (ordered_meal === "veg meal")
     {
     total_bill = 10;
 } 
 else if (ordered_meal === "non-veg meal") 
    {
     total_bill = 15;
 } 
 else if (ordered_meal === "kids' meal")
     {
     total_bill = 8;
 } 
 else 
 {
     console.log("Invalid meal type");
 }
 
 if (total_bill > 0) 
    {
     console.log("Total Bill: £" + total_bill);
 }
 