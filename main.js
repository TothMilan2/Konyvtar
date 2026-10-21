
function Konyvek(cim,szerzo,kiadasi_ev,oldalszam){
    this.Cim=cim;
    this.Szerzo=szerzo;
    this.Kiadas=kiadasi_ev;
    this.Oldalszam=oldalszam;
    this.kolcsonozve=false
    this.kolcsonoz = function(){
        this.kolcsonozve=true
    }
    this.visszahoz = function(){
        this.kolcsonozve=false
    }

}

const konyv1 = new Konyvek("A Gyűrűk ura", "J.R.R. Tolkien", 1952,600)
const konyv2 = new Konyvek("Sherlock Holmes", "Arthur Conan Doyle", 1889,300)
const konyv3 = new Konyvek("Az éjszakai szolgálat", "John La Carré", 1998,400)


const konyv = [konyv1,konyv2,konyv3]







function tablazatfeltoltese(){
    document.getElementById("tablazat").innerHTML= konyv.map((konyv, index)=>{
            
            
          return  `
            <tr>
                        <td class="cimKi">${konyv.Cim}</td>
                        <td class="szerzoKi">${konyv.Szerzo}</td>
                        <td class="kiadasKi">${konyv.Kiadas}</td>
                        <td class="oldalKi">${konyv.Oldalszam}</td>
                        <td class="kolcsonzesBtn " data-index="${index}">
                            <button class="btn btn-primary">Kölcsönzés</button>
                        </td>
                        <td class="visszahozasBtn" data-index="${index}">
                            <button class="btn btn-warning">Visszahozás</button>
                        </td>
            </tr>
            ` 
            }).join("");

}

tablazatfeltoltese()




document.getElementById("KonyvHozzaadasa").addEventListener('click', function(){

    let cim = document.getElementById("konyvCime").value
    let szerzo = document.getElementById("konyvSzerzoje").value
    let kiadas = document.getElementById("kiadasi_ev").value
    let oldalszam = document.getElementById("oldalszam").value

    



    const ujadat = new Konyvek(cim,szerzo,kiadas,oldalszam)

    konyv.push(ujadat)
    tablazatfeltoltese()
    
    
    document.getElementById("konyvCime").value=""
    document.getElementById("konyvSzerzoje").value=""
    document.getElementById("kiadasi_ev").value=""
    document.getElementById("oldalszam").value=""
})



document.getElementById("tablazat").addEventListener("click", function(event){
     let gomb = event.target.closest(".kolcsonzesBtn")

        if (!gomb) return

        const index = Number(gomb.dataset.index)
       
       let kivalasztott = konyv[index];

        if(kivalasztott.kolcsonozve===false){
            kivalasztott.kolcsonoz()
            
            alert("Kölcsönözve")   
            
        }
        else{
            alert("Nem lehet kölcsönözni")
        }
})
        

       
            
        
        



document.getElementById("tablazat").addEventListener("click", function(event){
    let gomb = event.target.closest(".visszahozasBtn")
    if (!gomb) return

        const index = Number(gomb.dataset.index)

        
       let kivalasztott = konyv[index];

     
       if(kivalasztott.kolcsonozve===true){
            kivalasztott.visszahoz()
            alert("Visszhozva")     
        }
        else{
            alert("Nem lehet visszahozni")
        }
})
        











document.getElementById("szuresGomb").addEventListener("click", function(){


    document.getElementById("tablazat").innerHTML= konyv.map((konyv)=>{
            
          if(konyv.kolcsonozve===false){
            return  `
            <tr>
                        <td class="cimKi">${konyv.Cim}</td>
                        <td class="szerzoKi">${konyv.Szerzo}</td>
                        <td class="kiadasKi">${konyv.Kiadas}</td>
                        <td class="oldalKi">${konyv.Oldalszam}</td>
                        <td class="kolcsonzesBtn">
                            <button class="btn btn-primary">Kölcsönzés</button>
                        </td>
                        <td class="visszahozasBtn" >
                            <button class="btn btn-warning">Visszahozás</button>
                        </td>
            </tr>
            ` 
          }  
          
            }).join("");
})



document.getElementById("legregebbi").addEventListener("click", function(){
  

    const a = Math.min(...konyv.map(k=>k.Kiadas))
    document.getElementById("legregebbiKi").innerHTML+=a
})





document.getElementById("legvastagabb").addEventListener("click", function(){
    
    
        const a = Math.max(...konyv.map(k => k.Oldalszam));
      
    
    document.getElementById("legvastagabbKi").innerHTML+=a
})



document.getElementById("atlag").addEventListener("click", function(){
    let atlag=0;
    let osszeg=0;

    for(let i=0;i<konyv.length;i++){
        osszeg+=konyv[i].Oldalszam
        atlag=osszeg/konyv.length
    }
    document.getElementById("atlagKi").innerHTML+=Math.round(atlag,2)
})