import { WebGLRenderer } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createRenderer() {
    const renderer = new WebGLRenderer({ antialias: true });
    // turn on the physically correct lighting model
    renderer.physicallyCorrectLights = true;
    return renderer;
}
export { createRenderer };