

let packages = [
  {
    name: "Delta",
    tag: "cricket",
    access: ["Cricket", "Jogging Track"],
    price: 250,
    inCart: 0,
    img:
      "https://storage.googleapis.com/ehimages/2017/7/20/img_01e1a6734b733e3ae1b83bb70b92ec38_1500548110208_processed_original.jpg"
  },
  {
    name: "Vega",
    tag: "lawntennis",
    access: ["Tennis Court", "Jogging Track", "Swimming Pool"],
    price: 300,
    inCart: 0,
    img:
      "https://cdn.tenniscompanion.org/wp-content/uploads/2013/03/a-diagram-of-tennis-court-dimensions-and-layout1.jpg"
  },
  {
    name: "Capella",
    tag: "badminton",
    access: ["Badminton Court", "Gymnasium"],
    price: 200,
    inCart: 0,
    img:
      "https://5.imimg.com/data5/MK/MV/LH/SELLER-28722963/pvc-rubber-padded-badminton-court-flooring-500x500.jpeg"
  },
  {
    name: "Alpha",
    tag: "swimming",
    access: ["Swimming Pool", "Squash Court"],
    price: 150,
    inCart: 0,
    img:
      "https://www.barrandwray.com/Media/Images/Pools/Portfolio/Strathclyde%20Uni/Pool%201.jpg"
  },
  {
    name: "Rigel",
    tag: "skate",
    access: ["Skating Rink", "Gymnasium"],
    price: 150,
    inCart: 0,
    img:
      "https://static.toiimg.com/photo/imgsize-198323,msid-74050272/74050272.jpg"
  },
  {
    name: "Beta",
    tag: "basketball",
    access: ["Basketball Court", "Squash Court"],
    price: 150,
    inCart: 0,
    img:
      "https://image.made-in-china.com/2f0j00EmWanYUzgNrj/Factory-Direct-Indoor-Basketball-Court-Used-Maple-Sports-Flooring.jpg"
  },
  {
    name: "Algol",
    tag: "squash",
    access: ["Squash Court", "Gymnasium", "Skating Rink"],
    price: 150,
    inCart: 0,
    img:
      "https://4.imimg.com/data4/BT/EL/MY-3489826/indoor-squash-court-500x500.jpg"
  },
  {
    name: "Deneb",
    tag: "snooker",
    access: ["Snooker Table", "Rock Climbing"],
    price: 150,
    inCart: 0,
    img:
      "https://i.pinimg.com/originals/c0/c9/83/c0c983ab74071299e7a7c3c31db6ae5a.jpg"
  }
];

displayPackages();
let carts = document.querySelectorAll(".positive");

let cartsdecrease = document.querySelectorAll(".negative");
let clearall = document.querySelector(".btn2");

clearall.addEventListener("click", () => {
  window.localStorage.clear();
  location.reload();
});

function initialSet() {
  for (let i = 0; i < packages.length; i++) {
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);

    if (cartItems != null) {
      if (cartItems[packages[i].tag] == undefined) {
        cartItems = {
          ...cartItems,
          [packages[i].tag]: packages[i]
        };
      }
    } else {
      cartItems = {
        [packages[i].tag]: packages[i]
      };
    }

    localStorage.setItem("productsInCart", JSON.stringify(cartItems));
  }
}

for (let i = 0; i < cartsdecrease.length; i++) {
  console.log(cartsdecrease[i]);
  cartsdecrease[i].addEventListener("click", () => {
    cartNumberDecrease(packages[i], i);

  });
}

function cartNumberDecrease(particularPackage, i) {
  let productNumbers = localStorage.getItem("cartNumbers");
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  productNumbers = parseInt(productNumbers);
  console.log(particularPackage);
  let ok = cartItems[particularPackage.tag].inCart;
  console.log(typeof ok);

  if (productNumbers && ok > 0) {
    localStorage.setItem("cartNumbers", productNumbers - 1);


    document.getElementById(`${i + 1}`).textContent = ok - 1;

    setItemsDecrease(particularPackage);
  }

}



function setItemsDecrease(particularPackage) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[particularPackage.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [particularPackage.tag]: particularPackage
      };
    }

    cartItems[particularPackage.tag].inCart -= 1;
  }
 

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumber(packages[i], i);
  
  });
}

function cartNumber(particularPackage, i) {
  let productNumbers = localStorage.getItem("cartNumbers");
  productNumbers = parseInt(productNumbers);

  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let ok = cartItems[particularPackage.tag].inCart;

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);

    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    let ok = cartItems[particularPackage.tag].inCart;
    console.log(ok);
    console.log(typeof ok);
    if (ok >= 0) {
      document.getElementById(`${i + 1}`).textContent = ok + 1;
    }
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.getElementById(`${i + 1}`).textContent = 1;
  }

  setItems(particularPackage);
}

function setItems(particularPackage) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[particularPackage.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [particularPackage.tag]: particularPackage
      };
    }

    cartItems[particularPackage.tag].inCart += 1;
  } else {
    particularPackage.inCart = 1;
    cartItems = {
      [particularPackage.tag]: particularPackage
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function displayPackages() {
  let productContainer = document.querySelector(".mid-container");
  packages.map((pack, index) => {
    productContainer.innerHTML += ` <div class="two">
<div class="card">
  <img
    src=${pack.img}
    alt="rest img"
    height="220"
    width="220"
    class="cardimg"
  />
  <div class="textimg">
  
  <h3>${pack.name}</h3>
    <div class="details">
      <h6>Access To :</h6>
     <p> ${pack.access}</p>
    </div>

    <div class="numberbtn">
    
      <button class="positive">+</button>
     <span id="${index + 1}">0</span>
     <p>month(s)</p>
      <button class="negative">-</button>
    </div>
  </div>
</div>
</div>
`;
  });
}

initialSet();

function comebackrefresh(){

  for (let i = 0; i < packages.length; i++){
    
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    console.log(cartItems);
    let c = packages[i].tag;
    console.log(c);
    let ok = cartItems[c].inCart;
    document.getElementById(`${i + 1}`).textContent = ok;
  }

}

comebackrefresh();
