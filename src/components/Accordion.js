const Accordion = ({ title, content, isOpen, setOpen }) => {
  return (
    <div className="mt-5">
      <div
        className="font-bold p-2 text-white bg-black flex justify-between cursor-pointer"
        onClick={() => setOpen(!isOpen)}
      >
        <span>{title}</span>↓
      </div>
      {isOpen ? <p className="font-thin p-2">{content}</p> : null}
    </div>
  );
};

export default Accordion;
