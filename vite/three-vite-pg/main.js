import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const canva = document.getElementById("canva");

// 1. Create scene
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// 2. Add a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// 3. Create and add objects
const dodecahedronGeometry = new THREE.DodecahedronGeometry();
const dodecahedronMaterial = new THREE.MeshLambertMaterial({ color: '#468585', emissive: '#468585'});
const dodecahedronMesh = new THREE.Mesh(dodecahedronGeometry, dodecahedronMaterial);

const boxGeometry = new THREE.BoxGeometry(2, 0.1, 2);
const boxMaterial = new THREE.MeshStandardMaterial({ color: '#468585', emissive: '#468585'});
const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
boxMesh.position.y = -1.5;

scene.add(boxMesh);
scene.add(dodecahedronMesh);

// 4. Add lights
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);

const light2 = new THREE.SpotLight(0x9CDBA6, 10);
light2.position.set(-1, -1, -1);

scene.add(light, light2);


// 5. Set up renderer, link to the canvas element
const renderer = new THREE.WebGLRenderer({ canvas: canva, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// 6. Add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = false;
controls.dampingFactor = 0.05;
controls.enableZoom = true;
controls.enablePan = false;


controls.keys = {
	LEFT: 'ArrowLeft', //left arrow
	UP: 'ArrowUp', // up arrow
	RIGHT: 'ArrowRight', // right arrow
	BOTTOM: 'ArrowDown' // down arrow
}

// 7. Animate
function animate() {
    requestAnimationFrame(animate);
    dodecahedronMesh.rotation.x += 0.01;
    dodecahedronMesh.rotation.y += 0.01;

    // boxMesh.rotation.x += 0.01;
    // boxMesh.rotation.y += 0.01;

    controls.update();
    renderer.render(scene, camera);
}
animate();

// 8. handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
})