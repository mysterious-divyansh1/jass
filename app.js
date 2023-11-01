const food = require("./food1.json");
//console.log(food);

//food.map("");

//onst

//const vegetables = () => {
    //const filteredVeggies = food
    //  .filter((food) => food.category === "Vegetable")
   // console.log(filteredVeggies);
  //};
  //vegetables();


//
//const fruits = () => {
  //  const fruits = food
    //.filter((element)  => element.category === "Fruit")
    //console.log(fruits);

    
//};
//fruits();
//list all the itema with category protein
//const proteins = () =>{
  //  const proteins  = food
    //.filter((element) => element.category === "Protein")
    //.map((food) => food.foodname);
    //console.log(proteins);
///};
//proteins();
//list allt he category items 
//const nuts = () =>{
  //  const nuts  =food
   // .filter((element) => element.category === "Nuts")
    //.map((food) => food.foodname);
   // console.log(nuts);
//}
//nuts();//

//const grains = () =>{
    //const grains  = food
    //.filter((element) => element.category === "Grain" )
    //.map((food) => food.foodname);
  //  console.log(grains);
//}
//grains();


//const dairy = () =>{
    //const dairy = food
    //.filter((element) => element.category === "Diary")
    //.map((food) => food.foodname);
  ///  console.log(diary);
//}
//dairy();

///const calorieDense = ()=>{
    //const dense = food
    //.filter((element) => element.calorie >100 )
    //.map((food) => food.foodname);
  //  console.log(dense);

//}
//calorieDense();


//const calorieDense = ()=>{
    //const dense = food
    //.filter((element) => element.calorie >100 )
    //.map((food) => food.foodname);
  //  console.log(dense);

//}
//calorieDense();

//const compareCarb = ()=>{
  //  const carbcontent = food
    //.sort(( a,b) => {
     //   return a.cab - b.cab;
    //})
    //.map((food) => food.foodname);

//console.log(carbcontent);
//};
//compareCarb();
const compareCarb = ()=>{
    const carbcontent = food
    .sort(( a,b) => {
        return b.cab - a.cab;
    })
    .map((food) => food.foodname);

console.log(carbcontent);
};
compareCarb();