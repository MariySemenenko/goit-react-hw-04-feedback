// цей код створює список кнопок фідбеку на основі переданого масиву options(з варіантами фідбеку)
// і встановлює обробник події onClick для кожної кнопки
//при натисканні на кнопку викликається функція onLeaveFeedback


import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          type="button"
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {' '}
          {option}{' '}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

