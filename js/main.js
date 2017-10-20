

window.onload = function(){
  get.id("translateButton").onclick = translateFunc;
}
function translateFunc(){
  bokmalArr = get.id("bokmal").value.split(" ");

  getNynorskString = getNynorsk(bokmalArr);

  get.id("sidemal").value = getNynorskString;

  //place stuff in sidemal-textarea: get.id("sidemal").value = "XYZ"
}
function getNynorsk(bm){
  nn = [];
  for(i in bm){
    found = false;
    for(x in translatorContent){
      if(translatorContent[x][0].toUpperCase() == bm[i].toUpperCase()){
        nn.push(translatorContent[x][1]);
        found = true;
      }
    }
    if(!found){
      nn.push(bm[i]);
    }
  }
  returString = "";
  for(i in nn){
    returString += " " + nn[i];
  }
  return returString;
}
