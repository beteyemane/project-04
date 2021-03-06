import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'

const BarForm = ({ data, handleChange, handleSubmit, suggestionSelect }) => {

  return(
    <section className="section grey-backgroun">
      <div className="columns">
        <div className="column is-6 is-offset-3">
          <form onSubmit={handleSubmit}>

            <h2 className="title center title-font">ADD A NEW BAR</h2>
            <div className="field">
              <label className="label title-font">Name *</label>
              <div className="control">
                <input
                  className="input"
                  name="name"
                  onChange={handleChange}
                  value={data.name}
                />
              </div>
            </div>

            <div className="field">
              <label className="label title-font">Terrace *</label>
              <div className="control">
                <select className="input" name="terrace" onChange={handleChange} value={data.terrace}>
                  <option value=""></option>
                  <option value="true">Yes! This place has a terrace or nice outside area!</option>
                  <option value="false">No- this is not the best place for sunny days</option>
                </select>
              </div>
            </div>

            <div className="field"> {/* Chanage this to select */}
              <label className="label title-font">Area of London *</label>
              <div className="control">
                <select className="input" name="location" onChange={handleChange} value={data.location}>
                  <option value=""></option>
                  <option value="north">North</option>
                  <option value="south">South</option>
                  <option value="east">East</option>
                  <option value="west">West</option>
                  <option value="west">Central</option>
                </select>
              </div>
            </div>

            <div className="field">
              <label className="label title-font">Description *</label>
              <div className="control">
                <input
                  className="textarea"
                  name="description"
                  onChange={handleChange}
                  value={data.description}
                />
              </div>
            </div>

            <div className="field">
              <label className="label title-font">Please enter an image url *</label>
              <div className="control">
                <input
                  className="input"
                  name="hero"
                  onChange={handleChange}
                  value={data.hero}
                />
              </div>
            </div>

            <div className="field">
              <label className="label title-font">Please select a location *</label>
              <div className="control">
                <MapboxAutocomplete
                  publicKey={process.env.MAPBOX_TOKEN}
                  inputClass='form-control search input'
                  onSuggestionSelect={suggestionSelect}
                  resetSearch={false}
                  name="address"
                />
              </div>
            </div>

            <div className="columns add-place">

              <div className="column is-5">
                <button className="button button-styled">Add Bar</button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default BarForm
