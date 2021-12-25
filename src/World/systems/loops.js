import { Clock, MathUtils } from 'https://unpkg.com/three@0.126.1/build/three.module.js';

const clock = new Clock();

class Loop {
    constructor(camera, scene, renderer) {
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.updatables = [];
    }

    start() {
        this.renderer.setAnimationLoop(() => {
            // tell every animated object to tick forward one frame
            this.tick();

            // render a frame
            this.renderer.render(this.scene, this.camera);
        });
    }

    stop() {
        this.renderer.setAnimationLoop(null);
    }

    tick() {
        // only call the getDelta function once per frame!
        // to measure how long the previous frame took.
        const delta = clock.getDelta();
        // console.log(
        //     `The last frame rendered in ${delta * 1000} milliseconds`,
        // );
        for (const object of this.updatables) {
            object.tick(delta);
        }
    }
}

export { Loop }