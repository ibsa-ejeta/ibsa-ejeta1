const form1 = document.querySelector(".calculator1");
const form2 = document.querySelector(".calculator2");

form1.addEventListener("submit", (e) => {
    e.preventDefault();
    let power = document.querySelector(".power1");
    const dBm = (10 * Math.log10(power.value)).toFixed(2);
    document.querySelector(".dBm1").value = `${dBm} dBm`;
})

form2.addEventListener("submit", (e) => {
    e.preventDefault();
    let dBm = document.querySelector(".dBm2");
    const power  = (Math.pow(10, dBm.value/10)).toFixed(2);  
    document.querySelector(".power2").value = `${power} mW`;
})