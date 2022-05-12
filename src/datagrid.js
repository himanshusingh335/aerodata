import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
    { field: 'sl_no', headerName: 'Sl_no' },
    { field: 'business_code', headerName: 'Business_code' },
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

const SearchGrid = ({ advancedSearch }) => {
    const [tableData, setTableData] = useState([])
    useEffect(() => {
        fetch("http://localhost:8080/B2B_invoice_backend/transactions?invoiceId=" + advancedSearch[0] + "&documentId=" + advancedSearch[1] + "&custNumber=" + advancedSearch[2] + "&bYear=" + advancedSearch[3] + "")
            .then((data) => data.json())
            .then((data) => setTableData(data))

    }, [])

    return (
        <div style={{ height: 700, width: '100%', color: 'white' }}>
            <DataGrid
                rows={tableData}
                columns={columns}
                getRowId={(row) => row.sl_no}
                pagination={true}
                pageSize={10}
                rowsPerPageOptions={[10, 20]}
                checkboxSelection={true}
                onSelectionModelChange={itm => console.log(itm)}
                style={{
                    color: 'white',
                }}

            />
        </div>
    )
}

export default SearchGrid