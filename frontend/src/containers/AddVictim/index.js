import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.scss'

import Input from '../../components/Input'
import GenderSelector from '../../components/GenderSelector'

export default function AddVictim() {
  const [state, setState] = useState({
    fName: 'ggdog',
    lName: 'dss',
    age: 20,
    sex: 'Female',
    region: 'Oromia',
    zone: 'Zone',
    woreda: 'woreda',
    kebelle: 'Kebele',
  })

  const handleSubmit = () => {
    console.log(state)

    axios
      .post('http://localhost:4000/victim', { ...state })
      .then((res) => {
        console.log(res.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  const onValueChanged = (name) => {
    return (e) => {
      setState({
        ...state,
        [name]: e.target.value,
      })
    }
  }

  return (
    <div className='add-container'>
      <div className='add-container-header'>
        <span>Register victims </span>
      </div>
      <div className='add-name-container'>
        <div className='add-name-container-name'>
          <div className='add-container-label'>First name</div>
          <Input
            placeholder={'Enter name'}
            value={state.fName}
            onChange={onValueChanged('fName')}
          ></Input>
        </div>
        <div className='add-name-container-name'>
          <div className='add-container-label'>Last name</div>
          <Input
            placeholder={'Enter last name'}
            value={state.lName}
            onChange={onValueChanged('lName')}
          ></Input>
        </div>
      </div>

      <div className='add-name-container-full'>
        <div className='add-container-label'>Gender</div>
        <GenderSelector selected={state.sex} />
      </div>

      <div className='add-name-container-full'>
        <div className='add-container-label'>Age</div>
        <Input
          placeholder={'Enter age'}
          type={'number'}
          value={state.age}
          onChange={onValueChanged('age')}
        ></Input>
      </div>
      <div className='spacer'></div>
      <div className='spacer'></div>

      <div className='add-name-container'>
        <div className='add-name-container-name'>
          <div className='add-container-label'>Region</div>
          <Input
            placeholder={'Select region'}
            list='region'
            onChange={onValueChanged('region')}
          ></Input>
        </div>
        <div className='add-name-container-name'>
          <div className='add-container-label'>Zone</div>
          <Input
            placeholder={'Enter zone name '}
            value={state.zone}
            onChange={onValueChanged('zone')}
          ></Input>
        </div>
      </div>

      <div className='spacer'></div>
      <div className='add-name-container'>
        <div className='add-name-container-name'>
          <div className='add-container-label'>Woreda</div>
          <Input
            placeholder={'Enter woreda name'}
            value={state.woreda}
            onChange={onValueChanged('woreda')}
          ></Input>
        </div>
        <div className='add-name-container-name'>
          <div className='add-container-label'>Kebelle</div>
          <Input
            placeholder={'Enter kebelle name'}
            onChange={onValueChanged('kebelle')}
            value={state.kebelle}
          ></Input>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          bottom: 48,
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          width: 'calc(50% )',
          transform: 'translate(50%,0)',
        }}
      >
        <button className='btn' onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  )
}
