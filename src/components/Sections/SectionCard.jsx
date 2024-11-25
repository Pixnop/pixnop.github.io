import React from 'react';
import PropTypes from 'prop-types';

const SectionCard = ({ title, subtitle, items, className }) => {
    return (
        <div className={`p-6 bg-black bg-opacity-50 rounded-lg ${className || ''}`}>
            <h3 className="text-2xl font-bold mb-4">{title}</h3>
            {subtitle && <p className="text-blue-300 mb-2">{subtitle}</p>}
            <ul className="space-y-2">
                {items.map((item, index) => (
                    <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

SectionCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    className: PropTypes.string,
};

export default SectionCard;