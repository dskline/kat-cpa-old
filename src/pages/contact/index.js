import React, { useEffect, useRef, useState } from 'react'

import Call from '../../components/Call'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

const STRING_CONTACT_FORM_SUBMITTED = "Submitted! We'll be in touch soon."

const Contact = () => {
  const [isContactFormSubmitted, setIsContactFormSubmitted] = useState(false)
  const formRef = useRef()

  useEffect(() => {
    if (isContactFormSubmitted) {
      setTimeout(() => setIsContactFormSubmitted(false), 8000)
    }
  }, [isContactFormSubmitted])

  return (
    <Layout bodyClass='page-contact'>
      {/* eslint-disable-next-line react/jsx-pascal-case */}
      <SEO title='Contact' />
      <div className='intro intro-small'>
        <div className='container'>
          <div className='row'>
            <div className='col-12'>
              <h1>Contact</h1>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-12 mb-6'>
            <Call button={false} />
          </div>
          <div className='col-12 col-md-8'>
            <div>
              {`You can also send us a quick message through our contact form below,
            and we'll get back to you as soon as possible.`}
            </div>
            <form
              ref={formRef}
              className='pt-2 pb-4 text-sm'
              name='contact'
              method='POST'
              data-netlify='true'
              onSubmit={(e) => {
                e.preventDefault()
                setIsContactFormSubmitted(true)
                formRef.current.reset()
              }}
            >
              <div className='form-group'>
                <label htmlFor='name' className='font-weight-bold'>
                  Name
                </label>
                <input
                  className='form-control'
                  id='name'
                  name='name'
                  type='text'
                  placeholder='Name'
                  required='required'
                  data-validation-required-message='Please enter your name.'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='email' className='font-weight-bold'>
                  Email Address
                </label>
                <input
                  className='form-control'
                  id='email'
                  name='email'
                  type='email'
                  placeholder='john.doe@email.com'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='phone' className='font-weight-bold'>
                  Phone Number
                </label>
                <input
                  className='form-control'
                  id='phone'
                  name='phone'
                  type='tel'
                  placeholder='(123) 456-7890'
                  required='required'
                  data-validation-required-message='Please enter your phone number.'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='message' className='font-weight-bold'>
                  Message
                </label>
                <textarea
                  className='form-control'
                  id='message'
                  name='message'
                  rows='5'
                  placeholder='Message'
                  required='required'
                  data-validation-required-message='Please enter a message.'
                />
              </div>
              <div className='d-flex align-items-center justify-content-end'>
                <div
                  className={`text-sm pr-2 fade ${
                    isContactFormSubmitted ? 'show' : ''
                  }`}
                >
                  {STRING_CONTACT_FORM_SUBMITTED}
                </div>
                <button type='submit' className='btn btn-primary btn-xl'>
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
