// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import Hello from '../components/Hello'

document.addEventListener('DOMContentLoaded', () => {


  ReactDOM.render(
    <div className = "all">
    <Hello/>
    </div>,
    document.body.appendChild(document.createElement('div')),
  )
})
