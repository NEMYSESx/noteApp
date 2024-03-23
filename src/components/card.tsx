interface cardProps {
  date: string;
  id: string;
  text: string;
  onCrossClick: (id: string) => void;
}

const Card: React.FC<cardProps> = ({ date, text, onCrossClick, id }) => {
  return (
    <div className="border border-black rounded-xl w-72 pb-4 bg-yellow-300 whitespace-pre-wrap">
      <div className="h-32 w-280 m-1 p-2 outline-none">
        <span>{text}</span>
      </div>
      <div className="flex justify-between ml-2 mr-2">
        <div>{date}</div>
        <button onClick={() => onCrossClick(id)}>X</button>
      </div>
    </div>
  );
};

export default Card;
