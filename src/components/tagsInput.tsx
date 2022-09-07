interface TagsInputProps {
  tags: React.ComponentState;
  setTags: React.Dispatch<React.SetStateAction<Array<string>>>;
}

const TagsInput: React.FC<TagsInputProps> = ({ tags, setTags }) => {
  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter") return;
    const value = e.currentTarget.value;
    if (!value.trim()) return;
    setTags([...tags, value]);
    e.currentTarget.value = "";
  }

  function removeTag(index: number) {
    setTags(tags.filter((el: string, i: number) => i !== index));
  }

  return (
    <div className="flex flex-col justify-center w-72">
      <input
        onKeyDown={handleKeyDown}
        type="text"
        className="h-auto"
        placeholder="Type something"
      />
      {tags.map((tag: string, index: number) => (
        <div
          className="flex p-4 bg-white shadow-md rounded-sm m-px z-50"
          key={`tag-${index}`}
        >
          <span
            className="w-auto text-slate-100 bg-orange-600 rounded-sm cursor-pointer"
            onClick={() => removeTag(index)}
          >
            {getCheckMarkIcon()}
          </span>
          <span className="ml-8">{tag}</span>
        </div>
      ))}
    </div>
  );
};

export default TagsInput;

function getCheckMarkIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}
