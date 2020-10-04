function displayCart() {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
  
    let productContainer = document.querySelector(".bill");
    let totalcost = 0;
    if (cartItems && productContainer) {
      productContainer.innerHTML = `<div class="fromjs"> <table id="customers">
      <tr>
        <th>Package</th>
        <th>Membership (In Months)</th>
        <th>Cost ($/month)</th>
        <th>Total ($)</th>
      </tr> </table></div>`;
      Object.values(cartItems).map((item) => {
        if (item.inCart != 0) {
          totalcost += item.price * item.inCart;
          productContainer.innerHTML += `
        <div class="fromjs">
        <table id="customers">
        <tr>
       <td>${item.name}</td>
       <td>${item.inCart}</td>
       <td>${item.price}</td>
       <td>${item.inCart * item.price}</td>
     </tr>
     </table>
         </div>
   
        `;
        } else {
          productContainer.innerHTML += `
        <div class="fromjs">
        <table id="customers">
        <tr>
       <td>${item.name}</td>
       <td>${item.inCart}</td>
       <td>${item.price}</td>
       <td> - </td>
     </tr>
     </table>
         </div>
   
        `;
        }
      }); 
      document.querySelector(".confirm-pay").innerHTML = `Pay - $ ${totalcost} `;
      console.log("running");
    }
  }
  
  let paymentdone = document.querySelector(".confirm-pay");
  
  if (paymentdone) {
    paymentdone.addEventListener("click", () => {
      console.log("clicked");
      window.alert("Payment Successful , your cart is now empty");
      window.localStorage.clear();
      location.reload();
    });
  }
  displayCart();
  
