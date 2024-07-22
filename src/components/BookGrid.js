import Card from "../components/Card";

const BookGrid = ({ genre, volumes, sort }) => {
	return (
		<div className="w-screen h-screen flex flex-col items-start">
			<div className="w-full">
				<h2>Newest Fiction</h2>
				<Card genre={genre} volumes={volumes} sort={sort} />
			</div>
		</div>
	);
};

export default BookGrid;
