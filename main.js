
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
    document.getElementById("tablazat").innerHTML= konyv.map((konyv)=>{
            
            
          return  `
            <tr>
                        <td class="cimKi">${konyv.Cim}</td>
                        <td class="szerzoKi">${konyv.Szerzo}</td>
                        <td class="kiadasKi">${konyv.Kiadas}</td>
                        <td class="oldalKi">${konyv.Oldalszam}</td>
                        <td class="kolcsonzesBtn">
                            <button>Kölcsönzés</button>
                        </td>
            </tr>
            ` 
            });

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



document.getElementById("kolcsonzesBtn").addEventListener('click', function(){
    // let aktualis_constructor = 
})