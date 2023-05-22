import { BrowserRouter as Router } from "react-router-dom";

import Routes from "./routes/index.jsx";
import { ToastContainer } from "react-toastify";

const App = () => {
	return (
		<Router>
			<Routes></Routes>
			<ToastContainer />
		</Router>
	);
};
export default App;
