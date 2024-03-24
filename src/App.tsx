import { useState, useEffect } from "react";
import Card from "./components/card";
import { nanoid } from "nanoid";
import AddNote from "./components/addNote";

function App() {
  const [searchState, setSearchState] = useState("");
  const [darkmode, setDarkMode] = useState(false);

  const [note, setNote] = useState([
    {
      id: nanoid(),
      text: "Hello this is my first Note!!",
      date: "13/03/24",
    },
    { id: nanoid(), text: "yooooo!!", date: "13/03/24" },
  ]);

  const [currentDate, setCurrentDate] = useState<string>("");

  useEffect(() => {
    console.log("Retrieving notes from local storage...");
    const savedNotesString = localStorage.getItem("react-notes-app-data");

    if (savedNotesString) {
      const savedNotes = JSON.parse(savedNotesString);
      console.log("Retrieved notes:", savedNotes);
      setNote(savedNotes);
    }
  }, []);

  useEffect(() => {
    const date = new Date();
    const formattedDate = date.toLocaleDateString();
    setCurrentDate(formattedDate);
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(note));
  }, [note]);

  const onAddNote = (text: string) => {
    const newNote = {
      id: nanoid(),
      text: text,
      date: currentDate,
    };

    setNote([...note, newNote]);
  };

  const onCrossClick = (id: string) => {
    const newNote = note.filter((note) => note.id !== id);
    setNote(newNote);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(e.target.value);
  };

  const handleMode = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <div className={`${darkmode ? "bg-black" : "bg-white"}`}>
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
        <div className="mt-8 h-7">
          <input
            className="border rounded-2xl w-full p-1 pl-4"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </nav>
      <div className="w-935 p-5 mr-auto ml-auto">
        <div className="grid grid-cols-auto gap-4">
          {note
            .filter((note) => note.text.toLowerCase().includes(searchState))
            .map((note) => (
              <Card
                key={note.id}
                id={note.id}
                date={note.date}
                text={note.text}
                onCrossClick={() => onCrossClick(note.id)}
              />
            ))}
          <AddNote onAddNote={onAddNote} />
        </div>
      </div>
    </div>
  );
}

export default App;
