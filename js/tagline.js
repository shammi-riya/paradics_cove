const taglines = [
  "Escape to paradise",
  "Experience ultimate relaxation",
  "Discover your perfect getaway",
  "Indulge in luxury and tranquility",
  "Unwind in nature's embrace",
  "Find your slice of heaven",
  "Live your dream vacation",
  "Explore a world of beauty",
  "Embrace adventure, embrace life",
  "Create unforgettable memories",
]

const showTaglines = ( arr,interval)=>{
    setInterval(() => {
        const tagline = document.getElementById("tagline");
        const randomIndex = Math.floor(Math.random()*arr.length)
        const randomWord = arr[randomIndex]
        tagline.innerText = randomWord
    }, interval);
}
showTaglines(taglines ,3000)






const fetchRoomsData = async ()=>{
const res = await fetch(`ROOMS.json`);
const data = await res.json()
showRoomsData(data)

}


 


const showRoomsData = (data) =>{

    document.getElementById("random-room-btn").addEventListener("click",()=>{
        const randomIndex = Math.floor(Math.random()* 10)
        const ul = data[randomIndex].amenities
       
        let details = ""
        for (let amenitie of ul) {
        details += `<li>${amenitie}</li>`
        
       }

  
     const revew = data[randomIndex].review_scores.scores

       const ol = document.createElement("ol")
     if(revew){
          Object.keys(revew).forEach(element => {
           console.log();   
          ol.classList.add("list-group", "list-group-numbered,bg-info")
          ol.innerHTML += `
          <li class="list-group-item d-flex justify-content-between align-items-start">
          <div class="ms-2 me-auto">
            <div class="fw-bold">${element}</div>
          </div>
          <span class="badge bg-primary rounded-pill">${revew[element]}</span>
          </li>
          `
    
          });
    
   
  }
   else{
    ol.innerText="revews not found" 
}
   

       
    const modaTitle = document.getElementById("modaTitle");    
     modaTitle.innerText = data[randomIndex].name  
    const modalBody = document.getElementById("modal-body");
       
       modalBody.innerHTML= `
       <img src="${data[randomIndex].images.picture_url}" alt="" class="img-fluid">
       <h5>Adress: ${data[randomIndex].address.street}</h5>
       <h6>${details}</h6>
        <div id="revews"></div>
       
       `
       const revews = document.getElementById("revews")
       revews.appendChild(ol)
    })
   
}


fetchRoomsData()




