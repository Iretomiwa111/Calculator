let input = document.getElementById("inputBtn");
let buttons = document.querySelectorAll("button");
let string = "";
let arr = Array.from(buttons);

arr.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      string = eval(string);
      input.value = string;
    } else if (e.target.innerHTML == "AC") {
      string = "";
      input.value = string;
    } else if (e.target.innerHTML == "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else if (e.target.id !== "toggleMode") { 
      // Prevent toggle button from messing calculator
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});


const toggleBtn = document.getElementById("toggleMode");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  
  if (document.body.classList.contains("light")) {
    toggleBtn.innerHTML = "☀️ Light Mode";
  } else {
    toggleBtn.innerHTML = "🌙 Dark Mode";
  }
});
