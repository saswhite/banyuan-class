import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { Cancel } from '../../action'
import * as ActionType from '../../Redux/ActionType'

export default function Model() {

  let isShow = useSelector(state => state.button.isShow)
  let content = useSelector(state => state.button.clickTarget)

  let dispatch = useDispatch()

  return (
    isShow ? (
      <div className="model-container">
        <div className="model">
          <div>你点击的是{content}</div>
          <button onClick={() => {
            dispatch(Cancel());
          }} className="btn">确定</button>
        </div>

      </div>
    ) : null
  )
}
