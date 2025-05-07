'use client';

const tags = ['Alle jobs', 'Mode', 'Beauty', 'Priser', 'Log ind'];

const UndermenuJob = ({ activeTag, onChangeTag }) => {
  return (
    <div className="pt-30 lg:pt-5 pb-10 m-auto max-w-screen-xl">
      {/* Dropdown for små skærme */}
      <div className="block lg:hidden px-5 flex justify-between items-center">
        <select
          id="tag-select"
          value={activeTag}
          onChange={(e) => onChangeTag(e.target.value)}
          className="block w-[70%] cursor-pointer pl-4 py-2  bg-white"
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <button className=" hover:underline">Min konto</button>
      </div>

      {/* Vandrette knapper for store skærme */}
      <div className="hidden lg:flex justify-between items-center px-5">
        <div className="flex gap-6">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onChangeTag(tag)}
              className={` pr-10 pt-5 transition ${
                activeTag === tag ? 'underline ' : 'hover:underline'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        <div className="pt-5">
          <button className=" hover:underline">Min konto</button>
        </div>
      </div>
    </div>
  );
};

export default UndermenuJob;
