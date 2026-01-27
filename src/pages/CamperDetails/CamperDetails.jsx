import { useParams } from 'react-router-dom';

function CamperDetails() {
    const { id } = useParams();

    return (
        <div>
            <h1>Camper Details</h1>
            <p>Camper ID: {id}</p>
        </div>
    );
}

export default CamperDetails;