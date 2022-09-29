AOS.init()
const apiResult = [{
    title: "Apple",
    description: "desc1",
    output: "out1"
}, {
    title: "Banana",
    description: "desc2",
    output: "out2"
}, {
    title: "Starwberry",
    description: "desc3",
    output: "out3"
},  {
    title: "Berry",
    description: "desc3",
    output: "out3"
},  {
    title: "Watermelloooon",
    description: "desc3",
    output: "out3"
}];

const container = document.getElementById('products');
apiResult.forEach((result, idx) => {
    // Create card element
    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
    <div  class="product">
    <img src="./assets/apple.png" alt="" srcset="">
    <a href="#">
        <div class="">
            <h1>${result.title}</h1>
            <span>Apple Malang</span>
        </div>
        <svg width="44" height="45" viewBox="0 0 44 45" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="44" height="44" rx="10" fill="black" />
            <path fill-rule="evenodd" clip-rule="evenodd"
                d="M26.2798 21.9698C26.4203 22.1105 26.4992 22.3011 26.4992 22.4998C26.4992 22.6986 26.4203 22.8892 26.2798 23.0298L18.7798 30.5298C18.6377 30.6623 18.4496 30.7344 18.2553 30.731C18.061 30.7276 17.8756 30.6489 17.7382 30.5115C17.6008 30.3741 17.5221 30.1887 17.5187 29.9944C17.5152 29.8001 17.5874 29.612 17.7198 29.4698L24.6898 22.4998L17.7198 15.5298C17.5874 15.3877 17.5152 15.1996 17.5187 15.0053C17.5221 14.811 17.6008 14.6256 17.7382 14.4882C17.8756 14.3508 18.061 14.2721 18.2553 14.2687C18.4496 14.2652 18.6377 14.3374 18.7798 14.4698L26.2798 21.9698Z"
                fill="white" />
        </svg>
        
        </a>
        <span id="stock">10</span>
</div>
    `;

    container.innerHTML += content;
})