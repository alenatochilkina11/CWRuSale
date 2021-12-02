import Card from "../Components/Elems/Card";
import classes from "./Info.module.css";
function InfoPage() {
  return (
    <section>
      <Card>
        {/* <img src="https://i.postimg.cc/NjjGYG8T/cwrusale-logo.png" alt="logo" width="200" height="200"/> */}
        <center>
          <img
            src="https://i.postimg.cc/NjjGYG8T/cwrusale-logo.png"
            alt="logo"
            width="150"
            height="150"
          />
          <h1> About CWRUSale </h1>
        </center>
        <p className={classes.p}>
          CWRUSale is a buying and selling web application meant for university
          students. The goal of the application is to provide a stress free and
          straight forward resale experience that is better than the currently
          used CampusGroups by displaying seller contact information clearly,
          allowing for item organization by category, and alerting users via SMS
          text message when a new item is available in a category that they are
          interested in.
          <h2>Sellers</h2>
          <ul>
            <li>List an Item</li>
            <ul>
              <li>Name</li>
              <li>Case ID (by default the preference for communication)</li>
              <li>Phone number (Optional)</li>
              <li>Item information(category, description, price, image)</li>
            </ul>
            <li>Delete a Listing</li>
            <li>
              Only listings that fall into these seven categories may be
              created: Textbook, Academic, Bedroom, Bathroom, Kitchen,
              Technology, Living Room.
            </li>
          </ul>
          <h2>Buyers</h2>
          <ul>
            <li>Search for an Item by Category</li>
            <li>Sign up for Category Alerts</li>
            <li>Delete an Alert Request</li>
          </ul>
          <br />
        </p>
      </Card>
      {/* <h1> User Agreement </h1>
      <iframe
        src="https://drive.google.com/file/d/1Mg6UC0B5LssJRpe7BkZzVRweJjjQCpMU/preview"
        width="640"
        height="480"
        allow="autoplay"
      ></iframe> */}
    </section>
  );
}

export default InfoPage;
