import React from 'react'
import BarPoll from './Ui/BarPoll'
import Benifits from './Ui/Benifits'
import Navbar from './Ui/Navbar'
import Grid from './Ui/Grid'
import { points } from '../constants/data'

function Education() {
  const awarenessPoints = points.awareness_points

  return (
    <div className='min-h-screen bg-[#E0E9F5]'>
        <Navbar />
        <Benifits/>
        <BarPoll />
        <Grid/>
    </div>
  )
}

export default Education