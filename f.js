const logs = [
    ["user1", "09:0:00", "2021-01-01"],
    ["user1", "3:0:00", "2021-01-01"],
    ["user2", "14:00:00", "2021-01-01"],
    ["user1", "20:00:00", "2021-01-02"],
    ["user2", "21:00:00", "2021-01-01"]
  ];
  
  // Initialize an empty userLogs object
  const userLogs = {};
  
  // Process each log entry
  for (const log of logs) {
    const username = log[0];
    const loginTime = log[1];
    const loginDate = log[2];
    
    // Create a new Date object with combined date and time
    const datetimeObj = new Date(`${loginDate} ${loginTime}`);
    
    // Get the date in the "YYYY-MM-DD" format
    const formattedDate = datetimeObj.toISOString().split('T')[0];
  
    // Ensure there's an object for the user in userLogs
    userLogs[username] = userLogs[username] || {};
  
    // Update the login count for the user on that date
    userLogs[username][formattedDate] = (userLogs[username][formattedDate] || 0) + 1;
  }
  
  console.log(userLogs);
  