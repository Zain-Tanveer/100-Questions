function StopWatch() {
  let duration = 0;
  let isStarted = false;
  let interval_id;

  this.start = function () {
    if (isStarted) {
      throw new Error("StopWatch already started!");
    }

    isStarted = true;
    interval_id = setInterval(() => {
      duration++;
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
    duration = 0;
    clearInterval(interval_id);
    isStarted = false;
  };

  Object.defineProperty(this, "duration", {
    get: function () {
      return duration;
    },
  });
}

const sw = new StopWatch();
