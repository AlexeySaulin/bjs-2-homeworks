class AlarmClock {
    constructor () {
        this.alarmCollection = [],
        this.timerId = null
    }
    addClock(time, callback, id) {
        if (!id) {
            throw new Error("Параметр id не передан");
        }
        if (this.alarmCollection.some(alarm => alarm.id === id)) {
           return console.error("Такой будильник уже существует");
        }
         this.alarmCollection.push({id, time, callback});
    }
    removeClock (id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(alarm => alarm.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

	getCurrentFormattedTime() {
        return new Date().toLocaleTimeString("ru-Ru", {
			hour: "2-digit",
			minute: "2-digit",
		});
	}

	start() {
		let checkClock = (alarm) => {
            let alarmTime = this.getCurrentFormattedTime();
            if (alarm.time === alarmTime) {
             alarm.callback();
            }
        }
        if (!this.timerId) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 1000);
        }
	}

	stop() {
		if (!this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        }
	}

	printAlarms() {
	     this.alarmCollection.forEach(alarm => console.log(alarm.id + ":" + alarm.time));
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}

}