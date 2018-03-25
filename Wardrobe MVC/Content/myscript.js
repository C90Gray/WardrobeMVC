

function Loader() {
    var myVar = setTimeout(showPage, 3000);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}

function getName() {
    n = prompt('Welcome to my closet. Please enter your name.');
    if (n === "") {
        name = "Valued Customer"
    }
    else if (n === null) {
        name = "Valued Customer"
    }
    else {
        name = n.charAt(0).toUpperCase() + n.slice(1);
    }
    console.log(name);
}

function CopySwapON() {
    var t = document.getElementById("foot");
    t.getElementsByTagName('p')[0].innerText = "Created By: Chris Gray";
}

function CopySwapOFF() {
    var r = document.getElementById("foot");
    var today = new Date();
    var year = today.getFullYear();
    r.getElementsByTagName('p')[0].innerText = "Copyright " + year + " - My ASP.NET Application"
}

function displayOnCopy() {
    var modal = document.getElementById('mtext');
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById('mtext');
    var span = document.getElementsByClassName("close");
    modal.style.display = "none";
}

function CustName() {
    var t = document.getElementById("lead");
    t.innerText = "Hi, " + name + ". Welcome to Chris's Closet! Click the button below to pick out a new outfit, or browse the seperate categories to see what fancies your style!";
}

function CustDefault() {
    var t = document.getElementById("lead");
    t.innerText = "Welcome to Chris's Closet! Click the button below to pick out a new outfit, or browse the seperate categories to see what fancies your style!";
}

function ToggleImages() {
    var img = document.getElementsByTagName('img');
    var button = document.getElementById('toggle');
    for (var i = 0; i < img.length; i++) {
        if (img[i].style.visibility == 'visible') {
            button.innerText = "Show Images";

            img[i].style.visibility = 'hidden';
        }
        else {
            button.innerText = "Hide Images";

            img[i].style.visibility = 'visible';

        }
    }
}

function GoToLondonCloset(x) {
    var confirmbutton = document.getElementById(x)
    var x = confirm('You are about to leave this site. Would you like to continue?')
    var displayContainer = document.getElementById('confirmResponse');
    var displayMessage = '';
    if (x) {
        var win = window.open("https://www.closetlondon.com/", '_blank');
        win.focus();
    }
}

function CustomDescription() {
    var p = document.getElementById('custom')
    p.innerText = name + ", below are a few outfits we have chosen at Chris's Closet. Feel free to look through the outfits below, or to create your own."
    p.style.fontSize = "large";

}

function ChangeText() {
    text = document.getElementById('lead')
    text.style.fontSize = 'x-large';
    text.style.color = 'Gold';
}

function ChangeBack() {
    text.style.fontSize = 'large';
    text.style.color = 'aliceblue';
}

function DropDown() {
    var drop = document.getElementById("myDropdown");
    drop.classList.toggle("show");
    var spring = document.getElementsByClassName("Spring");
    var summer = document.getElementsByClassName("Summer");
    var fall = document.getElementsByClassName("Fall");
    var winter = document.getElementsByClassName("Winter");
    for (i = 0; i < 10; i++)
    {
        fall[i].style.display = "block";
        summer[i].style.display = "block";
        spring[i].style.display = "block";
        winter[i].style.display = "block";
    }
}

function DropUp() {
    document.getElementById("myDropdown").classList.remove("show");
}

function filterFunction() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    div = document.getElementById("myDropdown");
    a = div.getElementsByTagName("a");
    for (i = 0; i < a.length; i++) {
        if (a[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = "";
        } else {
            a[i].style.display = "none";
        }
    }
}

function FilterItems(x) {
    var spring = document.getElementsByClassName("Spring");
    var summer = document.getElementsByClassName("Summer");
    var fall = document.getElementsByClassName("Fall");
    var winter = document.getElementsByClassName("Winter");
    for (i = 0; i < 10; i++)
        if (x.innerText === "Spring") {
            summer[i].style.display = "none";
            fall[i].style.display = "none";
            winter[i].style.display = "none";
            spring[i].style.display = "block";
        }
        else if (x.innerText === "Summer") {
           fall[i].style.display = "none";
           winter[i].style.display = "none";
           spring[i].style.display = "none";
           summer[i].style.display = "block";
        }
        else if (x.innerText === "Fall") {
            summer[i].style.display = "none";
            winter[i].style.display = "none";
            spring[i].style.display = "none";
            fall[i].style.display = "block";
        }
        else if (x.innerText === "Winter") {
            fall[i].style.display = "none";
            summer[i].style.display = "none";
            spring[i].style.display = "none";
            winter[i].style.display = "block";
        }
        else {
            fall[i].style.display = "block";
            summer[i].style.display = "block";
            spring[i].style.display = "block";
            winter[i].style.display = "block";
        }
}

function Checkout() {
    var closetArray = new Array(0);
    var userResponse = confirm("Would you like to check out some items from Chris's Closet?");
    while (userResponse) {
        var citem = prompt('Please enter the name of an item');
        userResponse = confirm('Would you like to add another item?');
        closetArray.push(citem);
    }
    if (closetArray.length == 0) {
        alert("You need to put some items in your cart! Try again, or feel free to continue browsing.")
    }
    else if (closetArray.length == 1) {
        alert("Thank you for using Chris's Closet. Your total is $40.98. Please come again.")
    }
    else if (closetArray.length == 2) {
        alert("Thank you for using Chris's Closet. Your total is $70.98. Please come again.")
    }
    else if (closetArray.length == 3) {
        alert("Thank you for using Chris's Closet. Your total is $90.98. Please come again.")
    }
    else if (closetArray.length == 4) {
        alert("Thank you for using Chris's Closet. Your total is $100.98. Please come again.")
    }
    else {
            alert("Thank you for using Chris's Closet.  Your total is $105.98. Please come again.")
    }
}