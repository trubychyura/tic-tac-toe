import React from 'react';
import { connect } from 'react-redux';
import { initialField } from './../helper/helper';
import Message from './Message.js';
import RefreshBtn from './RefreshBtn.js';
import MoveBtn from './MoveBtn.js';

const Game = ({ fields, winner, addImg }) => {
  const links = fields.length ? fields[fields.length - 1] : initialField;
  return (
    <>
      <div className='title'>
        <h1>Tic-Tac-Toe</h1>
      </div>
      <Message />
      <div className='box-container'>
        {links.map((link, i) => {
          return link ? (
            <div className='box' key={i}>
              <img src={link} alt='IMG' />
            </div>
          ) : (
            <div
              className='box'
              onClick={winner ? null : () => addImg(i)}
              key={i}
            ></div>
          );
        })}
      </div>
      <MoveBtn />
      <RefreshBtn />
    </>
  );
};

const mapStateToProps = ({ fields, winner }) => ({ fields, winner });

const mapDispatchToProps = (dispatch) => ({
  addImg: (index) => {
    dispatch({ type: 'MAKE_MOVE', index });
  },
});

const ConnectGame = connect(mapStateToProps, mapDispatchToProps)(Game);

export default ConnectGame;
