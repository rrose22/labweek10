import React, { Component } from 'react'

export default class UserFormClass extends Component {
    constructor(props) {
        super(props)
        this.provinces = ['Alberta', 'Nova Scotia', 'British Columbia',
                        'Manitoba','New Brunswick','Newfoundland and Labrador',
                        'Saskatchewan','Prince Edward Island', 'Ontario', 'Quebec']
        this.state = {
            email: '',
            name: '',
            address1: '',
            address2: '',
            city: '',
            postal: '',
            province: ''
        }
    }

    onValueChanged = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSubmitForm = (event) => {
        event.preventDefault()
        const {email, name, address1, address2, city, postal, province } = this.state;
        this.setState({
            submittedEmail: email,
            submittedName: name,
            submittedAddress: address1,
            submittedAddress2: address2,
            submittedCity: city,
            submittedPostal: postal,
            submittedProvince: province
        })
    }

    render() {
    return (
        <div>
            <h1>User Form Class</h1>
            <form onSubmit={(e) => this.onSubmitForm(e)} > 
                    <label for='email'>Email</label>
                    <input 
                        name='email'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Email" />
                    <br></br>
                    <br></br> 
                    <label for='name'>Full Name</label>
                    <input 
                        name='name'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Full Name" />
                    <br></br>
                    <br></br>
                    <label for='adderss1'>Address</label>
                     <input 
                        name='address1'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Address Name" />
                    <br></br>
                    <br></br>
                    <label for='adderss2'>Address 2</label>
                     <input 
                        name='address2'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Apartment, studio, or floor" />
                    <br></br>
                    <br></br>
                    <label for='city'>City</label>
                     <input 
                        name='city'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Address Name" />
                    <br></br>
                    <br></br>
                    <label for='province'>Province</label>
                    <select name='province' onChange={(e) => this.onValueChanged(e)}>
                        {
                            this.provinces.map((province) => (
                                 <option key={province} value={province}>{province}</option>
                            ))
                        }
                    </select>
                    <br></br>
                    <br></br>
                    <label for='postal'>Postal Code</label>
                     <input 
                        name='postal'
                        type="text"
                        onChange={(e) => this.onValueChanged(e)} 
                        placeholder="Enter Postal Code" />
                    <br></br>
                    <br></br>
                    <input 
                        name='btnSubmit'
                        type="submit"
                        value="Login" />
                </form>
         <h2>Email: {this.state.submittedEmail}</h2>
         <h2>Full Name: {this.state.submittedName}</h2>
         <h2>Address: {this.state.submittedAddress}</h2>
         <h2>Address 2: {this.state.submittedAddress2}</h2>
         <h2>City: {this.state.submittedCity}</h2>
         <h2>Postal Code: {this.state.submittedPostal}</h2>
         <h2>Province: {this.state.submittedProvince}</h2>
      </div>
    )
  }
}
