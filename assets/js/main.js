AOS.init();
// You can also pass an optional settings object
// below listed default settings
AOS.init({

  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 120, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 700, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});



function namecheck() {
  let name = document.getElementById("name").value
  let nm = null
  nm = name.trim()
  var letters = /^[A-Za-z]+$/;
  var spc = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+[A-Za-z]*$/;
  document.getElementById("name").value = nm;
  if (nm == "" || name == null) {
    document.getElementById("nmlabel").style.display = "block"
    return false
  }
  else if (!isNaN(nm[0])) {
    document.getElementById("nmlabel").style.display = "block"
    return false
  }
  else if (nm.match(spc)) {
    document.getElementById("nmlabel").style.display = "block"
    return false
  }
  else {
    document.getElementById("nmlabel").style.display = "none"
    return true

  }
}


function emailcheck() {
  var val = document.getElementById("email").value
  var v = null
  v = val.trim()
  document.getElementById("email").value = v;
  if (v == "" || val == null) {
    document.getElementById("el").style.display = "block"
    return false
  }
  else if (!isNaN(v[0])) {
    document.getElementById("el").style.display = "block"
    return false
  }
  else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v)) {
    document.getElementById("el").style.display = "block"
    return false
  }
  else {
    document.getElementById("el").style.display = "none"
    return true

  }
}

function msgcheck() {

  var val = document.getElementById("msg").value
  var v = null
  v = val.trim()
  document.getElementById("msg").value = v;
  var n = v.length
  console.log(n)
  if (v == "" || val == null) {
    document.getElementById("ml").style.display = "block"
    return false
  }
  else {
    document.getElementById("ml").style.display = "none"
   
    return true
  }
}
