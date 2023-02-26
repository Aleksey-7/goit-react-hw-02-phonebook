import PropTypes from 'prop-types';
import { Input, Label, Text } from './Filter.styled';

export const Filter = ({ filter, changeFilter }) => {
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input type="text" value={filter} onChange={changeFilter} />
    </Label>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};
