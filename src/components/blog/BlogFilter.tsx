'use client';

interface BlogFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

export function BlogFilter({ categories, activeCategory, onCategoryChange }: BlogFilterProps) {
  return (
    <div className="w-full flex overflow-x-auto pb-2 scrollbar-hide gap-3 items-center mb-6">
      <button 
        onClick={() => onCategoryChange('All Posts')}
        className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${
            activeCategory === 'All Posts'
            ? 'bg-white text-black border-white'
            : 'bg-[#1a1b1e] border-[#333333] text-gray-400 hover:text-white hover:border-gray-500'
        }`}
      >
        All Posts
      </button>
      
      {categories.map((cat) => (
        <button 
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`whitespace-nowrap px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-all border ${
                activeCategory === cat
                ? 'bg-white text-black border-white'
                : 'bg-[#1a1b1e] border-[#333333] text-gray-400 hover:text-white hover:border-gray-500'
            }`}
        >
            {cat}
        </button>
      ))}
    </div>
  );
}
