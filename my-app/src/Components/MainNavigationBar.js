import { Link } from "react-router-dom";
import classes from "./MainNavigationBar.module.css";

//A UI component to display the navigation bar
function MainNavigationBar() {
  return (
    <header className={classes.header}>
      <div className={classes.logo} data-testid="NavBarLogo">
        <Link to="/" data-testid="infoLink">
          {" "}
          CWRuSale{" "}
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/item-list" data-testid="itemListLink">
              List of Items
            </Link>
          </li>
          <li>
            <Link to="/item-upload" data-testid="itemUploadLink">
              Upload Item
            </Link>
          </li>
          <li>
            <Link to="/item-request" data-testid="itemRequestLink">
              Request Item
            </Link>
          </li>
          <li>
            <Link to="/item-manage" data-testid="itemDeleteLink">
              Manage
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigationBar;
