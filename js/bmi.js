const nameEl = document.querySelector("#name");
const heightEl = document.querySelector("#height");
const weightEl = document.querySelector("#weight");

console.log(nameEl, heightEl, weightEl)


const getBmi = (height, weight) => {
    let bmi = weight / (height / 100) ** 2;
    return bmi.toFixed(2);

};

function calc() {
    let name = nameEl.value;
    let height = heightEl.value;
    let weight = weightEl.value;
    console.log(name, height, weight);
    let bmi = getBmi(height, weight);
    console.log(bmi);
    if (height == "" || weight == "") {
        alert("輸入不能為空!")
        return;
    }
    if (isNaN(bmi)) {
        alert("輸入數值有誤!")
        return;
    }

    document.querySelector(".bmi").innerText = bmi;

}