import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddPost from "../views/AddPost.vue";
import About from "../views/About.vue";
import Post from "../views/Post.vue";
import EditPost from "../views/EditPost.vue";
import Signup from "../views/Signup.vue"
import Login from "../views/Login.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/add-post",
    name: "addPost",
    component: AddPost,
  },
  {
    path: "/edit-post/:id",
    name: "edit-post",
    component: EditPost,
  },
  {
    path: "/post/:id",
    name: "post",
    component: Post,
  },
  {
    path: "/onas",
    name: "onas",
    component: About,
  },
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
