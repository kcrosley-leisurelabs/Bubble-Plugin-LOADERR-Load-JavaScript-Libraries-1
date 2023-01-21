function(instance, properties) {
    var scripts = properties.scripturl ? properties.scripturl.split(',').map(string => string.trim()) : []
    // console.log('number of scripts? ', scripts.length)
    
  var d = document.createElement("div")
  d.id = "loaderr preview"
  d.style.display = "flex"
  d.style.width = properties.bubble.width-0 + "px"
  d.style.height = properties.bubble.height-0 + "px"
  d.style.overflow = "hidden"
  d.style.justifyContent = "center"
  d.style.background = "none"
  var x = document.createElement("IMG");
  x.setAttribute("src", "https://s3.amazonaws.com/appforest_uf/f1576260135796x612714397799744900/loaderr-blaster.svg")
  var smaller = Math.min(properties.bubble.height, properties.bubble.width)
  x.style.width = 0.8 * smaller + "px"
  x.style.verticalAlign = "middle"
  // x.setAttribute("transform", "translateX(50%) translateY(50%)")
  d.appendChild(x)
  var e = []
  // make bullets
  e = scripts.map(script => {
        var e = document.createElement("div")
        e.innerHTML = "●"
        e.style.background = "none"
        e.style.color = "#71c2f7"
        e.style.lineHeight = properties.bubble.height * 0.86 + "px"
        d.appendChild(e)
        return e
    })
  
  instance.canvas[0].appendChild(d)
  var iconScale = x.offsetWidth / 100
  e.forEach(element => element.style.fontSize = iconScale * 100 + "%") 
}