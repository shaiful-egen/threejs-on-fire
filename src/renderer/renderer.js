import {sizes} from "../constant/size";
import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl');

export const renderer = new THREE.WebGLRenderer({
    canvas: canvas ,
    alpha: true
});

renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));