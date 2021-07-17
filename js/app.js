/**Model start */

const mobilesList = [
  {
    model: "OnePlus Nord CE",
    brand: "OnePlus",
    specification: {
      ram: "8GB",
      rom: "256GB",
      processor:
        "Snapdragon 750G Snapdragon 870 5G Snapdragon 870 5G Snapdragon 870 5G Snapdragon 870 5G",
      display: "6.43 inch",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
    },
    price: "Rs. 27,999/-",
  },
  {
    model: "Mi 11X",
    brand: "Mi",
    specification: {
      ram: "6GB",
      rom: "128GB",
      processor: "Snapdragon 870 5G",
      display: "6.67 inch",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
    },
    price: "Rs. 29,999/-",
  },

  {
    model: "IQOO 7 Legend 5G",
    brand: "IQOO",
    specification: {
      ram: "8GB",
      rom: "128GB",
      processor: "Snapdragon 888 5G",
      display: "6.62 inch",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
    },
    price: "Rs. 39,990/-",
  },

  {
    model: "Vivo X60",
    brand: "Vivo",
    specification: {
      ram: "8GB",
      rom: "128GB",
      processor: "Snapdragon 870",
      display: "6.56 inch",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
    },
    price: "Rs. 37,990/-",
  },

  {
    model: "realme 8 5G",
    brand: "OPPO",
    specification: {
      ram: "8GB",
      rom: "64GB",
      processor: "MediaTek Dimensity 700",
      display: "6.5 inch",
      imageURL:
        "https://images-na.ssl-images-amazon.com/images/I/71LRBr1aLNS._SL1500_.jpg",
    },
    price: "Rs. 15,280/-",
  },
];

/**Model end */

/**Controller start */

const ListView = {
  init() {
    this.render();
    console.log(window);
  },

  render() {
    let rootElem = document.getElementById("mobile-list");
    let heading1 = document.getElementById("heading1");
    let heading2 = document.getElementById("heading2");
    for (var i = 0; i < mobilesList.length; i++) {
      mobile = mobilesList[i];
      let elem = document.createElement("li");
      elem.textContent = mobile.model;
      elem.style.cursor = "pointer";
      elem.className = "list-group-item custom-list-bg";
      elem.addEventListener(
        "click",
        (function (event) {
          return function () {
            DetailView.getMobileDetail(event);
            document.title = "Mobile | " + event.model;
          };
        })(mobile)
      );
      rootElem.appendChild(elem);
    }
  },
};

const DetailView = {
  init() {},

  getMobileDetail(mobileData) {
    this.printKeyInfo(mobileData);
    this.printMetaInfo(mobileData);
    this.printMobileImage(mobileData);
  },

  printKeyInfo(mobileData) {
    let brand = mobileData.brand;
    let model = mobileData.model;
    let price = mobileData.price;
    console.log(mobileData);
    document.getElementById("mobile-brand").textContent = brand;
    document.getElementById("mobile-price").innerHTML =
      "<strong>" + price + "<strong>";

    document.getElementById("mobile-model").textContent = model;
  },

  printMetaInfo(mobileData) {
    let display = mobileData.specification.display;
    let processor = mobileData.specification.processor;
    let memory = mobileData.specification.rom;
    let ram = mobileData.specification.ram;
    document.getElementById("mobile-display").textContent = display;
    document.getElementById("mobile-processor").textContent = processor;
    document.getElementById("mobile-memory").textContent = memory;
    document.getElementById("mobile-ram").textContent = ram;
  },

  printMobileImage(mobileData) {
    console.log(mobileData.specification.imageURL);
    document
      .getElementById("mobile-image")
      .setAttribute(
        "src",
        mobileData.specification.imageURL,
        "title",
        mobileData.model
      );
  },
};

function onHoverImage() {
  console.log(window);
  alert(window);
  window.close();
}

function getCoords(position) {
  console.log(position);
}

function getCoordErr() {
  console.log(err);
}

/**Contorller end */

/**View start */

/**View end */

//Runner
ListView.init();

function clickButtonTryit() {
  alert("The button has triggered!!");
}
