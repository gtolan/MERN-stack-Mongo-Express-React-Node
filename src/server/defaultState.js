import md5 from "md5";
export const defaultState = {
  // session: {
  //   authenticated: false
  // },
  users: [
    {
      id: "U1",
      name: "Dev",
      passwordHash: md5("TUPLES")
    },
    {
      id: "U2",
      name: "Second Dev",
      passwordHash: md5("SomeSecretPass")
    }
  ],
  groups: [
    {
      name: "To do",
      id: "G1",
      owner: "U1"
    },
    {
      name: "To do Second",
      id: "G2",
      owner: "U2"
    },
    {
      name: "To do Third",
      id: "G3",
      owner: "U1"
    }
  ],
  tasks: [
    {
      name: "Do tests",
      id: "T1",
      group: "G2",
      isComplete: false
    },
    {
      name: "Refactor tests",
      id: "T2",
      group: "G3",
      isComplete: false
    },
    {
      name: "Task test three",
      id: "T3",
      group: "G1",
      isComplete: false
    },
    {
      name: "Task tests Four",
      id: "T4",
      group: "G1",
      isComplete: false
    }
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "Great work!"
    }
  ]
};
