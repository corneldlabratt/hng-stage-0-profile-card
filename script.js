document.addEventListener('DOMContentLoaded', function(){
    getTime()
  })
  
  function getTime(){
    const currentTime = new Date();
    const timeString = currentTime.toLocaleTimeString('en-US', {timeZone: 'UTC'});
  
    const timeElement = document.getElementById('utc-time')
    timeElement.textContent = timeString
  }