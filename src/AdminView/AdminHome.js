import React from 'react'

import './AdminHome.css';
import '../custom-style.css'
import Header from '../Header/Header'
import {Button, Input, Container, Row, Card, CardBody, CardTitle, CardSubtitle, CardText} from 'reactstrap'

class AdminHome extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        const user = 'user';

        return (
            <div>
                <Header/>
                <div className = "adminHome container-fluid p-4" >
                    <div className = "row" >
                        <a className = "admin-top col-9">
                            <h1 className="">Admission Team Board: {user}</h1>
                        </a>
                    </div>
                    <div className={"row p-3"}>
                        <Button className= {"styles.button"}>Add New Student</Button>
                        <Input className="col-2 mr-sm-2 form-control ml-auto" type="search" placeholder="Search" aria-label="Search"/>
                        <Button className="col-1 my-2 my-sm-0 button" type="submit">Search</Button>
                    </div>
                    {/*<Container className={"cardView p-4 "}>*/}
                        {/*<Row>*/}
                            {/*<Card className="w-25">*/}
                                {/*<CardBody>*/}
                                    {/*<CardTitle>Card title</CardTitle>*/}
                                    {/*<CardSubtitle>Card subtitle</CardSubtitle>*/}
                                {/*</CardBody>*/}
                            {/*</Card>*/}
                            {/*<Card>*/}

                            {/*</Card>*/}
                        {/*</Row>*/}
                    {/*</Container>*/}

                </div>

            </div>

    )
    }
}

export default AdminHome