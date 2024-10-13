import PropTypes from "prop-types";
import { Switch } from "./ui/switch";
import { ToggleMode } from "../hooks/useTopNavHook"
export const TopNav = ({ name }) => {
 
  return (
    <div className="bg-gray-400 p-4 flex dark:bg-slate-800">
      <div className="dark:text-white ">{name}</div>
      <div className="absolute right-5 flex gap-3">
        <Switch onClick={ToggleMode} />
      </div>
    </div>
  );
};
TopNav.propTypes = {
  name: PropTypes.string.isRequired,
};
