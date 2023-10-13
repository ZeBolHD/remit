import React from "react";
import ReactDOM from "react-dom/client";
import { IconContext } from "react-icons";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { App } from "./App";

import "./index.css";
import { store } from "./redux/store";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<IconContext.Provider
					value={{
						size: "auto",
						className: "dark:stroke-primary stroke-primary-dark",
					}}
				>
					<App />
				</IconContext.Provider>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
