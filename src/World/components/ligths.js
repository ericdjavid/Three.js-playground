import { DirectionalLight, AmbientLight } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createLights() {

    const mainLight = new DirectionalLight('white', 4);

    mainLight.position.set(20, 20, 20);
    const ambientLight = new AmbientLight('white', 2);

    mainLight.tick = (delta) => {
        mainLight.position.x += 10;
    }
    return { mainLight, ambientLight }
}

export { createLights };