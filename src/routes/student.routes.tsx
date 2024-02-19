import About from "../pages/student/About";
import Contact from "../pages/student/Contact";
import Login from "../pages/student/Login";
import Register from "../pages/student/Register";

export const studentPaths = [
  {
    name: "Contact",
    path: "contact",
    element: <Contact />,
  },
  {
    name: "About",
    path: "about",
    element: <About />,
  },
  {
    name: "Register",
    path: "register",
    element: <Register />,
  },
  {
    name: "Login",
    path: "login",
    element: <Login />,
  },
];
