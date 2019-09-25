function check() {
            
            var uname = document.getElementById("username").value;
            var pass = document.getElementById("password").value;
            var s1 = document.getElementById("s1")
            var s2 = document.getElementById("s2")
            if (uname == "" || pass == "") {
                s1.innerText = "Please enter username/password"
                return false;

            }
            if (pass.length < 7 || pass.length > 13) {
                s2.innerHTML = "<font color=black>Username should have 6-12 characters</font>"
                return false;
            }
            else if (pass.charAt(0) != "A") {
                s2.innerHTML = "<font color=red>password must start with </font>"
                return false;
            }
            else{

            }
        }
