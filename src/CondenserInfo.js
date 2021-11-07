import { Grid, Typography } from '@mui/material'
import React, { Component } from 'react'

export default class CondenserInfo extends Component {
  render() {
    return (
      <Grid container direction='column' alignItems='left'>
        <Grid item>
          <Typography variant='body2' fontFamily='Roboto' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Condenser Name: {this.props.condenserData.name}
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant='body2' fontFamily='Roboto' fontWeight='bold' fontSize='14px' align='left' paragraph>
            Date commissioned: {new Date(this.props.condenserData.dateAdded).toLocaleString()}
          </Typography>
        </Grid>
      </Grid>
    )
  }
}
