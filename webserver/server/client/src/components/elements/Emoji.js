// code by: https://medium.com/@seanmcp/%EF%B8%8F-how-to-use-emojis-in-react-d23bbf608bf7
// find and copy emojis from: https://unicode.org/emoji/charts/full-emoji-list.html

import React from 'react';

const Emoji = props => (
    <span
        className="emoji"
        role="img"
        aria-label={props.label ? props.label : ""}
        aria-hidden={props.label ? "false" : "true"}
    >
        {props.symbol}
    </span>
); 
    
export default Emoji;