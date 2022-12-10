// Scene
import {box, sphere} from "../mesh3d/mesh3d";
import {camera} from "../camera/camera";
import {pointLight,pointLight2} from "../light/light";
import * as THREE from 'three';
import {renderer} from "../renderer/renderer";

export const scene = new THREE.Scene();

scene.add(box);
scene.add(new THREE.AxesHelper(5));
scene.add(sphere);
scene.add(camera);
scene.add(pointLight);
scene.add(pointLight2);



renderer.setAnimationLoop(() => {
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    renderer.render(scene,camera);
})