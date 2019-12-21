import { ADD_ONE_COLUMN, ADD_TWO_COLUMN } from './actions';

export default (tree, { action, data }) => {
  switch (action) {
    case ADD_ONE_COLUMN:
    case ADD_TWO_COLUMN:
      tree.addRow(data);
      break;
    default:
      break;
  }
  //
  return Object.assign({}, tree);
}