function start() {
  first();
  second();
}

function first() {
  var paras = document.getElementsByTagName("p");
  console.log(paras.length);
  console.log(paras[0]);
  // document.write("<hr />");
  for (let i = 0; i < paras.length; i++) {
    var data = paras[i].innerText;
    // document.write(i+" "+data+"<br />");
    console.log(i + " " + data);
  }
  var dodgers = document.getElementsByClassName("dodger");
  for (let index = 0; index < dodgers.length; index++) {
    // dodgers[index].innerHTML += " - dodger";
    dodgers[index].style.color = "dodgerblue";
  }
}

function second() {
  console.log(document.querySelectorAll(".dodger, .red"));
  var h2 = document.createElement("h2");
  var txt = document.createTextNode("Appended using javascript");
  var cmt = document.createComment("This h2 tag and text is added using javascript!");
  // h2.innerHTML = "Appended using javascript";
  h2.appendChild(txt);
  var pnode = document.getElementsByClassName("testing")[0];
  pnode.appendChild(cmt);
  pnode.appendChild(h2);
  console.log("h2 tag appended");
}