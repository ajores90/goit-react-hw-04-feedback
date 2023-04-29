import React from 'react';
import PropTypes from 'prop-types';
import { StyledList, StyledListItem, StyledButton } from './feedback.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <StyledList>
      {options.map(option => (
        <StyledListItem key={option}>
          <StyledButton name={option} onClick={onLeaveFeedback}>
            {option}
          </StyledButton>
        </StyledListItem>
      ))}
    </StyledList>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
