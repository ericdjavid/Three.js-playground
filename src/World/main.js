import { World } from './World.js';

let clicked = true;

function clicking(world) {
    if (clicked) {
        world.stop();
        clicked = false;
    }
    else {
        world.start();
        clicked = true;
    }

}
// create the main function
async function main() {

    // Get a reference to the container element
    const container = document.querySelector('#scene-container');

    // 1. Create an instance of the World app
    const world = new World(container);

    // 2. Render the scene

    // complete async tasks
    await world.init();

    // World.render and World.start give us two ways of producing frames. 
    // For apps with constant animation, we’ll use .start to run a loop, and 
    // for apps that update occasionally, we’ll call .render whenever a new frame is needed.
    // We’ll refer to the second technique as rendering on demand.
    //world.render();

    // window.addEventListener('click', () => {
    //     console.log('clicked');
    //     clicking(world);
    // })
    world.start();

    // world.render();
}

// call main to start the app
main().catch((err) => {
    console.error(err);
});