let newBtn = document.createElement("button");
newBtn.innerHTML="click Me";
newBtn.style.backgroundColor="red";
newBtn.style.color="white";
newBtn.style.fontSize="20px";

let h2 = document.querySelector("h2");
h2.after(newBtn);

let p = document.querySelector("p");
p.classList.add("newContent")