import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

const displayLastEmptied = (tDate) => {
  const d = new Date(tDate)
  return d.toLocaleString()
}

export default class AggregatorInfo extends Component {

  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      aggregatorData: {
        currentVolume: {},
        location: {},
      } 
    }
  }

  componentDidMount() {
    const url = `http://localhost:7777/condenser/${this.props.condenserId}` 
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            aggregatorData: result
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
    const { aggregatorData } = this.state
    return (
      <Grid container direction='column' alignItems='left'>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Condenser ID: {aggregatorData.condenserId}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Current Volume Collected: {Number.parseFloat(aggregatorData.currentVolume.liters).toPrecision(5)} liters
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Current Humidity: {Number.parseFloat(aggregatorData.humidity).toPrecision(4)}%
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Last Emptied: {displayLastEmptied(aggregatorData.lastEmptied)}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Uptime: {aggregatorData.uptime} hrs
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='monospace' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Location: {aggregatorData.location.lat}, {aggregatorData.location.lon}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}
