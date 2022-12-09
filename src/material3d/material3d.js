import * as THREE from 'three'

//export const material = new THREE.MeshBasicMaterial();
export const material = new THREE.MeshStandardMaterial({
    metalness:0.7,
    roughness:0.2,
    color: new THREE.Color(0x292929)
});
//material.color = new THREE.Color(0x00ff00);
