import HomePage from "../pages/home.jsx";
import Register from "../components/register.jsx";
import Register2 from "../components/register2.jsx";
import ThankYouPage from "../components/thankyou.jsx";

var routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/register/",
    component: Register,
  },
  {
    path: "/register2/",
    component: Register2,
  },
  {
    path: "/thankyou/",
    component: ThankYouPage,
  },
];

export default routes;
