function openNavbar() {
    const x = document.getElementById("head-links");
    let c = document.getElementById("icon");
    
    if (x.style.display === "block") {
      x.style.display = "none"
     
    } else {
      x.style.display = "block";
    }
  }