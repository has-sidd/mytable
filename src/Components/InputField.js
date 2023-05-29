import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const InputField = () => {
	const [values, setValues] = useState([]);

	const handleKeyDown = (event) => {
		if (event.keyCode === 32 && event.target.value.trim() !== '') {
			const newValue = event.target.value.trim();
			setValues([...values, { value: newValue, removed: false }]);
			event.target.value = '';
		}
	};

	const removeValue = (index) => {
		const updatedValues = [...values];
		updatedValues.splice(index, 1);
		setValues(updatedValues);
	};

	return (
		<div>
			<div className="input-container">
				{values.map((item, index) => (
					<div key={index} className="value-container">
						{item.value}
						<FaTimes
							className="remove-icon"
							onClick={() => removeValue(index)}
						/>
					</div>
				))}
				<input onKeyDown={handleKeyDown} />
			</div>
		</div>
	);
};

export default InputField;
