var userHandler = {
    //Add the record in database, it adds record or row in Web SQL (SQLite)
    addUser: function (username, password) {

        let userid = "" + username + password
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "insert into user1(_id, username, password) values(?, ?, ?)",
                    [userid, username, password],
                    function (tx, results) {
                        alert("Registration successful! Please login with your new username and password"); 
                        document.getElementById("tabSignupButton").classList.remove('active');
                        document.getElementById("tabLoginButton").classList.add('active');
                        document.getElementById("tabSignup").classList.remove('active');
                        document.getElementById("tabLogin").classList.add('active');
                    },
                    function (tx, error) {
                        console.log("add user error: " + error.message);
                    }
                );
            },
            function (error) { },
            function () { }
        );
    },
  
    getUser: function (userid) { //Fetching user info
        databaseHandler.db.transaction(
            function (tx) {
                tx.executeSql(
                    "SELECT * from user1 WHERE _id = ?",
                    [userid],
                    function (tx, results) {
                        if (results.rows.length === 1) {                       
                            openPage('home') //Successful login opens the next page
                        } else {
                            alert("Incorrect username or password")
                        }
                    },
                    function (tx, error) {
                        console.log("get user error:", error)
                    }                   
                );
            },
            function (error) { },
            function () { }
        )
    }
}