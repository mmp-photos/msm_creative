const heroImage = () => {
    const bgImages = ["bg01.jpg", "bg02.jpg", "bg03.jpg", "bg04.jpg", "bg05.jpg"];
    i = Math.floor(Math.random() * bgImages.length)
    if(i == 0){ 
        let i = i + 1;
        return i;
    }
    document.getElementById("home-media").style.backgroundImage=`url(images/backgrounds/bg0${i}.jpg`;
}