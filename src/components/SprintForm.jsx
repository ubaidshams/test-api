import React, { useState, useEffect } from 'react';
import styles from './sprint-form.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { projectLabels, spirntTeams, sprintLabels } from '../constants/ui-constants';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { getProjects } from '../apis/api-services';

const SprintForm = () => {
    const [project, setProject] = useState("")
    const [sprint, setSprint] = useState("")
    const [sprintTeam, setSprintTeam] = useState("")
    const [startDate, setStartDate] = useState("")
    const [endDate, setEndDate] = useState("")
    const [epic, setEpic] = useState("")
    const [tracabilityMatrix, setTracabilityMatrix] = useState("")
    const [projectData, setProjectData] = useState([])

    const getProjectList = async () => {
        try {
            let { data } = await getProjects()
            console.log("🚀 ~ getProjectList ~ data:", data)
            setProjectData(data)
        } catch (error) {
            console.error(error)
        }
    }
    useEffect(() => {
        getProjectList()
    }, [])


    const handleChange = (e, setFunction) => {
        setFunction(e.target.value);
    };
    return (
        <div className={styles['form-container']}>
            <h2>Form</h2>
            <form >
                <div className={styles["div-block"]}>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Projects</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={project}
                            label="Projects"
                            onChange={e => handleChange(e, setProject)}
                        >
                            {
                                projectLabels?.map(project => <MenuItem key={project.label} value={project.value}>
                                    {project.label}
                                </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                    <FormControl sx={{ m: 1, minWidth: 120 }}>
                        <InputLabel id="demo-simple-select-helper-label">Sprint</InputLabel>
                        <Select
                            value={project === "Next Generation Enrollment" ? sprint : project === "SaaS SPA" ? sprintTeam : null}
                            label="Projects"
                            onChange={e => handleChange(e, project === "Next Generation Enrollment" ? setSprint : project === "SaaS SPA" ? setSprintTeam : null)}
                        >
                            {
                                (project === "Next Generation Enrollment" ? sprintLabels : project === "SaaS SPA" ? spirntTeams : null)?.map(option => <MenuItem key={option.label} value={option.value}>
                                    {option.label}
                                </MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </div>
                <div className={styles["div-block"]}>
                    <label htmlFor="">Start Date</label>
                    <input
                        type="date"
                        name="startDate"
                        value={startDate}
                        onChange={e => handleChange(e, setStartDate)}
                    />
                </div>
                <div className={styles["div-block"]}>
                    <label htmlFor="">End Date</label>
                    <input
                        type="date"
                        name="endDate"
                        value={endDate}
                        onChange={e => handleChange(e, setEndDate)}
                    />
                </div>

                <div className={styles["div-block"]}>
                    <TextField value={epic} onChange={e => handleChange(e, setEpic)} id="outlined-basic" label="Epic" variant="outlined" />
                </div>
                <div className={styles["div-block"]}>
                    <FormControlLabel onChange={e => handleChange(e, setTracabilityMatrix)} value="Traceability" control={<Radio />} label="Traceability Matrix" />
                </div>
            </form>
        </div>
    )
}

export default SprintForm