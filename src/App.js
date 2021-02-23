import {LoadingProvider} from "./modules/loadingManager/loadingContext";
import Notifier from "./modules/notifier";

function App() {
  return (
    <div className="App">
      <LoadingProvider>
          <Notifier />

      </LoadingProvider>
    </div>
  );
}

export default App;
