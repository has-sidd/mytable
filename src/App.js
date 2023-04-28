import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import MyTable from './Components/MyTable';

function App() {
	const [date, setDate] = useState('');
	const [filter, setFilter] = useState(false);
	const [header, setHeader] = useState([]);
	const [data, setData] = useState([]);

	const updateState = (newState) => {
		setData(newState);
	};

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

			<MyTable
				filter={filter}
				date={date}
				setHeader={setHeader}
				updateState={updateState}
			/>
		</div>
	);
}

export default App;
