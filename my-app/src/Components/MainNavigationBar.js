import { Link } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

function MainNavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> CWRuSale </div>
      <nav>
        <ul>
          <li>
            <Link to="/item-list">List of Items</Link>
          </li>
          <li>
            <Link to="/item-upload">Upload Item</Link>
          </li>
          <li>
            <Link to="/item-request">Request Item</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationBar;
