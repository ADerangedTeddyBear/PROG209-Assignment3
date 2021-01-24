let customerList = [];
let myUl = document.getElementById("customerList");

function formSubmitEvent() {
    //resets the HTML for id customerList
    myUl.innerHTML = "";

    //Three variables derived from the data that was collected
    let name = document.getElementById("name").value;
    let city = document.getElementById("city").value;
    let payment = document.getElementById("payment").value;

    //Adds new data to the array
    customerList.push(name + " " + city + " " + payment);
    
    let ul = document.createElement('ul');
    myUl.appendChild(ul);
    for (let i = 0; i < customerList.length; i++) {
        let li = document.createElement('li');
        ul.appendChild(li);
        li.innerHTML = customerList[i];
    };
}