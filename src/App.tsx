import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Header from "./components/header";
import Search from "./components/search";
import NotesList from "./components/notesList";

interface Note {
  id: string;
  text: string;
  date: string;
}

function App() {
  const [note, setNote] = useState<Note[]>([
    {
      id: nanoid(),
      text: "Hello this is my first Note!!",
      date: "13/03/24",
    },
    { id: nanoid(), text: "yooooo!!", date: "13/03/24" },
  ]);
  const [searchState, setSearchState] = useState<string>("");
  const [darkmode, setDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const savedNotesString = localStorage.getItem("react-notes-app-data");
    if (savedNotesString !== null) {
      const savedNotes = JSON.parse(savedNotesString);
      setNote(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(note));
  }, [note]);

  const onAddNote = (text: string) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString(),
    };

    setNote([...note, newNote]);
  };

  const delNote = (id: string) => {
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
      <Header darkmode={darkmode} handleMode={handleMode} />
      <Search handleSearch={handleSearch} />
      <div className="w-935 p-5 mr-auto ml-auto">
        <NotesList
          note={note.filter((note) =>
            note.text.toLowerCase().includes(searchState.toLowerCase())
          )}
          onAddNote={onAddNote}
          delNote={delNote}
          searchState={""}
        />
      </div>
    </div>
  );
}

export default App;
