import React from 'react';


//using named export
export const Action = (props) => (
	<div>
    <button
      className="big-button"
      onClick={props.handlePickOne}
      disabled={!props.hasOptions}
    >
      What should I do?
      </button>
  </div>
);
