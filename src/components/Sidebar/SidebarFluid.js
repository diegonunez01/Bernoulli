
import { useState } from 'react'
import {Button, ButtonGroup, Col, Form, Row, Container} from 'react-bootstrap'
import CreateFluidMixture from './Forms/CreateFluidMixture'
import DeleteFluidMixture from './Forms/DeleteFluidMixture'
import {SavedMixtureList} from './Forms/SavedMixtureList'



function SidebarFluid(props) {
    const [savedMixtures, setSavedMixtures] = useState([])
    const [saveModalShow, setSaveModalShow] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    // console.log(saveModalShow)

    const handleCreateMixture = () => {
        setSaveModalShow(true)
    }

    const handleDeleteMixture = () => {
        //Modal popup to delete a mixture (Are you sure?)
    }

    return (
        // big container with two buttons on the bottom and a list of saved fluids on the top
        <div>
            <Container>
                <CreateFluidMixture saveModalShow={saveModalShow} setSaveModalShow={setSaveModalShow}/>
                <DeleteFluidMixture show={deleteModalShow}/>
            </Container>
            <Row>
                <Col>
                    <ButtonGroup>
                        <Button variant="primary" onClick={handleCreateMixture}>Create Mixture</Button>
                        <Button variant="danger" onClick={()=>handleDeleteMixture}>Delete Mixture</Button>
                    </ButtonGroup>
                </Col>
            </Row>
            <Row>
                <Col>
                    <SavedMixtureList/>
                </Col>
            </Row>
        </div>
    )
    
}

export default SidebarFluid