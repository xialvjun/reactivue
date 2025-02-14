
import React from 'react'
import { defineComponent } from 'reactivue'
import { useMainStore } from './store'

export const Pinia = defineComponent(
  () => {
    const main = useMainStore()
    return main
  },
  ({ patch, state, doubleCountPlusOne }) => {
    return (
      <div className="card">
        <p>Pinia A</p>
        <button onClick={() => patch({
          counter: state.counter - 1,
        })}>dec -</button>
        <code> </code>
        <table>
          <tbody>
            <tr><td>Counter</td><td>{state.counter}</td></tr>
            <tr><td>Doubled + 1</td><td>{doubleCountPlusOne}</td></tr>
          </tbody>
        </table>
      </div>
    )
  },
)
