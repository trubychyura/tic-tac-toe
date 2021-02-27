import React from 'react'; 
import {connect} from 'react-redux';

const RefreshBtn = ({refresh})=>{
  return (
    <div 
      className="btn refresh-button btnActive" 
      onClick = {refresh}
    > 
      Restart Game
    </div>
  )
}

const mapDispatchToProps = dispatch =>({
  refresh: ()=>{
    dispatch({type: 'REFRESH'})
  }
})

const ConnectRefreshBtn = connect(
  null,
  mapDispatchToProps
)(RefreshBtn)

export default ConnectRefreshBtn;