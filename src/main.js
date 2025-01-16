import { createApp } from "vue";

//import App from "./App.vue";
//createApp(App).mount("#app");

import UdSection07App from "./modules/udSection07/App.vue";
import FriendContact from "./modules/udSection07/components/FriendContact.vue";
const app = createApp(UdSection07App);
app.component("friend-contact", FriendContact);
app.mount("#app");
