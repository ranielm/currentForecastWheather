import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

axios.defaults.xsrfCookieName = "csrftoken";
axios.defaults.xsrfHeaderName = "X-CSRFToken";

const backend = {
  state: {
    local: "http://localhost:8080",
    frontLocalhost: "localhost",
  },
  mutations: {
    setBackend(state, URL) {
      state.URL = URL;
      state.authority = URL + "/api/authority";
    },
    setToken(state, token) {
      localStorage.setItem("token", token);
      state.token = token;
    }
  },
  getters: {
    getBackend(state) {
      return state;
    }
  }
};

const user = {
  state: {
    countryDefault: "BR",
    labelAdmin: "ADMIN",
    labelAgent: "AGENT",
    labelUser: "USER",
    displayName: "",
    admin: localStorage.getItem("admin"),
    domain: localStorage.getItem("domain"),
    email: localStorage.getItem("email"),
    firstName: localStorage.getItem("firstName"),
    genre: localStorage.getItem("genre"),
    departments: localStorage.getItem("departments"),
    lastName: localStorage.getItem("lastName"),
    id: localStorage.getItem("id"),
    name: localStorage.getItem("name"),
    profile: localStorage.getItem("profile"),
    username: localStorage.getItem("username"),
    updateUser: localStorage.getItem("updatedUser"),
    locale: localStorage.getItem("locale")
  },
  mutations: {
    setUser(state, user) {
      if (user) {
        state.admin = user.admin;
        state.displayName = user.displayName;
        state.domain = user.domain;
        state.email = user.email;
        state.firstName = user.firstName;
        state.genre = user.genre;
        state.profile = user.type;
        state.authority = user.authority;
        state.authorityId = user.authority.id;
        state.departments = user.departments;
        state.lastName = user.lastName;
        state.id = user.id;
        state.username = user.username;
        state.name = user.name;
        state.updatedUser = user.updatedUser;
        state.locale = user.locale;
      }
      else {
        state.authorityId = undefined;
      }
    },
    setLocale(state, locale) {
      state.locale = locale;
    }
  },
  getters: {
    getUser(state) {
      return state;
    },
    getCountryDefault(state) {
      return state.countryDefault;
    },
    getAuthorityId(state) {
      return state.authorityId;
    },
    getLocale(state) {
      return state.locale;
    }

  }
};
const store = new Vuex.Store({
  modules: {
    backend: backend,
    user: user
  }
});

export default store;
