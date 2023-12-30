// ------------------------------------about--------------------------------------------------------------
window.addEventListener("scroll", progressAll);

function progressAll() {
  const progressTop = document.getElementById("about-b");
  const triggerProgress = (window.innerHeight / 8) * 4;

  const progressStart = progressTop.getBoundingClientRect().top;

  if (progressStart < triggerProgress) {
    // HTML

    const progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // CSS

    const progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    //SASS

    // const progressSass = document.getElementById("progressDoneSass");
    // progressSass.style.width = progressSass.getAttribute("data-done");
    // progressSass.style.opacity = 1;

    // BOOTSTRAP

    const progressBootstrap = document.getElementById("progressDoneBootstrap");
    progressBootstrap.style.width = progressBootstrap.getAttribute("data-done");
    progressBootstrap.style.opacity = 1;

    // JAVASCRIPT

    const progressJavscript = document.getElementById("progressDoneJavascript");
    progressJavscript.style.width = progressJavscript.getAttribute("data-done");
    progressJavscript.style.opacity = 1;

    // NODEJS

    const progressNodeJs = document.getElementById("progressDoneNodeJs");
    progressNodeJs.style.width = progressNodeJs.getAttribute("data-done");
    progressNodeJs.style.opacity = 1;

    // EXPRESSJS

    const progressExpressJs = document.getElementById("progressDoneExpress");
    progressExpressJs.style.width = progressExpressJs.getAttribute("data-done");
    progressExpressJs.style.opacity = 1;

    // REACTJS

    const progressReactJs = document.getElementById("progressDoneReact");
    progressReactJs.style.width = progressReactJs.getAttribute("data-done");
    progressReactJs.style.opacity = 1;

    // MONGODB

    const progressMongoDB = document.getElementById("progressDoneMongoDB");
    progressMongoDB.style.width = progressMongoDB.getAttribute("data-done");
    progressMongoDB.style.opacity = 1;
  }
}
// increment counter
const counters = document.querySelectorAll(".counter");
counters.forEach(function (counter) {
  counter.innerText = "20";
  updatecounter();

  function updatecounter() {
    const target = +counter.getAttribute("data-target");
    const c = +counter.innerText;
    const increment = target / 1000;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updatecounter, 10);
    } else {
      counter.innerText = target;
    }
  }
});

// ------------------------------------------blog---------------------------------------------------
// var today = new Date();

// var date =today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();

// var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// var dateTime = date+' '+time;

// document.getElementById('p1').innerHTML = dateTime ;
let a;
let date;
let time;
var today = new Date();
const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
setInterval(() => {
  a = new Date();
  date = a.toLocaleDateString(undefined, options);
  // date = today.getDate() +'-'+(today.getMonth()+1)+'-'+today.getFullYear();
  time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
  document.getElementById("time").innerHTML = time + " " + date;
}, 1000);

// ----------------1-show hide---------------------------
const btn = document.querySelector("#btn");
document.getElementById("myDiv-ShowHide").style.display = "none";

document.getElementById("btn").addEventListener("click", function () {
  var mybox = document.getElementById("myDiv-ShowHide");
  if (mybox.style.display == "none") {
    mybox.style.display = "block";
  } else {
    mybox.style.display = "none";
  }
  if (btn.textContent == "Read More") {
    btn.textContent = "Read Less";
  } else {
    btn.textContent = "Read More";
  }
});

// -------------------------2-show hide-------------------------
const btn1 = document.querySelector("#btn-1");
document.getElementById("myDiv-ShowHide1").style.display = "none";

document.getElementById("btn-1").addEventListener("click", function () {
  var mybox = document.getElementById("myDiv-ShowHide1");
  if (mybox.style.display == "none") {
    mybox.style.display = "block";
  } else {
    mybox.style.display = "none";
  }
  if (btn1.textContent == "Read More") {
    btn1.textContent = "Read Less";
  } else {
    btn1.textContent = "Read More";
  }
});
