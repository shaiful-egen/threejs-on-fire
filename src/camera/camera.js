import * as THREE from 'three';
import {sizes} from "../constant/size";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {renderer} from "../renderer/renderer";

export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.set(0,0,4);
/*camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 10;*/



