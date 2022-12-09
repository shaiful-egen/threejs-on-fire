import {sizes} from "../constant/size";
import * as THREE from 'three';


// Canvas
const canvas = document.querySelector('canvas.webgl');

/** Renderer */
export const renderer = new THREE.WebGLRenderer({  canvas: canvas });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));