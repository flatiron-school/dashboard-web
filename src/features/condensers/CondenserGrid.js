import { Grid, LinearProgress } from '@mui/material'
import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
import CondenserCard from './CondenserCard'
import { useGetCondensersQuery } from '../api/apiSlice'
import classnames from 'classnames'

const CondenserGrid = (props) => {
  const {
    data: condensers = [],
    isLoading,
    isFetching,
    isSuccess,
    isError,
    error,
  } = useGetCondensersQuery()   

  let content

  if (isLoading) {
    content = <LinearProgress text="Loading..." />
  } else if (isSuccess) {
    const renderedCondensers = condensers.map((c, i) => (
      <Grid item key={i} alignItems='baseline'>
        <CondenserCard key={i} clickHandler={props.clickHandler}
          condenserData={c} />
      </Grid>
    ))

    const containerClassname = classnames('condensers-container', {
      disabled: isFetching,
    })

    content = <div className={containerClassname}>{renderedCondensers}</div>
  } else if (isError) {
    content = <div>{error.toString()}</div>
  }

  return (
    <Grid container direction='column' justifyContent='space-around' >
      {content}
    </Grid>
  )
}

export default CondenserGrid