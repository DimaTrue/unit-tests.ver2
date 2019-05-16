import React from 'react';

function  render(items) {
    return items.map(
        (item, idx) => (
            <li key={idx}>{item}</li>
        )
    );
}

const Top = ({ list: items = [], ...props}) => (
    <ul>{render(items)}</ul>
);

export default Top;
