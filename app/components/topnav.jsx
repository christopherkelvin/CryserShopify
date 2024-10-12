import PropTypes from "prop-types";
export const TopNav = ({ name }) => {
    return (
      <div className="bg-slate-200 p-4 flex dark:bg-slate-800">
        <div className="dark:text-white ">{name}</div>
      </div>
    );
};
TopNav.propTypes = {
  name: PropTypes.string.isRequired,
};
