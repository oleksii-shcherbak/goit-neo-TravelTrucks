import clsx from 'clsx';

export default function Tabs({ activeTab, onChange, list }) {
  return (
    <ul className="mt-[60px] flex items-center border-b gap-10 mb-[44px]">
      {list.map(tab => (
        <li key={tab}>
          <button
            type="button"
            className={clsx('text-h3 pb-6 block relative', {
              'after:absolute after:-bottom-[3px] after:left-0 after:right-0 after:h-[5px] after:bg-button':
                activeTab === tab,
            })}
            onClick={() => onChange(tab)}
          >
            {tab}
          </button>
        </li>
      ))}
    </ul>
  );
}
