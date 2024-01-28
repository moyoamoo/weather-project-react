export function toCelsius(value) {
    return Math.round(value - 273.15);
  }

  export function formatTime(time) {
   const newTime = new Date(time * 1000);
    return newTime.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  export function formatWindSpeed(wind){
    return Math.round((wind * 3600) / 1000);

  }

  export function formatVisibility(visibility){
    return visibility / 1000;

  }