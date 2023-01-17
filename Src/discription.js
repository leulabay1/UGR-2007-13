nextBtn = document.querySelector("#forwardIcon0");
prevbtn = document.querySelector("#backIcon0");
carouselSlide = document.querySelector("#slider");
carouselImage = document.querySelector("#lastClone");


let carouselImages = ["image/asusvivobook.png", "image/acernitro.jpg", "image/acer1.jpg"];

var counter = 1;

//Button Listeners
nextBtn.addEventListener('click', () => {
    carouselImage.setAttribute("src", carouselImages[counter]);
    counter++;
    if (counter > carouselImages.length - 1){
        counter = 0;
    }
});

var Laptops = [
    {
        name: "Lenevo | Thinkpad ",
        Processor: "core i5 10th",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above",
     },
     {
        name: "Asus | Tuf",
        Processor: "core i7 11th",
        Storage: "1 Tera SSD", 
        RAM: "16GB",
        Battery:"6 hours and above"
     },
     {
        name: "Lenevo | IdeaPad",
        Processor: "core i3 8th",
        Storage: "256 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     },
     {
        name: "Acer | Magnit",
        Processor: "core i3 11th",
        Storage: "512 SSD", 
        RAM: "12GB",
        Battery:"8 hours and above"
     },
     {
        name: "Lenevo | IdeaPad",
        Processor: "core i5 10th ",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"4 hours and above"
     },
     {
        name: "Asus | republic",
        Processor: "Celeron | Used",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     },
     {
        name: "MSI | Leopard",
        Processor: "core i5",
        Storage: "512 SSD", 
        RAM: "16GB",
        Battery:"10 hours and above"
     },
     {
        name: "Asus | Vivobook",
        Processor: "core i7",
        Storage: "512 SSD", 
        RAM: "4GB",
        Battery:"8 hours and above"
     },
     {
        name: "HP | Alien Ware",
        Processor: "core i7 11th",
        Storage: "512 SSD", 
        RAM: "16GB",
        Battery:"4 hours and above"
     },
     {
        name: "Asus | republic",
        Processor: "core i7",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"5 hours and above"
     },
     {
        name: "MSI | Leopard",
        Processor: "core i7",
        Storage: "512 SSD", 
        RAM: "12GB",
        Battery:"8 hours and above"
     },
     {
        name: "Acer | Nitro ",
        Processor: "core i7",
        Storage: "256 SSD", 
        RAM: "8GB",
        Battery:"6 hours and above"
     },
     {
        name: "Lenevo | IdeaPad",
        Processor: "core i5",
        Storage: "512 HDD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     },
     {
        name: "Asus | republic",
        Processor: "core i5",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"10 hours and above"
     },
     {
        name: "HP | Omen",
        Processor: "core i5",
        Storage: "128 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     },
     {
        name: "HP | Envy",
        Processor: "core i5",
        Storage: "256 SSD", 
        RAM: "4GB",
        Battery:"12 hours and above"
     },
     {
        name: "Asus | elite",
        Processor: "core i3",
        Storage: "512 HDD", 
        RAM: "4GB",
        Battery:"8 hours and above"
     },
     {
        name: "HP | NoteBook",
        Processor: "core i3",
        Storage: "512 SSD", 
        RAM: "16GB",
        Battery:"8 hours and above"
     },
     {
        name: "Lenovo | ideaPad",
        Processor: "core i3",
        Storage: "1024 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     },
     {
        name: "Asus | Vivobook",
        Processor: "core i3",
        Storage: "512 SSD", 
        RAM: "8GB",
        Battery:"8 hours and above"
     }
]
function get(){
    var para = new URLSearchParams(window.location.search);
    var pass = parseInt(para.get("id"));
    var brand = document.getElementById('r1c2');
    var Processor = document.getElementById('r2c2');
    var Storage = document.getElementById('r3c2');
    var RAM = document.getElementById('r4c2');
    var Battery = document.getElementById('r5c2');
    var laptop = Laptops[pass];
    console.log(brand);

    brand.innerHTML = laptop.name;
    Processor.innerHTML=laptop.Processor;
    Storage.innerHTML=laptop.Storage;
    RAM.innerHTML=laptop.RAM;
    Battery.innerHTML=laptop.Battery;
    
    console.log(laptop.name);
}
