window.addEventListener("load", function () {

    let main=document.getElementById("main")
    let heroBox=document.getElementById("hero-box");

    let heroHeading = document.createElement("h1");
    let heroDesc = document.createElement("p");

    heroHeading.innerHTML= " وصلة سيرفس ";
    heroHeading.id="hero-heading"
    heroDesc.innerHTML= "خليك متطمن ولا توهق نفسك"
    heroDesc.id= "hero-desc";

    main.appendChild(heroBox);
    heroBox.appendChild(heroHeading);
    heroBox.appendChild(heroDesc);
})

