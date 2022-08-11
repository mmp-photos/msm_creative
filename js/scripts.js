/*  This file contains the script for the personal portfolio site of Matthew Mayer.
    The code was started in August 2022 and was written by Matthew Mayer */
// ESTABLISH WIDTH OF THE home-media DIV TO CALCULATE THE NEEDED HEIGHT //

var clientWidth = document.getElementById('home-media').clientWidth;
clientWidth /= 2.14;
calcMaxHeight = Math.ceil(clientWidth);
console.log(calcMaxHeight);

document.getElementById("home-media").style.backgroundColor= "red";
document.getElementById("home-media").style.maxHeight = calcMaxHeight + "px";

// CHANGE BACKGROUND OF THE HOME IMAGE ON THE LANDING PAGE //

 function heroImage(){
    const bgImages = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"];
    i = Math.floor(Math.random() * bgImages.length)
    if(i == 0){ 
        let i = i + 1;
        return i;
    }
    document.getElementById("home-media").style.backgroundImage=`url(images/backgrounds/bg0${i}.jpg`;
    console.log(`Hero image clicked number is ${i}`)
    console.log(`document.getElementById("home-media").style.backgroundImage=url(images/backgrounds/bg0${i}.jpg`);
    
 }
 const msmImage = document.getElementById("msmImage");
 msmImage.addEventListener("click", haltBgChange);

 function changeBG() {
    const bgImages = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg"];
    let i = Math.floor(Math.random() * bgImages.length)
    if(i == 0){ 
        i += 1;
        return i;
    }
    let bgImage = document.getElementById("home-media").style.backgroundImage=`url(images/backgrounds/bg0${i}.jpg`;
    return bgImage;
    console.log(i);
 }

 function haltBgChange(){
    clearInterval(intervalID);
 }
 
 $(function() {
    intervalID = setInterval(changeBG, 1000);
});

// CONTROLS FOR THE SOCIAL BUTTONS IN THE FOOTER //
    // Buttons are set with MOUSENTER AND MOUSEOUT options that change the style of the buttons //
 const linkedin  = document.getElementById("linkedin");
 const facebook  = document.getElementById("facebook");
 const instagram = document.getElementById("instagram");
 const github    = document.getElementById("github");
 
 linkedin.addEventListener("mouseenter", footerActiveLinkedin);
 linkedin.addEventListener("mouseout", footerInactiveLinkedin);
 
 facebook.addEventListener("mouseenter", footerActiveFacebook);
 facebook.addEventListener("mouseout", footerInactiveFacebook);
 
 instagram.addEventListener("mouseenter", footerActiveInstagram);
 instagram.addEventListener("mouseout", footerInactiveInstagram);
 
 github.addEventListener("mouseenter", footerActiveGithub);
 github.addEventListener("mouseout", footerInactiveGithub);

 function footerActiveLinkedin(){
    document.getElementById("linkedin").classList.remove("footer");
    document.getElementById("linkedin").classList.add("footer-active");
    console.log(`The mouseover is working`);
 }

 function footerInactiveLinkedin(){
    document.getElementById("linkedin").classList.remove("footer-active");
    document.getElementById("linkedin").classList.add("footer");
    console.log(`the mouse out is working`)
 }

 function footerActiveFacebook(){
    document.getElementById("facebook").classList.remove("footer");
    document.getElementById("facebook").classList.add("footer-active");
    console.log(`The mouseover is working`);
 }

 function footerInactiveFacebook(){
    document.getElementById("facebook").classList.remove("footer-active");
    document.getElementById("facebook").classList.add("footer");
    console.log(`the mouse out is working`)
 }

 function footerActiveInstagram(){
    document.getElementById("instagram").classList.remove("footer");
    document.getElementById("instagram").classList.add("footer-active");
    console.log(`The mouseover is working`);
 }

 function footerInactiveInstagram(){
    document.getElementById("instagram").classList.remove("footer-active");
    document.getElementById("instagram").classList.add("footer");
    console.log(`the mouse out is working`)
 }

 function footerActiveGithub(){
    document.getElementById("github").classList.remove("footer");
    document.getElementById("github").classList.add("footer-active");
    console.log(`The mouseover is working`);
 }

 function footerInactiveGithub(){
    document.getElementById("github").classList.remove("footer-active");
    document.getElementById("github").classList.add("footer");
    console.log(`the mouse out is working`)
 }