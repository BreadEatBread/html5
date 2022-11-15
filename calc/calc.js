var buttons = document.querySelectorAll("button");

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", (event) => {
                var text = event.target.innerText;
                document.querySelector("input").value += text;
            });
        }