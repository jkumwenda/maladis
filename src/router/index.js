import { createRouter, createWebHashHistory } from "vue-router";
import AuthLayout from "@/layouts/AuthLayout.vue";
import MainLayout from "@/layouts/MainLayout.vue";
import NotFoundView from "@/views/NotFound.vue";

const routeComponents = {
  AuthLayout,
  MainLayout,
  LoginView: () => import("@/views/auth/Login.vue"),
  RegisterView: () => import("@/views/auth/Register.vue"),
  DashboardView: () => import("@/views/main/dashboard/Dashboard.vue"),
  PracticingLicensesView: () =>
    import("@/views/main/registrations/practicing/PracticingLicenses.vue"),
  RegisterPracticingLicenseView: () =>
    import(
      "@/views/main/registrations/practicing/RegisterPracticingLicense.vue"
    ),
  YourRegistrationView: () =>
    import("@/views/main/registrations/YourRegistration.vue"),
  ProductLicensesView: () =>
    import("@/views/main/registrations/products/ProductLicenses.vue"),
  RegisterProductLicenseView: () =>
    import("@/views/main/registrations/products/RegisterProductLicense.vue"),
  BusinessesView: () =>
    import("@/views/main/registrations/businesses/Businesses.vue"),
  UsersView: () => import("@/views/main/configurations/users/Users.vue"),
  ConfigurationsView: () =>
    import("@/views/main/configurations/Configurations.vue"),
};

// Define your route configurations
const routes = [
  {
    path: "/",
    name: "Auth",
    component: routeComponents.AuthLayout,
    children: [
      {
        path: "/",
        name: "Login",
        component: routeComponents.LoginView,
      },
      {
        path: "/register",
        name: "Register",
        component: routeComponents.RegisterView,
      },
    ],
  },
  {
    path: "/",
    name: "Main",
    component: routeComponents.MainLayout,
    children: [
      {
        path: "/dashboard",
        name: "Dashboard",
        component: routeComponents.DashboardView,
      },
      {
        path: "/practicing-licenses",
        name: "PracticingLicenses",
        component: routeComponents.PracticingLicensesView,
      },
      {
        path: "/register-practicing-license",
        name: "RegisterPracticingLicense",
        component: routeComponents.RegisterPracticingLicenseView,
      },
      {
        path: "/your-registration",
        name: "YourRegistration",
        component: routeComponents.YourRegistrationView,
      },
      {
        path: "/products",
        name: "ProductLicenses",
        component: routeComponents.ProductLicensesView,
      },
      {
        path: "/register-product-license",
        name: "RegisterProductLicense",
        component: routeComponents.RegisterProductLicenseView,
      },

      {
        path: "/businesses",
        name: "Businesses",
        component: routeComponents.BusinessesView,
      },
      {
        path: "/users",
        name: "Users",
        component: routeComponents.UsersView,
      },
      {
        path: "/configurations",
        name: "Configurations",
        component: routeComponents.ConfigurationsView,
      },
    ],
  },
  { path: "/:catchAll(.*)", name: "NotFound", component: NotFoundView },
];

// Create the router instance
const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
