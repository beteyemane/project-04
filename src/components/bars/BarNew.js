import React from 'react'
import axios from 'axios'

import Auth from '../../lib/Auth'

import BarForm from './BarForm'

class BarsNew extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {
        name: '',
        adress: '',
        lat: '',
        lng: '',
        terrace: '',
        description: '',
        hero: '',
        location: ''
      }
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.suggestionSelect = this.suggestionSelect.bind(this)
  }

  handleChange({ target: { name, value }}) {
    const data = {...this.state.data, [name]: value}
    this.setState({ data })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/bars', this.state.data,
        { headers: {Authorization: `Bearer ${Auth.getToken()}`}})
      .then(() => this.props.history.push('/bars'))
      .catch(err => alert(err.message))
  }

  suggestionSelect(result, lat, lng ) {
    const data = {...this.state.data }
    const errors = {...this.state.errors }
    this.setState({ data, errors })
  }

  render() {
    return(
      <main className="section">
        <div className="container">
          <BarForm
            data={this.state.data}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            suggestionSelect={this.suggestionSelect}
          />
        </div>
      </main>
    )
  }
}

export default BarsNew
