import React from 'react'
import { Card, CardActionArea, Grid } from '@mui/material'
import AggregatorInfo from './AggregatorInfo'
import CondenserInfo from './CondenserInfo'

const CondenserCard = (props) => {
  return (
    <Card sx={{ display: 'flex' }}
      style={{ boxShadow: '0px 14px 50px rgba(34, 35, 58, 0.2)' }}
      onClick={props.clickHandler}>
      <CardActionArea>
        <Grid container margin={1} spacing={1} >
          <Grid item>
            <img src={`assets/${props.condenserData.image}`} height='100' alt='logo' />
          </Grid>
          <Grid item>
            <CondenserInfo condenserData={props.condenserData} />
            <hr />
            <AggregatorInfo condenserId={props.condenserData.condenserId} />
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  )
}

export default CondenserCard
