
import { useState } from 'react'
import {Button, ButtonGroup, Col, Form, Row, Container, Modal} from 'react-bootstrap'
import CreateFluidMixture from './Forms/CreateFluidMixturre'
import DeleteFluidMixture from './Forms/DeleteFluidMixture'
import {SavedMixtureList} from './Forms/SavedMixtureList'
import {FluidFormDict} from './Forms/CreateFluidMixturre'



function SidebarFluid(props) {
    const [savedMixtures, setSavedMixtures] = useState([])
    const [saveModalShow, setSaveModalShow] = useState(false)
    const [deleteModalShow, setDeleteModalShow] = useState(false)
    const [validationErrorMessage, setValidationErrorMessage] = useState("")
    const [currentFormData, setCurrentFormData] = useState({})
    const [currentForm, setCurrentForm]=useState(null)

    
    // console.log(saveModalShow)
    const formOnChange = (e) => {
        e.preventDefault()
    }
    const handleCreateMixture = () => {
        setSaveModalShow(true)
        setCurrentForm('New')
    }

    const handleDeleteMixture = () => {
        //Modal popup to delete a mixture (Are you sure?)
        setCurrentForm('Saved')
    }


    const handleSaveMixture = () => {
    }
    return (
        // big container with two buttons on the bottom and a list of saved fluids on the top
        <div>
            <Container>
                {/* <CreateFluidMixture saveModalShow={saveModalShow} setSaveModalShow={setSaveModalShow}/>
                <DeleteFluidMixture show={deleteModalShow}/> */}
                <Modal show={saveModalShow} onHide={() => setSaveModalShow(false)}>
                    <Modal.Header closeButton>
                        <Modal.Title> New Mixture</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {CreateFluidMixture(formOnChange)}
                        {validationErrorMessage && <p style={{ marginTop: '3px', color: 'red' }}>{validationErrorMessage}</p>}
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn btn-secondary" onClick={() => setSaveModalShow(false)}>
                            Close
                        </Button>
                        <Button className="btn btn-primary" onClick={handleSaveMixture}>
                            Save
                        </Button>
                    </Modal.Footer>
                </Modal>


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