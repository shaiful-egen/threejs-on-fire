
import * as THREE from 'three'
import {geometry,sphereGeometry} from "../object3d/object3d";
import {material} from "../material3d/material3d";

// Mesh
export const sphere = new THREE.Mesh(sphereGeometry,material);