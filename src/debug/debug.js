import {pointLight, pointLight2} from "../light/light";
import * as dat from "dat.gui";


const gui = new dat.GUI();
const lightFolder1 = gui.addFolder('Light 1');
lightFolder1.add(pointLight.position, 'x').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight.position, 'y').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight.position, 'z').min(-100).max(100).step(0.1);
lightFolder1.add(pointLight, 'intensity').min(-0).max(10).step(0.1);

const lightFolder2 = gui.addFolder('Light 2');
lightFolder2.add(pointLight2.position, 'x').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2.position, 'y').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2.position, 'z').min(-100).max(100).step(0.1);
lightFolder2.add(pointLight2, 'intensity').min(-0).max(10).step(0.1);
lightFolder2.addColor({ color:0xff0000 }, 'color').onChange((e) => {
    pointLight2.color.set(e)
})