// Logger.js: Simple leveled logger
window.log = {
  info: m => console.log('%cINFO:','color:skyblue', m),
  warn: m => console.warn('%cWARN:','color:goldenrod', m),
  error: m => console.error('%cERR:','color:tomato', m)
};
