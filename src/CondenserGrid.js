import { Grid } from '@mui/material'
import React, { Component } from 'react'
import CondenserCard from './CondenserCard'

export default class CondenserGrid extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoaded: false,
      condenserData: [],
    }
  }

  componentDidMount() {
    const url = `http://localhost:8080/api/v1/condenser`
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            condenserData: result
          })
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          })
        }
      )
  }

  render() {
    return (
      <Grid container justifyContent='space-evenly' spacing={1}>
        {
          this.state.condenserData.map((e, i) => {
            return (
              <Grid item key={i} alignItems='baseline'>
                <CondenserCard key={i} clickHandler={this.props.clickHandler}
                  condenserData={e} />
              </Grid>
            )
          })
        }
      </Grid>
    )
  }
}
