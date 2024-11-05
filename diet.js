let item;
const info = [
{
    name: "apple",
    stats: "95 Calories, 0 Grams of Fat, 1 Grams of Protein, 25 Grams of Carbohydrate, 19 Grams of Sugar, 3 Grams of Fiber",
    img: "apple.png",
    recName: "Healthy Apple Crisp",
    recLink: "https://www.ambitiouskitchen.com/healthy-apple-crisp/"
},

{
    name: "banana",
    stats: "110 Calories, 0 Grams of Fat, 1 Grams of Protein, 28 Grams of Carbohydrate, 15 Grams of Sugar, 3 Grams of Fiber",
    img: "banana.png",
    recName: "Banana Bars",
    recLink: "https://www.wellplated.com/banana-bars/"
},

{
    name: "Chicken",
    stats: "165 Calories, 3.6 Grams of Fat, 31 Grams of Protein, 0 Grams of Carbohydrate, 0 Grams of Sugar, 0 Grams of Fiber",
    img: "chicken.png",
    recName: "Whole Roasted Chicken",
    recLink: "https://allthehealthythings.com/the-best-roasted-chicken/"
},

{
    name: "Ground Beef",
    stats: "691 Calories, 36 Grams of Fat, 86 Grams of Protein, 0 Grams of Carbohydrate, 0 Grams of Sugar, 0 Grams of Fiber",
    img: "groundbeef.png",
    recName: "Ground Beef and Vegatable Skillet",
    recLink: "https://www.homemademastery.com/healthy-ground-beef-vegetable/"
},

{
    name: "Potatos",
    stats: "164 Calores, 0.2 Grams of Fat, 4.6 Grams of Protein, 37 Grams of Carbohyrdrate, 1.9 Grams of Sugar, 4 Grams of Fiber",
    img: "potato.png",
    recName: "Healthy Roasted Garlic Baby Potatos",
    recLink: "https://www.hauteandhealthyliving.com/roasted-garlic-potatoes/"
},

{
    name: "Milk",
    stats: "149 Calories, 8 Grams of Fat, 8 Grams of Protein, 12 Grams of Carbohydrate, 12 Grams of Sugar, 0 Grams of Fiber",
    img: "milk.png",
    recName: "Hot Milk Cake",
    recLink: "https://www.culinaryhill.com/old-fashioned-hot-milk-cake-recipe/"
},

{
    name: "Bread",
    stats: "82 Calories, 1.1 Grams of Fat, 4 Grams of Protein, 13.8 Grams of Carbohydrate, 1.4 Grams of Sugar, 1.9 Grams of Fiber",
    img: "bread.png",
    recName: "Bread Upma",
    recLink: "https://www.indianhealthyrecipes.com/bread-upma-recipe/"
},
]
var foodName;
function setItem(num){
    item = num;
}
function setInfo(){
    let title = document.getElementById("title").innerHTML;
    let stat = document.getElementById("stats").innerHTMl;
    let rec = document.getElementById("recipe").innerHTMl;
    let pic = document.getElementById("pic").src;
    console.log(info[0].name);
    for(var i = 0; i < info.length; i++){
        if(info[i].name.toLowerCase() == foodName){
            title.textContent = info[i].name;
            stat = info[i].stats;
            rec = info[i].recName;
            rec.src = info[i].recLink;
            pic.src = info[i].img;
        }
    }
    
    
}
function goToFoodHTML(fN){
   // location.href='food.html';
    foodName = fN;
 //   window.onload() = function(){
        
        setInfo();
   // }
}


/*function find(){
    var input = document.getElementById("userInput");
    var reg = RegExp(input, i);
    var items = [];
    var c = 0;
    for(var x = 0;x<info.length;x++){
         if((info[x].name).search(reg)){
            items[c]=info[x];
            c++;
        }
    }
}*/