// src/components/Sections/Cards/InfoCard.jsx
import React from 'react';
import PropTypes from 'prop-types';

const InfoCard = ({ title, subtitle, content, className }) => {
    return (
        <div className={`group ${className || ''}`}>
            <div className="relative">
                {/* Glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg opacity-0 group-hover:opacity-30 transition duration-500 blur" />

                {/* Card content */}
                <div className="relative p-6 bg-black bg-opacity-40 backdrop-blur-lg rounded-lg border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{title}</h3>
                    {subtitle && <p className="text-blue-300 mb-4 font-medium">{subtitle}</p>}
                    {typeof content === 'string' ? (
                        <p className="text-gray-300 group-hover:text-white transition-colors">{content}</p>
                    ) : (
                        <ul className="space-y-3">
                            {content.map((item, index) => (
                                <li key={index} className="flex items-start space-x-3 group/item">
                                    <span className="text-blue-400 mt-1">•</span>
                                    <span className="text-gray-300 group-hover/item:text-white transition-colors">
                                        {item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
    className: PropTypes.string,
};

export default InfoCard;