import { createStore } from 'vuex';
import { auth, usersCollection } from '@/includes/firebase';

export default createStore({
  state: {
    authModalShow: false,
    userLoggedIn: false,
  },
  mutations: {
    toggleAuthModal: (state) => {
      state.authModalShow = !state.authModalShow;
    },
    toggleAuth(state) {
      state.userLoggedIn = !state.userLoggedIn;
    },
  },
  getters: {
    // authModalShow: (state) => state.authModalShow,
  },
  actions: {
    async register(ctx, payload) {
      const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

      await usersCollection.doc(userCred.user.uid).set({
        name: payload.name,
        email: payload.email,
        age: payload.age,
        country: payload.country,
        tos: payload.tos,
        created_at: new Date().toISOString(),
      });
      // update unique userid ไปยัง authentication ของ firebase
      await userCred.user.updateProfile({
        displayName: payload.name,
      });

      ctx.commit('toggleAuth');
    },
    async login(ctx, payload) {
      await auth.signInWithEmailAndPassword(payload.email, payload.password);

      this.commit('toggleAuth');
    },
    init_login({ commit }) {
      const user = auth.currentUser;

      if (user) {
        commit('toggleAuth');
      }
    },
    async logout(ctx) {
      await auth.signOut();

      ctx.commit('toggleAuth');
    },
  },
});
