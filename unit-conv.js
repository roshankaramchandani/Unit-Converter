
const categories = new Map([
    ["Length", 0],
    ["Temperature", 1],
    ["Volume", 2],
    ["Weight", 3],
    ["Currency", 4]
]);

const lengths = new Map([
    ["Kilometer",0],
    ["Meter",1],
    ["Centimeter",2],
    ["Mile",3],
    ["Yard",4],
    ["Feet",5],
    ["Inch",6]
]);

const lengthMatrix = [
    [1,1000,100000,0.6213711922,1093.613298,3280.839895,39370.07874],
    [0.001,1,100,0.0006213711922,1.093613298,3.280839895,39.37007874],
    [0.00001,0.01,1,0.000006213711922,0.01093613298,0.03280839895,0.3937007874],
    [1.609344,1609.344,160934.4,1,1760,5280,63360],
    [0.0009144,0.9144,91.44,0.0005681818182,1,3,36],
    [0.0003048,0.3048,30.48,0.0001893939394,0.333333,1,12],
    [0.0000254,0.0254,2.54,0.000015782828282,0.0277778,0.0833333,1]
];

const volumes = new Map([
    ["US Liquid Gallon",0],
    ["US Fluid Ounce",1],
    ["Liter",2],
    ["Milliliter",3]
]);

const volumeMatrix = [
    [1,128,3.785411784,3785.411784],
    [0.0078125,1,0.02957352956,29.57352956],
    [0.2641720524,33.8140227,1,1000],
    [0.0002641720524,0.0338140227,0.001,1]
];

const weights = new Map([
   ["Kilogram",0],
   ["Gram",1],
   ["Pound",2],
   ["Ounce",3] 
]);

const weightMatrix = [
    [1,1000,2.204622622,35.27396195],
    [0.001,1,0.002204622622,0.03527396195],
    [0.45359237,453.59237,1,16],
    [0.02834952312,28.34952312,0.0625,1]
]

const temperatures = new Map([
   ["Deg Celsius",0],
   ["Fahrenheit",1],
   ["Kelvin",2] 
]);

const currencys = new Map([
    ["Indian Rupee (INR)","INR"],
    ["US Dollar (USD)","USD"],
    ["Canadian Dollar (CAD)","CAD"],
    ["UAE Dirham (AED)","AED"],
    ["Australian Dollar (AUD)","AUD"],
    ["Euro (EUR)","EUR"],
    ["Pound Sterling (GBP)","GBP"],
    ["Japanese Yen (JPY)","JPY"],
    ["Kuwaiti Dinar (KWD)","KWD"],
    ["Pakistani Rupee (PKR)","PKR"],
    ["Chinese Yuan (CNY)","CNY"],
    ["Russian Ruble (RUB)","RUB"],
    ["Mexican Peso (MXN)","MXN"],
    ["Swiss Franc (CHF)","CHF"]
]);

selectedCategory = "";
selectedFrom = "";
selectedTo = "";



function createCategories(){
    let text = ""
    for (category of categories.keys()){
        text += `<div class="category">` + category + "</div>";
    }
    document.getElementById("home").innerHTML = text;
}

createCategories();

function addListeners(){
    const categorySelector = document.querySelectorAll(".category");
    categorySelector.forEach((cat)=>{
        cat.addEventListener("click", (e)=>{
            selectedCategory = e.target.innerHTML;
            showConvScreen(selectedCategory);
        })
    });
}

addListeners()

function showHome(){
    document.getElementById("conv").style.display = "none";
    document.getElementById("home").style.display = "flex";
    document.getElementById("back").style.display = "none";
}


function showConvScreen(selectedCategory){
    document.getElementById("home").style.display = "none";
    document.getElementById("conv").style.display = "flex";
    backbtn = document.getElementById("back");
    backbtn.innerHTML=selectedCategory;
    backbtn.style.display = "block";
    backbtn.addEventListener("click", showHome);
    document.getElementById("header").style.justifyContent="space-around";

    

    let text = "";
    if (selectedCategory=="Length"){
        text = getLengths();
    }
    else if (selectedCategory=="Temperature"){
        text = getTemperatures();
    }
    else if (selectedCategory=="Volume"){
        text = getVolumes();
    }
    else if (selectedCategory=="Weight"){
        text = getWeights();
    }
    else if (selectedCategory=="Currency"){
        text = getCurrencys();
    }

    document.getElementById("conv").innerHTML = text;
    addDropdownListener(selectedCategory);




}

function getLengths(){
    let selectedFrom = "";
    let selectedTo = "";
    let valTo = "1";
    let valFrom = "1";
    if (localStorage.getItem("Length")!==null){
        selectedFrom = JSON.parse(localStorage.getItem("Length"))["from"];
        selectedTo = JSON.parse(localStorage.getItem("Length"))["to"];
        valFrom = JSON.parse(localStorage.getItem("Length"))["valFrom"];
        valTo = JSON.parse(localStorage.getItem("Length"))["valTo"];
    }
    text = "";
    text += `<input type="number" id="quantityFrom" name="from" min="0" step="any" value="` + valFrom + `">`;
    text += `<select class="typeFrom" name="from">`;
    for (type of lengths.keys()){
        if(selectedFrom!="" && selectedFrom==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    
    text += `</select><div id="equal">=</div>`;
    text += `<input type="number" id="quantityTo" name="to" min="0" step="any" value="` + valTo + `">`;
    text += `<select class="typeTo" name="to">`;
    for (type of lengths.keys()){
        if(selectedTo!="" && selectedTo==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    return text;
}

function getVolumes(){
    let selectedFrom = "";
    let selectedTo = "";
    let valTo = "1";
    let valFrom = "1";
    if (localStorage.getItem("Volume")!==null){
        selectedFrom = JSON.parse(localStorage.getItem("Volume"))["from"];
        selectedTo = JSON.parse(localStorage.getItem("Volume"))["to"];
        valFrom = JSON.parse(localStorage.getItem("Volume"))["valFrom"];
        valTo = JSON.parse(localStorage.getItem("Volume"))["valTo"];
    }
    text = "";
    text += `<input type="number" id="quantityFrom" name="from" min="0" step="any" value="` + valFrom + `">`;
    text += `<select class="typeFrom" name="from">`;
    for (type of volumes.keys()){
        if(selectedFrom!="" && selectedFrom==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    text += `</select><div id="equal">=</div>`;
    text += `<input type="number" id="quantityTo" name="to" min="0" step="any" value="` + valTo + `">`;
    text += `<select class="typeTo" name="to">`;
    for (type of volumes.keys()){
        if(selectedTo!="" && selectedTo==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    return text;
}

function getWeights(){
    let selectedFrom = "";
    let selectedTo = "";
    let valTo = "1";
    let valFrom = "1";
    if (localStorage.getItem("Weight")!==null){
        selectedFrom = JSON.parse(localStorage.getItem("Weight"))["from"];
        selectedTo = JSON.parse(localStorage.getItem("Weight"))["to"];
        valFrom = JSON.parse(localStorage.getItem("Weight"))["valFrom"];
        valTo = JSON.parse(localStorage.getItem("Weight"))["valTo"];
    }
    text = "";
    text += `<input type="number" id="quantityFrom" name="from" min="0" step="any" value="` + valFrom + `">`;
    text += `<select class="typeFrom" name="from">`;
    for (type of weights.keys()){
        if(selectedFrom!="" && selectedFrom==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    text += `</select><div id="equal">=</div>`;
    text += `<input type="number" id="quantityTo" name="to" min="0" step="any" value="` + valTo + `">`;
    text += `<select class="typeTo" name="to">`;
    for (type of weights.keys()){
        if(selectedTo!="" && selectedTo==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    return text;
}

function getTemperatures(){
    let selectedFrom = "";
    let selectedTo = "";
    let valTo = "1";
    let valFrom = "1";
    if (localStorage.getItem("Temperature")!==null){
        selectedFrom = JSON.parse(localStorage.getItem("Temperature"))["from"];
        selectedTo = JSON.parse(localStorage.getItem("Temperature"))["to"];
        valFrom = JSON.parse(localStorage.getItem("Temperature"))["valFrom"];
        valTo = JSON.parse(localStorage.getItem("Temperature"))["valTo"];
    }
    text = "";
    text += `<input type="number" id="quantityFrom" name="from" step="any" value="` + valFrom + `">`;
    text += `<select class="typeFrom" name="from">`;
    for (type of temperatures.keys()){
        if(selectedFrom!="" && selectedFrom==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    text += `</select><div id="equal">=</div>`;
    text += `<input type="number" id="quantityTo" name="to" step="any" value="` + valTo + `">`;
    text += `<select class="typeTo" name="to">`;
    for (type of temperatures.keys()){
        if(selectedTo!="" && selectedTo==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    return text;
}

function getCurrencys(){
    let selectedFrom = "";
    let selectedTo = "";
    let valTo = "1";
    let valFrom = "1";
    if (localStorage.getItem("Currency")!==null){
        selectedFrom = JSON.parse(localStorage.getItem("Currency"))["from"];
        selectedTo = JSON.parse(localStorage.getItem("Currency"))["to"];
        valFrom = JSON.parse(localStorage.getItem("Currency"))["valFrom"];
        valTo = JSON.parse(localStorage.getItem("Currency"))["valTo"];
    }
    text = "";
    text += `<input type="number" id="quantityFrom" name="from" min="0" step="any" value="` + valFrom + `">`;
    text += `<select class="typeFrom" name="from">`;
    for (type of currencys.keys()){
        if(selectedFrom!="" && selectedFrom==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    text += `</select><div id="equal">=</div>`;
    text += `<input type="number" id="quantityTo" name="to" min="0" step="any" value="` + valTo + `">`;
    text += `<select class="typeTo" name="to">`;
    for (type of currencys.keys()){
        if(selectedTo!="" && selectedTo==type){
            text += `<option value="`+ type + `" selected="selected">`+ type + `</option>`;
        }
        else{
            text += `<option value="`+ type + `">`+ type + `</option>`;
        }
    }
    return text;
}

function addDropdownListener(selectedCategory){
    const selectFrom = document.querySelector(".typeFrom");
    const selectTo = document.querySelector(".typeTo");
    const valFrom = document.getElementById("quantityFrom");
    const valTo = document.getElementById("quantityTo");


    if (selectedCategory=="Temperature"){
        valFrom.addEventListener("input", (e)=>{
            valTo.value = tempConv(selectFrom.value,selectTo.value,parseFloat(e.target.value));
        });
        valTo.addEventListener("input", (e)=>{
            valFrom.value = tempConv(selectTo.value,selectFrom.value,parseFloat(e.target.value));
        });
        selectTo.addEventListener("change", (e)=>{
            valTo.value = tempConv(selectFrom.value,e.target.value,parseFloat(valFrom.value));
            let obj = {"from":selectFrom.value, "to":e.target.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });
        selectFrom.addEventListener("change", (e)=>{
            valTo.value = tempConv(e.target.value,selectTo.value,parseFloat(valFrom.value));
            let obj = {"from":e.target.value, "to":selectTo.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });
        
    }
    else if(selectedCategory=="Currency"){

        valFrom.addEventListener("input", (e)=>{
            valTo.value = currConv(selectFrom.value,selectTo.value,parseFloat(e.target.value));
        });
        valTo.addEventListener("input", (e)=>{
            valFrom.value = currConv(selectTo.value,selectFrom.value,parseFloat(e.target.value));
        });
        selectTo.addEventListener("change", (e)=>{
            valTo.value = currConv(selectFrom.value,e.target.value,parseFloat(valFrom.value));
            let obj = {"from":selectFrom.value, "to":e.target.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });
        selectFrom.addEventListener("change", (e)=>{
            valTo.value = currConv(e.target.value,selectTo.value,parseFloat(valFrom.value));
            let obj = {"from":e.target.value, "to":selectTo.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });

        

    }
    else{
        let matrix;
        let map;
        if (selectedCategory=="Length"){
            matrix = lengthMatrix;
            map = lengths;
        }
        else if (selectedCategory=="Volume"){
            matrix = volumeMatrix;
            map = volumes;
        }
        else if (selectedCategory=="Weight"){
            matrix = weightMatrix;
            map = weights;
        }

        selectFrom.addEventListener("change", (e)=>{
            valTo.value = matrix[map.get(e.target.value)][map.get(selectTo.value)]*parseFloat(valFrom.value);
            let obj = {"from":e.target.value, "to":selectTo.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });

        selectTo.addEventListener("change", (e)=>{
            valTo.value = matrix[map.get(selectFrom.value)][map.get(e.target.value)]*parseFloat(valFrom.value);
            let obj = {"from":selectFrom.value, "to":e.target.value, "valFrom":valFrom.value, "valTo":valTo.value};
            localStorage.setItem(selectedCategory,JSON.stringify(obj));
        });

        valFrom.addEventListener("input", (e)=>{
            valTo.value = matrix[map.get(selectFrom.value)][map.get(selectTo.value)]*parseFloat(e.target.value);
        });

        valTo.addEventListener("input", (e)=>{
            valFrom.value = matrix[map.get(selectTo.value)][map.get(selectFrom.value)]*parseFloat(e.target.value);
        });
    }
    

}

function tempConv(from,to,val){
    if(from==to){
        return val;
    }
    else if (from=="Deg Celsius" && to=="Kelvin"){
        return val+273.15;
    }
    else if(from=="Kelvin" && to=="Deg Celsius"){
        return val-273.15;
    }
    else if(from=="Deg Celsius" && to=="Fahrenheit"){
        return (val*(9.0/5.0))+32;
    }
    else if(from=="Fahrenheit" && to=="Deg Celsius"){
        return (val-32)*(5.0/9.0);
    }
    else if(from=="Kelvin" && to=="Fahrenheit"){
        return ((val-273.15)*(9.0/5.0))+32;
    }
    else if(from=="Fahrenheit" && to=="Kelvin"){
        return (val-32)*(5.0/9.0) + 273.15;
    }
}

function currConv(from,to,val){
    if (from==val){
        return val;
    }
    let ans;
    let today = new Date();
    if (localStorage.getItem(from) === null || (today.getTime() -JSON.parse(localStorage.getItem(from))["time"])/(1000 * 3600 * 24)>1 ){
        let url = "https://v6.exchangerate-api.com/v6/e024662dda399f17afa3669d/latest/";
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url+currencys.get(from), false);
        xhr.onreadystatechange = function () {  
            if (xhr.readyState == 4 && xhr.status == 200) {
                var jsonData = JSON.parse(xhr.responseText);
                jsonData.time = today.getTime();
                rate = jsonData["conversion_rates"][currencys.get(to)];
                localStorage.setItem(from,JSON.stringify(jsonData));
                ans = parseFloat(val)*rate;
                
            }
        };
        xhr.send();
    }
    else{
        rate =  JSON.parse(localStorage.getItem(from))["conversion_rates"][currencys.get(to)];
        ans = parseFloat(val)*rate;
    }
    
    
    return ans;
}










