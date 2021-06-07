function shop() {
  let name = prompt(
    "Firstly, we'd like to send you invitation link. Could you please tell us your name?"
  );
  let email = prompt(`Great ${name}! And what is your email address?`);

  alert(
    `Thank you ${name} 💚. We'll contact with you soon. Please check your email address within the next 1 hour. Meanwhile, have a nice day! 🌞`
  );
}

let goShop = document.querySelector(".go-shop");
goShop.addEventListener("click", shop);
