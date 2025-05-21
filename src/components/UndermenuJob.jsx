'use client';

import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

const tags = ['Alle jobs', 'Mode', 'Beauty', 'Annonce priser', 'Log ind'];

const UndermenuJob = ({ activeTag, onChangeTag = () => {} }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (tag) => {
    onChangeTag(tag);

    // Navigér til korrekt side
    if (tag === 'Alle jobs') {
      router.push('/jobportal');
    }
  };

  return (
    <div className="pt-30 lg:pt-5 pb-10 m-auto max-w-screen-xl">
      {/* Dropdown for små skærme */}
      <div className="block lg:hidden px-5 flex justify-between items-center">
        <select
          id="tag-select"
          value={activeTag}
          onChange={(e) => {
            const selectedTag = e.target.value;

            if (selectedTag === 'Annonce priser') {
              router.push('/anonncepris');
            } else if (selectedTag === 'Alle jobs') {
              router.push('/jobportal');
            }

            onChangeTag(selectedTag);
          }}
          className="block w-[70%] cursor-pointer pl-4 py-2"
        >
          {tags.map((tag) => (
            <option key={tag} value={tag}>
              {tag}
            </option>
          ))}
        </select>
        <button className="hover:underline cursor-pointer">Min konto</button>
      </div>

      {/* Vandrette knapper for store skærme */}
      <div className="hidden lg:flex justify-between items-center px-5">
        <div className="flex gap-6">
          {tags.map((tag) => {
            // Check hvis Annonce priser er aktiv
            if (tag === 'Annonce priser') {
              const isActive = pathname === '/anonncepris';
              return (
                <Link
                  href="/anonncepris"
                  key={tag}
                  className={`pr-10 pt-5 transition cursor-pointer ${
                    isActive ? 'underline' : 'hover:underline'
                  }`}
                >
                  {tag}
                </Link>
              );
            }

            return (
              <button
                key={tag}
                onClick={() => handleClick(tag)}
                className={`pr-10 pt-5 transition cursor-pointer ${
                  activeTag === tag ? 'underline' : 'hover:underline'
                }`}
              >
                {tag}
              </button>
            );
          })}
        </div>
        <div className="pt-5">
          <button className="hover:underline cursor-pointer">Min konto</button>
        </div>
      </div>
    </div>
  );
};

export default UndermenuJob;
