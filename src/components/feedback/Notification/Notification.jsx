import PropTypes from 'prop-types';
import { NotificationWrapper, Message } from './Notification.styled';

const Notification = ({ message }) => {
  return (
    <NotificationWrapper>
      <Message>{message}</Message>
    </NotificationWrapper>
  );
};

export default Notification;

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
