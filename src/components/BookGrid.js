import Sort from "./Sort";

const BookGrid = ({ genre, volumes }) => {
	return (
		<div className="w-screen h-screen flex flex-col items-start">
			<div className="w-full">
				<Sort genre={genre} volumes={volumes} />
			</div>
		</div>
	);
};

export default BookGrid;
