import Card from "./card";
import AddNote from "./addNote";

type Note = {
  id: string;
  text: string;
  date: string;
  searchState?: string;
};

interface notesListProps {
  note: Note[];
  onAddNote: (text: string) => void;
  delNote: (id: string) => void;
  searchState: string;
}

const NotesList: React.FC<notesListProps> = ({ note, onAddNote, delNote }) => {
  return (
    <div className="grid grid-cols-auto gap-4">
      {note.map((note) => (
        <Card
          key={note.id}
          id={note.id}
          date={note.date}
          text={note.text}
          onCrossClick={delNote}
        />
      ))}
      <AddNote onAddNote={onAddNote} />
    </div>
  );
};

export default NotesList;
