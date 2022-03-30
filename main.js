import * as THREE from 'three'
import { OrbitControls } from './node_modules/three/examples/jsm/controls/OrbitControls'
////scene
const scene = new THREE.Scene();

////object
const boxGeomtery = new THREE.BoxGeometry(2, 2, 2);
const boxMaterial = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(boxGeomtery, boxMaterial);
scene.add(mesh);

////camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 100);
camera.position.z = 5;
////renderer
const renderer = new THREE.WebGLRenderer();
document.body.append(renderer.domElement);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.render(scene, camera);

////orbit control
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;


////animation loop
function animate() {
  requestAnimationFrame(aniamte);
  renderer.render(scene, camera);
}
animate();