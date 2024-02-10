import React, { useState, useEffect } from 'react'
import { getProjects } from '../apis/api-services'

const TableData = () => {
    let [data, setData] = useState([])


    const getProjectData = async () => {
        try {
            let { data } = await getProjects()
            setData(data)
        } catch (error) {
            console.log("🚀 ~ getProjectData ~ error:", error)
        }
    }

    useEffect(() => {
        getProjectData()
    }, [])
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Issue Key</th>
                        <th>Issue Summary</th>
                        <th>Issue Status</th>
                        <th>Linked Issue Key</th>
                        <th>Linked Issue Summary</th>
                        <th>Linked Issue Status</th>
                        <th>Linked Issue Type</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.issues?.map(issue => {
                        let { key, fields } = issue
                        let linkedIssues = fields["issuelinks"] || []
                        let linkedIssueKeyValue = linkedIssues?.filter(link => link.type.name === "Relates")
                        console.log("🚀 ~ TableData ~ linkedIssueKeyValue:", linkedIssues)
                        return <tr key={key}>
                            <td>{key}</td>
                            <td>{fields?.summary}</td>
                            <td>{fields?.status?.name}</td>
                            <td></td>
                        </tr>


                    })}
                </tbody>
            </table>
        </div>
    )
}

export default TableData