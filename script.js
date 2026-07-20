const xtml=new XMLHttpRequest()
xtml.open("Get","https://rickandmortyapi.com/api/character")
xtml.addEventListener("readystatechange",function (){
    if(xtml.readyState===4){
        JSON.parse(xtml.responseText).results.forEach(element => {
            const card=document.createElement("div")
            card.classList.add("card")
            const texts=document.createElement("div")
            texts.classList.add("texts")
            const headtexts=document.createElement("div")
            headtexts.classList.add("headtexts")
            const heading=document.createElement("h1")
            heading.classList.add("heading")
            heading.textContent=element.name
            const status=document.createElement("span")
            status.classList.add("status")
            status.textContent=element.status+" - "+element.species
            if(element.status==="Alive"){
                status.classList.add("alive")
            }
            else if(element.status==="Dead"){
                status.classList.add("dead")
            }
            headtexts.append(heading,status)
            const locations=document.createElement("div")
            locations.classList.add("locations")
            const tex=document.createElement("p")
            tex.classList.add("locattext")
            tex.textContent="Last known Location:"
            const location=document.createElement("p")
            location.classList.add("location")
            location.textContent=element.location.name
            locations.append(tex,location)
            const firstseen=document.createElement("div")
            firstseen.classList.add("firstseen")
            const firsttext=document.createElement("span")
            firsttext.classList.add("firsttext")
            firsttext.textContent="First seen Episode:"
            const firstseenepisode=document.createElement("p")
            firstseenepisode.textContent = `Episode ${element.episode[0].split("/").pop()}`;
            firstseenepisode.classList.add("firstseenepisode")
            firstseen.append(firsttext, firstseenepisode);
            const image=document.createElement("img")
            texts.append(headtexts,locations,firstseen)
            image.classList.add("image")
            image.src=element.image
            card.append(image,texts)
            document.querySelector(".container").append(card)
        });
    }
})
xtml.send()
console.log(xtml)