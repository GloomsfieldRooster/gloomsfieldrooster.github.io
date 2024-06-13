const image_urls = ["images/goblin.png",
    "images/house.png",
    "images/mouth.png",
    "images/telephone.png",
];

var selected_image_index = 0;

var image_selector = document.getElementById('image_selector');
var art_container = document.getElementById('art_container');
var controls_header = document.getElementById('controls_header');

const blend_mode_select = document.getElementById(`image_blend_mode`);
const position_x_input = document.getElementById(`image_x_position`);
const position_y_input = document.getElementById(`image_y_position`);

var image_added_count = 0;

const image_map = new Map();

function capitalize(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}

function remove_children(element) {
    while(element.hasChildNodes()) {
        let child = element.firstChild;
        element.removeChild(child);
    }
}

function load_images() {
    for (let i = 0; i < image_urls.length; i++) {
        const image = document.createElement("img");
        image.id = `image${i}`;
        image.classList.add(["art_image"]);
        image.src = image_urls[i];

        image_map.set(image,
            {
                x_pos: 0,
                y_pos: 0,
                blend_mode_index: 0,
            }
        );

        art_container.appendChild(image);
    }
}

function update_image_selector() {
    remove_children(image_selector);

    for (let i = 0; i < image_urls.length; i++) {
        let option = document.createElement("option");
        option.value = `image_selector_${i}`;
        option.innerHTML = `Image ${i + 1}`;

        image_selector.appendChild(option);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    load_images();
    update_image_selector();

    blend_mode_select.addEventListener('change', (e) => {
        const images = document.querySelectorAll('.art_image');
        const image = images[selected_image_index];

        image.style.mixBlendMode = e.target.value;
    });

    position_x_input.addEventListener('input', (e) => {
        const images = document.querySelectorAll('.art_image');
        const image = images[selected_image_index];

        image.style.left = `${e.target.value}%`;
    });

    position_y_input.addEventListener('input', (e) => {
        const images = document.querySelectorAll('.art_image');
        const image = images[selected_image_index];

        image.style.top = `${e.target.value}%`;
    });

    image_selector.addEventListener("change", () => {
        selected_image_index = image_selector.selectedIndex;
        controls_header.innerHTML = `Controls for image ${selected_image_index + 1}`;

        const images = document.querySelectorAll('.art_image');
        const image = document.getElementById();

        console.log(window.getComputedStyle(image).left);

        const x_value = parseInt(window.getComputedStyle(image).left) / 600 * 100;
        const y_value = parseInt(window.getComputedStyle(image).top) / 600 * 100;

        position_x_input.value = x_value;
        position_y_input.value = y_value;
    });
});