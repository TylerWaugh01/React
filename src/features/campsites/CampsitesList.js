import { Col, Row, } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";

const CampsitesList = (props) => {
    return (
    <Row className="ms-auto">
        {props.campsites.map((campsite) => {
        return (
        <Col md='5' className='m-4' key={campsite.id}>
        <CampsiteCard campsite={campsite} />
        </Col>
        );
        })}
    </Row>
    )

};

export default CampsitesList;