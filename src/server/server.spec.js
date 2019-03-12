import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "ADd new Task Tet spec",
    id: "124efg"
  });

  await updateTask({
    name: "ADd new Task Tet UPdated",
    id: "124efg"
  });
})();
