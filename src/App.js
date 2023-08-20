import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { TagsInput } from 'react-tag-input-component';
import InputField from './Components/InputField';
import MyTable from './Components/MyTable';

function App() {
	const [date, setDate] = useState('');
	const [filter, setFilter] = useState(false);
	const [selected, setSelected] = useState([]);

	return (
		<div className="mx-2">
			<h1 className="text-center my-4">My Table</h1>
			<div className="d-flex justify-content-end">
				<input
					value={date}
					onChange={(e) => setDate(e.target.value)}
					type="date"
					className="form-control-md"
				/>
				<Button
					size="sm"
					variant={`outline-${!filter ? 'primary' : 'secondary'}`}
					onClick={() => (!filter ? setFilter(true) : setFilter(false))}
					className="mx-2"
				>
					{!filter ? 'Filter' : 'Clear'}
				</Button>
			</div>

			<MyTable filter={filter} date={date} />

			<div>
				<h1>Input Field Example</h1>
				<pre>{JSON.stringify(selected)}</pre>
				<TagsInput
					value={selected}
					onChange={setSelected}
					name="ports"
					placeHolder="Enter Port Name"
					className="form-control"
					separators={['Enter', ' ']}
				/>
				<em>press enter/space to add new tag</em>
			</div>
		</div>
	);
}

export default App;
