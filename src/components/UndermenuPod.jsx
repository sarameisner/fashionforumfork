'use client';

const platforms = [
  { name: 'Spotify', url: 'https://open.spotify.com/show/3njMuMZISanR5u9SoV2R6Z' },
  { name: 'Podimo', url: 'https://podimo.com' },
  { name: 'Apple Podcast', url: 'https://podcasts.apple.com/dk/podcast/fashion-forum-p%C3%A5-lyd/id1607539242' },
];

const UndermenuPod = () => {
  return (
    <div className="pt-30 lg:pt-5 pb-10 m-auto max-w-screen-xl">
      {/* Dropdown for små skærme */}
      <div className="block lg:hidden px-5 flex justify-between items-center">
        <select
          id="platform-select"
          onChange={(e) => {
            const selectedUrl = e.target.value;
            if (selectedUrl) window.open(selectedUrl, '_blank');
          }}
          className="block w-full cursor-pointer pl-4 py-2 border border-gray-300 rounded bg-white"
        >
          <option value="">Lyt på...</option>
          {platforms.map((platform) => (
            <option key={platform.name} value={platform.url}>
              {platform.name}
            </option>
          ))}
        </select>
      </div>

      {/* Vandrette links for store skærme */}
      <div className="hidden lg:flex justify-start gap-6 items-center px-5">
        {platforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm pt-5 hover:underline transition"
          >
            {platform.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UndermenuPod;
