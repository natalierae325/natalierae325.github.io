function toggleNavMenu() {
    console.log("hi");
   console.log(document.getElementById('navBar').style.display);
    
    if (document.getElementById('navBar').style.display == "none") {
        console.log("we have entered the if statement");
        document.getElementById('navBar').style.display = "initial";
    }
    else {
       document.getElementById('navBar').style.display = "none"; 
    }
}