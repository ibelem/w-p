import { App } from 'vue';
import {
  ElIcon, ElLoading, ElCard, ElButton, ElCalendar,
} from 'element-plus';

/**
 * https://github.com/element-plus/vite-plugin-element-plus
 * https://github.com/element-plus/unplugin-element-plus
 * @param app {App}
 */
export default function styleImport(app: App) {
  [ElButton, ElCard, ElLoading, ElIcon, ElCalendar].forEach((v) => {
    app.use(v);
  });
  return app;
}
