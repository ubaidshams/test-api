import React from 'react'
import { useRoutes } from 'react-router-dom'
import SprintForm from '../components/SprintForm'
import TableData from '../components/TableData'

const CustomRoutes = () => {
    let routes = useRoutes([
        {
            path: '/',
            element: <SprintForm />
        },
        {
            path: 'table-data',
            element: <TableData />
        }
    ])
    return routes
}

export default CustomRoutes