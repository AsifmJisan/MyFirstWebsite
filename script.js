document.getElementById("ham").addEventListener('click',function(){
    this.classList.toggle("active");
    document.getElementById("bar").classList.toggle("active");
});

/* --------- SKILLS ---------- */


function sleep(ms)
{
    return new Promise(r => setTimeout(r, ms));
}

async function c() {
    const mydiv = document.querySelector("#c");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `77%`;
}

async function py() {
    const mydiv = document.querySelector("#py");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `40%`;
}

async function java() {
    const mydiv = document.querySelector("#java");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `1%`;
}

async function html() {
    const mydiv = document.querySelector("#html");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `75%`;
}

async function css() {
    const mydiv = document.querySelector("#css");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `65%`;
}

async function js() {
    const mydiv = document.querySelector("#js");
    await sleep(500);
    mydiv.style.width = `0%`;
    await sleep(1000);
    mydiv.style.width = `35%`;
}

c();py();java();html();css();js();