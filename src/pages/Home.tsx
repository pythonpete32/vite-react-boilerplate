import type { FunctionComponent } from "../common/types";
import { Link } from "@tanstack/router";
import { Tag } from "@aragon/ods";

const Home = (): FunctionComponent => {
	return (
		<div className="bg-blue-300  font-bold w-screen h-screen flex flex-col justify-center items-center ">
			<Link to="/settings" className="text-white text-4xl mt-4">
				Go to Settings
			</Link>
			<Link
				to="/dao/:id"
				params={{ id: "1" }}
				className="text-white text-4xl mt-4"
			>
				<Tag colorScheme="primary" label="DAO1" />
			</Link>
		</div>
	);
};

export default Home;
