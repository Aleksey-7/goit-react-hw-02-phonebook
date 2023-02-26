import PropTypes from 'prop-types';
import { Text, Wrapper } from './Message.styled';

export const Message = ({ text }) => {
  return (
    <Wrapper>
      <Text>{text}</Text>
    </Wrapper>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};
