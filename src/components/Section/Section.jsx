
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => {
  return (
    <>
      <h1>{title}</h1>
      {children}
    </>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
//розміщую заголовок і передаю чілдреном statistic