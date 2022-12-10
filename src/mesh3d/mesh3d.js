import * as THREE from 'three'
import {boxGeometry, geometry, sphereGeometry} from "../object3d/object3d";
import {material} from "../material3d/material3d";

export const sphere = new THREE.Mesh(sphereGeometry,material);

export const boxMaterial = new THREE.MeshBasicMaterial({color: 0x00FF00});

export const box = new THREE.Mesh(boxGeometry,boxMaterial);

