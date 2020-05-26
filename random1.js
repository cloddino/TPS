var i = 0;

function timedCount() {
  i=Math.floor(Math.random() * 10); 
  postMessage(i);
  setTimeout("timedCount()",50);

}


timedCount();