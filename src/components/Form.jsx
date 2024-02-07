import React, { useEffect, useState } from "react";
import styles from "./form.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

const Form = () => {
  let [state, setState] = useState({
    project: "",
    projectTxt: "",
    sprint: "",
    sprintTxt: "",
    sprintTeam: "",
    sprintTeamTxt: "",
    startDate: "",
    endDate: "",
    epic: "",
    radio: "",
  });
  let [data, setData] = useState([]);
  let [selectVal, setSelectVal] = useState();
  let { project, sprint, sprintTeam, startDate, endDate, epic } = state;
  let handleChange = e => {
    let { name, value } = e.target;
    setState({ ...state, [name]: value });
  };
  let handleSubmit = e => {
    e.preventDefault();
    console.log(state);
    setState({
      project: "",
      sprint: "",
      sprintTeam: "",
      startDate: "",
      endDate: "",
      epic: "",
      radio: "",
    });
  };
  console.log(selectVal);
  console.log(project);
  let handleClear = () => {
    setState({
      project: "",
      sprint: "",
      sprintTeam: "",
      startDate: "",
      endDate: "",
      epic: "",
      radio: "",
    });
  };

  // API CALL:
  let getData = async () => {
    try {
      if (selectVal == "Next Generation Enrollment") {
        let val = await axios.get(`https://fakestoreapi.com/products`);
        // console.log(val);
        setData(val);
      } else if (selectVal == "SaaS SPA") {
        console.log("I'm another API");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <section className={styles.formBlock}>
      <h2>Form</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.divBlock}>
          <label htmlFor="">Project</label>
          <select
            name="project"
            id=""
            onChange={handleChange}
            value={project}
            onClick={e => setSelectVal(e.target.value)}
          >
            <option value="">--select--</option>
            <option value="Next Generation Enrollment">
              Next Generation Enrollment
            </option>
            <option value="SaaS SPA">SaaS SPA</option>
            <option value="SHS-Automation3">SHS-Automation3</option>
          </select>
        </div>
        <div className={styles.divBlock}>
          <label htmlFor="">Sprint</label>
          {selectVal === "Next Generation Enrollment" ? (
            <select name="sprint" id="" onChange={handleChange} value={sprint}>
              <option value="">--select--</option>
              <option value="NGE Sprint 1">NGE Sprint 1</option>
              <option value="NGE Sprint 2">NGE Sprint 2</option>
              <option value="NGE Sprint 3">NGE Sprint 3</option>
              <option value="NGE Sprint 4">NGE Sprint 4</option>
              <option value="NGE Sprint 5">NGE Sprint 5</option>
              <option value="NGE Sprint 6">NGE Sprint 6</option>
              <option value="NGE Sprint 7">NGE Sprint 7</option>
              <option value="NGE Sprint 8">NGE Sprint 8</option>
              <option value="NGE Sprint 9">NGE Sprint 9</option>
              <option value="NGE Sprint 10">NGE Sprint 10</option>
              <option value="NGE Sprint 11">NGE Sprint 11</option>
              <option value="NGE Sprint 11">NGE Sprint 11</option>
              <option value="NGE Sprint 12">NGE Sprint 12</option>
              <option value="NGE Sprint 13">NGE Sprint 13</option>
            </select>
          ) : selectVal === "SaaS SPA" ? (
            <select
              name="sprintTeam"
              id=""
              onChange={handleChange}
              value={sprintTeam}
            >
              <option value="">--select--</option>
              <option value="SaaS Sprint 2024.1">SaaS Sprint 2024.1</option>
              <option value="SaaS Sprint 2024.2">SaaS Sprint 2024.2</option>
              <option value="SaaS Sprint 2024.3">SaaS Sprint 2024.3</option>
              <option value="SaaS Sprint 2024.4">SaaS Sprint 2024.4</option>
              <option value="SaaS Sprint 2024.5">SaaS Sprint 2024.5</option>
              <option value="SaaS Sprint 2024.6">SaaS Sprint 2024.6</option>
              <option value="SaaS Sprint 2024.7">SaaS Sprint 2024.7</option>
              <option value="SaaS Sprint 2024.8">SaaS Sprint 2024.8</option>
              <option value="SaaS Sprint 2024.9">SaaS Sprint 2024.9</option>
              <option value="SaaS Sprint 2024.10">SaaS Sprint 2024.1</option>
              <option value="SaaS Sprint 2024.11">SaaS Sprint 2024.11</option>
              <option value="SaaS Sprint 2024.12">SaaS Sprint 2024.12</option>
              <option value="SaaS Sprint 2024.13">SaaS Sprint 2024.13</option>
              <option value="SaaS Sprint 2024.14">SaaS Sprint 2024.14</option>
            </select>
          ) : selectVal === undefined ? (
            <select
              name="sprintTeam"
              id=""
              onChange={handleChange}
              value={sprintTeam}
            >
              <option value="">--select--</option>
            </select>
          ) : (
            ""
          )}
        </div>
        <div className={styles.divBlock}>
          <label htmlFor="">Sprint Team</label>
          <select
            name="sprintTeam"
            id=""
            onChange={handleChange}
            value={sprintTeam}
          >
            <option value="">--select--</option>
            <option value="SaaS Sprint 2024.1">SaaS Sprint 2024.1</option>
          </select>
        </div>
        <div className={styles.divBlock}>
          <label htmlFor="">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={startDate}
            onChange={handleChange}
          />
        </div>
        <div className={styles.divBlock}>
          <label htmlFor="">End Date</label>
          <input
            type="date"
            name="endDate"
            value={endDate}
            onChange={handleChange}
          />
        </div>

        <div className={styles.divBlock}>
          <label htmlFor="">Epic</label>
          <input
            type="text"
            name="epic"
            value={epic}
            onChange={handleChange}
            placeholder="enter epic he"
          />
        </div>
        <div className={styles.divBlock}>
          <label htmlFor="java">Traceability Matrix</label>
          <input
            style={{ height: "20px", width: "20px" }}
            type="radio"
            id="java"
            name="radio"
            value="Traceability"
            onChange={handleChange}
          />
        </div>
        <div className={styles.btnBlock}>
          <p className={styles.btn} onClick={handleClear}>
            Clear
          </p>
          <button className={styles.btn}>
            <Link to="/tabel">Run</Link>
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
