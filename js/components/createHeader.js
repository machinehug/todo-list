export default function createHeader() {

    const header = document.querySelector("header");

    header.innerHTML = `
    
            <a href="index.html">
                <h1>TO-DOs</h1>
            </a>

            <nav>
                <ul>
                    <li>
                        <i class="fas fa-ellipsis-h three-dots-icon"></i>
                    </li>
                </ul>
            </nav>
            
            <div class="pop-up-wrapper hidden">
                <div class="pop-up-container">
                    <ul>
                        <div class="triangle"></div>
                        <li class="sort-options-button">Sort</li>
                            <ul class="sort-options-container hidden">
                                <li class="sort-alphabetical">Alphabetical</li>
                                <li class="sort-newest">Newest</li>
                                <li class="sort-oldest">Oldest</li>
                                <li class="sort-favorites">Favorites</li>
                            </ul>
                        <li><a href="/">Search</a></li>
                        <li><a href="trash.html" class="header-trash-icon">Trash</a></li>
                    </ul>
                </div>
            </div>`;

    const threeDots = document.querySelector(".three-dots-icon");
    threeDots.addEventListener("click", createPopUpMenu);

    const sortOptionsBtn = document.querySelector(".sort-options-button");
    sortOptionsBtn.addEventListener("click", createSortOptionsPopUp);
};

function createPopUpMenu() {

    const popUpContainer = document.querySelector(".pop-up-wrapper");
    popUpContainer.classList.toggle("hidden");

    const sortOptionsContainer = document.querySelector(".sort-options-container");

    if (!sortOptionsContainer.classList.contains("hidden")) {
        sortOptionsContainer.classList.add("hidden");
    };
};

function createSortOptionsPopUp() {

    const targetElement = document.querySelector(".sort-options-container");
    targetElement.classList.toggle("hidden");
};