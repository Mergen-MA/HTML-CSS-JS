// Event Handling
document.addEventListener("DOMContentLoaded",
    function (event) {

function sayHello() {
    this.textContent = "Said it!";
    var name =
        document.getElementById("name").value;
        var message = "<h2>Hello " + name +  "!</h2>";


    document
    .getElementById("content")
    .innerHTML = message;

    if (name === "student") {
        var title =
         document
            .querySelector("#title")
            .textContent;
        title += " & Loving' it!";
        document 
            .querySelector("h1")
            .textContent = title;
        }
}

// Unobstrusive event binding

document.querySelector("button")
    .addEventListener("click", sayHello);

}
);