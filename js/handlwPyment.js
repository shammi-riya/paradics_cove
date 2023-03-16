const handlePymentInfo =async (id) =>{
  const data = await fetch(`ROOMS.json`);
  const result = await data.json();
  const findResilt = result.find(item=>item._id == id)
   console.log(findResilt.address);
  const {address,house_rules,summary,images

  } = findResilt
  const modalBody = document.getElementById("modalBody");
  const title = document.getElementById("exampleModalLabels");
  title.innerHTML=findResilt.name
  modalBody.innerHTML = `
  <img src="${images.picture_url}" alt="" class="img-fluid">
  <p>${address.street}</P>
  <p>${house_rules}</P>
  <p>${summary}</P>
  `

}