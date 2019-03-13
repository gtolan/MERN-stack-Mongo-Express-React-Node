export const REQUEST_TASK_CREATION = "REQUEST_TASK_CREATION";
export const CREATE_TASK = "CREATE_TASK";
export const SET_TASK_COMPLETE = "SET_TASK_COMPLETE";
export const SET_TASK_GROUP = "SET_TASK_GROUP";
export const SET_TASK_NAME = "SET_TASK_NAME";
export const REQUEST_AUTHENTICATE_USER = "REQUEST_AUTHENTICATE_USER";
export const PROCESSING_AUTHENTICATION_USER = "PROCESSING_AUTHENTICATION_USER";
export const AUTHENTICATING = "AUTHENTICATING";
export const AUTHENTICATED = "AUTHENTICATED";
export const NOT_AUTHENTICATED = "NOT_AUTHENTICATED";
export const SET_STATE = "SET_STATE";

export const requestTaskCreation = groupId => ({
  type: REQUEST_TASK_CREATION,
  groupId
});

export const createTask = (taskId, groupId, ownerId) => ({
  type: CREATE_TASK,
  groupId,
  ownerId,
  taskId
});

export const setTaskComplete = (id, isComplete) => ({
  type: SET_TASK_COMPLETE,
  taskId: id,
  isComplete
});
export const setTaskGroup = (id, group) => ({
  type: SET_TASK_GROUP,
  taskId: id,
  group
});
export const setTaskName = (id, name) => ({
  type: SET_TASK_NAME,
  taskId: id,
  name
});

export const requestAuthenticateUser = (username, password) => ({
  type: REQUEST_AUTHENTICATE_USER,
  username,
  password
});

export const processingAuthenticationUser = (
  status = AUTHENTICATING,
  session = null
) => ({
  type: PROCESSING_AUTHENTICATION_USER,
  authenticated: status,
  session
});

export const setState = (state = {}) => ({
  type: SET_STATE,
  state
});
