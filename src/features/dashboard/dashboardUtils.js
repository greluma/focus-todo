export function getAllTasks(list) {
  const allTasks = list.reduce((acc, curr) => {
    curr.tasks.forEach((task) => {
      console.log(task);
      acc.push(task);
    });
    return acc;
  }, []);
  return allTasks;
}
