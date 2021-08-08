import { useState } from "react";

const CollapseCard = ({ children, title }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <div className={collapse ? "collapse-card is-active" : "collapse-card"}>
      <div
        className="collapse-card-trigger"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <div className="icon-text is-flex is-justify-content-space-between">
          <span className="is-size-6 has-text-black has-text-weight-semibold">
            {title}
          </span>
          <span>
            {collapse ? (
              <box-icon name="chevron-up"></box-icon>
            ) : (
              <box-icon name="chevron-down"></box-icon>
            )}
          </span>
        </div>
      </div>
      <div className="collapse-card-menu">
        <div className="collapse-card-content">{children}</div>
      </div>
    </div>
  );
};

export default CollapseCard;
