let donuts = 0;
let workers = 0;
let donutMultiple = 1;
let areWorkersWorking = false;
let money = 0;
let cost_of_worker = 10;

function makeDonuts() {
    donuts = donuts +1;
    document.getElementById("no_of_donuts").innerHTML = donuts;
}

function workersMakeDonuts() {
    donuts = donuts + (workers * donutMultiple);
    document.getElementById("no_of_donuts").innerHTML = donuts;
}

function hireWorker() {
    if (money >= cost_of_worker) {
        money = money - cost_of_worker;
        workers = workers +1;
        if (areWorkersWorking==false) {
            areWorkersWorking=true;
            setInterval(function(){
            workersMakeDonuts()
            }, 1000);
        }
        
        document.getElementById("no_of_workers").innerHTML = workers;  
        document.getElementById("no_of_money").innerHTML = money; 
    }
    
    
}

function convertToMoney() {
    if (parseInt(donuts / 10, 10) * 10 >= 10) {
        let donutsToRemove = parseInt(donuts / 10, 10) * 10;
        donuts = donuts - donutsToRemove;
        money = money + (donutsToRemove / 10);
        document.getElementById("no_of_donuts").innerHTML = donuts;
        document.getElementById("no_of_money").innerHTML = money + " €";
    }
}
