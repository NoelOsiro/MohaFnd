import React from 'react'
import Card2 from 'react-bootstrap/Card';
import {
    Card,
    Image,
    View,
    Heading,
    Flex,
    Badge,
    Text,
    Button,
} from '@aws-amplify/ui-react';
import { FcBinoculars, FcPhoneAndroid } from 'react-icons/fc';
import './Dash.css'
import { Col, Container, Row } from 'react-bootstrap';


const Dash = () => {
    return (
        <Container>
            <Row className='mt-4'>
                <Col lg={4}>
                    <View>
                        <Card>
                            <Flex direction="row" alignItems="flex-start">
                                <FcPhoneAndroid size={30} />
                                <Flex
                                    direction="column"
                                    alignItems="flex-start"

                                >
                                    <Flex>
                                        <Badge size="small" variation="info">
                                            Plus
                                        </Badge>
                                        <Badge size="small" variation="success">
                                            Verified
                                        </Badge>
                                    </Flex>
                                    <Heading level={3}>
                                        36
                                    </Heading>
                                    <Text as="span">
                                        Appointments Scheduled Today
                                    </Text>
                                    <Button variation="primary">👀 View</Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </View>
                </Col>
                <Col lg={4}>
                    <View>
                        <Card>
                            <Flex direction="row" alignItems="flex-start">
                                <FcPhoneAndroid size={30} />
                                <Flex
                                    direction="column"
                                    alignItems="flex-start"

                                >
                                    <Flex>
                                        <Badge size="small" variation="info">
                                            Plus
                                        </Badge>
                                        <Badge size="small" variation="success">
                                            Verified
                                        </Badge>
                                    </Flex>
                                    <Heading level={3}>
                                        36
                                    </Heading>
                                    <Text as="span">
                                        Appointments Scheduled Today
                                    </Text>
                                    <Button variation="primary">👀 View</Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </View>
                </Col>
                <Col lg={4}>
                    <View>
                        <Card>
                            <Flex direction="row" alignItems="flex-start">
                                <FcPhoneAndroid size={30} />
                                <Flex
                                    direction="column"
                                    alignItems="flex-start"

                                >
                                    <Flex>
                                        <Badge size="small" variation="info">
                                            Plus
                                        </Badge>
                                        <Badge size="small" variation="success">
                                            Verified
                                        </Badge>
                                    </Flex>
                                    <Heading level={3}>
                                        36
                                    </Heading>
                                    <Text as="span">
                                        Appointments Scheduled Today
                                    </Text>
                                    <Button variation="primary">👀 View</Button>
                                </Flex>
                            </Flex>
                        </Card>
                    </View>
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col lg={8}>
                    <Card2 style={{ width: '18rem' }}>
                        <Card2.Header className='text-primary py-3'>Appointments Trend</Card2.Header>
                        <Card2.Body>
                            <Card2.Title>Card Title</Card2.Title>
                            <Card2.Subtitle className="mb-2 text-muted">Card Subtitle</Card2.Subtitle>
                            <Card2.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card2.Text>
                            <Card2.Link href="#">Card Link</Card2.Link>
                            <Card2.Link href="#">Another Link</Card2.Link>
                        </Card2.Body>
                    </Card2>
                </Col>
                <Col lg={4}></Col>
            </Row>

        </Container>

    )
}

export default Dash
