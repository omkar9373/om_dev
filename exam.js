function savevalue() {
    // document.getElementById("btn").addEventListener("click", function (e) {
    //     e.preventDefault();
        var user = document.getElementById("username").value;


        var pass = document.getElementById("password").value;
        // var sub = document.getElementById("sub").value;

        // let arry = [user, pass, sub];
        console.log("Name:-",user);
    // })

}

function printPara(){

    var printPara = document.getElementById("paraIdFont").outerHTML
    console.log(printPara)

}
function enterMouse(){
    var entry = document.getElementById("boxId").innerText
    console.log("Enter mouse",entry)
}
function leaveMouse(){
    var outsideEntry = document.getElementById("boxId").innerText
    console.log("mouse Out",outsideEntry)
}
