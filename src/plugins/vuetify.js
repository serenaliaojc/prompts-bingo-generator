import '@fortawesome/fontawesome-free/css/all.css'
import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'fa',
  },
  theme: {
    themes: {
      light: {
        "primary": "#00acc1",
        "secondary": "#607d8b",
        "accent": "#ec407a",
        "error": "#FF5252",
        "info": "#2196f3",
        "success": "#4caf50",
        "warning": "#FB8C00"
      }
    }
  },
});