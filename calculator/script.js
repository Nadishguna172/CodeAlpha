document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
  
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");
  
        if (value === "clear") {
          display.value = "";
        } else if (value === "back") {
          display.value = display.value.slice(0, -1);
        } else if (value === "=") {
          try {
            display.value = eval(display.value.replace(/÷/g, "/").replace(/×/g, "*"));
          } catch {
            display.value = "Error";
          }
        } else {
          display.value += value;
        }
      });
    });
  });
  