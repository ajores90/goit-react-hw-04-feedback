import React from 'react';
import PropTypes from 'prop-types';
import { StyledSection, StyledList, StyledListItem } from './Statistics.styled';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positivePercentage,
}) => {
  return (
    <StyledSection>
      <StyledList>
        <StyledListItem>Good: {good}</StyledListItem>
        <StyledListItem>Neutral: {neutral}</StyledListItem>
        <StyledListItem>Bad: {bad}</StyledListItem>
        <StyledListItem>Total: {totalFeedback}</StyledListItem>
        <StyledListItem>
          Positive feedback: {positivePercentage.toFixed(1)}%
        </StyledListItem>
      </StyledList>
    </StyledSection>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
