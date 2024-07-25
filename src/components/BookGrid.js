import Card from "./Card";

const BookGrid = ({ genre, volumes, sortOrder }) => {
  return (
    <div className="w-screen flex flex-col items-start">
      <div className="w-full">
        <Card genre={genre} volumes={volumes} sortOrder={sortOrder} />
      </div>
    </div>
  );
};

export default BookGrid;
