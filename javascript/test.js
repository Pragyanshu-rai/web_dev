function first() {
  var paras = document.getElementsByTagName("p");
  console.log(paras.length);
  console.log(paras[0]);
  // document.write("<hr />");
  for (let i = 0; i < paras.length; i++) {
    var data = paras[i].innerText;
    // document.write(i+" "+data+"<br />");
    console.log(i+" "+data);
  }
  var dodgers = document.getElementsByClassName("dodger");
  for (let index = 0; index < dodgers.length; index++) {
      // dodgers[index].innerHTML += " - dodger";
      dodgers[index].style.color = "dodgerblue";  
  }
  console.log(document.querySelectorAll(".dodger, .red"));
}