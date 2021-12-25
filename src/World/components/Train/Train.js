import { Group, MathUtils } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

import { createMeshes } from "./meshes.js";

import { createCube } from '../cube.js';

var i = 0;
const wheelSpeed = MathUtils.degToRad(140);
//  This means the Train class now has all the normal functionality of a Group. 
// In particular, we can add objects to it, and we can add it directly to our scene
class Train extends Group {
    constructor() {
        super();

        // const cube = createCube(0);
        this.meshes = createMeshes();
        this.add(
            this.meshes.woodBottom,
            this.meshes.headHammer,
            this.meshes.chimney,
            this.meshes.smallWheelRear,
            this.meshes.smallWheelCenter,
            this.meshes.smallWheelFront,
            // this.meshes.bigWheel
        );
        console.log(this);
    }
    tick(delta) {
        i += 0.01;
        // this.meshes.bigWheel.rotation.y += wheelSpeed * delta;
        // this.meshes.smallWheelRear.rotation.y += wheelSpeed * delta;
        // this.meshes.smallWheelCenter.rotation.y += wheelSpeed * delta;
        // this.meshes.smallWheelFront.rotation.y += wheelSpeed * delta;
        // this.rotation.y -= MathUtils.degToRad(1.3);
        // this.position.x = Math.cos(1 * Math.PI * i);
        // this.position.z = Math.sin(1 * Math.PI * i);
    }
}

export { Train };