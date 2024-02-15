export function getAllTasks(list) {
  const allTasks = list.reduce((acc, curr) => {
    curr.tasks.forEach((task) => {
      acc.push(task);
    });
    return acc;
  }, []);
  return allTasks;
}

export const totalTareas = (list) => list.length;

export function cantTiempo(list) {
  let total = 0;
  list.forEach((task) => (total += task.taskTime));
  return total;
}

export function ordenarTareas(list) {
  list.sort((a, b) => {
    if (a.complete === b.complete) {
      return 0;
    } else if (a.complete) {
      return 1;
    } else {
      return -1;
    }
  });
  return list;
}
