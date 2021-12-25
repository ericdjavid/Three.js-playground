// import { OrbitControls } from 'https://cdn.skypack.dev/three@0.132.2/examples/jsm/controls/OrbitControls.js?module';
import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/controls/OrbitControls.js';
function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);
    controls.target.y = 1;
    controls.enableDamping = true;
    controls.tick = () => controls.update();
    return controls;
}

export { createControls };