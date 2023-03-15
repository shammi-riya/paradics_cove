

const showDisplayRooms = (rooms) =>{
    const roomsCard = document.getElementById("roomsCard");
   rooms.forEach(room => {
    const {images,name,number_of_reviews,description} = room
    console.log(room
        );
    roomsCard.innerHTML += `
    <div class="col">
    <div class="card h-100">
      <img src="${images.picture_url}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <h6 class="card-title">number_of_reviews: ${number_of_reviews}</h6>
        <h6 class="card-title"> room price :${room.price.$numberDecimal}</h6>
        <p class="card-text">${description.slice(0,120)}...</p>
       
      </div>
      <button type="button" class="btn btn-primary fs-6 fw-bold">Add to cart</button>
    </div>
   </div>
    `
   });
    
}
showDisplayRooms()