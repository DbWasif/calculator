let input = document.getElementById("display");

function appendValue(value) {
    input.value += value; 
}

function clearInput() {
    input.value = "";
}

function calculate() {
    try {
        input.value = eval(display.value);
    } catch {
        display.value = "Error!";
    }
}

function backspace() {
    input.value = input.value.slice(0, -1);
}
