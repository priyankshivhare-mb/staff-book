import React from 'react';

const CustomCheckbox = (props) => {
    const checked = props.selectedSlot[props.label];
    return (
        <div className="custom-control custom-checkbox">
            <input
                type="checkbox"
                className="custom-control-input"
                disabled={props.disabled}
                checked={checked}
                onChange={() => props.onChange(!props.checked, props.label)}
                id={props.id+props.label}
            />
            <label className="custom-control-label" for={props.id+props.label}>{props.label}</label>
        </div>
    );
};

export default CustomCheckbox;
