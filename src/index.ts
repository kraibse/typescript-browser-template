/**
 * This file is the entrypoint of browser builds.
 * The code executes when loaded in a browser.
 */

// import * as p5 from "p5/global";
import { GameManager } from './gamemanager'
import { AsteroidField } from "./scene";

const viewWidth = window.innerWidth;
const viewHeight = window.innerHeight;

const gm: GameManager = new GameManager(viewWidth, viewHeight);
gm.loadScene(AsteroidField);

export const scene = (p: p5) => {
    p.setup = () => {
        gm.loadSettings();
    }

    p.draw = () => {
        gm.draw();
    }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
(window as any).gm = gm; // instead of casting window to any, you can extend the Window interface: https://stackoverflow.com/a/43513740/5433572

console.log("Initiated global gamemanager variable `gm`.");
