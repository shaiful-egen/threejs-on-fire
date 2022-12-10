// Import Three.js library
import * as THREE from 'three'

// scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();

// cube or geometric object
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshPhongMaterial({color: 'purple'});
const cube = new THREE.Mesh(geometry, material);


/*const geometry = new THREE.TorusKnotGeometry(10, 3, 100, 16);
const material = new THREE.MeshPhongMaterial({color: '#3498eb'});
const torusKnot = new THREE.Mesh(geometry, material);

scene.add(torusKnot);*/

// Main function
function main() {
    // remove the default canvas on web page (output)
    document.querySelector('canvas').remove();

    // add scene background color, set rendering size,
    // and add to DOM on web page (output)
    scene.background = new THREE.Color('#161718');
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    // reposition or transform camera
    camera.position.set(0, 0, 5);

    // create world light and add to scene
    const light = new THREE.HemisphereLight('#FFFFFF', '#757575', 1.7);
    scene.add(light);

    // set initial cube position, rotation, and add to scene
    cube.position.set(0, 0, 0);
    cube.rotation.set(0.5, 0 , 0);
    scene.add(cube);

    // render the scene
    renderer.render(scene, camera);
}

// call the main() function to initiate the scene
main();