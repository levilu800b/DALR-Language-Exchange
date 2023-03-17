import { toast } from "react-toastify";

function Logout({ setAuth }) {
	try {
		localStorage.removeItem("token");
		setAuth(false);
		toast.success("Logout successfully");
	} catch (err) {
		console.error(err.message);
	}
}
export default Logout;
