document.querySelectorAll(".carousel").forEach(carousel => {
    const items = carousel.querySelectorAll(".carousel-item");
    const buttonHtml = Array.from(items, () => {
        return `<span class="carousel-btn"></span>`;
    });


    carousel.insertAdjacentHTML("beforeend", `
        <div class="carousel-nav">
            ${buttonHtml.join("")}  
        </div>`
    );

    console.log(buttonHtml);

    const buttons = carousel.querySelectorAll(".carousel-btn");

    buttons.forEach((button, i) => {
        button.addEventListener("click", () => {
            items.forEach((item) => item.classList.remove("carousel-item-active"));
            buttons.forEach((button) => button.classList.remove("carousel-btn-active"));
            
            items[i].classList.add("carousel-item-active");
            button.classList.add("carousel-btn-active");


            console.log(button.classList);
            
        })
    })   
    items[0].classList.add("carousel-item-active");
    buttons[0].classList.add("carousel-btn-active"); 
})