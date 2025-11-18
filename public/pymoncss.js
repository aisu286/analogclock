const css = new CSSStyleSheet();

document.adoptedStyleSheets = [css];

css.replaceSync(
    `
    #flexible-container-1080p-land {
    background-color: aqua;
    width: 1920px;
    height: 1080px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: scale(var(--scale)) translate(-50%, -50%);
    transform-origin: left top;
}
    `
);

const window = globalThis;
let SCALE = Math.min(window.innerHeight / 1080, window.innerWidth / 1920);
document.querySelector(":root").style.setProperty("--scale", SCALE);

window.onresize = () => {
    SCALE = Math.min(window.innerHeight / 1080, window.innerWidth / 1920);
    document.querySelector(":root").style.setProperty("--scale", SCALE);
};