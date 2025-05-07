'use client'

const tags = ['Alle artikler', 'Karriere', 'Innovation & bæredygtighed', 'Regnskab'];

const Undermenu = ({ activeTag, onChange }) => {


  return (
    <div className="pt-30 lg:pt-5 pb-10 m-auto">
      {/* Dropdown for små skærme */}
      <div className="block lg:hidden ">
       
        <select
          id="tag-select"
          value={activeTag}
          onChange={(e) => onChange(e.target.value)}
          className="block w-[300px] cursor-pointer pl-5 bg-white"
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
      </div>

      {/* Vandrette knapper for store skærme */}
      <div className="hidden lg:flex pl-5">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onChange(tag)}
            className={`cursor-pointer pr-10 pt-5 ${
              activeTag === tag ? 'underline' : 'hover:underline'
            } transition`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Undermenu;
