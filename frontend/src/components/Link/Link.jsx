import "./Link.css";
const Link = ({ isExternal, children, to }) => {
  return (
    <div className="link">
      {isExternal ? (
        <div className="external">
          <a href={to} target="_blank">
            {children} <img src="./src/assets/ext.png" />
          </a>
        </div>
      ) : (
        <div>
          {" "}
          <a href={to}>{children}</a>
        </div>
      )}
    </div>
  );
};

export default Link;
