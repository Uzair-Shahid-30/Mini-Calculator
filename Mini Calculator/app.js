const buttons = document.querySelectorAll(".button");
const screen = document.querySelector("#calscreen");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.value;
        if (value === "=") {
            try {
                let expression = screen.value.replace(/X/g, `*`);
                screen.value = eval(expression);
            } catch {
                screen.value = "Error";
            }
        } else if (value === 'AC') {
            screen.value = "";
        } else if (value === "C") {
            screen.value = screen.value.slice(0, -1);
        } else {
            screen.value += button.value;
            screen.style.color = "#1F271B";
            screen.style.fontSize = "2rem";
        }

    });
});