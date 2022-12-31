// IMPORTS //
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card, Container, Row, Col, Button, Label, FormGroup } from 'reactstrap';
import { Formik, Field, Form, ErrorMessage } from "formik";
import ContactImage from '../assets/images/contact_screen.jpg';
import { InstagramEmbed, FacebookEmbed } from 'react-social-media-embed';

// CREATE CONTACT PAGE //
const ContactPage = () => {
    console.log("Contact Page")

    const handleSubmit = () => {
        console.log('Handle Submit');
    }
    const validateCommentForm = () => {
        console.log('Validat Form')
    }

    return (
        <>
            <Helmet>
                <title>Contact Me | Matthew Mayer</title>
            </Helmet>
            <Container>
                <Row style={{ marginBottom: 165 }}>
                    <Col md='8'>
                        <Card>
                            <img src={ContactImage} alt='Envelopes with wax seals' />
                            <div className = 'justify-content-center' style = {{ width: '65%'}}>
                                <Formik
                                initialValues={{
                                    rating: undefined,
                                    author: '',
                                    text: ''
                                }}
                                onSubmit = {handleSubmit}
                                validate={validateCommentForm}
                                >
                                    <Form style = {{ padding: 26 }}>
                                        <FormGroup>
                                            <Label htmlFor='rating'>Your Name</Label>
                                            <Field
                                            name='name'
                                            placeholder='Your Name'
                                            className='form-control'
                                            />
                                            <ErrorMessage name='name'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='rating'>Your Email</Label>
                                            <Field
                                            name='email'
                                            placeholder='Email Address'
                                            className='form-control'
                                            />
                                            <ErrorMessage name='email'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='rating'>Rating</Label>
                                            <Field
                                                name='rating'
                                                as='select'
                                                className='form-control'>
                                                    <option>Select...</option>
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                            </Field>
                                            <ErrorMessage name='rating'>
                                            {(msg) => <p className='text-danger'>{msg}</p>}
                                            </ErrorMessage>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor='messageText'>Message</Label>
                                            <Field
                                                name='messageText'
                                                as='textarea'
                                                rows='12'
                                                className='form-control'
                                                />
                                        </FormGroup>
                                        <Button type='reset' color='danger'>Reset</Button>
                                        &nbsp;
                                        <Button type='submit' color='primary'>Submit</Button>
                                    </Form>

                                </Formik>
                            </div>
                        </Card>
                    </Col>
                    <Col>
                        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 60 }}>
                            <InstagramEmbed url="https://www.instagram.com/mmp_photos/" width={328}/>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#fff', width:328, marginLeft: 44, paddingTop: 16, paddingBottom: 9}}>
                            <FacebookEmbed url="https://www.facebook.com/photo?fbid=10229443675664791&set=a.1512373377763" width={288} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

// EXPORT STATEMENTS //
export default ContactPage;