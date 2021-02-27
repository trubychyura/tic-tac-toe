import { initialState, checkWinner, initialField } from '../helper/helper';
import X from './../img/X.png';
import O from './../img/O.png';

const REFRESH = 'REFRESH';
const MAKE_MOVE = 'MAKE_MOVE';
const PREV_STATE = 'PREV_STATE';
const NEXT_STATE = 'NEXT_STATE';

export const rootReducer = (state = initialState, action) => {
  const { fields, nextFieldsStore } = state;

  switch (action.type) {
    case MAKE_MOVE: {
      const fieldsLength = fields.length;
      const newField = fieldsLength
        ? [...fields[fieldsLength - 1]]
        : [...initialField];
      newField[action.index] = fieldsLength % 2 ? O : X;
      return {
        ...state,
        fields: [...fields, newField],
        nextFieldsStore: [],
        winner: checkWinner(newField, action.index, fieldsLength),
      };
    }
    case REFRESH:
      return initialState;
    case PREV_STATE: {
      const newFields = [...fields];
      const nextField = newFields.pop();
      return {
        ...state,
        fields: newFields,
        nextFieldsStore: [...nextFieldsStore, nextField],
      };
    }
    case NEXT_STATE: {
      const newNextFieldsStore = [...nextFieldsStore];
      const prevField = newNextFieldsStore.pop();
      return {
        ...state,
        fields: [...fields, prevField],
        nextFieldsStore: newNextFieldsStore,
      };
    }
    default:
      return state;
  }
};
