function handleSubmit(event) {
  event.preventDefault();

  const data = new FormData(event.target);

  var name = document.getElementById("name");
  var username = name.value
  
  const value = {
    buyer_name: username,
    url: window.location.href,
    currency: "NOK",
    status: "open",
    price: "",
    cart: [],
  };

  if (data.get("toaster") !== null) {
    const toaster = {
      product: "cool toaster",
      price: "200",
      image: "Media/Product/Image/100/best_toaster-4k-closeupp.jpeg",
      id: "4354356",
      link: "/product/3094755/cool-toaster",
    };
    value["cart"].push(toaster);
  }

  if (data.get("dryer") !== null) {
    const dryer = {
      product: "hot dryer",
      price: "3000",
      image: "Media/Product/Image/100/dryer-4k-closeupp.jpeg",
      id: "4365456",
      link: "/product/3094755/hot-dryer",
    };
    value["cart"].push(dryer);
  }

  var price = 0;
  // item = current object(the price)
  value["cart"].forEach(item => (price += parseInt(item.price)));

  value.price = price;

  // logging it all
  console.log(value);

  //sending data to server
  //seding the data to userdata(the server)
  try {
    const response = fetch("/userdata", {
      method: "POST", //how we send
      mode: "cors", // security thing , so that only your own server can send to this api
      headers: {
        "content-type": "application/json", //what we send
      },
      body: JSON.stringify(value),
    });
  } catch (error) {
    console.log(error);
  }
}

// event listener to submit that runs this code
const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);
