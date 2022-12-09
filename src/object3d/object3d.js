import * as THREE from 'three'


export const geometry = new THREE.TorusGeometry( .7, .2, 16, 100 );

//export const sphereGeometry = new THREE.SphereGeometry( );
export const sphereGeometry = new THREE.SphereBufferGeometry( .5, 64, 64 );

