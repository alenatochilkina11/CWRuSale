import classes from "./Layout.module.css";
import MainNavigationBar from "../MainNavigationBar";

function Layout(props) {
    return (
      <div>
        <MainNavigationBar />
        <main className={classes.main}>{props.children}</main>
      </div>
    );
  }
  
  export default Layout;