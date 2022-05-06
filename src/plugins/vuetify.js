// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";
import colors from "vuetify/lib/util/colors";

export default createVuetify({
  theme: {
    dark: false,
    themes: {
      light: {
        colors: {
          primary: "#b91d47",
          secondary: colors.red.lighten4,
        },
      },
    },
  },
});
// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
