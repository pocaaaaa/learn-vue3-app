import { createApp } from "vue";
import UdSection07App from "./App.vue";
import FriendContact from "./components/FriendContact.vue";
FriendContact;
const app = createApp(UdSection07App);
app.component("friend-contact", FriendContact);
app.mount("#app");
