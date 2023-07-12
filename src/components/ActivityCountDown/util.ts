import { format, addHours } from "date-fns";

// 根据当前时间和活动开始时间获取对应剩余的天、小时、分钟、秒
export const initTime = ({
  type = "ms",
  startTime = "", // 活动开始时间(即倒计时结束时间)
  serverTime = 0, // 后端返回的当前时间(使用前端时间不安全)
}: {
  type: "ms" | "s";
  startTime: string | number;
  serverTime: number;
}) => {
  const now = type === "s" ? Number(serverTime) * 1000 : serverTime;
  if (!startTime) {
    return {
      day: 0,
      hour: 0,
      minute: 0,
      seconds: 0,
      timeRemaining: 0,
    };
  }
  const newStartTime =
    typeof startTime === "string" ? getDateString(startTime) : startTime;

  const endDate = new Date(newStartTime);
  const end = endDate.getTime();
  const timeRemaining = end - now;
  const day = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  const hour = Math.floor((timeRemaining / 1000 / 60 / 60) % 24);
  const minute = Math.floor((timeRemaining / 1000 / 60) % 60);
  const seconds = Math.floor((timeRemaining / 1000) % 60);
  return {
    day,
    hour,
    minute,
    seconds,
    timeRemaining,
  };
};

// 天、小时、分钟、秒 单个数字补0
export function padTime(i: number) {
  return i.toString().padStart(2, "0");
}

// 将后端返回的时间字符串转成IOS能正常使用的字符串(解决IOS上显示Invalid Date的问题)
export const getDateString = (dateString: string) => {
  if (dateString) {
    const newDateString = dateString.slice(0, 19).replace(/-/g, "/");
    if (dateString.endsWith("+0000 UTC")) {
      return format(
        addHours(new Date(newDateString), 8),
        "YYYY/MM/DD HH:mm:ss"
      );
    }
    return newDateString;
  }
  return "";
};
