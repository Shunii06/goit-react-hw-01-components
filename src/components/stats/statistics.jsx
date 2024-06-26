import React from 'react';
import PropTypes from 'prop-types';
import './statistics.css';

const Statistics = ({ title, stats }) => {
  return (
    <section className="statistics">
      {title && <h2 className="stats-title">{title}</h2>}
      <ul className="stat-list">
        {stats.map(({ id, label, percentage }, index) => (
          <li key={id} className={`stats-item color-${index % 5}`}>
            <span className="stats-label">{label}</span>
            <span className="stats-percentage">{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
