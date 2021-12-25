import { Mesh } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

import { createGeometries } from './geometries.js';
import { createMaterials } from './materials.js';

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const headHammer = new Mesh(geometries.headHammer, materials.steel);
    headHammer.position.set(1.5, 1.4, 0);

    const chimney = new Mesh(geometries.chimney, materials.detail);
    chimney.position.set(-2, 1.9, 0);

    const woodBottom = new Mesh(geometries.woodBottom, materials.body);
    woodBottom.position.set(-1, 1, 0);
    woodBottom.rotation.z = Math.PI / 2;

    const smallWheelRear = new Mesh(geometries.wheel, materials.detail);
    smallWheelRear.position.y = 0.5;
    smallWheelRear.rotation.x = Math.PI / 2;

    const smallWheelCenter = smallWheelRear.clone();
    smallWheelCenter.position.x = -1;

    const smallWheelFront = smallWheelRear.clone();
    smallWheelFront.position.x = -2;

    const bigWheel = smallWheelRear.clone();
    bigWheel.position.set(1.5, 0.9, 0);
    bigWheel.scale.set(2, 1.25, 2);

    return {
        woodBottom,
        headHammer,
        chimney,
        smallWheelRear,
        smallWheelCenter,
        smallWheelFront,
        bigWheel,
    };
}


export { createMeshes }