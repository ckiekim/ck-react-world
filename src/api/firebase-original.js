import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, 
  createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, get, set, remove } from 'firebase/database';
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const database = getDatabase(app);

// login, userInfo, products, orders, blogs, anniversary, schedule, message, notification, user

/*========================= login =========================*/

export function login({email, password}) {
  signInWithEmailAndPassword(auth, email, password)
    .catch(console.error);
}

export function logout() {
  signOut(auth)
    .catch(console.error);
}

export function onUserStateChanged(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updatedUser = user ? await adminUser(user) : null;
    // if (updateUser)
    //   console.log(updatedUser.uid, updatedUser.email);
    callback(updatedUser);
  });
}

async function adminUser(user) {
  return get(ref(database, 'admins'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        const isAdmin = admins.includes(user.uid);
        return {...user, isAdmin};
      }
      return user;
    });
}

export function register({ email, password }) {
  createUserWithEmailAndPassword(auth, email, password)
    .catch(console.error);
}

/*========================= userInfo =========================*/

export async function getUserInfoList() {
  return get(ref(database, 'userInfo'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records.sort((a, b) => b.registeredAt.localeCompare(a.registeredAt));   // 내림차순 정렬
        return records;
      }
      return null;
    }); 
}

export async function getUserInfo(uid) {
  return get(ref(database, `userInfo/${uid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

export async function insertUserInfo(userInfo) {
  const { uid, email, displayName, avatarUrl, job } = userInfo;
  return set(ref(database, `userInfo/${uid}`), {
    uid, email, displayName, avatarUrl, job, role: 'User', status: 'active', 
    isVerified: false, registeredAt: new Date().toISOString()
  });
}

export async function updateUserInfo(userInfo) {
  const { uid } = userInfo;
  return set(ref(database, `userInfo/${uid}`), userInfo);
}

export async function deleteUserInfo(uid) {
  return remove(ref(database, `userInfo/${uid}`));
}

/*========================= products =========================*/

export async function getProductList() {
  return get(ref(database, 'products'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records.sort((a, b) => b.releasedAt.localeCompare(a.releasedAt));
        return records;
      }
      return null;
    }); 
}

export async function getProduct(id) {
  return get(ref(database, `products/${id}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

export async function insertProduct(product) {
  const id = uuid();
  return set(ref(database, `products/${id}`), {
    ...product, id, releasedAt: new Date().toISOString()
  });
}

export async function updateProduct(product) {
  const { id, name, cover, price, priceSale, status, colors, releasedAt } = product;
  if (priceSale)
    return set(ref(database, `products/${id}`), {
      id, name, cover, price, priceSale, status, colors, releasedAt
    });
  else
    return set(ref(database, `products/${id}`), {
      id, name, cover, price, status, colors, releasedAt
    });
}

export async function deleteProduct(id) {
  return remove(ref(database, `products/${id}`));
}

/*========================= carts =========================*/

export async function getCart(id) {
  return get(ref(database, `carts/${id}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

export async function insertCart(cart) {
  return set(ref(database, `carts/${cart.id}`), cart);
}

export async function updateCart(cart) {
  return set(ref(database, `carts/${cart.id}`), cart);
}

export async function deleteCart(id) {
  return remove(ref(database, `carts/${id}`));
}

/*========================= orders =========================*/

export async function getOrderList(uid) {
  return get(ref(database, 'orders'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records.sort((a, b) => b.orderedAt.localeCompare(a.orderedAt));
        if (uid)
          records = records.filter(record => record.uid === uid);
        return records;
      }
      return null;
    }); 
}

export async function getOrder(oid) {
  return get(ref(database, `orders/${oid}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

// oid 값을 반환하여 결제 처리시 사용
export async function insertOrder(order) {
  const oid = uuid();
  await set(ref(database, `orders/${oid}`), {
    ...order, oid, status:'주문완료', orderedAt: new Date().toISOString()
  });
  return oid;
}

export async function updateOrder(order) {
  const { oid } = order;
  return set(ref(database, `orders/${oid}`), order);
}

export async function deleteOrder(oid) {
  return remove(ref(database, `orders/${oid}`));
}

/*========================= blogs =========================*/

export async function getBlogList() {
  return get(ref(database, 'blogs'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records.sort((a, b) => b.createdAt.localeCompare(a.createdAt)); 
        return records;
      }
      return null;
    }); 
}

export async function getBlog(id) {
  return get(ref(database, `blogs/${id}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

export async function insertBlog(blog) {
  const id = uuid();
  const { title, author, cover } = blog;
  return set(ref(database, `blogs/${id}`), {
    id, title, author, cover, view: 0, favorite: 0, comment: 0, share: 0,
    createdAt: new Date().toISOString()
  });
}

export async function updateBlog(blog) {
  const { id } = blog;
  return set(ref(database, `blogs/${id}`), blog);
}

export async function deleteBlog(id) {
  return remove(ref(database, `blogs/${id}`));
}

/*========================= anniversary =========================*/

export async function getAnnivList(adate, email) {
  return get(ref(database, 'anniversary'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records.filter(record => record.adate === adate && 
          (record.email === process.env.REACT_APP_ADMIN_USER || record.email === email)
        );
        return records;
      }
      return null;
    }); 
}

export async function insertAnniv(anniv) {
  const id = uuid();
  const { email, aname, adate, isHoliday } = anniv;
  return set(ref(database, `anniversary/${id}`), {
    id, email, aname, adate, isHoliday
  });
}

export async function updateAnniv(anniv) {
  const { id } = anniv;
  return set(ref(database, `anniversary/${id}`), anniv);
}

export async function deleteAnniv(id) {
  return remove(ref(database, `anniversary/${id}`));
}

/*========================= schedule =========================*/

export async function getSchedList(sdate, email) {
  return get(ref(database, 'schedule'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records
          .filter(record => record.sdate === sdate && record.email === email)
          .sort((a, b) => a.startTime.localeCompare(b.startTime)); 
        return records;
      }
      return null;
    }); 
}

export async function insertSched(sched) {
  const id = uuid();
  return set(ref(database, `schedule/${id}`), {
    id, ...sched
  });
}

export async function updateSched(sched) {
  const { id } = sched;
  return set(ref(database, `schedule/${id}`), sched);
}

export async function deleteSched(id) {
  return remove(ref(database, `schedule/${id}`));
}

/*========================= message =========================*/

export async function getMessageList(email) {
  return get(ref(database, 'message'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records
          .filter(record => record.dstEmail === email)
          .sort((a, b) => b.sentAt.localeCompare(a.sentAt))
          .sort((a, b) => a.status.localeCompare(b.status)); 
        // console.log(records);
        return records;
      }
      return null;
    }); 
}

export async function insertMessage(message) {
  const mid = uuid();
  return set(ref(database, `message/${mid}`), {
    mid, ...message, status: '신규', sentAt: new Date().toISOString()
  });
}

export async function updateMessage(message) {
  const { mid } = message;
  return set(ref(database, `message/${mid}`), message);
}

export async function deleteMessage(mid) {
  return remove(ref(database, `message/${mid}`));
}

/*========================= notification =========================*/

export async function getNotificationList(email) {
  return get(ref(database, 'notification'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records
          .filter(record => record.email === email && record.status === '신규')
          .sort((a, b) => b.createdAt.localeCompare(a.createdAt)); 
        // console.log(records);
        return records;
      }
      return null;
    }); 
}

export async function getNotificationCount(email) {
  return get(ref(database, 'notification'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);
        records = records
          .filter(record => record.email === email && record.status === '신규');
        // console.log(records.length);
        return records.length;
      }
      return 0;
    }); 
}

export async function insertNotification(notification) {
  // console.log(notification);
  const nid = uuid();
  return set(ref(database, `notification/${nid}`), {
    nid, ...notification, status: '신규', createdAt: new Date().toISOString()
  });
}

export async function updateNotification(notification) {
  const { nid } = notification;
  return set(ref(database, `notification/${nid}`), notification);
}

export async function deleteNotification(nid) {
  return remove(ref(database, `notification/${nid}`));
}

/*========================= users =========================*/

export async function getUserList() {
  return get(ref(database, 'users'))
    .then(snapshot => {
      if (snapshot.exists()) {
        const objects = snapshot.val();
        let records = Object.values(objects);   // object를 array로 변환
        // records = records.sort((a, b) => b.registeredAt.localeCompare(a.registeredAt));   // 내림차순 정렬
        return records;
      }
      return null;
    }); 
}

export async function getUser(id) {
  return get(ref(database, `users/${id}`))
    .then(snapshot => {
      if (snapshot.exists()) {
        return snapshot.val();
      }
      return null;
    }); 
}

export async function insertUser(user) {
  const id = uuid();
  const { email, avatarUrl, name, company, role } = user;
  return set(ref(database, `users/${id}`), {
    id, email, avatarUrl, name, company, isVerified: false, status: 'active', role,
    registeredAt: new Date().toISOString()
  });
}

export async function updateUser(user) {
  const { id } = user;
  return set(ref(database, `users/${id}`), user);
}

export async function deleteUser(id) {
  return remove(ref(database, `users/${id}`));
}
