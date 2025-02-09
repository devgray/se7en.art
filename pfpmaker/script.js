//script for pfpmaker
var bgArray = ["type-a","type-b","type-c","type-d","type-e","type-f","type-g"];
var baseArray = ["pale","light","tan","dark","undead"];
// var eyesArray = [0,1,2];
var eyesArray = ["pity","surprised","excited","annoyed","sus","sexy","angry","tired","indifferent","meditate","fired up","slitted"];
var noseArray = ["button"];
var mouthArray = ["laugh","wut","blank","katana","smiling","whuuut","cringe","cigarette","grin","throwing knife"];
var accessoryArray = ["none","round","aviator","monocle","retro"];
// var hairArray = [0,1,2,3,4];
// var hairColorArr = ["black","brown","blonde","darkbrown","orange","white"];
var hairColorArr = ["black"];
var baseColorArr = ["pale","light","tan","dark","undead"];
var bgColorArr = ["type-a","type-b","type-c","type-d","type-e","type-f","type-g"];
var bodyArray = ["type a","type b"];
var shirtArray = ["shirt a","shirt b","shirt c","shirt d","shirt e","turtleneck","sleeveless","tank top a","tank top b","bandage"];
var femShirtArr = ["shirt a","shirt b","shirt c","shirt d","shirt e","turtleneck","sleeveless","tank top a","tank top b","bandage"];
var neutShirtArr = ["plain white","valorant black","plain red"];
var outerwearArray = ["none","plaid","button shirt a","sweater","scarf","tracksuit","gilet","overalls","hoodie","pullover hoodie","trench coat","yukata","shearling coat"];
var haircolorname;
var basecolorname;
var bgcolorname;
var bodytype;
var headwear;
var headwearname;
var hasHeadwear;
var hasAccessory;
var hasOuterwear;
var hasItem;
var headwearArray=["none","cap a","cap b","cap c","headband","bamboo hat","bucket hat","beanie a","beanie b","fluffy ears","lumberjack","kitsune mask","forehead protector"];
var headwearnameArr=[0,1,2,3,4,5,6,7,8,9,10,11,12];
var capArray = [0,1,2];
var hairType = ["Fluffy","Short","Short Dreads","Ronin","Curly","Pixie","Mohawk","Side Braid","Bob","Long"];
var hairArray = ["Fluffy","Short","Short Dreads","Ronin","Curly","Pixie","Mohawk","Side Braid","Bob","Long"];
var shirtType = ["shirt","turtleneck","sleeveless","tank top","bandage"];
var itemArray = ["none","earth","fire","water","air"];
var imgfilename;
var obj;

/* Final trait values */
var traitBase, traitEyes, traitMouth, traitHair, traitHeadwear, traitType, traitShirt, traitOuterwear, traitAccess, traitItem, traitBg;

function download(){
    
    console.log("starting download...");
    pfp = document.querySelector("#pfp");
    // document.querySelector(".bounding-box.outline").style.display ="none";
    pfp.style.width= "1000px";
    pfp.style.height= "1000px";
    // pfp.style.filter="blur(.05rem)";
    document.getElementById("bg").style.borderRadius = "0em";
    // document.getElementById("outline").style.mixBlendMode="screen";
    html2canvas(pfp, {scale: 1,dpi:144, width: 1000,height:1000}).then(canvas => {
        console.log(canvas);
        var img = new Image(), 
            can=document.createElement('canvas');
            // canvas.style.filter="blur(.05rem)";
            
        can=canvas;

        img.style.webkitTransformOrigin= "left bottom";
        img.id = "printable";
        img.style.webkitTransform = "translateY(-100%) rotate(90deg)";
        img.src = can.toDataURL();
        downloadImage(can.toDataURL("image/png", 1.0));

        
        
        // document.location.href = can.toDataURL("image/png",1.0).replace("image/png", "image/octet-stream");
        /*var myWindow = window.open("", "_blank", "width=1200,height=800,top="+(screen.height-screen.height/1.2)+",left="+(screen.width-screen.width/1.35))
        var element = myWindow.document.createElement('div');
        
        // element.type='text/javascript';
        // element.innerHTML = 
        myWindow.document.open();
        myWindow.document.write(
          '<div class="ads-side" style="position:fixed;right:0;width:380px;height:800px;background-color:rgba(0,0,0,.05);">'
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

          + '<pre class="metadata" style="position:fixed;right:0;width:380px;height:800px;">'
          
          
          
          + '</pre>'
        );
        myWindow.document.close();*/
        // myWindow.document.body.appendChild(element);
        /*myWindow.document.body.appendChild(can);*/
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
    // document.querySelector(".bounding-box.outline").style.display ="flex";
}
function downloadJson(){
  // Cookies.set("metadata",obj);
  
  var json = JSON.stringify(obj);
  
        json = [json];
        // var blob1 = new Blob(json, { type: "text/plain;charset=utf-8" });
        
        downloadMetadata(json);
}
function downloadImage(data) {
    var a = document.createElement('a');
    a.href = data;
    a.download = imgfilename+".png";
    document.body.appendChild(a);
    a.click();
    // a.removeChild();
}
function downloadMetadata(data){
    var a = document.createElement('a');
    // a.href = data;
    a.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(data));
    a.download = imgfilename+".json";
    document.body.append(a);
    
    a.click();
    // a.removeChild();
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
            i = loc+hairArray.indexOf(x)+"_"+y+".png";
            img = new Image();
            img.src = i;
            console.log(i);
      });
    });
  });
  // preloading headwear
  preloadHeadwear = headwearArray;
  i=0;
  preloadHeadwear.forEach(a => {
    if(i==0){

    }else{
      loc = "/pfpmaker/traits/hair/headwear/"+i+"_"+a+".png";
    }
    
    img = new Image();
    img.src = loc;
    i++;
    console.log(loc);
  });
  // preloading eyes,mouth,nose
  toPreload = ["eyes","mouth","nose"];
  toPreload.forEach(a => {
    loc = "/pfpmaker/traits/"+a+"/";
    str = eval(a+ "Array");
    i=0;
    str.forEach(x => {
      url=loc+i+"_"+x+".png";
      img = new Image();
      img.src = url;
      i++;
    });
  });
  // preloading bg color
  bgColorArr.forEach(a => {
    loc = "/pfpmaker/traits/bg/"+a+".png";
    img = new Image();
    img.src = loc;
  });
  // preloading base color
  baseColorArr.forEach(a => {
    loc = "/pfpmaker/traits/base/"+a+".png";
    img = new Image();
    img.src = loc;
  });
  // preloading shirts, outerwear
  ii = 0;
  femShirtArr.forEach(a => {
    loc1 = "/pfpmaker/traits/top/type a/"+ii+"_"+a+".png";
    loc2 = "/pfpmaker/traits/top/type b/"+ii+"_"+a+".png";
    img1 = new Image();
    img1.src = loc1;
    img2 = new Image();
    img2.src = loc2;
    ii++;
  });

  xx = 0;
  outerwearArray.forEach(a => {
    loc1 = "/pfpmaker/traits/outerwear/type a/"+xx+"_"+a+".png";
    loc2 = "/pfpmaker/traits/outerwear/type b/"+xx+"_"+a+".png";
    img1 = new Image();
    img1.src = loc1;
    img2 = new Image();
    img2.src = loc2;
    xx++;
  });
  
  console.log("all images loaded. loadRandom() starting...");
  loadRandom();
  document.querySelector(".pfp-box").style.display="flex";
  document.querySelector(".loader-box").style.display="none";
  
}
function loadRandom(){
  
  function random(min,max){
          return Math.floor(Math.random() * (max - min + 1) + min);
        }
  // checkStats("0319-H0-B1-S1-O2-A2-H4");
  console.log("loadRandom() started.");
 // items[Math.floor(Math.random()*items.length)];
 arrs = ["bg","base","eyes","body","nose","mouth","hair","outerwear","accessory","item"];
 arrs.forEach(x => {

      if(x=="hair"){
        if(traitType=="type a"){
          order = random(0,6);
        }else if(traitType=="type b"){
          order = random(5,9);
        }
        str = eval(x + "Array");
        i = getID("hair",str[order]);
        c = i;
        haircolorname = hairColorArr[Math.floor(Math.random()*hairColorArr.length)];
        haircolorname = "black";
        document.querySelector(".swatch."+haircolorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch.haircolor:not(."+haircolorname+")");
        // console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        if(order==2){
          hasHeadwear = 0;
        }else{
          hasHeadwear = Math.random() < 0.8;
        }
        
        // console.log(hasHeadwear);
        if(hasHeadwear){
          checkExtraBtn(1,"removeHeadwear");
          headwearRand = random(2,headwearnameArr.length)-1;
          console.log(headwearRand);
          // headwearRand = Math.floor(Math.random()*headwearnameArr.length+1)-1;
          c = headwearRand;
          traitHeadwear = getName("headwear", c);
          headwear = traitHeadwear;
          capUrl="url('/pfpmaker/traits/hair/headwear/"+c+"_"+headwear+".png')";
          url="url('/pfpmaker/traits/hair/"+headwear+"/"+i+"_"+haircolorname+".png')";

          document.querySelector(".bounding-box.headwear").style.backgroundImage=capUrl;
          document.querySelector(".type.headwear").setAttribute("value",c);
          document.querySelector(".type.headwear").innerHTML = headwear;
        }else{
          url = "url('/pfpmaker/traits/"+x+"/none/"+i+"_"+haircolorname+".png')";
          capUrl = "url('/pfpmaker/traits/"+x+"/headwear/none.png')";
          checkHeadwear(0);
          checkExtraBtn(0,"removeHeadwear");
          document.querySelector(".bounding-box.headwear").style.backgroundImage=capUrl;
          document.querySelector(".type.headwear").setAttribute("value",0);
          document.querySelector(".type.headwear").innerHTML = "none";
        }
        // url = "url('/pfpmaker/traits/"+x+"/"+haircolorname+"/type_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).setAttribute("value",order);
        traitHair = getName("hair",i);
        document.querySelector(".type."+x).innerHTML = traitHair;
        // console.log(x+" loaded: "+url);
      }else if(x=="base"){
        str = ["pale","light","tan","dark","undead"];
        i = str[Math.floor(Math.random()*str.length)];
        c = i;
        basecolorname = str[Math.floor(Math.random()*str.length)];
        traitBase = basecolorname;
        document.querySelector(".swatch."+basecolorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch.basecolor:not(."+basecolorname+")");
        // console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        url = "url('/pfpmaker/traits/"+x+"/"+basecolorname+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".bounding-box."+x).setAttribute("value", i);
        // document.querySelector(".type."+x).innerHTML = i;
      }else if(x=="bg"){
        str = ["type-a","type-b","type-c","type-d","type-e","type-f","type-g"];
        i = str[Math.floor(Math.random()*str.length)];
        c = i;
        bgcolorname = str[Math.floor(Math.random()*str.length)];
        traitBg = bgcolorname;
        document.querySelector(".swatch."+bgcolorname).classList.add("active");
        swatch = document.querySelectorAll(".swatch.bgcolor:not(."+bgcolorname+")");
        // console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        url = "url('/pfpmaker/traits/"+x+"/"+bgcolorname+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".bounding-box."+x).setAttribute("value", i);
        // document.querySelector(".type."+x).innerHTML = i;
      }else if(x=="eyes" || x=="nose")
      {
        str = eval(x + "Array");
        order = Math.floor(Math.random()*str.length);
        i = str[order];
        c = i;
        url = "url('/pfpmaker/traits/"+x+"/"+order+"_"+i+".png')";
        if(x=="eyes"){
          traitEyes = i;
        }
        // console.log(x+" loaded: "+url);
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        // document.querySelector(".bounding-box."+x).setAttribute("value", i);
        
        document.querySelector(".type."+x).innerHTML = i;
        document.querySelector(".type."+x).setAttribute("value",order);
        // console.log("loaded "+url);
      }
      
      
      else if(x=="body"){
        bodyc=Math.floor(Math.random()*bodyArray.length);
        bodytype=bodyArray[bodyc];
        traitType = bodytype;
        document.querySelector(".type.body").setAttribute("value",bodyc);
        document.querySelector(".type.body").innerHTML = bodytype;
        shirt = document.querySelector(".type.top");
        
        shirtArray= [];
          if(bodytype==0){
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
              shirt.innerHTML= shirtArray[i];
              // console.log("shirt "+i);
              
          }else{
              i--;
              shirt.setAttribute("value",i);
              shirt.innerHTML= shirtArray[i];
              // console.log(i);
              
          }
          traitShirt = shirtArray[i];
          if(i>0){
            document.querySelector(".extrabtn.removeShirt").style.display="flex";
          }else{
            document.querySelector(".extrabtn.removeShirt").style.display="none";
          }
          url = "url('/pfpmaker/traits/top/"+bodytype+"/"+i+"_"+shirtArray[i]+".png')";
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
          // console.log(url);
          // console.log("loaded body: "+bodytype);
          // console.log("loaded shirt: "+shirtArray[i]);
      }else if(x=="outerwear"){
        order = Math.floor(Math.random()*outerwearArray.length);
        i = outerwearArray[order];
        if (i!="none"){
            document.querySelector(".extrabtn.removeOuter").style.display="flex";
            hasOuterwear = true;
            traitOuterwear = i;
        }else{
            document.querySelector(".extrabtn.removeOuter").style.display="none";
            hasOuterwear = false;
        }
        url = "url('/pfpmaker/traits/"+x+"/"+bodytype+"/"+order+"_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).innerHTML = i;
        document.querySelector(".type."+x).setAttribute("value",order);
      }else if(x=="accessory"){
        order = Math.floor(Math.random()*accessoryArray.length);
        i = accessoryArray[order];
        if (i!="none"){
          // document.querySelector(".extrabtn.removeOuter").style.display="flex";
          hasAccessory = true;
          traitAccess = i;
        }else{
            // document.querySelector(".extrabtn.removeOuter").style.display="none";
          hasAccessory = false;
        }
        
        url = "url('/pfpmaker/traits/"+x+"/"+order+"_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).innerHTML = i;
        document.querySelector(".type."+x).setAttribute("value",order);
      }else if(x=="item"){
        order = Math.floor(Math.random()*itemArray.length);
        i = itemArray[order];
        if (i!="none"){
          if(countItem[1][1] < maxItem && countItem[2][1] < maxItem && countItem[3][1] < maxItem && countItem[4][1] < maxItem){
          // document.querySelector(".extrabtn.removeOuter").style.display="flex";
          hasItem = true;
          traitItem = i;
          }
        }else{
          // document.querySelector(".extrabtn.removeOuter").style.display="none";
          i="none";
          hasItem = false;
        }
        url = "url('/pfpmaker/traits/"+x+"/"+traitBase+"/"+order+"_"+i+".png')";
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).innerHTML = i;
        document.querySelector(".type."+x).setAttribute("value",order);
      }else{
        str = eval(x + "Array");
        order = Math.floor(Math.random()*str.length);
        i = str[order];
        if(x=="mouth"){
          traitMouth = i;
        }
        c = i;
        url = "url('/pfpmaker/traits/"+x+"/"+order+"_"+i+".png')";
        // console.log(x+" loaded: "+url);
        document.querySelector(".bounding-box."+x).style.backgroundImage=url;
        document.querySelector(".type."+x).innerHTML = i;
        document.querySelector(".type."+x).setAttribute("value",order);
        // console.log("loaded "+url);
      }
      
 });
//  base = baseArray[Math.floor(Math.random()*baseArray.length)];
updateMetadata();
// initializeArray();
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
  }else if(attrib=="body"){
          type = document.querySelector(".type.body");
          i = type.getAttribute("value");
          if(i==0){
            i=bodyArray.length-1;
            type.setAttribute("value",i);
            type.innerHTML = bodyArray[i];
            console.log(i);
          }else{
            i--;
            type.setAttribute("value",i);
            type.innerHTML = bodyArray[i];
            console.log(i);
          }
          if(bodytype==0){
            shirtArray=neutShirtArr;
          }else{
              shirtArray=femShirtArr;
          }
          bodytype = bodyArray[i];
          shirt = document.querySelector(".type.top").getAttribute("value");
          c=document.querySelector(".type.top").getAttribute("value");
          url="url('/pfpmaker/traits/top/"+bodytype+"/"+c+"_"+shirtArray[c]+".png')";
          console.log(url);
          document.querySelector(".bounding-box.top").style.backgroundImage=url;
    }
    else if(attrib=="top"){
          type = document.querySelector(".type.top");
          i = type.getAttribute("value");
          shirtArray= [];
          if(bodytype==0){
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
          url="url('/pfpmaker/traits/"+attrib+"/"+bodytype+"/"+i+"_"+shirtArray[i]+".png')";
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
          if(attrib=="outerwear"){
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
      type.innerHTML = str[i];
    }else if(i==1){
      i++;
      hasHeadwear = false;
      checkExtraBtn(0,"removeHeadwear");
      t = document.querySelector(".type.headwear");
      t.setAttribute("value",0);
      t.innerHTML = "none";
      type.setAttribute("value",i);
      type.innerHTML = str[i];
    }else{
      i++;
      type.setAttribute("value",i);
      type.innerHTML = str[i];
    }
    if(hasHeadwear){
      url="url('/pfpmaker/traits/"+attrib+"/"+headwear+"/"+i+"_"+haircolorname+".png')";
    }else{
      capUrl="url('/pfpmaker/traits/hair/none/"+i+"_"+haircolorname+".png')";
      url="url('/pfpmaker/traits/"+attrib+"/none/"+i+"_"+haircolorname+".png')";
    }
    traitHair = getName("hair",i);
    console.log(url);
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
    document.querySelector(".bounding-box.headwear").style.backgroundImage=capUrl;
  }else if(attrib=="headwear"){
    type = document.querySelector(".type.headwear");
    i = type.getAttribute("value");
    hair= document.querySelector(".type.hair").getAttribute("value");
    if(hair == 2){
      hasHeadwear = false;
      checkExtraBtn(i,"removeHeadwear");
      type.setAttribute("value",0);
      type.innerHTML = "none";
    }else{
      if(i==headwearnameArr.length-1){
      i=0;
      hasHeadwear=false;
      checkExtraBtn(i,"removeHeadwear");
      type.setAttribute("value",i);
      type.innerHTML = "none";
    }else{
      i++;
      headwear = getName("headwear",i);
      checkExtraBtn(i,"removeHeadwear");
      type.setAttribute("value",i);
      type.innerHTML = headwear;
      hasHeadwear=true;
    }
      if(hasHeadwear){
        capUrl="url('/pfpmaker/traits/hair/"+attrib+"/"+i+"_"+headwear+".png')";
        url="url('/pfpmaker/traits/hair/"+headwear+"/"+hair+"_"+haircolorname+".png')";
      }else{
        capUrl="url('/pfpmaker/traits/hair/"+attrib+"/none.png')";
        url="url('/pfpmaker/traits/hair/none/"+hair+"_"+haircolorname+".png')";
      }
      traitHeadwear = headwear;
      console.log(capUrl);
      document.querySelector(".bounding-box."+attrib).style.backgroundImage=capUrl;
      document.querySelector(".bounding-box.hair").style.backgroundImage=url;
    }
    
  }
  else if(attrib=="eyes"){
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    // i = type.innerHTML;
    if(i==str.length-1){
        i=0;
        type.setAttribute("value",0);
        type.innerHTML = str[i];
        console.log(i);
    }else{
        i++;
        type.setAttribute("value",i);
        type.innerHTML = str[i];
        console.log(i);
    }
    traitEyes = str[i];
    url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+str[i]+".png')";
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  else if(attrib=="body"){
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
    bodytype = bodyArray[i];
    traitType = bodytype;
    shirt = document.querySelector(".type.top").getAttribute("value");
    c=document.querySelector(".type.top").getAttribute("value");
    url="url('/pfpmaker/traits/top/"+bodytype+"/"+c+"_"+shirtArray[c]+".png')";
    x = getID("outerwear",traitOuterwear);
    url2="url('/pfpmaker/traits/outerwear/"+bodytype+"/"+x+"_"+traitOuterwear+".png')";
    console.log(url);
    document.querySelector(".bounding-box.top").style.backgroundImage=url;
    document.querySelector(".bounding-box.outerwear").style.backgroundImage=url2;
  }
  else if(attrib=="top"){
    type = document.querySelector(".type.top");
    i = type.getAttribute("value");
    if(i==shirtArray.length-1){
      i=0;
      type.setAttribute("value",i);
      type.innerHTML = shirtArray[i];
      console.log(i);
    }else{
      i++;
      type.setAttribute("value",i);
      type.innerHTML = shirtArray[i];
      console.log(i);
    }
    traitShirt = shirtArray[i];
    shirt = document.querySelector(".type.top").innerHTML;
    url="url('/pfpmaker/traits/"+attrib+"/"+bodytype+"/"+i+"_"+shirtArray[i]+".png')";
    // checkExtraBtn(i,"removeShirt");
    console.log(url);
    document.querySelector(".bounding-box.top").style.backgroundImage=url;
  }else if(attrib == "outerwear"){
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    checkExtraBtn(i,"removeOuter");
    if(i==outerwearArray.length-1){
        i=0;
        type.setAttribute("value",i);
        type.innerHTML = outerwearArray[i];
        hasOuterwear = false;
        console.log(i);
    }else{
        i++;
        type.setAttribute("value",i);
        type.innerHTML = outerwearArray[i];
        hasOuterwear = true;
        console.log(i);
    }
    traitOuterwear = outerwearArray[i];
    url="url('/pfpmaker/traits/outerwear/"+bodytype+"/"+i+"_"+outerwearArray[i]+".png')";
    console.log(url);
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  
  }else{
    str = eval(attrib + "Array");
    type = document.querySelector(".type."+attrib);
    i = type.getAttribute("value");
    // i = type.innerHTML;
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
    if(attrib=="accessory"){
      if(i!=0){
        hasAccessory = true;
      }else{
        hasAccessory = false;
      }
      traitAccess = str[i];
    }
    
    url="url('/pfpmaker/traits/"+attrib+"/"+i+"_"+str[i]+".png')";
    console.log(url);
    document.querySelector(".bounding-box."+attrib).style.backgroundImage=url;
  }
  updateMetadata();
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
function setBgColor(a){
  a.classList.add("active");
  bgColor = a.getAttribute("value");
  bgcolorname = a.getAttribute("name");
  console.log(".swatch.bgcolor:not(."+bgcolorname+")");
  swatch = document.querySelectorAll(".swatch.bgcolor:not(."+bgcolorname+")");
  console.log(swatch);
  swatch.forEach(x => {
    x.classList.remove("active");
  });

  url="url('/pfpmaker/traits/bg/"+bgcolorname+".png')";
  console.log(url);
  document.querySelector(".bounding-box.bg").style.backgroundImage=url;
}
function setbaseColor(a){
        a.classList.add("active");
        baseColor = a.getAttribute("value");
        basecolorname = a.getAttribute("name");
        console.log(".swatch.basecolor:not(."+basecolorname+")");
        swatch = document.querySelectorAll(".swatch.basecolor:not(."+basecolorname+")");
        console.log(swatch);
        swatch.forEach(x => {
          x.classList.remove("active");
        });
        traitBase = basecolorname;
        updateMetadata();
        url="url('/pfpmaker/traits/base/"+basecolorname+".png')";
        console.log(url);
        document.querySelector(".bounding-box.base").style.backgroundImage=url;
}
function getHairType(){
  return document.querySelector(".type.hair").getAttribute("value");
}
function getbaseType(){
  return document.querySelector(".type.base").getAttribute("value");
}
function checkHeadwear(i){
  hasHeadwear=true;
  // if(i==0){
  //   hasHeadwear=false;
  //   headwear="none";
  // }else if(i<=3){
  //   headwear="cap";
  // }else if(i<=5){
  //   headwear="headband";
  // }else if(i==6){
  //   headwear="bucket hat";
  // }else if(i<=8){
  //   headwear="beanie";
  // }else if(i==9){
  //   headwear="fluffy ears";
  // }else if(i==10){
  //   headwear="lumberjack";
  // }else if(i==11){
  //   headwear="kitsune mask";
  // }
}
function removeShirt(){
  document.querySelector(".type.top").innerHTML="none";
  document.querySelector(".type.top").setAttribute("value",0);
  url="url('/pfpmaker/traits/top/"+bodytype+"/type_0.png')";
  document.querySelector(".bounding-box.top").style.backgroundImage=url;
  checkExtraBtn(0,"removeShirt");
}
function removeOuter(){
  document.querySelector(".type.outerwear").innerHTML="none";
  document.querySelector(".type.outerwear").setAttribute("value",0);
  url="url('/pfpmaker/traits/outerwear/type_0.png')";
  document.querySelector(".bounding-box.outerwear").style.backgroundImage=url;
  checkExtraBtn(0,"removeOuter");
}
function removeHeadwear(){
  document.querySelector(".type.headwear").innerHTML="none";
  document.querySelector(".type.headwear").setAttribute("value",0);
  url="url('/pfpmaker/traits/hair/headwear/none.png')";
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
// function capitalize(string) {
//   return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
// }
function capitalize(str){
  const words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }

  return words.join(" ");
  
}
function generate(){
  x=0;
  setInterval(() => {
      do{
        loadRandom();
        // 
      }while(checkStats(filename) || checkFileExists(filename)){
        // loadRandom();
      }
      updateStats(filename);
      download();
      console.log("generated "+filename);
    }, 500);
  }
  
function checkFileExists(file) {
  file = "D:/Downloads/testgen/" + file+".png";
  console.log(file);
  $.get(file, function(data, textStatus) {
      if (textStatus == "success") {
          // execute a success code
          return true;
      }
  });
}
var maxBase = 450, maxBaseRare = 200, maxEyes = 200, maxMouth = 200, maxHair = 225, maxHairRare = 100;
var maxHeadwear=108, maxHeadwearRare=30, maxType=998, maxOuterwear=114, maxOuterwearRare=30, maxAccess = 120, maxItem = 50;
var maxShirt = 450, maxShirtRare=200;
var countBase = [[0,0],[1,0],[2,0],[3,0],[4,0]];
var countEyes = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]];

var countMouth = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]];
var countHair = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0]];
var countHeadwear = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0]];
var countType = [[0,0],[1,0]];
var countOuterwear = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0],[9,0],[10,0],[11,0]];
var countAccess = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0]];
var countItem = [[0,0],[1,0],[2,0],[3,0],[4,0]];
var countShirt = [[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]];

function initializeArray(){
  console.log(countBase);
}

function checkStats(filename){
  var traits = filename.split("-");
  var face = traits[0].split("");
  base = face[0];
  eyes = face[1];
  mouth = face[2];
  hair = face[3];

  head = traits[1];
  body = traits[2];
  shirt = traits[3];
  outer = traits[4];
  access = traits[5];
  hand = traits[6];

  xbase = countBase[base][1];
  xeyes = countEyes[eyes][1];
  xmouth = countMouth[mouth][1];
  xhair = countHair[hair][1];

  xhead = countHeadwear[head][1];
  xbody = countType[body][1];
  xshirt = countShirt[shirt][1];
  xouter = countOuterwear[outer][1];
  xaccess = countAccess[access][1];
  xhand = countItem[hand][1];

  function checkBase(){
    if(base == 4){
      if(xbase < maxBaseRare){
          return false;
        }else{
          return true;
        }
    }else{
      if(xbase < maxBase){
        return false;
      }else{
        return true;
      }
    }
    
  }
  function checkHair(){
    if(hair == 3 || hair == 9){
      if(xhair < maxHairRare){
          return false;
        }else{
          return true;
        }
    }else{
      if(xhair < maxHair){
        return false;
      }else{
        return true;
      }
    }
    
  }
  function checkHead(){
    if(head != 0){
      if(head == 11 || head == 12){
        if(xhead < maxHeadwearRare){
            return false;
          }else{
            return true;
          }
      }else{
        if(xhead < maxHeadwear && head){
          return false;
        }else{
          return true;
        }
      }
    }else{
      return false;
    }
  }
  function checkShirt(){
    if(shirt == 5){
      if(xshirt < maxShirtRare){
          return false;
        }else{
          return true;
        }
    }else{
      if(xshirt < maxShirt){
        return false;
      }else{
        return true;
      }
    }
  }
  function checkOuter(){
    if(outer != 0){
      if(outer == 11 || outer == 12){
        if(xouter < maxOuterwearRare){
            return false;
          }else{
            return true;
          }
      }else{
        if(xouter < maxOuterwear){
          return false;
        }else{
          return true;
        }
      }
    }else{
      return false;
    }
    
  }

  function checkFace(){
    if(xeyes < maxEyes){
      if(xmouth < maxMouth){
        return false;
      }else{
        return true;
      }
    }else{
      return true;
    }
  }
  
  function checkItem(){
    if(access != 0){
      if(xaccess < maxAccess){
        if(hand != 0){
          if(xhand < maxItem){
            return false;
          }else{
            return true;
          }
        }else{
          return false;
        }
      }else{
        return true;
      }
    }else{
      return false;
    }
    
  }
  
  if(xbody < maxType){
    if(checkBase() || checkHair() || checkHead() || checkShirt() || checkOuter() || checkFace() || checkItem()){
      return true;
    }else{
      return false;
    }
  }else{
    return true;
  }

}
function checkAvailable(trait,id){
  if(trait=="base"){
    if(countBase[id][0] < maxBase){
      return true;
    }
  }
}
function getCount(trait,id){
  if (trait=="base"){
    return countBase[id][1];
  }
}
function addCount(trait,id){
  if (trait=="base"){
    i = countBase[id][1];
    i++;
    countBase[id][1]=i;
  }
}
function updateStats(filename){
  console.log("updating stats...");
  var traits = filename.split("-");
  var face = traits[0].split("");
  base = face[0];
  eyes = face[1];
  mouth = face[2];
  hair = face[3];

  head = traits[1];
  body = traits[2];
  shirt = traits[3];
  outer = traits[4];
  access = traits[5];
  hand = traits[6];


  x=countBase[base][1];
  x++;
  countBase[base][1]=x;
  x=countEyes[eyes][1];
  x++;
  countEyes[eyes][1]=x;
  x=countMouth[mouth][1];
  x++;
  countMouth[mouth][1]=x;
  x=countHair[hair][1];
  x++;
  countHair[hair][1]=x;
  x=countHeadwear[head][1];
  x++;
  countHeadwear[head][1]=x;
  x=countType[body][1];
  x++;
  countType[body][1]=x;
  x=countShirt[shirt][1];
  x++;
  countShirt[shirt][1]=x;
  x=countOuterwear[outer][1];
  x++;
  countOuterwear[outer][1]=x;
  x=countAccess[access][1];
  x++;
  countAccess[access][1]=x;
  x=countItem[hand][1];
  x++;
  countItem[hand][1]=x;

  document.querySelector(".base"+base).innerHTML = countBase[base][1];
  document.querySelector(".eyes"+eyes).innerHTML = countEyes[eyes][1];
  document.querySelector(".mouth"+mouth).innerHTML = countMouth[mouth][1];
  document.querySelector(".hair"+hair).innerHTML = countHair[hair][1];
  document.querySelector(".head"+head).innerHTML = countHeadwear[head][1];
  document.querySelector(".body"+body).innerHTML = countType[body][1];
  document.querySelector(".shirt"+shirt).innerHTML = countShirt[shirt][1];
  document.querySelector(".outer"+outer).innerHTML = countOuterwear[outer][1];
  document.querySelector(".access"+access).innerHTML = countAccess[access][1];
  document.querySelector(".hand"+hand).innerHTML = countItem[hand][1];
  console.log("stats updated.");
}
function updateMetadata(){
  var attributes = [];
  var baseID,eyesID,mouthID,hairID,headwearID,outerwearID,typeID;
  // var attributes = [{"trait_type":"Base","value":""},
  // {"trait_type":"Eyes","value":""},
  // {"trait_type":"Mouth","value":""},
  // {"trait_type":"Hair","value":""}];
  attributes.push({"trait_type":"Base","value":capitalize(traitBase)});
  attributes.push({"trait_type":"Eyes","value":capitalize(traitEyes)});
  attributes.push({"trait_type":"Mouth","value":capitalize(traitMouth)});
  attributes.push({"trait_type":"Hair","value":capitalize(traitHair)});
  attributes.push({"trait_type":"Body","value":capitalize(traitType)});
  attributes.push({"trait_type":"Shirt","value":capitalize(traitShirt)});
  // var link = "https://thestrayfriends.com/pfpmaker/testgen/";
  var link = "";
  var externalurl = "https://thestrayfriends.com/";
  var description = "A generative art project made up of 1,996 Stray Friends lost in Metaverse."
  var NFTname = "Stray Friends";
  var metadata = '{"description":"'+description+'","external_url":"'+externalurl+'","image":"an image URL","name":"'+NFTname+'"}';
  
  
  obj = JSON.parse(metadata);
  
  if(hasHeadwear){
    attributes.push({"trait_type":"Headwear","value":capitalize(traitHeadwear)});
    headwearID = getID("headwear",traitHeadwear);
  }else{
    headwearID = 0;
  }
  if(hasOuterwear){
    attributes.push({"trait_type":"Outerwear","value":capitalize(traitOuterwear)});
    outerwearID = getID("outerwear",traitOuterwear);
  }else{
    outerwearID = 0;
  }
  if(hasAccessory){
    attributes.push({"trait_type":"Eyewear","value":capitalize(traitAccess)});
    accessID = getID("accessory",traitAccess);
  }else{
    accessID = 0;
  }
  if(hasItem){
    attributes.push({"trait_type":"Held Item","value":capitalize(traitItem)});
    itemID = getID("item",traitItem);
  }else{
    itemID = 0;
  }

  baseID = getID("base",traitBase);
  eyesID = getID("eyes",traitEyes);
  mouthID = getID("mouth",traitMouth);
  hairID = getID("hair",traitHair);
  typeID = getID("body",traitType);
  shirtID = getID("shirt",traitShirt);

  
  obj["attributes"] = attributes;
  filename = baseID+""+eyesID+""+mouthID+""+hairID+"-0"+headwearID+"-0"+typeID+"-0"+shirtID+"-0"+outerwearID+"-0"+accessID+"-0"+itemID;
  fileURL = link+""+filename+".png";
  obj["image"]= fileURL;
  imgfilename = filename;
  // console.log(obj);
  // console.log(attributes);
  document.querySelector(".trait-metadata").innerHTML = JSON.stringify(obj,null,4);
}

function getName(trait,id){
  str = eval(trait + "Array");
  return str[id];
}
function getShirtTypeID(i){
  if(i<=4){
    return 0;
  }else if(i==5){
    return 1;
  }else if(i==6){
    return 2;
  }else if(i==7){
    return 3;
  }else if(i==8){
    return 4;
  }
}
function getShirtType(i){
  return shirtType[i];
}
function getID(trait, name){
  // console.log(name);
  str = eval(trait + "Array");
  return str.indexOf(name);
}