let inp = document.querySelector(".inp");
let con = document.querySelector(".con");

con.onclick = () => {
    alert(inp.value);
    inp.value = "";
};