import * as THREE from 'three';

export const pointLight = new THREE.PointLight(0xffffff, 0.1);
pointLight.position.x = 3;
pointLight.position.y = -0.8;
pointLight.position.z = -1.2;
pointLight.intensity = 10;

export const pointLight2 = new THREE.PointLight(0xff0000, 1);
pointLight2.position.set(-5,1.5,-2.5);
pointLight2.intensity = 10;

// export const pointLight3 = new THREE.PointLight(0x0000ff, 1);
// pointLight3.position.set(-1.5,2.5,-1.5);
// pointLight3.intensity = 1;
