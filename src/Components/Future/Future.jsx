import React from 'react'
import './Future.css'
import theme_pattern from '../../assets/theme_pattern.svg'

const Future = () => {
  return (
    <div id='future' className="future">
        <div className ="future-title">
            <h1>Future Plans in Life</h1>
            <img src={theme_pattern} alt="" />
        </div>
        <div className="future-section">
            <div className="future-right">
                <div className="future-para">
                    <p>I aim to become a skilled and respected professional in tech industry, 
                        where I can contribute on building a useful and innovative meaningful projects that create a positive impact. 
                        One of my main goals is to continuously expand my knowledge so that I can not only improve myself but also share what 
                        I’ve learned with others and support them in their growth. I believe that collaboration and mentorship are essential in building a strong tech community.
                        As I progress in my career, I hope to achieve a high-level of success that I will be able to establish my own start-up company. 
                        Through this, I will be able to create solutions that address real-world problems while also providing opportunities for others to grow and succeed in the field.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Future