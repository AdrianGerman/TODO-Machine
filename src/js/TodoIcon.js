import { ReactComponent as CheckSVG } from "../img/completev.svg";
import { ReactComponent as DeleteSVG } from "../img/deletex.svg";

const iconTypes = {
  check: <CheckSVG />,
  delete: <DeleteSVG />,
};

function TodoIcon({ type }) {
  return (
    <span className={`Icon Icon-svg Icon-${type}`}>{iconTypes[type]}</span>
  );
}

export { TodoIcon };
