// swimming & badminton don't have distance value
const getStatData = (data) => {
  const statData = [];
  for (let activity of data) {
    const distance = Number(activity.distance.split(" ")[0]);
    const time =
      activity.durations.split(" ")[1] === "minute"
        ? Number(activity.durations.split(" ")[0]) / 60
        : Number(activity.durations.split(" ")[0]);
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
