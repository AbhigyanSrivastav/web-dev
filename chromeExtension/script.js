



async function jokes() {
  let jokereq = await fetch("https://api.kanye.rest/");
  let jokeres = await jokereq.json();
  let para = document.getElementById("para");
  para.innerHTML = jokeres.quote;
}
jokes();
