import { MeshStandardMaterial, TextureLoader } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createMaterials() {
    const body = new MeshStandardMaterial({
        color: 'saddlebrown',
        flatShading: true,
    });

    const material = new TextureLoader().load("assets/textures/steel.jpg");
    const steel = new MeshStandardMaterial({ map: material });

    const detail = new MeshStandardMaterial({
        color: 'darkslategray',
        flatShading: true,
    });

    return { body, detail, steel };
}

export { createMaterials };