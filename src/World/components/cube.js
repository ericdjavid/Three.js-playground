import { TextureLoader, MathUtils, MeshStandardMaterial, CircleGeometry, BoxBufferGeometry, TorusKnotGeometry, Mesh } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function createMaterial() {
    // create a texture loader.
    const textureLoader = new TextureLoader();
    // load a texture
    const texture = textureLoader.load(
        '/assets/textures/bricks.png',
        // world.render();
    );

    // create a "standard" material
    const material = new MeshStandardMaterial({
        map: texture,
    });

    return material;
}

function createCube(position) {
    // create a geometry
    const geometry = new BoxBufferGeometry(getRandomArbitrary(0, 6), getRandomArbitrary(0, 6), getRandomArbitrary(0, 6));
    // const geometry = new CircleGeometry(2, 32);

    const material = createMaterial();


    const cube = new Mesh(geometry, material);

    cube.rotation.set(-0.5, -0.5, 0.8);
    cube.position.x = position;
    const radiansPerSecond = MathUtils.degToRad(10);

    // this will be called for each frame
    cube.tick = (delta) => {

        cube.rotation.z += radiansPerSecond * delta;
        cube.rotation.x += radiansPerSecond * delta;
        cube.rotation.y += radiansPerSecond * delta;
        // cube.position.x += getRandomArbitrary(-0.3, 0.3);
        // cube.scale.x += 0.01;
    }
    return cube;
}

export { createCube };