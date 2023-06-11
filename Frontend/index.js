import allPizzaData from "./data.json" assert { type: "json" };

const data = allPizzaData;

const allAvailableProducts = document.getElementById("grid");

document
  .querySelector(".pizza-types-section")
  .addEventListener("click", (e) => {
    let element = e.target;
    console.log(element);
    if (element.className == "pizza-type") {
      removeSelectedType(element);
      newSelectedType(element);
      cleanAllProducts(allAvailableProducts);
      let typeName = element.textContent;
      if (typeName === "Усі") {
        createProductsByType(data);
      } else {
        const productsWithGivenType = giveProductsByType(typeName);
        createProductsByType(productsWithGivenType);
      }
    }
  });

function cleanAllProducts(allAvailableProducts) {
  allAvailableProducts.innerHTML = "";
}

function createProductsByType(products) {
  for (const product of products) {
    allAvailableProducts.appendChild(createOneProductMenu(product));
  }
}

function giveProductsByType(type) {
  const productWithType = [];
  for (const product of data) {
    if (product.type == type) {
      productWithType.push(product);
    }
  }
  return productWithType;
}

function createOneProductMenu(product) {
  const productEl = document.createElement("section");
  productEl.setAttribute("class", "one-product-section");
  // image section
  const imageSection = document.createElement("section");
  imageSection.setAttribute("class", "img-section");
  const pizzaImg = document.createElement("img");
  pizzaImg.setAttribute("class", "pizza-img");
  console.log(product.fullImg);
  pizzaImg.setAttribute("src", product.fullImg);
  pizzaImg.setAttribute("alt", "Піца " + product.name);
  imageSection.appendChild(pizzaImg);
  if (product.state === "Нова" || product.state === "Популярна") {
    const state = document.createElement("div");
    if (product.state === "Нова") {
      state.setAttribute("class", "state-section");
      state.appendChild(document.createTextNode("Нова"));
    } else {
      state.setAttribute("class", "state-section-two");
      state.appendChild(document.createTextNode("Популярна"));
    }
    imageSection.appendChild(state);
  }
  // info section
  const infoSection = document.createElement("section");
  infoSection.setAttribute("class", "product-info-section");
  // name and des section
  const nameAndDes = document.createElement("section");
  nameAndDes.setAttribute("class", "name-des-section");
  const name = document.createElement("p");
  name.setAttribute("class", "pizza-name");
  name.appendChild(document.createTextNode(product.name));
  const type = document.createElement("p");
  type.setAttribute("class", "pizza-type-product");
  type.appendChild(document.createTextNode(product.type));
  const des = document.createElement("p");
  des.setAttribute("class", "pizza-des");
  des.appendChild(document.createTextNode(product.description));
  nameAndDes.appendChild(name);
  nameAndDes.appendChild(type);
  nameAndDes.appendChild(des);

  // order section
  const orderSection = document.createElement("section");
  if (product.both === true) {
    orderSection.setAttribute("class", "order-section");
    const smallSection = document.createElement("section");
    smallSection.setAttribute("class", "small-order-section");
    const smallSize = document.createElement("p");
    smallSize.setAttribute("class", "size-text");
    smallSize.appendChild(document.createTextNode("⍉ 30"));
    const smallWeight = document.createElement("p");
    smallWeight.setAttribute("class", "size-text");
    const weightPhoto = document.createElement("img");
    weightPhoto.setAttribute("src", "www/assets/images/weight.svg");
    weightPhoto.setAttribute("alt", "weight");
    smallWeight.appendChild(weightPhoto);
    smallWeight.appendChild(document.createTextNode(" " + product.smallWeight));
    const price = document.createElement("p");
    price.setAttribute("class", "price-text");
    price.appendChild(document.createTextNode(product.smallPrice + ""));
    const currency = document.createElement("p");
    currency.setAttribute("class", "currency-text");
    currency.appendChild(document.createTextNode("грн."));
    const buyButton = document.createElement("button");
    buyButton.setAttribute("class", "buy-button");
    buyButton.appendChild(document.createTextNode("Купити"));
    smallSection.appendChild(smallSize);
    smallSection.appendChild(smallWeight);
    smallSection.appendChild(price);
    smallSection.appendChild(currency);
    smallSection.appendChild(buyButton);
    const bigSection = document.createElement("section");
    bigSection.setAttribute("class", "small-order-section");
    const bigSize = document.createElement("p");
    bigSize.setAttribute("class", "size-text");
    bigSize.appendChild(document.createTextNode("⍉ 40"));
    const bigWeight = document.createElement("p");
    bigWeight.setAttribute("class", "size-text");
    const weightPhoto2 = document.createElement("img");
    weightPhoto2.setAttribute("src", "www/assets/images/weight.svg");
    weightPhoto2.setAttribute("alt", "weight");
    bigWeight.appendChild(weightPhoto2);
    bigWeight.appendChild(document.createTextNode(" " + product.bigWeight));
    const price2 = document.createElement("p");
    price2.setAttribute("class", "price-text");
    price2.appendChild(document.createTextNode(product.bigPrice + ""));
    const currency2 = document.createElement("p");
    currency2.setAttribute("class", "currency-text");
    currency2.appendChild(document.createTextNode("грн."));
    const buyButton2 = document.createElement("button");
    buyButton2.setAttribute("class", "buy-button");
    buyButton2.appendChild(document.createTextNode("Купити"));
    bigSection.appendChild(bigSize);
    bigSection.appendChild(bigWeight);
    bigSection.appendChild(price2);
    bigSection.appendChild(currency2);
    bigSection.appendChild(buyButton2);

    orderSection.appendChild(smallSection);
    orderSection.appendChild(bigSection);
  } else {
    orderSection.setAttribute("class", "order-section one");
    const smallSection = document.createElement("section");
    smallSection.setAttribute("class", "small-order-section");
    const smallSize = document.createElement("p");
    smallSize.setAttribute("class", "size-text");
    smallSize.appendChild(document.createTextNode("⍉ 30"));
    const smallWeight = document.createElement("p");
    smallWeight.setAttribute("class", "size-text");
    const weightPhoto = document.createElement("img");
    weightPhoto.setAttribute("src", "www/assets/images/weight.svg");
    weightPhoto.setAttribute("alt", "weight");
    smallWeight.appendChild(weightPhoto);
    smallWeight.appendChild(document.createTextNode(" " + product.smallWeight));
    const price = document.createElement("p");
    price.setAttribute("class", "price-text");
    price.appendChild(document.createTextNode(product.smallPrice + ""));
    const currency = document.createElement("p");
    currency.setAttribute("class", "currency-text");
    currency.appendChild(document.createTextNode("грн."));
    const buyButton = document.createElement("button");
    buyButton.setAttribute("class", "buy-button");
    buyButton.appendChild(document.createTextNode("Купити"));
    smallSection.appendChild(smallSize);
    smallSection.appendChild(smallWeight);
    smallSection.appendChild(price);
    smallSection.appendChild(currency);
    smallSection.appendChild(buyButton);

    orderSection.appendChild(smallSection);
  }

  infoSection.appendChild(nameAndDes);
  infoSection.appendChild(orderSection);

  productEl.appendChild(imageSection);
  productEl.appendChild(infoSection);

  return productEl;
}

function newSelectedType(typeElement) {
  typeElement.setAttribute("class", "pizza-type selected");
}

function removeSelectedType(typeElement) {
  const typesSection = typeElement.parentNode;
  const selectedElement = typesSection.getElementsByClassName(
    "pizza-type selected"
  );
  selectedElement[0].setAttribute("class", "pizza-type");
}

const allOrderedProducts = document.getElementsByClassName(
  "ordered-product-section"
);

let alreadyInOrder = [];

function fillWithDefaultProducts(allOrderedProducts) {
  for (const productSection of allOrderedProducts) {
    const productName =
      productSection.querySelector(".ordered-name").textContent;
    const productSize =
      productSection.querySelector(".size-text-ordered").textContent;
    let isBig;
    productSize.includes("30") ? (isBig = false) : (isBig = true);
    alreadyInOrder.push({
      name: productName,
      isBig: isBig,
    });
  }
}

fillWithDefaultProducts(allOrderedProducts);

console.log(alreadyInOrder);

document.querySelector(".products-section").addEventListener("click", (e) => {
  let element = e.target;
  console.log(element);
  if (element.className == "buy-button") {
    let nameOfTheProduct = giveProductName(element);
    let isBig = isBigPizza(element);
    let product = {
      name: nameOfTheProduct,
      isBig: isBig,
    };
    if (pizzaContains(product)) {
      incrementProductAmount(product);
    } else {
      createNewOrderedProduct(product);
    }
    getTotalAmountOfOrderedProducts(allOrderedProducts);
    getTotalPriceOfOrderedProducts(allOrderedProducts);
  }
});

function giveProductName(buttonEl) {
  let productSection = buttonEl.closest(".one-product-section");
  let nameLabel = productSection.querySelector(".pizza-name");
  return nameLabel.textContent;
}

function isBigPizza(buttonEl) {
  let smallSection = buttonEl.closest(".small-order-section");
  if (smallSection == null) {
    return true;
  } else {
    return false;
  }
}

function pizzaContains(product) {
  for (const prod of alreadyInOrder) {
    if (prod.name.includes(product.name) && prod.isBig == product.isBig) {
      return true;
    }
  }
  return false;
}

function incrementProductAmount(product) {
  let orderedProduct = giveOrderedProduct(product);
  console.log(orderedProduct, product);
  let amountInput = orderedProduct.querySelector(".amount-ordered");
  let amount = parseInt(amountInput.value);
  if (amount == 1) {
    let minusButton = orderedProduct.querySelector(".minus-button");
    minusButton.setAttribute("class", "minus-button");
    minusButton.disabled = false;
  }
  amount++;
  orderedProduct.querySelector(".amount-ordered").value = amount;
  let fullProduct = giveProductDataByName(product.name);
  let newSumOfProduct;
  console.log(product);
  if (product.isBig == true) {
    newSumOfProduct = amount * fullProduct.bigPrice;
  } else {
    newSumOfProduct = amount * fullProduct.smallPrice;
  }
  orderedProduct.querySelector(".price").innerHTML = `${newSumOfProduct}грн`;
}

function giveOrderedProduct(product) {
  const allOrderedProducts = document.getElementsByClassName(
    "ordered-product-section"
  );
  for (const ordered of allOrderedProducts) {
    let name = ordered.querySelector(".ordered-name").textContent;
    // let size = ordered.querySelector(".size-text-ordered").textContent;
    let isBig = name.includes("Мала") ? false : true;
    if (name.includes(product.name) && product.isBig == isBig) {
      return ordered;
    }
  }
}

function giveProductDataByName(name) {
  for (const product of data) {
    if (product.name.includes(name)) {
      return product;
    }
  }
}

function createNewOrderedProduct(product) {
  console.log(product);
  const fullProduct = giveProductDataByName(product.name);
  let volumeHere;
  let sizeHere;
  let weightHere;
  let priceHere;

  if (product.isBig == true) {
    volumeHere = "(Велика)";
    sizeHere = "⍉ 40";
    weightHere = fullProduct.bigWeight;
    priceHere = fullProduct.bigPrice;
  } else {
    volumeHere = "(Мала)";
    sizeHere = "⍉ 30";
    weightHere = fullProduct.smallWeight;
    priceHere = fullProduct.smallPrice;
  }

  product.name = product.name + " " + volumeHere;

  alreadyInOrder.push(product);

  const orderedProduct = document.createElement("section");
  orderedProduct.setAttribute("class", "ordered-product-section");
  // info
  const orderedInfo = document.createElement("section");
  orderedInfo.setAttribute("class", "ordered-product-info");
  // inner
  const nameAndWeight = document.createElement("section");
  nameAndWeight.setAttribute("class", "name-and-weight");
  const name = document.createElement("p");
  name.setAttribute("class", "ordered-name"); //" " + volumeHere
  name.appendChild(document.createTextNode(product.name));
  const size1 = document.createElement("label");
  size1.setAttribute("class", "size-text-ordered");
  size1.appendChild(document.createTextNode(sizeHere));
  const size2 = document.createElement("label");
  size2.setAttribute("class", "size-text-ordered");
  const img = document.createElement("img");
  img.setAttribute("src", "www/assets/images/weight.svg");
  size2.appendChild(img);
  size2.appendChild(document.createTextNode(" " + weightHere));
  nameAndWeight.appendChild(name);
  nameAndWeight.appendChild(size1);
  nameAndWeight.appendChild(size2);
  // amount
  const amountSection = document.createElement("section");
  amountSection.setAttribute("class", "ordered-amount-section");
  // inner
  const leftSection = document.createElement("section");
  leftSection.setAttribute("class", "ordered-left-section");
  const price = document.createElement("span");
  price.setAttribute("class", "price");
  price.appendChild(document.createTextNode(priceHere + "грн"));
  leftSection.appendChild(price);
  const middleSection = document.createElement("section");
  middleSection.setAttribute("class", "ordered-middle-section");
  const minusButton = document.createElement("button");
  minusButton.setAttribute("class", "minus-button disabled");
  minusButton.appendChild(document.createTextNode("–"));
  const amountInput = document.createElement("input");
  amountInput.setAttribute("class", "amount-ordered");
  amountInput.setAttribute("type", "text");
  amountInput.setAttribute("value", "1");
  amountInput.setAttribute("readonly", true);
  const plusButton = document.createElement("button");
  plusButton.setAttribute("class", "plus-button");
  plusButton.appendChild(document.createTextNode("+"));
  middleSection.appendChild(minusButton);
  middleSection.appendChild(amountInput);
  middleSection.appendChild(plusButton);
  const rightSection = document.createElement("section");
  rightSection.setAttribute("class", "ordered-right-section");
  const crossButton = document.createElement("button");
  crossButton.setAttribute("class", "remove-button");
  crossButton.appendChild(document.createTextNode("\u2716"));
  rightSection.appendChild(crossButton);
  amountSection.appendChild(leftSection);
  amountSection.appendChild(middleSection);
  amountSection.appendChild(rightSection);

  orderedInfo.appendChild(nameAndWeight);
  orderedInfo.appendChild(amountSection);

  // image
  const orderedImage = document.createElement("section");
  orderedImage.setAttribute("class", "ordered-product-image");
  const image = document.createElement("img");
  image.setAttribute("class", "ordered-image");
  image.setAttribute("src", fullProduct.halfImg);
  image.setAttribute("alt", "Піца " + product.name);
  orderedImage.appendChild(image);

  orderedProduct.appendChild(orderedInfo);
  orderedProduct.appendChild(orderedImage);

  document
    .querySelector(".odered-products-section")
    .appendChild(orderedProduct);
}

function getTotalPriceOfOrderedProducts(allOrderedProducts) {
  let totalPrice = 0;
  for (const product of allOrderedProducts) {
    let priceText = product.querySelector(".price").textContent;
    let realPrice = parseInt(priceText.match(/\d+/)[0]);
    console.log(realPrice);
    totalPrice += realPrice;
  }
  document.querySelector(".price-sum-text").innerHTML = `${totalPrice} грн`;
}

getTotalPriceOfOrderedProducts(allOrderedProducts);

function getTotalAmountOfOrderedProducts(allOrderedProducts) {
  document.querySelector(
    ".order-amount"
  ).innerHTML = `${allOrderedProducts.length}`;
}
getTotalAmountOfOrderedProducts(allOrderedProducts);

function cleanOrder() {
  document.getElementsByClassName("odered-products-section")[0].innerHTML = "";
  alreadyInOrder = [];
  console.log(allOrderedProducts);
  getTotalAmountOfOrderedProducts(allOrderedProducts);
  getTotalPriceOfOrderedProducts(allOrderedProducts);
}

document
  .querySelector(".odered-products-section")
  .addEventListener("click", (e) => {
    let element = e.target;
    if (element.className == "minus-button") {
      decrementProductAmount(element);
    } else if (element.className == "plus-button") {
      incrementProduct(element);
    } else if (element.className == "remove-button") {
      removeProduct(element);
    }
  });

document.querySelector(".ordered-section").addEventListener("click", (e) => {
  let element = e.target;
  if (element.className == "clear-order-text") {
    cleanOrder();
  }
});

function removeProduct(crossButton) {
  let orderedProductSection = crossButton.closest(".ordered-product-section");
  let nameElement = orderedProductSection.querySelector(".ordered-name");
  let name = nameElement.innerHTML;
  let isBig = nameElement.innerHTML.includes("Мала") ? false : true;
  removeFromList({ name: name, isBig: isBig });
  orderedProductSection.remove();
  getTotalPriceOfOrderedProducts(allOrderedProducts);
  getTotalAmountOfOrderedProducts(allOrderedProducts);
}

function removeFromList(product) {
  for (let i = 0; i < alreadyInOrder.length; i++) {
    if (
      alreadyInOrder[i].name == product.name &&
      alreadyInOrder[i].isBig == product.isBig
    ) {
      alreadyInOrder.splice(i, 1);
    }
  }
}

function incrementProduct(plusButton) {
  let orderedInfoSection = plusButton.closest(".ordered-product-info");
  let nameElement = orderedInfoSection.querySelector(".ordered-name");
  let nameAndWeight = nameElement.innerHTML.split(" ");
  let name = nameAndWeight[0];
  let isBig = nameAndWeight[1].includes("Мала") ? false : true;
  incrementProductAmount({
    name: name,
    isBig: isBig,
  });
  getTotalPriceOfOrderedProducts(allOrderedProducts);
}

function decrementProductAmount(minusButton) {
  let middleSection = minusButton.parentNode;
  let amountInput = middleSection.querySelector(".amount-ordered");
  let amount = parseInt(amountInput.value);
  if (amount == 2) {
    amount--;
    amountInput.value = amount;
    minusButton.setAttribute("class", "minus-button disabled");
    minusButton.disabled = true;
  } else if (amount > 2) {
    amount--;
    amountInput.value = amount;
  }
  changePrice(middleSection.closest(".ordered-product-info"), amount);
  getTotalPriceOfOrderedProducts(allOrderedProducts);
}

function changePrice(orderedInfoSection, amount) {
  let nameElement = orderedInfoSection.querySelector(".ordered-name");
  let nameAndWeight = nameElement.innerHTML.split(" ");
  let name = nameAndWeight[0];
  let isBig = nameElement.innerHTML.includes("Мала") ? false : true;
  let fullProduct = giveProductDataByName(name);
  let newPriceText;
  if (isBig == true) {
    newPriceText = amount * fullProduct.bigPrice;
  } else {
    newPriceText = amount * fullProduct.smallPrice;
  }
  orderedInfoSection.querySelector(".price").innerHTML = newPriceText + "грн";
}
