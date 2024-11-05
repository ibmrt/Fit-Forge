function calcBMI(){
    var weight = document.getElementById("weight").value;
    if(document.getElementById("kgBtn").checked){
        weight = weight * 2.20462262;
    }
    var height = document.getElementById("height").value;
    if(document.getElementById("cmBtn").checked){
        height = height * 0.393700787;
    }
    var bmi = (weight / Math.pow(height, 2)) * 703;
    if(weight == null || height == null){
        document.getElementById("BmiValueBox").innerHTML = 0;
    }
    document.getElementById("BmiValueBox").innerHTML = bmi.toFixed(4).toString();
}