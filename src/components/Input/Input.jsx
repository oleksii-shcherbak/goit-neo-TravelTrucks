export default function Input({ label, id, ...props }) {
    return (
        <div>
            {label && (
                <label htmlFor={id} className="block mb-2 text-gray">
                    {label}
                </label>
            )}
            <input
                id={id}
                className="w-full px-[18px] py-4 bg-inputs rounded-[10px] border-none outline-none"
                {...props}
            />
        </div>
    );
}