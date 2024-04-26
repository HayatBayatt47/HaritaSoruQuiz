let areas,secilenBolgeAdi,secilenBolgeNo;

//Imagemap üzerindeki tıklanabilir her alan için olay yakalayıcı yazdık.
document.addEventListener('DOMContentLoaded', function() {
    const areas = document.querySelectorAll('map[name="harita"] area');
    areas.forEach((area,index) => {
      area.addEventListener('click', function() {
        secilenBolgeAdi = area.getAttribute('title');
        secilenBolgeNo=index;
        bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo);
      });
    });
  });
async function bolgeyiGoster(secilenBolgeAdi,secilenBolgeNo) {
    const sunucudanGelen = await fetch("http://localhost:3000/bölgeler");
    const bolgeler = await sunucudanGelen.json();
    console.log(bolgeler[secilenBolgeNo]);
    let rstSayi=(Math.floor(Math.random() * 2));
    if(rstSayi==0){
      let cvp=prompt(bolgeler[secilenBolgeNo].soru1);
      if(cvp==bolgeler[secilenBolgeNo].cevap1){
        alert("doğru bildiniz!!!");
      }
      else{
        alert("yanlış bildiniz!!!");
      }
    }
    else{
      let cvp1=prompt(bolgeler[secilenBolgeNo].soru2);
      if(cvp1==bolgeler[secilenBolgeNo].cevap2){
        alert("doğru bildiniz!!!");
      }
      else{
        alert("yanlış bildiniz!!!");
      }
    }
  }