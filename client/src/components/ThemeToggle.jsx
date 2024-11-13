import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";

export const ThemeToggle = () => {
  const { isNightTheme, toggleNightTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleNightTheme}>
      {isNightTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};
