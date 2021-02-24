import React from "react";
import {LoadingProvider} from "./modules/loadingManager/loadingContext";
import Notifier from "./modules/notifier";
import {SnackbarProvider} from "notistack";

function App() {
    return (
        <div className="App">
            <SnackbarProvider
                dense
                maxSnack={3}
                preventDuplicate
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}>
                <LoadingProvider>
                    <Notifier/>

                </LoadingProvider>
            </SnackbarProvider>
        </div>
    );
}

export default App;
