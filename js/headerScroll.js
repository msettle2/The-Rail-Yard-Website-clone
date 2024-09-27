function changeCss () {
    var headerElement = document.querySelector("#trans-header");
    var headerimgElement = document.querySelector("#trans-header img");
    var navElement = document.querySelector("nav");
    var navaElement = document.querySelector("nav").children;
    var dropbtn = document.querySelector(".dropbtn");
    console.log(screen.width);
    
    /* if(screen.width < 700){ */
    document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? navElement.style.opacity = 1 : navElement.style.opacity = 0.8;
    document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? headerElement.style.background = "#2C363F" : headerElement.style.background = "none";
    /* this.scrollY > 500 ? headerimgElement.style.height = "120px" : headerimgElement.style.height = "195px"; */
    document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? headerimgElement.style.height = "100px" : headerimgElement.style.height = "195px";
    document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? navElement.style.height = "60px" : navElement.style.height = "80px";
    document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? dropbtn.style.background = "#2C363F" : dropbtn.style.background = "none";
    for(let i = 0; i < 4; i++){
        document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? navaElement[i].style.height = "60px" : navaElement[i].style.height = "80px";
    }
    /* }else{
        navElement.style.opacity = 1
        headerElement.style.background = "#2C363F"
        headerimgElement.style.height = "100px"
        navElement.style.height = "60px"
        dropbtn.style.background = "blue"
        for(let i = 0; i < 4; i++){
            navaElement[i].style.height = "60px";
        }
    } */
    

  }
  window.addEventListener("scroll", changeCss , false);