import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as mutations from "../store/mutations";
const TaskDetail = ({
  id,
  comments,
  task,
  isComplete,
  groups,
  setTaskComplete,
  setTaskGroup,
  setTaskName
}) => (
  <React.Fragment>
    <div>Task Detail</div>
    <input onChange={setTaskName} type="text" value={task.name} />
    <p>{id}</p>
    <button onClick={() => setTaskComplete(id, !isComplete)}>
      {isComplete ? "ReOpen" : "Complete"}
    </button>

    <select onChange={setTaskGroup} value={task.group}>
      {groups.map(group => (
        <option key={group.id} value={group.id}>
          {group.name}
        </option>
      ))}
    </select>

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

const mapDispatchToProps = (dispatch, ownProps) => {
  const id = ownProps.match.params.taskId;
  console.log(id, ownProps);
  return {
    setTaskComplete(id, isComplete) {
      dispatch(mutations.setTaskComplete(id, isComplete));
    },
    setTaskGroup(e) {
      console.log(e.target.value, "groupd");
      dispatch(mutations.setTaskGroup(id, e.target.value));
    },
    setTaskName(e) {
      dispatch(mutations.setTaskName(id, e.target.value));
    }
  };
};

export const ConnectedTaskDetail = connect(
  mapStateToProps,
  mapDispatchToProps
)(TaskDetail);
