import React, { Component } from 'react'
import { connect } from 'react-redux'

import { actionTypes } from '@/store/actions'

class ReduxTest extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div>
        <h1 className="text-3xl font-bold text-purple-500">Counter: { this.props.counter }</h1>
        <div className="flex justify-center items-center w-full">
          <button
            className={ `h-12 text-white rounded-full font-bold px-8 bg-purple-600 hover:bg-purple-700 transition-all duration-200 mr-16 outline-none`}
            onClick={this.props.incrementCounter}
          >
            Increment
          </button>
          <button
            className={`h-12 text-white rounded-full font-bold px-8 bg-purple-600 hover:bg-purple-700 transition-all duration-200 outline-none`}
            onClick={this.props.decrementCounter}
          >
            Decrement
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  counter: state.counter.counter
})

const mapDispatchToProps = dispatch => ({
  incrementCounter: () => dispatch({ type: actionTypes.INCREMENT_COUNTER }),
  decrementCounter: () => dispatch({ type: actionTypes.DECREMENT_COUNTER })
})

export default connect(mapStateToProps, mapDispatchToProps)(ReduxTest)