import React, { Component } from 'react'
import { Card, CardActionArea, Grid } from '@mui/material'
import AggregatorInfo from './AggregatorInfo'
import CondenserInfo from './CondenserInfo'

export class CondenserCard extends Component {
  render() {
    return (
      <Card sx={{ display: 'flex' }}
        style={{boxShadow: '0px 14px 50px rgba(34, 35, 58, 0.2)'}}
        onClick={this.props.clickHandler}>
        <CardActionArea>
          <Grid container margin={1} spacing={1} >
            <Grid item>
              <img src={`assets/${this.props.condenserData.image}`} height='100' alt='logo' />
            </Grid>
            <Grid item>
              <CondenserInfo condenserData={this.props.condenserData} />
              <hr />
              <AggregatorInfo condenserId={this.props.condenserData.condenserId} />
            </Grid>
          </Grid>
        </CardActionArea>
      </Card>
    )
  }
}

export default CondenserCard
