import * as THREE from 'three';
import {sizes} from "../constant/size";

/** Camera */
// Base camera
export const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100);
camera.position.x = 0;
camera.position.y = 0;
camera.position.z = 2;
