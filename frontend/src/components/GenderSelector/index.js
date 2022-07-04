import React from 'react'
import './styles.scss'

export default function GenderSelector({ selected }) {
  return (
    <div className='gender-container'>
      <div
        className={
          selected === 'Female'
            ? 'gender-container-item gender-active'
            : 'gender-container-item'
        }
      >
        Female
      </div>

      <div
        className={
          selected === 'Male'
            ? 'gender-container-item gender-active'
            : 'gender-container-item'
        }
      >
        Male
      </div>
    </div>
  )
}
