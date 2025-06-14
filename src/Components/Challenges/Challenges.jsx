import React from 'react'
import './Challenges.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import Services_Data from '../../assets/services_data'

const Challenges = () => {
  return (
    <div id='challenges' className='challenges'>
        <div className="challenges-title">
            <h1>Challenges & Learnings</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="challenges-container">
            {Services_Data.map((challenge,index)=>{
                return <div key={index} className='challenges-format'>
                    <h3>{challenge.s_no}</h3>
                    <h2>{challenge.s_name}</h2>
                    <p>{challenge.s_desc}</p>
                    <div className='challenges-readmore'>
                        <img src="" alt="" />
                    </div>
                </div>
            })}
        </div>
    </div>
  )
}

export default Challenges