import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCbleho_qFaS6-LUoeHBANRTMT26v-aXss",
  authDomain: "contai-735e6.firebaseapp.com",
  projectId: "contai-735e6",
  storageBucket: "contai-735e6.appspot.com",
  messagingSenderId: "158932422116",
  appId: "1:158932422116:web:d7290c0c725487cf5f4bf1",
  measurementId: "G-LNXJGW95FJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

document.getElementById("orderForm").addEventListener("submit", async function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const service = document.getElementById("service").value;
  const note = document.getElementById("note").value;

  try {
    const docRef = await addDoc(collection(db, "orders"), {
      name,
      service,
      note,
      status: "đợi xác nhận",
      timestamp: new Date()
    });
    alert("Đơn hàng của bạn đã được gửi với mã #" + docRef.id);
    document.getElementById("transferCode").textContent = "ContAI - #" + docRef.id;
  } catch (error) {
    alert("Lỗi khi gửi đơn, vui lòng thử lại!");
    console.error(error);
  }
});
