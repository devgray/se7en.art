//script for pfpmaker
var bgArray = [0,1];
var skinArray = [0,1,2,3];
var eyesArray = [0,1,2];
var noseArray = [0];
var mouthArray = [0,1];
var hairArray = [0,1,2];
var hairColorArr = ["brown","blonde","grey","orange"];
var bustArray = [0,1];
var femShirtArr = [0,1,2];
var neutShirtArr = [0,1,2];
var jacketArray = [0,1,2,3];
var colorname;
var busttype;

function download(){
    console.log("starting download...");
    pfp = document.querySelector("#pfp");
    html2canvas(pfp).then(canvas => {
        console.log(canvas);
        var img = new Image(), 
            can=document.createElement('canvas');

        can=canvas;

        img.style.webkitTransformOrigin= "left bottom";
        img.id = "printable";
        // img.style.webkitTransform = "translateY(-100%) rotate(90deg)";
        // img.src = can.toDataURL();
        downloadImage(can.toDataURL("image/png", 1.0));
        
        //document.location.href = can.toDataURL("image/png",1.0).replace("image/png", "image/octet-stream");
        //var myWindow = window.open("", "_blank", "width=600,height=600,top="+(screen.height-screen.height/1.3)+",left="+(screen.width-screen.width/1.6));
        //myWindow.document.body.appendChild(img);
        // document.body.appendChild(canvas)
        // window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
        // win.document.body.innerHTML = canvas;
    });

    // var link = document.createElement('a');
    // link.download = 'filename.png';
    // link.href = document.querySelector("#pfp").toDataURL()
    // link.click();
    
    console.log("downloaded");
}

function downloadImage(data, filename = 'untitled.png') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}

function saveImageAs (imgOrURL) {
    if (typeof imgOrURL == 'object')
      imgOrURL = imgOrURL.src;
    window.win = open (imgOrURL);
    setTimeout('win.document.execCommand("SaveAs")', 500);
  }

function loadRandom(){
 // items[Math.floor(Math.random()*items.length)];
 arrs = ["bg","skin","eyes","bust","nose","mouth","hair","jacket"]
 arrs.forEach(x => {

      if(x=="hair"){
        str = eval(x + "Array");
        i = str[Math.floor(Math.random()*str.length)];
        c = i;
        colorname = hairColorArr[Math.floor(Math.random()*hairColorArr.length)];
        document.querySelector(".swatch."+colorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch:not(."+colorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        url = "url('/pfpmaker/traits/"+x+"/"+colorname+"/type_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".bounding-box."+x).setAttribute("value", i);
        document.querySelector(".type."+x).innerHTML = i;
      }else if(x=="bust"){
        busttype=bustArray[Math.floor(Math.random()*bustArray.length)];
        document.querySelector(".type.bust").innerHTML = busttype;
        shirt = document.querySelector(".type.top");
        shirtArray= [];
          if(busttype==0){
              shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          if(i==0){
              //type.setAttribute("value",skinArray.length-1);
              shirt.innerHTML = shirtArray.length-1;
              i=shirtArray.length-1;
              console.log("shirt "+i);
              
          }else{
              i--;
              //type.setAttribute("value",i);
              shirt.innerHTML = i;
              console.log(i);
              
          }
          if(i>0){
            document.querySelector(".extrabtn.removeShirt").style.display="flex";
          }else{
            document.querySelector(".extrabtn.removeShirt").style.display="none";
          }
          url = "url('/pfpmaker/traits/top/"+busttype+"/type_"+i+".png')";
          document.querySelector(".bounding-box.top").style.backgroundImage=url;

        console.log("bust "+i);
      }else{
        str = eval(x + "Array");
        i = str[Math.floor(Math.random()*str.length)];
          if(x=="jacket" && i>0){
            document.querySelector(".extrabtn.removeOuter").style.display="flex";
          }else{
            document.querySelector(".extrabtn.removeOuter").style.display="none";
          }
        c = i;
        url = "url('/pfpmaker/traits/"+x+"/type_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        // document.querySelector(".bounding-box."+x).setAttribute("value", i);
        
        document.querySelector(".type."+x).innerHTML = i;
        console.log("loaded "+url);
      }
      
 });
//  skin = skinArray[Math.floor(Math.random()*skinArray.length)];
}
function prev(a){

  
  attrib = a.getAttribute("name");
  if(attrib=="hair"){
          type = document.querySelector(".type.hair");
          //i = type.getAttribute("value");
          i = type.innerHTML;
          if(i==0){
              //type.setAttribute("value",skinArray.length-1);
              type.innerHTML = hairArray.length-1;
              i=str.length-1;
              console.log(i);
          }else{
              i--;
              //type.setAttribute("value",i);
              type.innerHTML = i;
              console.log(i);
          }
          url="url('/pfpmaker/traits/hair/"+colorname+"/type_"+i+".png')";
          console.log(url);
          document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }else if(attrib=="bust"){
          type = document.querySelector(".type.bust");
          //i = type.getAttribute("value");
          i = type.innerHTML;
          if(i==0){
              //type.setAttribute("value",skinArray.length-1);
              type.innerHTML = bustArray.length-1;
              i=bustArray.length-1;
              console.log(i);
          }else{
              i--;
              //type.setAttribute("value",i);
              type.innerHTML = i;
              console.log(i);
          }
          busttype = i;
          shirt = document.querySelector(".type.top").innerHTML;
          url="url('/pfpmaker/traits/top/"+busttype+"/type_"+shirt+".png')";
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }
    else if(attrib=="top"){
          type = document.querySelector(".type.top");
          i = type.innerHTML;
          shirtArray= [];
          if(busttype==0){
              shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          if(i==0){
              //type.setAttribute("value",skinArray.length-1);
              type.innerHTML = shirtArray.length-1;
              i=shirtArray.length-1;
              console.log(i);
          }else{
              i--;
              //type.setAttribute("value",i);
              type.innerHTML = i;
              console.log(i);
          }
          shirt = document.querySelector(".type.top").innerHTML;
          url="url('/pfpmaker/traits/top/"+busttype+"/type_"+shirt+".png')";
          checkExtraBtn(i,"removeShirt");
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }
    else{
          str = eval(attrib + "Array");
          type = document.querySelector(".type."+attrib);
          //i = type.getAttribute("value");
          i = type.innerHTML;
          if(i==0){
              //type.setAttribute("value",skinArray.length-1);
              type.innerHTML = str.length-1;
              i=str.length-1;
              console.log(i);
          }else{
              i--;
              //type.setAttribute("value",i);
              type.innerHTML = i;
              console.log(i);
          }
          if(attrib=="jacket"){
            checkExtraBtn(i,"removeOuter");
          }
          url="url('/pfpmaker/traits/"+attrib+"/type_"+i+".png')";
          console.log(url);
          document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  
}
function next(a){
  attrib = a.getAttribute("name");
  if(attrib=="hair"){
        type = document.querySelector(".type.hair");
        i = type.innerHTML;
        if(i==hairArray.length-1){
            type.innerHTML = 0;
            i=0;
            console.log(i);
        }else{
            i++;
            type.innerHTML = i;
            console.log(i);
        }
        url="url('/pfpmaker/traits/hair/"+colorname+"/type_"+i+".png')";
        console.log(url);
        document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }else if(attrib=="bust"){
        type = document.querySelector(".type.bust");
        i = type.innerHTML;
        if(i==bustArray.length-1){
            type.innerHTML = 0;
            i=0;
            console.log("bust" + i);
        }else{
            i++;
            type.innerHTML = i;
            console.log("bust" + i);
        }
        busttype = i;
        shirt = document.querySelector(".type.top").innerHTML;
        url="url('/pfpmaker/traits/top/"+busttype+"/type_"+shirt+".png')";
        document.querySelector(".bounding-box.top").style.backgroundImage=url;
  }
  else if(attrib=="top"){
          type = document.querySelector(".type.top");
          i = type.innerHTML;
          shirtArray= [];
          if(busttype==0){
              shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          if(i==shirtArray.length-1){
              type.innerHTML = 0;
              i=0;
              console.log(i);
          }else{
              i++;
              type.innerHTML = i;
              console.log(i);
          }
          shirt = document.querySelector(".type.top").innerHTML;
          url="url('/pfpmaker/traits/top/"+busttype+"/type_"+shirt+".png')";
          checkExtraBtn(i,"removeShirt");
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }else{
        str = eval(attrib + "Array");
        type = document.querySelector(".type."+attrib);
        //i = type.getAttribute("value");
        i = type.innerHTML;
        if(i==str.length-1){
            //type.setAttribute("value",0);
            type.innerHTML = 0;
            i=0;
            console.log(i);
        }else{
            i++;
            //type.setAttribute("value",i);
            type.innerHTML = i;
            console.log(i);
        }
        if(attrib=="jacket"){
          checkExtraBtn(i,"removeOuter");
        }
        url="url('/pfpmaker/traits/"+attrib+"/type_"+i+".png')";
        console.log(url);
        document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  
}
function setColor(a){
    a.classList.add("active");
    hairColor = a.getAttribute("value");
    colorname = a.getAttribute("name");
    console.log(".swatch:not(."+colorname+")");
    swatch = document.querySelectorAll(".swatch:not(."+colorname+")");
    console.log(swatch);
    swatch.forEach(x => {
      x.classList.remove("active");
    });

    url="url('/pfpmaker/traits/hair/"+colorname+"/type_"+getHairType()+".png')";
    console.log(url);
    document.querySelector(".bounding-box.hair").style.backgroundImage=url;
    
}
function getHairType(){
  return document.querySelector(".type.hair").innerHTML;
}
function removeShirt(){
  document.querySelector(".type.top").innerHTML=0;
  url="url('/pfpmaker/traits/top/"+busttype+"/type_0.png')";
  document.querySelector(".bounding-box.top").style.backgroundImage=url;
  checkExtraBtn(0,"removeShirt");
}
function removeOuter(){
  document.querySelector(".type.jacket").innerHTML=0;
  url="url('/pfpmaker/traits/jacket/type_0.png')";
  document.querySelector(".bounding-box.jacket").style.backgroundImage=url;
  checkExtraBtn(0,"removeOuter");
}
function checkExtraBtn(n,btn){
  if(n>0){
    document.querySelector(".extrabtn."+btn).style.display="flex";
  }else{
    document.querySelector(".extrabtn."+btn).style.display="none";
  }
}