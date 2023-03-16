
let allRooms=[]

const fetchRoomsDataa = async () => {
  const data = await fetch(`ROOMS.json`);
  const result = await data.json();
  console.log(result);
 
   allRooms=result
  displayRoomsData(result);
};



fetchRoomsDataa();

console.log(allRooms);

const displayRoomsData = (rooms) =>{
  // console.log(rooms);
    const roomsCard = document.getElementById("roomsCard");
    document.getElementById("roomsCard").innerHTML=""
   rooms.forEach(room => {
    const {images,name,number_of_reviews,description,price,_id} = room
    
    roomsCard.innerHTML += `
    <div class="col">
    <div class="card h-100">
      <img src="${images.picture_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-title">number_of_reviews: ${number_of_reviews}</h6>
        <h3 class="card-title"> room price :${price.$numberDecimal}</h3>
        <p class="card-text">${description.slice(0,120)}...</p>
       
      </div>
      <button onclick="addToCurt('${_id}')" type="button" class="btn btn-primary fs-6 fw-bold">Add to cart</button>
    </div>
   </div>
    `
   });
    
}





const revewInput = document.getElementById("customRange3");
revewInput.addEventListener("input",()=>{
  const revewInputValu = revewInput.value
  document.getElementById("reviwCount").innerText= revewInputValu;

  const revewValu = allRooms.filter(range=>range.number_of_reviews >= revewInputValu)
  displayRoomsData(revewValu);

})


document.getElementById('sort-by-price-btn').addEventListener('click', () =>{
  
  allRooms.sort((a,b)=>{
     return parseFloat(a.price.$numberDecimal) > parseFloat(b.price.$numberDecimal)  ? 1: -1
 })
 displayRoomsData(allRooms)

})