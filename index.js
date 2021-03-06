var Service, Characteristic;
const { getAccessToken, getStatus, setStatus } = require('yalealarmsystem');

module.exports = function(homebridge) {
    Service = homebridge.hap.Service;
    Characteristic = homebridge.hap.Characteristic;

    homebridge.registerAccessory("homebridge-yalealarmsystem", "YaleAlarm", YaleAlarm);
}

function YaleAlarm(log, config) {
    this.log = log;
    this.name = config["name"];
    this.config = config;

    this.service = new Service.LockMechanism(this.name);

    this.service
    .getCharacteristic(Characteristic.LockCurrentState)
    .on('get', this.getState.bind(this));

    this.service
    .getCharacteristic(Characteristic.LockTargetState)
    .on('get', this.getState.bind(this))
    .on('set', this.setState.bind(this));
}

YaleAlarm.prototype.getState = function(callback) {
    this.log("Getting current state...");

    getAccessToken(
        this.config.username, 
        this.config.password
    ).then(getStatus).then((response) => {
        console.log(response);
        callback(null, response === 'arm');
    }).catch(console.log);
}

YaleAlarm.prototype.setState = function(state, callback) {
    var alarmState = (state == Characteristic.LockTargetState.SECURED) ? "arm" : "disarm";

    console.log(`Set Alarm state to ${alarmState}`);

    getAccessToken(
        this.config.username, 
        this.config.password
    ).then((accessToken) => {
        setStatus(accessToken, alarmState).then((response) => { 
            var currentState = (state == Characteristic.LockTargetState.SECURED) ?
            Characteristic.LockCurrentState.SECURED : Characteristic.LockCurrentState.UNSECURED;
        
            this.service.setCharacteristic(Characteristic.LockCurrentState, currentState);
        
            callback(null); // success
        }).catch((response) => {
            console.log('catch')
            console.log(response)
        });
    });
}

YaleAlarm.prototype.getServices = function() {
    return [this.service];
}