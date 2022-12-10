import * as THREE from 'three'

//export const material = new THREE.MeshBasicMaterial();

const textureLoader = new THREE.TextureLoader();
const normalTexture = textureLoader.load('../texture/NormalMap.png');

export const material = new THREE.MeshStandardMaterial({
    metalness:0.7,
    roughness:0.2,
    normalMap: normalTexture,
    color: new THREE.Color(0x292929)
});
//material.color = new THREE.Color(0x00ff00);

export const basicMaterial = new THREE.MeshBasicMaterial({
    metalness:0.7,
    roughness:0.2,
    normalMap: normalTexture,
    color: new THREE.Color(0x292929)
});
//material.color = new THREE.Color(0x00ff00);
