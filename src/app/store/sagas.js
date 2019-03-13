import { take, put, select, takeLatest } from "redux-saga/effects";
import uuid from "uuid";
import axios from "axios";
import { history } from "./history";

import * as mutations from "./mutations";

const url = process.env.NODE_ENV == "production" ? "" : "http://localhost:7777";

export function* taskCreationSaga() {
  while (true) {
    const { groupId } = yield take(mutations.REQUEST_TASK_CREATION);
    const ownerId = "U1";
    const taskId = uuid();
    yield put(mutations.createTask(taskId, groupId, ownerId));
    const { res } = yield axios.post(url + "/task/new", {
      task: {
        id: taskId,
        group: groupId,
        owner: ownerId,
        isComplete: false,
        name: "New Task"
      }
    });
  }
}

export function* taskModificationSaga() {
  while (true) {
    const task = yield take([
      mutations.SET_TASK_GROUP,
      mutations.SET_TASK_NAME,
      mutations.SET_TASK_COMPLETE
    ]);
    axios.post(url + "/task/update", {
      task: {
        id: task.taskId,
        group: task.groupId,
        name: task.name,
        isComplete: task.isComplete
      }
    });
  }
}

export function* userAuthenticationSaga() {
  while (true) {
    const { username, password } = yield take(
      mutations.REQUEST_AUTHENTICATE_USER
    );
    try {
      const { data } = yield axios.post(url + "/authenticate", {
        username,
        password
      });
      if (!data) {
        throw new Error();
      }
      yield put(mutations.setState(data.state));
      yield put(
        mutations.processingAuthenticationUser(mutations.AUTHENTICATED)
      );
      history.push("/dashboard");

      console.log("authenticated!", data);
    } catch (e) {
      console.log("cant authenticate");
      yield put(
        mutations.processingAuthenticationUser(mutations.NOT_AUTHENTICATED)
      );
    }
  }
}
