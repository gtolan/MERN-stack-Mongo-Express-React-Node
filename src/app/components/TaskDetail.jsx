import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const TaskDetail = ({ id, comments, task, isComplete, groups }) => (
  <React.Fragment>
    <div>Task Detail</div>
    <h4>{task.name}</h4>
    <p>{id}</p>
    <button>Complete/ReOpen</button>
    <select>
      {groups.map(group => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>
    {isComplete}
    <Link to="/dashboard">Back</Link>
  </React.Fragment>
);

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
  let id = ownProps.match.params.taskId;
  console.log(id, "id to match");
  let task = state.tasks.find(task => task.id === id);
  let groups = state.groups;

  return {
    id,
    task,
    groups,
    isComplete: task.isComplete
  };
};
export const ConnectedTaskDetail = connect(mapStateToProps)(TaskDetail);
