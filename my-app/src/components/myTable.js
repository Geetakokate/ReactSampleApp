import React, { useState } from 'react';
import { Table, Row, Col, Tooltip, Button, ConfirmationModal, Form } from 'orion';
import { sortList } from '../utils';

const MyTable = () => {
	const [selectedRows, setSelectedRows] = useState([]),
				[sortBy, setSortBy] = useState('lastUpdated'),
				[sortDirection, setSortDirection] = useState('DESC'),
				[cfModal, setCfModal] = useState(false),
				[alerts, setAlerts] = useState([{}]),
				[tableDummyData, setTableDummyData] = useState([
					{
						"id": "1256",
						"userName": "Shivratna Kumar",
						"sDataMatchedName": "Social Security Nuoui-mbers",
						"lastUpdated": "Jan 22 2019, 14:12",
						"fileName": "abc23.txt.zip",
					},
					{
						"id": "1683",
						"userName": "Anup Kubade",
						"sDataMatchedName": "Social Security Nuoui-mbers",
						"lastUpdated": "Jan 20 2019, 12:02",
						"fileName": "abc23.txt.zip",
					}
				]),
				[tableColumns, setTableColumns] = useState([
					{ dataKey: 'id' },
					{ dataKey: 'fileName',         label: 'File Name',              width: 0, flexGrow: 4 },
					{ dataKey: 'lastUpdated',      label: 'Modified On',            width: 0, flexGrow: 3, sortable: true },
					{ dataKey: 'userName',         label: 'User',                   width: 0, flexGrow: 4 },
					{ dataKey: 'sDataMatchedName', label: 'Sensitive Data Matched', width: 0, flexGrow: 4 }
				]),
	
	onRowClick = (e) => {
		setSelectedRows([e.rowData.id]);
	},

	sortTableData = (sortBy, sortDirection) => {
		let dataList = tableDummyData;
		dataList.sort(sortList(sortBy, sortDirection));
		setTableDummyData(dataList);
		setSortBy(sortDirection);
	},

	openConfirmationModal = () => ( setCfModal(true) ),

	cfToggle = () => ( setCfModal(false) ),

	onContinue = () => {
		setAlerts([{
				message: `Slected row is ${selectedRows[0]}`,
				type: 'success'
			}]);
		setCfModal(false);
	},

	onCloseAlert = () => {};

  return (
		<div style={ { height: "150px" } }>
			<Table
				dataList={ tableDummyData }
				selectedRows={ selectedRows }
				columnsDef={ tableColumns }
				isLoading={ false }
				sortBy={sortBy}
				sortDirection={sortDirection}
				sort={sortTableData}
				onRowClick={onRowClick}
				multiSelect={false}
			/>
			<Row>
				<Col>
					<Tooltip text="Get information from selected row">
						<Button
							label="Click Me"
							type="primary"
							disabled={!selectedRows.length>0}
							onClick={openConfirmationModal}
							className='click-me'
						/>
					</Tooltip>
				</Col>
			</Row>
			<ConfirmationModal
				isOpen={ cfModal }
				toggle={ cfToggle }
				onContinue={ onContinue }
				continueButtonText='Yes'
				cancelButtonText='No'
				message="Display selected row?"
				header={null}
				footer={null}
			/>
		</div>
	)
}

export default MyTable;