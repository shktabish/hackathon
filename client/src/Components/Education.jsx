import React from 'react'
import BarPoll from './Ui/BarPoll'
import Benifits from './Ui/Benifits'
import Navbar from './Ui/Navbar'
import { points } from '../constants/data'

function Education() {
  const awarenessPoints = points.awareness_points

  return (
    <div className='min-h-screen bg-[#E0E9F5]'>
        <Navbar />
        <Benifits/>
        <BarPoll />
        <div className='text-4xl font-Grotesk font-semibold px-4 my-4'>Points on Mental Health</div>
        <div className='grid grid-cols-2 gap-6 px-4'>
          {awarenessPoints.map((point, index) => (
            <div className='' key={index}>
              <h3 className='text-xl font-semibold'>{point.title}</h3>
              <p>{point.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Education