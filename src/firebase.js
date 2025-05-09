// src/firebase.js
import { initializeApp }    from 'firebase/app';
import { getAuth }          from 'firebase/auth';
import { getDatabase }      from 'firebase/database';

// 上面在控制台复制的那段配置
const firebaseConfig = {
  apiKey:            "AIzaSyCv5K96007Ap9ZNj1sA2ZB7TtS1HEE-_1qI",
  authDomain:        "easy-market-e4e5d.firebaseapp.com",
  projectId:         "easy-market-e4e5d",
  storageBucket:     "easy-market-e4e5d.appspot.com",
  messagingSenderId: "25905503199",
  appId:             "1:25905503199:web:1181907df26b961bd8426a",
  measurementId:     "G-RGZ4JP0Z32"  // measurementId 可选
};

// 初始化 Firebase
const app = initializeApp(firebaseConfig);

// 导出 Auth 和 Realtime Database 实例
export const auth = getAuth(app);
export const db   = getDatabase(app);
