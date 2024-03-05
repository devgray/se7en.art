//script for pfpmaker
var bgArray = ["beige","vampire grey"];
var skinArray = [0,1,2,3];
// var eyesArray = [0,1,2];
var eyesArray = ["sexy","focused","bill cipher","surprised","tired","angry","annoyed","excited","sus"];
var noseArray = ["button","pointy","wide"];
var mouthArray = ["happy","laugh","blank","wut","whuuuuut","cheeky mad"];
var hairArray = [0,1,2,3];
var hairColorArr = ["brown","blonde","darkbrown","orange","white"];
var skinColorArr = ["pale","light","tan","dark"];
var bustArray = ["type a","type b"];
var femShirtArr = ["none","plain white","valorant black","plain red"];
var neutShirtArr = ["none","plain white","valorant black","plain red"];
var jacketArray = ["none","sleeveless","sleeveless","sleeveless","sweater","sweater","sweater","sweater","hoodie","hoodie","hoodie","overalls","overalls","overalls"];
var haircolorname;
var skincolorname;
var busttype;
var headwear;
var headwearname;
var hasHeadwear;
var headwearArray=["none","cap","lumberjack","beanie"];
var headwearnameArr=[1,2,3,4,5,6,7,8,9];
var capArray = [0,1,2];

function download(){
    const audio = document.querySelector("audio");
    audio.volume = 0.1;
    audio.loop = true;
    audio.play();

    console.log("starting download...");
    pfp = document.querySelector("#pfp");
    document.querySelector(".bounding-box.outline").style.display ="none";
    pfp.style.width= "750px";
    pfp.style.height= "750px";
    document.getElementById("bg").style.borderRadius = "0em";
    html2canvas(pfp, {scale: 1,dpi:144, width: 750,height:750}).then(canvas => {
        console.log(canvas);
        var img = new Image(), 
            can=document.createElement('canvas');
            
        // can=canvas;

        // img.style.webkitTransformOrigin= "left bottom";
        // img.id = "printable";
        // img.style.webkitTransform = "translateY(-100%) rotate(90deg)";
        // img.src = can.toDataURL();
        /* downloadImage(can.toDataURL("image/png", 1.0)); */
        
        // document.location.href = can.toDataURL("image/png",1.0).replace("image/png", "image/octet-stream");
        var myWindow = window.open("", "_blank", "width=1200,height=800,top="+(screen.height-screen.height/1.2)+",left="+(screen.width-screen.width/1.35))
        var element = myWindow.document.createElement('div');
        // element.type='text/javascript';
        // element.innerHTML = 
        myWindow.document.open();
        // download page ad unit
        myWindow.document.write(
          '<div class=""><img src="/pfpmaker/josh.gif" style="width:100%;></div>'
          + '<div class="ads-side" style="position:fixed;right:0;width:380px;height:800px;background-color:rgba(0,0,0,.05);">'
          +  '<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6805605795676003" crossorigin="anonymous"></script>'
          +  '<ins class="adsbygoogle"'
          +  'style="display:block"'
          +  'data-ad-client="ca-pub-6805605795676003"'
          +  'data-ad-slot="1992610031"'
          +  'data-ad-format="auto"'
          +  'data-full-width-responsive="true"></ins>'
          +  '<script>'
          +  '(adsbygoogle = window.adsbygoogle || []).push({});'
          +  '</script>'
          +  '</div>'
        );
        myWindow.document.close();
        // myWindow.document.body.appendChild(element);
        myWindow.document.body.appendChild(can);
        // document.body.appendChild(canvas)
        // window.open("", "Title", "toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=780,height=200,top="+(screen.height-400)+",left="+(screen.width-840));
        // win.document.body.innerHTML = canvas;
    });

    // var link = document.createElement('a');
    // link.download = 'filename.png';
    // link.href = document.querySelector("#pfp").toDataURL()
    // link.click();
    
    console.log("downloaded");
    pfp.style.width= "500px";
    pfp.style.height= "500px";
    document.getElementById("bg").style.borderRadius = "2em";
    document.querySelector(".bounding-box.outline").style.display ="flex";
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
function preload(){
  console.log("images preloading ...");
  // preloading hair
  headwearArray.forEach(a => {
      loc = "/pfpmaker/traits/hair/"+a+"/";
        hairArray.forEach(x => {
          hairColorArr.forEach(y => {
            i = loc+x+"_"+y+".png";
            img = new Image();
            img.src = i;
            console.log(img);
      });
    });
  });
  // preloading headwear
  preloadHeadwear =["none","cap","cap","cap","lumberjack","lumberjack","lumberjack","beanie","beanie","beanie"];
  i=0;
  preloadHeadwear.forEach(a => {
    loc = "/pfpmaker/traits/hair/headwear/"+i+"_"+a+".png";
    img = new Image();
    img.src = loc;
    console.log(img);
    i++;
  });
  // preloading bg,eyes,jacket,mouth,nose
  toPreload = ["bg","eyes","jacket","mouth","nose"];
  toPreload.forEach(a => {
    loc = "/pfpmaker/traits/"+a+"/";
    str = eval(a+ "Array");
    i=0;
    str.forEach(x => {
      url=loc+i+"_"+x+".png";
      img = new Image();
      img.src = url;
      console.log(img);
      i++;
    });
  });
  // preloading skin color
  skinColorArr.forEach(a => {
    loc = "/pfpmaker/traits/skin/"+a+".png";
    img = new Image();
    img.src = loc;
    console.log(img);
  });
  // preloading shirts
  ii = 0;
  femShirtArr.forEach(a => {
    loc1 = "/pfpmaker/traits/top/type a/"+ii+"_"+a+".png";
    loc2 = "/pfpmaker/traits/top/type b/"+ii+"_"+a+".png";
    img1 = new Image();
    img1.src = loc1;
    console.log(img1);
    img2 = new Image();
    img2.src = loc2;
    console.log(img2);
    ii++;
  });
  
  console.log("all images loaded. loadRandom() starting...")
  loadRandom();
  document.querySelector(".pfp-box").style.display="flex";
  document.querySelector(".loader-box").style.display="none";
  
}
function loadRandom(){
  console.log("loadRandom() started.");
 // items[Math.floor(Math.random()*items.length)];
 arrs = ["bg","skin","eyes","bust","nose","mouth","hair","jacket"]
 arrs.forEach(x => {

      if(x=="hair"){
        str = eval(x + "Array");
        order = Math.floor(Math.random()*str.length);
        i = str[order];
        c = i;
        haircolorname = hairColorArr[Math.floor(Math.random()*hairColorArr.length)];
        document.querySelector(".swatch."+haircolorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch.haircolor:not(."+haircolorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });

        hasHeadwear = Math.random() < 0.8;
        console.log(hasHeadwear);
        if(hasHeadwear){
          checkExtraBtn(1,"removeHeadwear");
          headwearRand = Math.floor(Math.random()*headwearnameArr.length+1);
          // headwear = headwearnameArray[headwearRand];
          // capRand = Math.floor(Math.random()*3);
          c = headwearRand;
          checkHeadwear(c);
          console.log("c: "+headwearRand);
          url = "url('/pfpmaker/traits/"+x+"/"+headwear+"/"+i+"_"+haircolorname+".png')";
          capUrl = "url('/pfpmaker/traits/"+x+"/headwear/"+c+"_"+headwear+".png')";
          console.log("loaded cap: "+capUrl);
          document.querySelector(".bounding-box.headwear").style.backgroundImage=capUrl;
          document.querySelector(".type.headwear").setAttribute("value",c);
          document.querySelector(".type.headwear").innerHTML = c+" - "+headwear;
        }else{
          url = "url('/pfpmaker/traits/"+x+"/none/"+i+"_"+haircolorname+".png')";
          capUrl = "url('/pfpmaker/traits/"+x+"/headwear/0_none.png')";
          checkHeadwear(0);
          checkExtraBtn(0,"removeHeadwear");
          document.querySelector(".bounding-box.headwear").style.backgroundImage=capUrl;
          document.querySelector(".type.headwear").setAttribute("value",0);
          document.querySelector(".type.headwear").innerHTML = "0 - none";
        }
        // url = "url('/pfpmaker/traits/"+x+"/"+haircolorname+"/type_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).setAttribute("value",order);
        document.querySelector(".type."+x).innerHTML = "type "+i;
        console.log(x+" loaded: "+url);
      }else if(x=="skin"){
        str = ["pale","light","tan","dark","pale","light","tan","pale","light","tan"];
        i = str[Math.floor(Math.random()*str.length)];
        c = i;
        skincolorname = str[Math.floor(Math.random()*str.length)];
        document.querySelector(".swatch."+skincolorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch.skincolor:not(."+skincolorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        url = "url('/pfpmaker/traits/"+x+"/"+skincolorname+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".bounding-box."+x).setAttribute("value", i);
        document.querySelector(".type."+x).innerHTML = i;
      }else if(x=="eyes" || x=="nose")
      {
        str = eval(x + "Array");
        order = Math.floor(Math.random()*str.length);
        i = str[order];
        c = i;
        url = "url('/pfpmaker/traits/"+x+"/"+order+"_"+i+".png')";
        console.log(x+" loaded: "+url);
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        // document.querySelector(".bounding-box."+x).setAttribute("value", i);
        
        document.querySelector(".type."+x).innerHTML = order+" - "+i;
        document.querySelector(".type."+x).setAttribute("value",order);
        console.log("loaded "+url);
      }
      
      
      else if(x=="bust"){
        bustc=Math.floor(Math.random()*bustArray.length);
        busttype=bustArray[bustc];
        document.querySelector(".type.bust").setAttribute("value",bustc);
        document.querySelector(".type.bust").innerHTML = busttype;
        shirt = document.querySelector(".type.top");
        
        shirtArray= [];
          if(busttype==0){
              shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          i = Math.floor(Math.random()*shirtArray.length)
          if(i==0){
              c = shirtArray.length-1;
              // type.setAttribute("value",c);
              shirt.setAttribute("value",c);
              i=shirtArray.length-1;
              shirt.innerHTML=i+" - "+shirtArray[i];
              console.log("shirt "+i);
              
          }else{
              i--;
              shirt.setAttribute("value",i);
              shirt.innerHTML=i+" - "+shirtArray[i];
              console.log(i);
              
          }
          if(i>0){
            document.querySelector(".extrabtn.removeShirt").style.display="flex";
          }else{
            document.querySelector(".extrabtn.removeShirt").style.display="none";
          }
          url = "url('/pfpmaker/traits/top/"+busttype+"/"+i+"_"+shirtArray[i]+".png')";
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
          console.log(url);
          console.log("loaded bust: "+busttype);
          console.log("loaded shirt: "+shirtArray[i]);
      }else{
        str = eval(x + "Array");
        order = Math.floor(Math.random()*str.length);
        i = str[order];
        c = i;
        if(x=="jacket" && i!="none"){
            document.querySelector(".extrabtn.removeOuter").style.display="flex";
          }else{
            document.querySelector(".extrabtn.removeOuter").style.display="none";
          }
        url = "url('/pfpmaker/traits/"+x+"/"+order+"_"+i+".png')";
        console.log(x+" loaded: "+url);
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).innerHTML = order+" - "+i;
        document.querySelector(".type."+x).setAttribute("value",order);
        console.log("loaded "+url);
      }
      
 });
//  skin = skinArray[Math.floor(Math.random()*skinArray.length)];
}
function prev(a){

  
  attrib = a.getAttribute("name");
  if(attrib=="hair"){
          type = document.querySelector(".type.hair");
          i = type.getAttribute("value");
          if(i==0){
            i=hairArray.length-1;
            type.setAttribute("value",i);
            type.innerHTML = "type "+i;
            console.log(i);
        }else{
            i--;
            type.setAttribute("value",i);
            type.innerHTML = "type "+i;
            console.log(i);
        }
        if(hasHeadwear){
          url="url('/pfpmaker/traits/"+attrib+"/"+headwear+"/"+i+"_"+haircolorname+".png')";
        }else{
          url="url('/pfpmaker/traits/"+attrib+"/none/"+i+"_"+haircolorname+".png')";
        }
          
          console.log(url);
          document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }else if(attrib=="headwear"){
          type = document.querySelector(".type.headwear");
          i = type.getAttribute("value");

          if(i==0){
            i=headwearnameArr.length;
            checkHeadwear(i);
            checkExtraBtn(i,"removeHeadwear");
            type.setAttribute("value",i);
            type.innerHTML = i+" - "+headwear;
            console.log(i);
          }else{
            i--;
            checkHeadwear(i);
            checkExtraBtn(i,"removeHeadwear");
            type.setAttribute("value",i);
            type.innerHTML = i+" - "+headwear;
            console.log(i);
          }
            hair= document.querySelector(".type.hair").getAttribute("value");
            capUrl="url('/pfpmaker/traits/hair/"+attrib+"/"+i+"_"+headwear+".png')";
            url="url('/pfpmaker/traits/hair/"+headwear+"/"+hair+"_"+haircolorname+".png')";
            console.log(capUrl);
            document.querySelector(".bounding-box."+attrib).style.backgroundImage=capUrl;
            document.querySelector(".bounding-box.hair").style.backgroundImage=url;
  }
  else if(attrib=="eyes")
  {
          type = document.querySelector(".type.eyes");
          i = type.getAttribute("value");
          // i = type.innerHTML;
          if(i==0){
              i=eyesArray.length-1;
              type.setAttribute("value",i);
              type.innerHTML = i+" - "+eyesArray[i];
              console.log(i);
          }else{
              i--;
              type.setAttribute("value",i);
              type.innerHTML = i+" - "+eyesArray[i];
              console.log(i);
          }
          url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+eyesArray[i]+".png')";
          console.log("loaded eyes "+url);
          document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }else if(attrib=="bust"){
          type = document.querySelector(".type.bust");
          i = type.getAttribute("value");
          if(i==0){
            i=bustArray.length-1;
            type.setAttribute("value",i);
            type.innerHTML = bustArray[i];
            console.log(i);
          }else{
            i--;
            type.setAttribute("value",i);
            type.innerHTML = bustArray[i];
            console.log(i);
          }
          if(busttype==0){
            shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          busttype = bustArray[i];
          shirt = document.querySelector(".type.top").getAttribute("value");
          c=document.querySelector(".type.top").getAttribute("value");
          url="url('/pfpmaker/traits/top/"+busttype+"/"+c+"_"+shirtArray[c]+".png')";
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }
    else if(attrib=="top"){
          type = document.querySelector(".type.top");
          i = type.getAttribute("value");
          shirtArray= [];
          if(busttype==0){
              shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          if(i==0){
            i=shirtArray.length-1;
            type.setAttribute("value",i);
            type.innerHTML = i+" - "+shirtArray[i];
            console.log(i);
          }else{
            i--;
            type.setAttribute("value",i);
            type.innerHTML = i+" - "+shirtArray[i];
            console.log(i);
          }
          shirt = document.querySelector(".type.top").innerHTML;
          url="url('/pfpmaker/traits/"+attrib+"/"+busttype+"/"+i+"_"+shirtArray[i]+".png')";
          checkExtraBtn(i,"removeShirt");
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }
    else{
          str = eval(attrib + "Array");
          type = document.querySelector(".type."+attrib);
          i = type.getAttribute("value");
          // i = type.innerHTML;
          if(i==0){
              i=str.length-1;
              type.setAttribute("value",i);
              type.innerHTML = i+" - "+str[i];
              console.log(i);
          }else{
              i--;
              type.setAttribute("value",i);
              type.innerHTML = i+" - "+str[i];
              console.log(i);
          }
          if(attrib=="jacket"){
            checkExtraBtn(i,"removeOuter");
          }
          url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+str[i]+".png')";
          console.log(url);
          document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  
}
function next(a){
  attrib = a.getAttribute("name");
  if(attrib=="hair"){
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    if(i==str.length-1){
      i=0;
      type.setAttribute("value",i);
      type.innerHTML = "type "+str[i];
      console.log(i);
    }else{
      i++;
      type.setAttribute("value",i);
      type.innerHTML = "type "+str[i];
      console.log(i);
    }
    if(hasHeadwear){
      url="url('/pfpmaker/traits/"+attrib+"/"+headwear+"/"+i+"_"+haircolorname+".png')";
    }else{
      url="url('/pfpmaker/traits/"+attrib+"/none/"+i+"_"+haircolorname+".png')";
    }
      console.log(url);
      document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }else if(attrib=="headwear"){
    type = document.querySelector(".type.headwear");
    i = type.getAttribute("value");

    if(i==headwearnameArr.length){
      i=0;
      checkHeadwear(i);
      checkExtraBtn(i,"removeHeadwear");
      type.setAttribute("value",i);
      type.innerHTML = i+" - "+headwear;
      console.log(i);
    }else{
      i++;
      checkHeadwear(i);
      checkExtraBtn(i,"removeHeadwear");
      type.setAttribute("value",i);
      type.innerHTML = i+" - "+headwear;
      console.log(i);
    }
      hair= document.querySelector(".type.hair").getAttribute("value");
      capUrl="url('/pfpmaker/traits/hair/"+attrib+"/"+i+"_"+headwear+".png')";
      url="url('/pfpmaker/traits/hair/"+headwear+"/"+hair+"_"+haircolorname+".png')";
      console.log(capUrl);
      document.querySelector(".bounding-box."+attrib).style.backgroundImage=capUrl;
      document.querySelector(".bounding-box.hair").style.backgroundImage=url;
  }
  else if(attrib=="eyes")
  {
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    // i = type.innerHTML;
    if(i==str.length-1){
        i=0;
        type.setAttribute("value",0);
        type.innerHTML = i+" - "+str[i];
        console.log(i);
    }else{
        i++;
        type.setAttribute("value",i);
        type.innerHTML = i+" - "+str[i];
        console.log(i);
    }
    url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+str[i]+".png')";
    console.log("loaded eyes "+url);
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  else if(attrib=="bust"){
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    if(i==str.length-1){
      i=0;
      type.setAttribute("value",i);
      type.innerHTML = str[i];
      console.log(i);
    }else{
      i++;
      type.setAttribute("value",i);
      type.innerHTML = str[i];
      console.log(i);
    }
    if(busttype==0){
      shirtArray=neutShirtArr;
    }else{
        shirtArray=femShirtArr;
    }
    busttype = bustArray[i];
    shirt = document.querySelector(".type.top").getAttribute("value");
    c=document.querySelector(".type.top").getAttribute("value");
    url="url('/pfpmaker/traits/top/"+busttype+"/"+c+"_"+shirtArray[c]+".png')";
    console.log(url);
    document.querySelector(".bounding-box.top").style.backgroundImage=url;
  }
  else if(attrib=="top"){
    type = document.querySelector(".type.top");
    i = type.getAttribute("value");
    shirtArray= [];
    if(busttype==0){
        shirtArray=neutShirtArr;
    }else{
        shirtArray=femShirtArr;
    }
    if(i==shirtArray.length-1){
      i=0;
      type.setAttribute("value",i);
      type.innerHTML = i+" - "+shirtArray[i];
      console.log(i);
    }else{
      i++;
      type.setAttribute("value",i);
      type.innerHTML = i+" - "+shirtArray[i];
      console.log(i);
    }
    shirt = document.querySelector(".type.top").innerHTML;
    url="url('/pfpmaker/traits/"+attrib+"/"+busttype+"/"+i+"_"+shirtArray[i]+".png')";
    checkExtraBtn(i,"removeShirt");
    console.log(url);
    document.querySelector(".bounding-box.top").style.backgroundImage=url;
  }else{
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    // i = type.innerHTML;
    if(i==str.length-1){
        i=0;
        type.setAttribute("value",i);
        type.innerHTML = i+" - "+str[i];
        console.log(i);
    }else{
        i++;
        type.setAttribute("value",i);
        type.innerHTML = i+" - "+str[i];
        console.log(i);
    }
    if(attrib=="jacket"){
      checkExtraBtn(i,"removeOuter");
    }
    url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+str[i]+".png')";
    console.log(url);
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  
}
function setHairColor(a){
        a.classList.add("active");
        hairColor = a.getAttribute("value");
        haircolorname = a.getAttribute("name");
        console.log(".swatch.haircolor:not(."+haircolorname+")");
        swatch = document.querySelectorAll(".swatch.haircolor:not(."+haircolorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        if(hasHeadwear){
          url="url('/pfpmaker/traits/hair/"+headwear+"/"+getHairType()+"_"+haircolorname+".png')";
        }else{
          url="url('/pfpmaker/traits/hair/none/"+getHairType()+"_"+haircolorname+".png')";
        }
        
        console.log("hair loaded:" + url);
        document.querySelector(".bounding-box.hair").style.backgroundImage=url;  
}
function setSkinColor(a){
        a.classList.add("active");
        skinColor = a.getAttribute("value");
        skincolorname = a.getAttribute("name");
        console.log(".swatch.skincolor:not(."+skincolorname+")");
        swatch = document.querySelectorAll(".swatch.skincolor:not(."+skincolorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });

        url="url('/pfpmaker/traits/skin/"+skincolorname+".png')";
        console.log(url);
        document.querySelector(".bounding-box.skin").style.backgroundImage=url;
}
function getHairType(){
  return document.querySelector(".type.hair").getAttribute("value");
}
function getSkinType(){
  return document.querySelector(".type.skin").getAttribute("value");
}
function checkHeadwear(i){
  hasHeadwear=true;
  if(i==0){
    hasHeadwear=false;
    headwear="none";
  }else if(i<=3){
    headwear="cap";
  }else if(i<=6){
    headwear="lumberjack";
  }else if(i<=9){
    headwear="beanie";
  }
}
function removeShirt(){
  document.querySelector(".type.top").innerHTML="0 - none";
  document.querySelector(".type.top").setAttribute("value",0);
  url="url('/pfpmaker/traits/top/"+busttype+"/type_0.png')";
  document.querySelector(".bounding-box.top").style.backgroundImage=url;
  checkExtraBtn(0,"removeShirt");
}
function removeOuter(){
  document.querySelector(".type.jacket").innerHTML="0 - none";
  document.querySelector(".type.jacket").setAttribute("value",0);
  url="url('/pfpmaker/traits/jacket/type_0.png')";
  document.querySelector(".bounding-box.jacket").style.backgroundImage=url;
  checkExtraBtn(0,"removeOuter");
}
function removeHeadwear(){
  document.querySelector(".type.headwear").innerHTML="0 - none";
  document.querySelector(".type.headwear").setAttribute("value",0);
  url="url('/pfpmaker/traits/hair/headwear/0_none.png')";
  document.querySelector(".bounding-box.headwear").style.backgroundImage=url;
  hairUrl="url('/pfpmaker/traits/hair/none/"+getHairType()+"_"+haircolorname+".png')";
  document.querySelector(".bounding-box.hair").style.backgroundImage=hairUrl;
  hasHeadwear=false;
  checkExtraBtn(0,"removeHeadwear");
}
function checkExtraBtn(n,btn){
  if(n>0){
    document.querySelector(".extrabtn."+btn).style.display="flex";
  }else{
    document.querySelector(".extrabtn."+btn).style.display="none";
  }
}