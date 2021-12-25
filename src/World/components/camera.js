import { PerspectiveCamera } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createCamera() {
    const camera = new PerspectiveCamera(
        35, // fov = Field Of View
        1, // aspect ratio (dummy value)
        0.1, // near clipping plane
        100, // far clipping plane
    );

    // move the camera back so we can view the scene
    camera.position.set(-5, 5, 7);

    camera.tick = (delta) => {
        camera.position.z -= 0.001;
    };

    return camera;
}

export { createCamera };