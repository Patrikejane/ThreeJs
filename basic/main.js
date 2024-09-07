import * as THREE from 'three';

// 1. Create sceane
const scene = new THREE.Scene();
scene.background = new THREE.Color('#f0f0f0');

// 2. Add a Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

//3. create and add  objects
const geoMetry = new THREE.BoxGeometry();
const material = new THREE.MeshLambertMaterial({ color: '#468585', flatShading: true,  emissive: '#468585'});
const cube = new THREE.Mesh(geoMetry, material); // mesh is a geometry and a material
scene.add(cube);
;
//4. Add lights
const light = new THREE.DirectionalLight(0x9CDBA6, 10);
light.position.set(1, 1, 1);
scene.add(light); // this add the light to the scene

// 5. Set up renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);// set the size of the renderer
document.body.appendChild(renderer.domElement);// add the renderer to the body
renderer.render(scene, camera);//

// 6. Animate
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;//rotation of the cube x axis
    cube.rotation.y += 0.01;//rotation of the cube y axis
    cube.rotation.z += 0.01;//rotation of the cube z axis
    renderer.render(scene, camera);
}
animate();