// Scene
import {sphere} from "../mesh3d/mesh3d";
import {camera} from "../camera/camera";
import {pointLight} from "../light/light";
import * as THREE from 'three';

export const scene = new THREE.Scene();

scene.add(sphere);
scene.add(camera);
scene.add(pointLight);