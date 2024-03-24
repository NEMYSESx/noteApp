import { useState } from "react";

interface noteProps {
  onAddNote: (noteText: string) => void;
}

const AddNote: React.FC<noteProps> = ({ onAddNote }) => {
  const [noteText, setNoteText] = useState<string>("");
  const charLimit: number = 134;
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (charLimit - e.target.value.length >= 0) {
      setNoteText(e.target.value);
    }
  };

  const onSaveClick = () => {
    if (noteText.trim().length > 0) {
      onAddNote(noteText);
      setNoteText("");
    }
  };

  return (
    <div className="border border-black rounded-xl w-72 pb-4 bg-green-300">
      <textarea
        className="h-32 w-280 m-1 p-2 outline-none resize-none bg-green-300"
        placeholder="type Something....."
        onChange={handleChange}
        value={noteText}
      ></textarea>
      <div className="flex justify-between ml-2 mr-2 focus:outline-none">
        <div>{charLimit - noteText.length} words remaining</div>
        <button className="border rounded-xl w-12" onClick={onSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;
