import { Color, Scene } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createScene() {
    const scene = new Scene();

    scene.background = new Color('black');

    return scene;
}

export { createScene };