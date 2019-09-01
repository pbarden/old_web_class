function show_login() {
    var lf_content = document.getElementById("lf_modal");
    lf_content.style.display = "block";
}
function close_login() {
    var lf_content = document.getElementById("lf_modal");
    lf_content.style.display = "none";
}
function appLink() {
    alert("This link will open a page in the official marketplace.");
}
function articleLink() {
    alert("This link will open the full article page, blog post, or related content.");
}
function copyrw(name) {
    var today = new Date().getFullYear();
    document.write("Team assignment by " + name + ", Copyright &copy; " + today);
}
function login() {
    var u_name = document.getElementById("username").value;
    var p_word = document.getElementById("password").value;

    var u = ["admin", "devops", "tester", "stduser", "guest"];
    var p = ["mellon", "code4u", "Tester123!", "dark**roast", "password"];

    var match = false;

    for(var n = 0; n < u.length; n++) {
        if (u_name == u[n] && p_word == p[n]) {
            document.cookie = "username=" + u[n] + "!";
            match = true;
            
        }
    }
    if (match == false) {
        alert("Login failure. Incorrect username and/or password.");
    } else if(match == true) {
        alert("Login success!");
    }
}