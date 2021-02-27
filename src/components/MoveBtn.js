import React from 'react';
import {connect} from 'react-redux';

const MoveBtn = ({fields, winner, nextFieldsStore, prevField, nextField})=>{
  const prevBtnActive = (fields.length ? true : false) && !winner;
  const nextBtnActive = (nextFieldsStore.length ? true : false) && !winner;
  return (
      <div className="moveBtn-container">
        <div 
          className = {prevBtnActive ? "btn btnActive": "btn  "} 
          onClick = {prevBtnActive ? prevField : null}
        > Prev state </div>
        <div 
          className = {nextBtnActive ? "btn btnActive": "btn "} 
          onClick = {nextBtnActive ? nextField : null}
        > Next state </div>
      </div>
  )
}

const mapStateToProps = ({fields, winner, nextFieldsStore}) => ({fields, winner, nextFieldsStore})

const mapDispatchToProps = (dispatch)=>({
  prevField: () => {
    dispatch({type: 'PREV_STATE'})
  },
  nextField: () => {
    dispatch({type: 'NEXT_STATE'})
  }
})

const ConnectMoveBtn = connect(
  mapStateToProps,
  mapDispatchToProps
)(MoveBtn)
export default ConnectMoveBtn;


