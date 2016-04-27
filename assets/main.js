
document.querySelector("img").addEventListener("mouseover", function(e){
  e.target.setAttribute("class", "animated pulse");
  window.setTimeout(function(){
    e.target.setAttribute("class", "")
  },800)
})
