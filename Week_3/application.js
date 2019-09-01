function comingSoon() {
    alert("The login feature can be added in the team project.");
}
function appLink() {
    alert("This link will open a page in the official marketplace.");
}
function articleLink() {
    alert("This link will open the full article page, blog post, or related content.");
}
function copyrw(name) {
    var today = new Date().getFullYear();
    document.write("Assignment by " + name + ", Copyright &copy; " + today);
}
function email() {
    var cust_email = document.getElementById('c_email').value;
    alert("Thanks! " + cust_email + " is now subscribed to our newsletter.");
}