

function displayer() {
    //finding containers
    const user_box = document.getElementById("user_box");
    const existing_user = document.getElementById("existing_user");
    const store = document.getElementById("store");

    //changing style
    user_box.style.display = "none";
    existing_user.style.display = "inline";
    store.style.display = "inline";

    // displaying given name after welcome 
    var name = document.getElementById("name");
    var username = name.value
    const ptag = document.createElement("h2");
    const text = document.createTextNode("Welcome "+username); 
    
    ptag.appendChild(text);
    existing_user.appendChild(ptag)


    var current = new Date();

    const uservalue = {
        name: username ,
        session_start: current.toLocaleString(),
      };

  
      
  //sending data to server
  //seding the data to userdata(the server)
  try {
    const response = fetch("/username", {
      method: "POST", //how we send
      mode: "cors", // security thing , so that only your own server can send to this api
      headers: {
        "content-type": "application/json", //what we send
      },
      body: JSON.stringify(uservalue ),
    });
  } catch (error) {
    console.log(error);
  }


}