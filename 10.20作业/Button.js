import React from 'react'

import * as ActionType from '../Redux/ActionType'

/* style */
import '../style/Button.css'

/* component */
import Model from '../Component/Button/Model'

import { useDispatch } from 'react-redux'

import { Click } from '../action'

export default function Button() {

  let dispatch = useDispatch()

  let clickShow = (target) => {
    dispatch(Click(target))
  }

  return (
    <div>
      <div className="btn-container">
        <button onClick={() => { clickShow('click1') }}>click1</button>
        <button onClick={() => { clickShow('click2') }}>click2</button>
        <button onClick={() => { clickShow('click3') }}>click3</button>
      </div>

      <Model></Model>
    </div>
  )
}
