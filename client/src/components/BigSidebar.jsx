import { Navlinks } from "./Navlinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
  const { isShowSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          isShowSidebar
            ? "sidebar-container "
            : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks isBigSidebar />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
