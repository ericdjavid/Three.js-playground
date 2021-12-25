import { BoxBufferGeometry, CylinderBufferGeometry } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

function createGeometries() {
    const headHammer = new BoxBufferGeometry(2, 2.25, 1.5);

    const woodBottom = new CylinderBufferGeometry(0.3, 0.3, 6, 12);

    // we can reuse a single cylinder geometry for all 4 wheels
    const wheel = new CylinderBufferGeometry(0.4, 0.4, 1.75, 16);

    // different values for the top and bottom radius creates a cone shape
    const chimney = new CylinderBufferGeometry(0.3, 0.1, 0.5);

    return {
        headHammer,
        woodBottom,
        wheel,
        chimney,
    };
}

export { createGeometries }