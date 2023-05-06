import { Table } from 'react-bootstrap';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
import { data, headings } from '../Api/tabledata';

const MyTable = ({ filter, date }) => {
	const [day, month, year] = date.split('-');
	const newDate = `${year}/${month}/${day}`;

	return (
		<div className="my-4">
			<ReactHTMLTableToExcel
				id="test-table-xls-button"
				className="download-table-xls-button btn btn-success mb-3"
				table="table-to-xls"
				filename="tablexls"
				sheet="tablexls"
				buttonText="Download as XLS"
			/>
			<Table id="table-to-xls" responsive striped bordered hover size="sm">
				<thead>
					<tr>
						{headings.map((heading, index) => {
							return <th key={index}>{heading}</th>;
						})}
					</tr>
				</thead>
				<tbody>
					{!filter
						? data.map((row, index) => {
								return (
									<tr key={index}>
										{Object.keys(row).map((key, index) => {
											return <td key={index}>{row[key]}</td>;
										})}
									</tr>
								);
						  })
						: data
								.filter((row) => row['Date Started'] === newDate)
								.map((row, index) => {
									return (
										<tr key={index}>
											{Object.keys(row).map((key, index) => {
												return <td key={index}>{row[key]}</td>;
											})}
										</tr>
									);
								})}
				</tbody>
			</Table>
		</div>
	);
};

export default MyTable;
