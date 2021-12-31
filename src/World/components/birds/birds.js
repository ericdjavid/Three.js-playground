// import { GLTFLoader } from 'https://cdn.jsdelivr.net/npm/three@0.118/examples/jsm/loaders/GLTFLoader.js';
import { setupModel } from './setupModel.js'

import { GLTFLoader } from 'https://cdn.skypack.dev/three@0.129.0/examples/jsm/loaders/GLTFLoader.js';

async function loadBirds() {
    const loader = new GLTFLoader();

    const [parrotData, flamingoData, storkData] = await Promise.all([
        loader.loadAsync('/assets/models/Parrot.glb'),
        loader.loadAsync('/assets/models/Flamingo.glb'),
        loader.loadAsync('/assets/models/Stork.glb'),
    ]);

    console.log('Squaaawk!', parrotData);

    const parrot = setupModel(parrotData);
    parrot.position.set(0, 0, 2.5);
    parrot.scale.set(0.05, 0.05, 0.05);

    const flamingo = setupModel(flamingoData);
    flamingo.position.set(1.5, 0, -1);

    // flamingo.scale.set(0.05, 0.05, 0.05);

    const stork = setupModel(storkData);
    stork.position.set(0, 1.5, -1);
    stork.scale.set(0.05, 0.05, 0.05);

    return {
        parrot,
        flamingo,
        stork,
    };
}

export { loadBirds };
