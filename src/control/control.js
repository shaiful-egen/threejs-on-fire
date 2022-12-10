import {camera} from "../camera/camera";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {renderer} from "../renderer/renderer";

export const orbitControls = new OrbitControls(camera,renderer.domElement);
orbitControls.update();



/*document.addEventListener('mousemove',(mouseEvent) =>{
    console.log(mouseEvent);
});*/

/*document.addEventListener("keydown", (keyBoardEvent) => {
    let keyCode = keyBoardEvent.key;
    console.log(keyCode);
}, false);*/

document.addEventListener("click", (mouseEvent) =>{
    console.log(mouseEvent)
}, false);

document.addEventListener("mousedown", (mouseEvent) => {
    console.log(mouseEvent)
});
