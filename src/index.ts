import { createApp } from "vue/dist/vue.esm-browser";
import SmartyUI from './entry'


createApp({
    template:`
        <div>
            <SButton>普通按钮</SButton>
            <SButton color="green">普通按钮</SButton>
            <SButton color="gray">普通按钮</SButton>
            <SButton color="yellow">普通按钮</SButton>
            <SButton color="red">普通按钮</SButton>
        </div>
    `
}).use(SmartyUI).mount("#app");