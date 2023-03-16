const subscribe = () =>{
   
    const subscribeInput = document.getElementById("subscribeInput");
    const subscribeInputValu = subscribeInput.value;

    if(subscribeInputValu){
        localStorage.setItem(
            "email:", subscribeInputValu
        )
    }else{
        alert("plese give your email")
    }
    
}