export default function CamperDetailsGallery({ photos }) {
    if (!photos || !photos.length) return null;

    return (
        <div className="grid grid-cols-3 gap-[18px]">
            {photos.map((photo, index) => (
                <div key={index} className="w-full h-[310px] rounded-[10px] overflow-hidden">
                    <img
                        src={photo.original}
                        alt={`Camper photo ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                </div>
            ))}
        </div>
    );
}