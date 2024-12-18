import React, { useMemo } from 'react';
import { useTable, usePagination } from 'react-table';
import Navdash from './Navdash';
import { MdArrowBackIos } from "react-icons/md";
import { MdArrowForwardIos } from "react-icons/md";
import gif from '../../Images/giff.gif'

const Jobtracker = () => {
  // Sample job data
  const data = useMemo(
    () => [
      { jobTitle: 'UI/UX Designer', company: 'Tech Mahindra', dateApplied: '2024-08-01', status: 'Applied' },
      { jobTitle: 'Product Manager', company: 'Google', dateApplied: '2024-08-05', status: 'Interview' },
      { jobTitle: 'Backend Developer', company: 'Amazon', dateApplied: '2024-08-12', status: 'Rejected' },
      { jobTitle: 'Graphic Designer', company: 'Facebook', dateApplied: '2024-08-15', status: 'Offer' },
      { jobTitle: 'Frontend Developer', company: 'Microsoft', dateApplied: '2024-08-18', status: 'Applied' },
      { jobTitle: 'Data Scientist', company: 'IBM', dateApplied: '2024-08-20', status: 'Interview' },
      { jobTitle: 'DevOps Engineer', company: 'Salesforce', dateApplied: '2024-08-22', status: 'Rejected' },
      { jobTitle: 'Product Designer', company: 'Adobe', dateApplied: '2024-08-25', status: 'Offer' },
      { jobTitle: 'Digital Marketer', company: 'HubSpot', dateApplied: '2024-08-28', status: 'Applied' },
      { jobTitle: 'Software Engineer', company: 'Apple', dateApplied: '2024-09-01', status: 'Interview' },
      { jobTitle: 'Project Manager', company: 'Oracle', dateApplied: '2024-09-03', status: 'Rejected' },
      { jobTitle: 'Business Analyst', company: 'SAP', dateApplied: '2024-09-07', status: 'Offer' },
      { jobTitle: 'QA Engineer', company: 'Netflix', dateApplied: '2024-09-10', status: 'Applied' },
      { jobTitle: 'System Administrator', company: 'Cisco', dateApplied: '2024-09-12', status: 'Interview' },
      { jobTitle: 'Machine Learning Engineer', company: 'NVIDIA', dateApplied: '2024-09-15', status: 'Rejected' },
      { jobTitle: 'Database Administrator', company: 'MongoDB', dateApplied: '2024-09-17', status: 'Offer' },
      { jobTitle: 'Network Engineer', company: 'Juniper Networks', dateApplied: '2024-09-20', status: 'Applied' },
      { jobTitle: 'Cloud Architect', company: 'AWS', dateApplied: '2024-09-22', status: 'Interview' },
      { jobTitle: 'Cybersecurity Analyst', company: 'CrowdStrike', dateApplied: '2024-09-25', status: 'Rejected' },
      { jobTitle: 'Front-End Developer', company: 'GitHub', dateApplied: '2024-09-28', status: 'Offer' },
      { jobTitle: 'Software Developer', company: 'Red Hat', dateApplied: '2024-09-30', status: 'Applied' },
    ], 
    []
  );

  // Define columns
  const columns = useMemo(
    () => [
      {
        Header: 'Job Title',
        accessor: 'jobTitle', // accessor is the "key" in the data
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Date Applied',
        accessor: 'dateApplied',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => (
          <div className="status-cell">
            <span className={`status-indicator ${value.toLowerCase()}`}></span>
            {value}
          </div>
        ),
      },
    ],
    []
  );

  // Use the useTable hook with pagination
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    previousPage,
    nextPage,
    state: { pageIndex },
    pageOptions, 
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 }, 
    },
    usePagination
  );

  return (
    <>
      <div className="job">
        <Navdash title='Job Tracker'/>
      </div>
      <div className="job-tracker-table">
        <h4 style={{
          color:'#4042E2',
          padding:'20px 0'
        }}>My Applications</h4>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.length > 0 ? (
              page.map((row) => {
                prepareRow(row);
                return (
                  <tr {...row.getRowProps()}>
                    {row.cells.map((cell) => (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    ))}
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan={columns.length}>No data available</td>
              </tr>
            )}
          </tbody>
        </table>

        {/* Pagination controls */}
        <div className="pagination-controls">
          <div className="page-info"  style={{
              fontFamily:'sharp sans'
            }}>
            Showing:<span>  {page.length}entries</span> 
          </div>
          <div className="pagination">
            <button onClick={() => previousPage()} disabled={!canPreviousPage}>
              <MdArrowBackIos/>
            </button>
            <span style={{
              fontFamily:'sharp sans'
            }}>
              Page{' '}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{' '}
            </span>
            <button onClick={() => nextPage()} disabled={!canNextPage}>
              <MdArrowForwardIos/>
            </button>
          </div>
        </div>
        </div>        


        {/* Conditional rendering of the GIF when no data is available */}
        {page.length === 0 && (
          <div className='gif-render' style={{ textAlign: 'center', marginTop: '20px' }}>
            <img src={gif} alt="No data available" style={{ width: '200px' }} />
            <h2>Check back soon!</h2>
            <p>We are working on your applications, they will appear here soon.</p>
          </div>
        )}
  
    </>
  );
};

export default Jobtracker;
