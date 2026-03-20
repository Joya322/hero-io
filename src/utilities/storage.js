export const getData = () => {
  const installedAppsString = localStorage.getItem("installedApps");

  const installedApps = JSON.parse(installedAppsString);

  return installedApps;
};

export const saveData = (id) => {
  const prevData = getData();

  if (prevData === null) {
    localStorage.setItem("installedApps", JSON.stringify([id]));
    return;
  }

  if (prevData.includes(id)) {
    return;
  }

  const newData = [...prevData, id];
  localStorage.setItem("installedApps", JSON.stringify(newData));
};
