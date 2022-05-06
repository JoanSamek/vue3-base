import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";

loadFonts();

import DefLayout from "./views/layouts/DefLayout";

const app = createApp(App).use(router).use(store).use(vuetify);

app.component("DefLayout", DefLayout);

app.mount("#app");
