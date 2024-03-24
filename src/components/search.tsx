interface searchProps {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<searchProps> = ({ handleSearch }) => {
  return (
    <div className="mt-8 h-7">
      <input
        className="border rounded-2xl w-full p-1 pl-4"
        placeholder="Search..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default Search;
