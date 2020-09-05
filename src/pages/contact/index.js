import React from 'react'

import Call from '../../components/Call'
import SEO from '../../components/SEO'
import Layout from '../../layouts/index'

const Contact = () => (
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
            className='pt-2 pb-4 text-sm'
            name='contact'
            method='POST'
            data-netlify='true'
            netlify
          >
            <div className='form-group'>
              <label htmlFor='name' className='font-weight-bold'>
                Name
              </label>
              <input
                className='form-control'
                id='name'
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
                rows='5'
                placeholder='Message'
                required='required'
                data-validation-required-message='Please enter a message.'
              />
            </div>
            <div className='d-flex justify-content-end'>
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

export default Contact
