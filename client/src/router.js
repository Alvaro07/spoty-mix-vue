import Vue from "vue";
import Router from "vue-router";
import Login from "./views/Login";
import Dashboard from "./views/Dashboard";
import Mix from "./views/Mix";
import store from "./store/store";

Vue.use(Router);

const prodRoute = "/spoty-mix-vue/"

const router = new Router({
  mode: "history",
  base: "/spoty-mix-vue/",
  routes: [
    {
      path: "/",
      name: "home",
      redirect: { name: "login" }
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        store.state.auth ? next({ name: "dashboard" }) : next();
      }
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
      beforeEnter: (to, from, next) => {
        store.state.auth ? next() : next({ name: "login" });
      }
    },
    {
      path: "/mix",
      name: "mix",
      component: Mix,
      beforeEnter: (to, from, next) => {
        store.state.auth ? next() : next({ name: "login" });
      }
    }
  ]
});

export default router;
