import classes from "./Layout.module.css";
import MainNavigationBar from "../MainNavigationBar";

//Lyout of the page displayed in App
function Layout(props) {
  return (
    <div>
      <MainNavigationBar />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
