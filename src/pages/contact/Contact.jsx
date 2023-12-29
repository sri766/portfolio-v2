import React from 'react'
import './style.scss'
import { Form, Button } from 'react-bootstrap'


const Contact = ({mode}) => {

  return (
    <div className={`contact ${mode === 'light'? 'light-mode': ''}`}>
      <div className={`backdrop_img ${mode === 'light' ? 'light-mode' : ''}`}>
          <img src={
            mode === 'light' ? './assets/bg-light.svg' : './assets/bg-about.jpg'
          } alt='bg'/>
        </div>
          <div className="contact_img">
            {
              mode === 'light' ? (
                <img src="./assets/programmer.gif" alt="illustration" />
              ) : (
                <img src="./assets/illustration.jpg" alt="illustration" />
              )
            }
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" placeholder="Enter Name" />
              <Form.Text className="text-muted">
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                </Form.Text>
              </Form.Group>

              <Form.Group className='mb-3' >
                  <Form.Label>
                    Write your post:
                    <textarea
                      name="postContent"
                      defaultValue="Post your Message here!"
                      rows={4}
                      cols={40}
                    />
                  </Form.Label>
                </Form.Group>
                
                <Button type="submit">
                  Submit
              </Button>
          </Form>
    </div>
  )
}

export default Contact
