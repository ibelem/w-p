import { createGlobalState, useDark } from '@vueuse/core';

export const generateHTML = (
  payload: Record<string, any>,
  isDark?: boolean,
) => `<html class="${isDark ? 'dark' : ''}">
  <head>
    <style id="_style">${payload.css}</style>
    <script type="module" id="_script">
       ${payload.typescript}
    </\\script>
  </head>
  <body>
    ${payload.html}
    </body>
</html>`;

export const useDarkGlobal = createGlobalState(() => useDark());

export const initialEditorValue = {
  typescript:
  `async function createProject() {
  const proj = new Project("path_to_config");
  // TODO: should be handled in constructor of Project
  proj.srcPath = "/home/jonathan/code/wdemo/native_projects/tetris";
  // setup the environment\n
  // TODO: ensure emscripten env is actually loaded - this should be done by wrapper scripts
  // or the container. Here maybe only need to do a double check
  if ((await H.runCommand("emcc --version", { silent: true })).code !== 0) {
    log.fatal("emscripten not in path - not installed or not source into env yet");
  } else {
    log.info("found emscripten in path");
  }
  return proj;
}`,
  json: `{
  "name": "webnizer",
  "version": "0.0.1",
  "description": "Tookit to help the conversion of native apps/libs to Web version",
  "main": "dist/index.js"
}`,
  html: '<div id="webnizer">\n</div>',
};
