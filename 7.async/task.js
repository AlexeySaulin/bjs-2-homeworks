class AlarmClock {
    constructor () {
        this.alarmCollection = [],
        this.timerId = null
    }
    addClock(time, callback, id) {
        if ( id === undefined) {
            throw new Error("Параметр id не передан");
        }
        if (this.alarmCollection.find(alarm => alarm.id === id) !== undefined) {
            return console.error("Такой будильник уже существует");
        }
        return this.alarmCollection.push({id, time, callback});
    }
    removeClock (id) {
        let inputArrLength = this.alarmCollection.length;
        this.alarmCollection = this.alarmCollection.filter(clock => clock.id !== id);
        let outputArrLength = this.alarmCollection.length;
        return outputArrLength < inputArrLength;
    }

	getCurrentFormattedTime() {
        let actualTime = new Date();
        let minutes = actualTime.getMinutes();
        let hours = actualTime.getHours();
        return hours + ':' + minutes;
	}

	start() {
		function checkClock(alarm) {
            let alarmTime = this.getCurrentFormattedTime();
            if (alarm.time === alarmTime) {
                return alarm.callback();
            }
        }
        if (this.timerId === null) {
            this.timerId = setInterval(() => {
                this.alarmCollection.forEach(alarm => checkClock(alarm));
            }, 1000);
        }
        return;
	}

	stop() {
		if (this.timerId !== null) {
            clearInterval(this.timerId);
            return this.timerId = null;
        }
	}

	printAlarms() {
		return this.alarmCollection.forEach(alarm => console.log(alarm.id + ":" + alarm.time));
	}

	clearAlarms() {
		this.stop();
		return this.alarmCollection = [];
	}

}