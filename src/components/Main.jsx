import React, {Component} from 'react'
import {render} from 'react-dom'
import '../scss/components/main.scss';

import SnsLinks from './SnsLinks'

export default class Main extends Component {
  render () {
    return <div class="main">
      <div class="main-inner">
        <h1>code lab.</h1>
        <SnsLinks />
      </div>
    </div>;
  }
}