import { execSync } from 'child_process';

console.log('Checking for processes running on port 5000...');
try {
  const output = execSync('netstat -ano | findstr :5000').toString();
  const lines = output.split('\n');
  const pids = new Set();
  
  for (const line of lines) {
    const parts = line.trim().split(/\s+/);
    if (parts.length >= 5) {
      const pid = parts[parts.length - 1];
      if (pid && pid !== '0' && !isNaN(pid)) {
        pids.add(pid);
      }
    }
  }
  
  if (pids.size === 0) {
    console.log('No active processes found on port 5000.');
  } else {
    for (const pid of pids) {
      console.log(`Killing process ID ${pid} occupying port 5000...`);
      try {
        execSync(`taskkill /F /PID ${pid}`);
      } catch (err) {
        // Ignore if already dead
      }
    }
    console.log('Port 5000 has been successfully freed!');
  }
} catch (error) {
  console.log('Port 5000 is already free and clear.');
}
