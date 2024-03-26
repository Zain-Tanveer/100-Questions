function StopWatch() {
  this.duration = 0;

  let isStarted = false;
  let interval_id;

  this.start = function () {
    if (isStarted) {
      throw new Error("StopWatch already started!");
    }

    isStarted = true;
    interval_id = setInterval(() => {
      this.duration++;
    }, 1000);

    console.log("🕒 StopWatch started!");
  };

  this.stop = function () {
    if (!isStarted) {
      throw new Error("Please start the StopWatch.");
    }

    clearInterval(interval_id);
    isStarted = false;

    console.log("🛑 StopWatch stopped!");
  };

  this.reset = function () {
    this.duration = 0;
  };
}

const sw = new StopWatch();
