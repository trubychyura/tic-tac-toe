import React from 'react'; 
import {connect} from 'react-redux';

const Message = ({winner, fields}) =>{
  const nextMove = fields.length % 2 ? 'O' : 'X';
  return (
    <div className="message">
      <h1>{winner ? `${winner} WON!!!` :`next move: ${nextMove}`}</h1>
    </div>
  )
}

const mapStateToProps = ({winner, fields})=> ({winner, fields});

const ConnectMessage = connect(
  mapStateToProps
)(Message)

export default ConnectMessage;

