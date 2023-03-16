const addToCurt =async (id) =>{
   const url = await fetch(`ROOMS.json`)
   const result = await url.json()
   const foundResult = result.find(item=> item._id == id)
   const {images,name,cleaning_fee,price,_id,property_type} = foundResult

   const cartItems= getStoregItem()
  if(cartItems.find(item=> item._id == id)){
   return;
  }
  cartItems.push({images,name,cleaning_fee,price,_id,property_type})
   localStorage.setItem("saveCart",JSON.stringify(cartItems))
   displayCartItems()

}


const getStoregItem = () =>{
    let itemsArry = []
    const cartItems = localStorage.getItem("saveCart")
    if(cartItems){
        itemsArry=JSON.parse(cartItems)
    }
    return itemsArry;
}



const displayCartItems = () =>{
    const cartOparation = document.getElementById("cartOparation");
    const storage = getStoregItem();
    cartOparation.innerHTML = ""
    storage?.forEach(element => {
       
        const {images,name,cleaning_fee,price,_id,property_type} = element

        cartOparation.innerHTML += `
        <tr>
         <th scope="row">${name.slice(0,20)}</th>
         <td class=''><span><i onclick="deleteItemFromCart('${_id}')" class="fa-solid fa-trash text-danger fs-4 "></i></span>
         
         </td>
         <td><span><i onclick="handlePymentInfo('${_id}')"  class="fa-regular fa-window-maximize text-success fs-4" data-bs-toggle="modal" data-bs-target="#examplePymentModal"  ></i></span></td>  
        </tr>
        `
    });
}

const deleteItemFromCart = (id) =>{
    console.log(id);
    const storage = getStoregItem();
    const cartItems = storage.filter(item=>item._id != id)
    localStorage.setItem("saveCart" ,JSON.stringify(cartItems))
    displayCartItems()
}






displayCartItems()