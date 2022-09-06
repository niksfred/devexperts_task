import React from "react";

function getPopupIcon() {
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
        d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
}

export interface RecipeProps {
  title: string;
  timeToPrepare: string;
  imageUrl: string;
  ingredients: [];
  preparationMethod: {};
}

const RecipeCard = ({
  title,
  timeToPrepare,
  imageUrl,
  ingredients,
  preparationMethod,
}: RecipeProps) => {
  //   const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="relative w-72 shadow-md rounded-md">
      <div className="p-4">
        <h2 className="text-gray-900 text-2xl font-semibold">{title}</h2>
        <span className="font-normal text-gray-600">{timeToPrepare}</span>
      </div>
      <div>
        <img src={imageUrl} alt="dish" />
      </div>
      <div className="p-4 mb-8">
        <ul className="font-normal text-gray-600 list-disc p-4">
          {ingredients.map((el, index) => (
            <li key={`${title}-ingredient-${index}`}>{el}</li>
          ))}
        </ul>
      </div>
      <div className="absolute bottom-4 left-4">
        <button>
          <i>{getPopupIcon()}</i>
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
