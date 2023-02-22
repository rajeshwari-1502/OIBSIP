const output = document.querySelector("#output");
const buttons = document.querySelectorAll("button");

for (const button of buttons) {
    button.addEventListener("click", e => {
        const value = e.target.value;

        if (value === "=") {
            output.textContent = eval(output.textContent);
            return;
        }

        output.textContent += value;
    });
}