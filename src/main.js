import { createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css';
import router from './router'

// Vue 애플리케이션 인스턴스 생성
const app = createApp(App);

// Ant Design Vue 플러그인 등록
app.use(Antd);

// 라우터 등록
app.use(router);

// 애플리케이션을 DOM에 마운트
app.mount('#app');