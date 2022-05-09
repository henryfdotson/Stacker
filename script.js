// Random color generator

function randomColorGenerator() {
  var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  return randomColor
}

// Create the slider in 25 layers and give it attributes

for(var i=25; i>0;i--) {
  randomColor = randomColorGenerator();
  let slider = document.createElement("div");
  slider.setAttribute("class", "slider animate");
  slider.setAttribute("id", "slider"+i);
  slider.setAttribute("style", "background-color:"+randomColor+";");
  document.getElementById("game").append(slider);
}