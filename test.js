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