import { Route, Switch } from "react-router-dom";
import ItemsListPage from "./Page/ItemsList";
import ItemsUploadPage from "./Page/ItemUpload";
import ItemsRequestPage from "./Page/ItemRequest";
import InfoPage from "./Page/Info";
import Layout from "./Components/Layout/Layout";
import ItemsDeletePage from "./Page/ItemDelete"

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact={true}>
          <InfoPage />
        </Route>
        <Route path="/item-list" exact={true}>
          <ItemsListPage />
        </Route>
        <Route path="/item-upload" exact={true}>
          <ItemsUploadPage />
        </Route>
        <Route path="/item-request" exact={true}>
          <ItemsRequestPage />
        </Route>
        <Route path="/item-manage" exact={true}>
          <ItemsDeletePage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
