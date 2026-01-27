import { useParams } from 'react-router-dom';
import Header from '../../components/Header/Header';

function CamperDetails() {
    const { id } = useParams();

    return (
        <>
            <Header />
            <div className="container">
                <h1>Camper Details</h1>
                <p>Camper ID: {id}</p>
            </div>
        </>
    );
}

export default CamperDetails;