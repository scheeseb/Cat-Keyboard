const barkFx = document.querySelector("#bark");
const growlFx = document.querySelector("#growl");
const meanFx = document.querySelector("#mean");
const pantingFx = document.querySelector("#panting");
const purringFx = document.querySelector("#purring")
const snarlFx = document.querySelector("#snarl");

const barkButton = document.querySelector("#barkButton");
const growlButton = document.querySelector("#growlButton");
const meanButton = document.querySelector("#meanButton");
const pantingButton = document.querySelector("#pantingButton");
const purringButton = document.querySelector("#purringButton");
const snarlButton = document.querySelector("#snarlButton");

barkButton.addEventListener("click", function(){
    barkFx.play();
})
growlButton.addEventListener("click", function(){
    growlFx.play();
})
meanButton.addEventListener("click", function(){
    meanFx.play();
})
pantingButton.addEventListener("click", function(){
    pantingFx.play();
})
purringButton.addEventListener("click", function(){
    purringFx.play();
})
snarlButton.addEventListener("click", function(){
    snarlFx.play();
})
