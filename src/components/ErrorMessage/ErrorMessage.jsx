export default function ErrorMessage({ message }) {
    return (
        <div className="text-center py-20">
            <p className="text-button text-h3">Error: {message}</p>
        </div>
    );
}