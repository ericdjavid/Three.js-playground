import { AnimationLoader } from 'https://cdn.skypack.dev/three@0.129.0/src/loaders/AnimationLoader.js';
import { AnimationMixer } from 'https://cdn.skypack.dev/three@0.129.0/src/animation/AnimationMixer.js';

function setupModel(data) {
    const model = data.scene.children[0];
    const clip = data.animations[0];

    const mixer = new AnimationMixer(model);

    const action = mixer.clipAction(clip);
    action.play();

    // Inside this method, we’re calling mixer.update each frame, passing in delta, which is the amount of time the previous frame took to render. 
    // The mixer uses delta to keep the animation in sync even when the frame rate fluctuates.
    model.tick = (delta) => mixer.update(delta);
    return model;
}

export { setupModel };
