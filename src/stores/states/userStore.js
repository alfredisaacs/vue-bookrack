import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
        show: false,
        isLogged: false,
        id: '',
        userName: '',
        email: '',
    }),
  actions: {
    showLogin() {
        this.show = true
    },
    closeLogin() {
        this.show = false
    },
    logUser(isLogged, email, id) {
        this.isLogged = isLogged;
        this.email = email;
        this.id = id;
    },
    logOut() {
        this.isLogged = false;
        this.email = '';
    }
  }
});