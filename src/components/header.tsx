interface headerProps {
  darkmode: boolean;
  handleMode: () => void;
}

const Header: React.FC<headerProps> = ({ darkmode, handleMode }) => {
  return (
    <nav className="h-32 w-935 p-5 mb-8 mr-auto ml-auto">
      <div className="flex justify-between">
        <h1
          className={`text-5xl ${
            darkmode ? " text-white bg-black" : "text-black bg-white"
          }`}
        >
          Notes
        </h1>
        <button
          className={`border rounded-lg h-7 mt-5 ${
            darkmode ? "text-white" : "text-black"
          }`}
          onClick={handleMode}
        >
          Day'n'Nite
        </button>
      </div>
    </nav>
  );
};

export default Header;
