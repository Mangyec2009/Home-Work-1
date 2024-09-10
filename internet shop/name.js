let body = document.querySelector('body');
let box = document.querySelector('.box');
box.style.width = '100%';
box.style.display = 'flex';
box.style.marginTop = "100px";
box.style.justifyContent = 'space-evenly';
body.style.fontFamily = 'Poppins, sans-serif';
let list = [
    {
        image: "ardor.jpg",
        title: "Ardor Gaming",
        color: "rgb(255, 0, 40)",
        desc: "Monitors, keyboards, mouses <br> and other stuff for your best gaming experience",
    },
    {
        image: "razer.jpg",
        title: "Razer",
        color: "lime",
        desc: "Keyboards, the best mouses, headsets <br> and other stuff for your best gaming experience",
    },
    {
        image: "aorus.png",
        title: "Gigabyte Aorus",
        color: "#fe00b0",
        desc: "PC, Laptops, PC components <br> and other stuff for your best gaming experience",
    },
];
let cc = document.querySelector(".cc");
cc.style.backgroundColor = "lightgrey";
cc.style.borderRadius = "15px";
cc.style.display = "flex";
cc.style.width = "10%";
cc.style.marginLeft = "1300px";
cc.style.marginTop = "30px";
let p = document.querySelector(".p");
p.style.marginLeft = "10px";
let changeColor = document.querySelector(".changeColor");


function showCard() {
    let light = document.createElement("img");
    let dark = document.createElement("img");
    light.src = "https://static-00.iconduck.com/assets.00/mode-light-icon-512x512-yuubs6qt.png";
    dark.src = "https://cdn-icons-png.freepik.com/512/6714/6714978.png"; 
    light.style.width = "50px";
    dark.style.width = "50px";
    let dm = document.querySelector(".dm");
    dm.style.border = "none";
    dm.style.backgroundColor = "transparent";
    dm.style.marginLeft = "830px";
    dm.style.marginTop = "30px";
    dm.appendChild(dark);
    let cnt =0;
    list.forEach((e, i) => {
        let card = document.createElement('div');
        card.classList.add('card');
        card.style.textAlign = 'center';
        card.style.border = '3px black solid';
        card.style.padding = "10px 20px";
        card.style.borderRadius = "30px";
        card.style.backgroundColor = e.themeBack;
        card.style.color = e.theme;
        
        let image = document.createElement('img');
        image.src = e.image;
        image.style.marginTop = "50px";
        image.style.width = '200px';
        image.style.borderRadius = '30px';
        let title = document.createElement('h1');
        title.innerHTML = e.title;
        title.style.fontWeight = '500';
        
        let desc = document.createElement('p');
        desc.innerHTML = e.desc;
        desc.style.fontSize = '14px';
        let buy = document.createElement("button");
        buy.innerHTML = "Buy Now";
        buy.style.fontSize = '17px';
        buy.style.fontFamily = 'Poppins, sans-serif';
        buy.style.fontWeight = '600';
        buy.style.color = "white";
        buy.style.backgroundColor = 'black';
        buy.style.border = 'none';
        buy.style.padding = '10px 20px';
        buy.style.borderRadius = '10px';
        
        card.append(image, title, desc, buy);
        box.appendChild(card);
    });
    let ctr=0;
    let def = "";
    dm.onclick = () => {
        if (cnt%2==0) {
            dm.innerHTML = "";
            dm.append(light);
            body.style.backgroundColor = "black";
            body.style.color = "white";
            def = "darkviolet";
            document.querySelectorAll('.card').forEach((e, i) => {
                e.style.border = '3px white solid';
                e.style.backgroundColor = "darkviolet";
                e.style.color = "white";
                e.querySelector('button').style.backgroundColor = 'white';
                e.querySelector('button').style.color = 'black';
            });
        } 
        else
        {
            dm.innerHTML = "";
            dm.append(dark);
            body.style.backgroundColor = "white";
            body.style.color = "black";
            def = "white";
            document.querySelectorAll('.card').forEach((e,i) => {
                e.style.border = '3px black solid';
                e.style.backgroundColor = "white";
                e.style.color = "black";
                e.querySelector('button').style.backgroundColor = 'black';
                e.querySelector('button').style.color = 'white';
            });
        }
        cnt++;
    };
    changeColor.onclick = () => {
        if(ctr%2==0){
            document.querySelectorAll('.card').forEach((e1,i1) => {
                e1.style.backgroundColor = list[i1].color;
            });
        }
        else{
            document.querySelectorAll('.card').forEach((e1,i1) => {
                e1.style.backgroundColor = def;
            });
        }
        ctr++;
    };
}
showCard();
// console.log(document.querySelectorAll(".card"));