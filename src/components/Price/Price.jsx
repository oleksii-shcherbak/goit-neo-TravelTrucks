export default function Price({ price, className }) {
    return (
        <p className={className}>
            <span className="text-h2">€{price},00</span>
        </p>
    );
}