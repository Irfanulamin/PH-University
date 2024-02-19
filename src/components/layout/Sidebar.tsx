import { sidebarItemsGenerator } from "../../utils/sidebarItemsGenerator";
import { adminPaths } from "../../routes/admin.routes";
import { Layout, Menu } from "antd";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";

const { Sider } = Layout;

const userRole = {
  ADMIN: "admin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const Sidebar = () => {
  let sideBarItems;

  const role = "student";

  switch (role) {
    case userRole.ADMIN:
      sideBarItems = sidebarItemsGenerator(adminPaths, "admin");
      break;
    case userRole.FACULTY:
      sideBarItems = sidebarItemsGenerator(facultyPaths, "faculty");
      break;
    case userRole.STUDENT:
      sideBarItems = sidebarItemsGenerator(studentPaths, "student");
      break;
    default:
      break;
  }

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontSize: "1.5rem",
          color: "white",
          fontWeight: "600",
          padding: "20px",
        }}
      >
        PH University
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={sideBarItems}
      />
    </Sider>
  );
};

export default Sidebar;
