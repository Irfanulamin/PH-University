const adminPaths2 = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: "AdminDashboard",
  },
  {
    name: "User Management",
    children: [
      {
        name: "Create Admin",
        path: "create-admin",
        element: "CreateAdmin",
      },
      {
        name: "Create Student",
        path: "create-student",
        element: "CreateStudent",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "Createfaculty",
      },
    ],
  },
];

export const adminRoutes = adminPaths2.reduce((acc, item) => {
  if (item.name && item.element) {
    acc.push({
      path: item.path,
      element: item.element,
    });
  }
  if (item.children) {
    item.children.forEach((child) => {
      acc.push({
        path: child.path,
        element: child.element,
      });
    });
  }
  return acc;
}, []);

const newArray = adminPaths2.reduce((acc, item) => {
  if (item.name && item.element) {
    acc.push({
      key: item.name,
      label: "NAVLINK",
    });
  }
  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "NAVLINK",
      })),
    });
  }
  return acc;
}, []);

console.log(JSON.stringify(newArray));
console.log(adminRoutes);
