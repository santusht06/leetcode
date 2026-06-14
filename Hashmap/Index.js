class TaskScheduler {
  constructor(maxConcurrent) {
    this.maxConcurrent = maxConcurrent;
    this.queue = [];
    this.runningCount = 0;
  }

  add(task) {
    return new Promise((resolve, reject) => {
      this.queue.push(async () => {
        try {
          const result = await task();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      });

      this.runNext();
    });
  }

  runNext() {
    if (this.runningCount >= this.maxConcurrent || this.queue.length === 0) {
      return;
    }

    this.runningCount++;
    const nextTask = this.queue.shift();

    nextTask().finally(() => {
      this.runningCount--;
      this.runNext();
    });
  }
}

// Example Usage:
const scheduler = new TaskScheduler(2); // Max 2 tasks at a time
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const task1 = () => delay(1000).then(() => console.log("Task 1 Done"));
const task2 = () => delay(500).then(() => console.log("Task 2 Done"));
const task3 = () => delay(300).then(() => console.log("Task 3 Done"));

scheduler.add(task1);
scheduler.add(task2);
scheduler.add(task3);
