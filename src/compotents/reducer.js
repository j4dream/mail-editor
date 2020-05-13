import {
  ADD_ONE_COLUMN,
  ADD_TWO_COLUMN,
  ADD_THREE_COLUMN,
  ADD_FOUR_COLUMN,
  FORCE_UPDATE,
} from './actions';

export default (tree, { action, data }) => {
  switch (action) {
    case ADD_ONE_COLUMN:
    case ADD_TWO_COLUMN:
    case ADD_THREE_COLUMN:
    case ADD_FOUR_COLUMN:
      tree.addRow(data);
      break;
    case FORCE_UPDATE:
      return {...tree};
    default:
      break;
  }

  console.log('Content Tree: ', tree);

  return Object.assign({}, tree);
}