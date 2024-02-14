const getStatData = (data) => {
  const statData = [];
  for (let activity of data) {
    const distance = Number(activity.distance) / 1000;
    const time = Number(activity.durations) / 60;
    const checkActivity = statData.find(
      (check) => check.label === activity.activityType
    );
    if (checkActivity) {
      checkActivity.time += time;
      checkActivity.distance += distance;
    } else {
      statData.push({
        label: activity.activityType,
        time: time,
        distance: distance,
      });
    }
  }
  return statData;
};

const getPieData = (data) => {
  const statData = getStatData(data);
  const pieData = statData.map((data) => {
    return { label: data.label, value: data.time };
  });
  return pieData;
};

export { getStatData, getPieData };
