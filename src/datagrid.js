import React, { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'number', headerName: 'Flight Number' },
    { field: 'model', headerName: 'Business_code' },
    { field: 'cust_number', headerName: 'Cust_number' },
    { field: 'clear_date', headerName: 'Clear_date' },
    { field: 'business_year', headerName: 'Business_year' },
    { field: 'doc_id', headerName: 'Doc_id' },
    { field: 'posting_date', headerName: 'Posting_date' },
    { field: 'document_create_date', headerName: 'Document_create_date' },
    { field: 'due_in_date', headerName: 'Due_in_date' },
    { field: 'invoice_currency', headerName: 'Invoice_currency' },
    { field: 'document_type', headerName: 'Document_type' },
    { field: 'posting_id', headerName: 'Posting_id' },
    { field: 'total_open_amount', headerName: 'Total_open_amount' },
    { field: 'baseline_create_date', headerName: 'Baseline_create_date' },
    { field: 'cust_payment_terms', headerName: 'Cust_payment_terms' },
    { field: 'invoice_id', headerName: 'Invoice_id' },
]

const SearchGrid = ({ flightStatus, setFlightStatus, flightNumber, date }) => {
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'aerodatabox.p.rapidapi.com',
                'X-RapidAPI-Key': '091d3ca15fmshf687b8d71d5b41ep15a8d9jsn26fd0bb2a445'
            }
        };
        fetch('https://aerodatabox.p.rapidapi.com/flights/number/' + flightNumber + '/' + date + '', options)
            .then(response => response.json())
            .then(response => setFlightStatus(response))
            .catch(err => console.error(err));
    }, [])

    return (
        <div style={{ height: 700, width: '100%', color: 'black' }}>
            <DataGrid
                rows={flightStatus}
                columns={columns}
                getRowId={(row) => row.number}
                pagination={true}
                pageSize={10}
                rowsPerPageOptions={[10, 20]}
                checkboxSelection={true}
                onSelectionModelChange={itm => console.log(itm)}

            />
        </div>
    )
}

export default SearchGrid