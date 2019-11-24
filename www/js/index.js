//Creating a database
$(document).on("ready", function () {
    databaseHandler.createDatabase();

});

//Adding user in table
function addUser() {
    var username = $("#txtUserName").val();
    var password = $("#txtPassword").val();

    if (!username || !password) {
        alert("Username and password are required");
    } else {
        userHandler.addUser(username, password);
        $("#txtUserName").val("");
        $("#txtPassword").val("");
    }
}

//Getting login info from table
function login() {
    var username = $("#loginUserName").val();
    var password = $("#loginPassword").val();
    var userid = "" + username + password
    userHandler.getUser(userid)
}

//Shows which user is logged in when opening the menu
function displayUser() {
    var nodeUser = document.getElementById('userTitle');
    nodeUser.innerHTML = ("Logged in as: " + $("#loginUserName").val());
}

function createExpense() { //Adding a new expense

    var date = document.getElementById('expenseDate').value;
    var category = document.getElementById('expenseCategory').value;
    //changing the value to int and adding two decimals
    var amountString = document.getElementById('expenseAmount').value;
    var amountFloat = parseFloat(amountString);
    var amount = amountFloat.toFixed(2);

    if (!date || !amount) { //Date and amount must be set

        alert("Please choose a date and amount.");
        
    } else { //creating new elements and adding classes
        li = document.createElement('li');
        var newRow = document.createElement('div');
        newRow.className = "row border-grey-300";

        var dateDiv = document.createElement('div');
        var categoryDiv = document.createElement('div');
        var amountDiv = document.createElement('div');

        dateDiv.className = "item col";
        categoryDiv.className = "item col";
        amountDiv.className = "item col row vertical-align-center";
        
        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var euroIcon = document.createElement('i');

        p1.className = "align-left";
        p2.className = "align-left";
        p3.className = "align-right text-red col-75";
        euroIcon.className = "icon-small ion-social-euro text-red"
        //Creating text
        var t1 = document.createTextNode(date);
        var t2 = document.createTextNode(category);
        var t3 = document.createTextNode("-" + amount);
        //Adding created text to the <p> element
        p1.appendChild(t1);
        p2.appendChild(t2);
        p3.appendChild(t3);
        //Adding <p> elements to the divs
        dateDiv.appendChild(p1);
        categoryDiv.appendChild(p2);
        amountDiv.appendChild(p3);
        amountDiv.appendChild(euroIcon);
        //Adding the divs to the upper div
        newRow.appendChild(dateDiv);
        newRow.appendChild(categoryDiv);
        newRow.appendChild(amountDiv);
        //Adding the upper div the page
        document.getElementById("transactionList").appendChild(newRow);
        //Calculating numbers for the profile page
        var expense = document.getElementById('expense').innerHTML;
        var myString = parseFloat(expense);
        var amountInt = parseFloat(amount);
        var number = myString + amountInt;
        var numberDecimal = number.toFixed(2);
        document.getElementById('expense').innerHTML = numberDecimal;
        //Clearing the values from input boxes
        document.getElementById('expenseDate').value = "";
        document.getElementById('expenseCategory').value = "Not selected";
        document.getElementById('expenseAmount').value = "";

        calculateBalance();
        localStorage["profile"] = document.getElementById("tabProfile").innerHTML // updating localstorage
        localStorage["transactions"] = document.getElementById("transactionList").innerHTML // updating localstorage
    }
}

function createIncome() { //Adding a new income

    var date = document.getElementById('incomeDate').value;
    var category = document.getElementById('incomeCategory').value;
    //changing the value to int and adding two decimals
    var amountString = document.getElementById('incomeAmount').value;
    var amountFloat = parseFloat(amountString);
    var amount = amountFloat.toFixed(2);

    if (!date || !amount) { //Date and amount must be set

        alert("Please choose a date and amount.");

    } else { //creating new elements and adding classes
        li = document.createElement('li');
        var newRow = document.createElement('div');
        newRow.className = "row border-grey-300";

        var dateDiv = document.createElement('div');
        var categoryDiv = document.createElement('div');
        var amountDiv = document.createElement('div');

        dateDiv.className = "item col";
        categoryDiv.className = "item col";
        amountDiv.className = "item col row vertical-align-center";

        var p1 = document.createElement('p');
        var p2 = document.createElement('p');
        var p3 = document.createElement('p');
        var euroIcon = document.createElement('i');

        p1.className = "align-left";
        p2.className = "align-left";
        p3.className = "align-right text-light-green-700 col-75";
        euroIcon.className = "icon-small ion-social-euro text-light-green-700"
        //Creating text
        var t1 = document.createTextNode(date);
        var t2 = document.createTextNode(category);
        var t3 = document.createTextNode("+" + amount);
        //Adding created text to the <p> element
        p1.appendChild(t1);
        p2.appendChild(t2);
        p3.appendChild(t3);
        //Adding <p> elements to the divs
        dateDiv.appendChild(p1);
        categoryDiv.appendChild(p2);
        amountDiv.appendChild(p3);
        amountDiv.appendChild(euroIcon);
        //Adding the divs to the upper div
        newRow.appendChild(dateDiv);
        newRow.appendChild(categoryDiv);
        newRow.appendChild(amountDiv);
        //Adding the upper div the page
        document.getElementById("transactionList").appendChild(newRow);
        //Calculating numbers for the profile page
        var income = document.getElementById('income').innerHTML;
        var myString = parseFloat(income);
        var amountInt = parseFloat(amount);
        var number = myString + amountInt;
        var numberDecimal = number.toFixed(2);
        document.getElementById('income').innerHTML = numberDecimal;
        //Clearing the values from input boxes
        document.getElementById('incomeDate').value = "";
        document.getElementById('incomeCategory').value = "Not selected";
        document.getElementById('incomeAmount').value = "";

        calculateBalance();
        localStorage["profile"] = document.getElementById("tabProfile").innerHTML // updating localstorage
        localStorage["transactions"] = document.getElementById("transactionList").innerHTML // updating localstorage
    }
}

function calculateBalance() { //Calculate the balance on the front page
    var balance = document.getElementById('balance').innerHTML;
    var balanceFloat = parseFloat(balance);

    var expense = document.getElementById('expense').innerHTML;
    var expenseFloat = parseFloat(expense);

    var income = document.getElementById('income').innerHTML;
    var incomeFloat = parseFloat(income);

    var savings = document.getElementById('savings').innerHTML;
    var savingsFloat = parseFloat(savings);

    var newBalance = incomeFloat - expenseFloat - savingsFloat;
    var newBalanceDecimal = newBalance.toFixed(2);
    document.getElementById('balance').innerHTML = newBalanceDecimal;

}

function createSaving() { //Create a new saving goal
    var goal = document.getElementById('savingGoal').value;
    var amount = document.getElementById('savingAmount').value;
    var amountFloat = parseFloat(amount);
    var amountDecimal = amountFloat.toFixed(2);

    if (!goal || !amount) { //Goal and amount must be set

        alert("Goal and amount are needed.");

    } else { //creating new elements and adding classes

        var parentDiv = document.createElement('div');
        var goalDiv = document.createElement('div');
        var progressDiv = document.createElement('div');
        var space = document.createElement('div');

        //parentDiv.id = goal;
        parentDiv.className = "green-100";
        goalDiv.className = "row vertical-align-center";
        space.classList = "space";

        var goalTxt = document.createElement('h1');
        var goalTxt2 = document.createElement('h1');
        var goalTxt3 = document.createElement('h1');
        var moneyInput = document.createElement('input');
        var goalAdd = document.createElement('button');
        var progressBar = document.createElement('progress');

        goalTxt.className = "col align-left text-strong padding";
        goalTxt2.className = "col text-strong";
        goalTxt3.className = "col align-left text-strong";
        moneyInput.classList = "col margin border-grey-700 padding radius";
        moneyInput.type = "number";
        moneyInput.placeholder = "Add...";
        goalAdd.className = "green-800 align-right circle icon ion-plus";
        goalAdd.setAttribute('onclick', 'addMoney(this);');
        progressBar.value = 0;
        progressBar.max = amountDecimal;

        var t1 = document.createTextNode(goal);
        var t2 = document.createTextNode(" 0.00 / ");
        var t3 = document.createTextNode(amountDecimal);

        goalTxt.appendChild(t1);
        goalTxt2.appendChild(t2);
        goalTxt3.appendChild(t3);
        goalDiv.appendChild(goalTxt);
        goalDiv.appendChild(goalTxt2);
        goalDiv.appendChild(goalTxt3);
        goalDiv.appendChild(moneyInput);
        goalDiv.appendChild(goalAdd);

        progressDiv.appendChild(progressBar);

        parentDiv.appendChild(goalDiv);
        parentDiv.appendChild(progressDiv);

        document.getElementById("goalList").appendChild(parentDiv);
        document.getElementById("goalList").appendChild(space);

        document.getElementById('savingGoal').value = "";
        document.getElementById('savingAmount').value = "";
    }
    localStorage["goals"] = document.getElementById("goalList").innerHTML // updating localstorage
}

function addMoney(elem) {//Add money to the saving goal
    var savedAmount = elem.parentNode.childNodes[1].innerHTML;
    var savedAmountFloat = parseFloat(savedAmount);

    var inputValue = elem.parentNode.childNodes[3].value;
    if (!inputValue) {
        alert("Please write an amount");
    } else {
        var inputValueFloat = parseFloat(inputValue);

        var number = savedAmountFloat + inputValueFloat;
        var numberDecimal = number.toFixed(2);
        elem.parentNode.childNodes[1].innerHTML = numberDecimal + " /"; //Update the saved amount
        elem.parentNode.parentNode.childNodes[1].childNodes[0].value = numberDecimal; //Update the progress bar

        var savings = document.getElementById('savings').innerHTML;
        var myString = parseFloat(savings);

        var savingsProfile = myString + inputValueFloat;
        var savingsProfileDecimal = savingsProfile.toFixed(2);
        document.getElementById('savings').innerHTML = savingsProfileDecimal;

        elem.parentNode.childNodes[3].value = "";
        calculateBalance();
        localStorage["profile"] = document.getElementById("tabProfile").innerHTML // updating localstorage
        localStorage["goals"] = document.getElementById("goalList").innerHTML // updating localstorage
    }
}

function submitMessage() { //Contact page. 
    var name = document.getElementById("contactName").value;
    var email = document.getElementById("contactEmail").value;
    var subject = document.getElementById("contactSubject").value;
    if (!name || !email || !subject) {
        alert("Please fill all fields.")
    } else {
        alert("Thank you for your message.")
    }
}

function appState() {
    if (localStorage["profile"]) { // checking, if there is something in localstorage
        document.getElementById("tabProfile").innerHTML = localStorage["profile"];
    }
    if (localStorage["transactions"]) { // checking, if there is something in localstorage
        document.getElementById("transactionList").innerHTML = localStorage["transactions"];
    }
    if (localStorage["goals"]) { // checking, if there is something in localstorage
        document.getElementById("goalList").innerHTML = localStorage["goals"];
    }
}

