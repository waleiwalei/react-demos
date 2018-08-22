const PENDING = 'pending';
const RESOLVED = 'resolved';
const REJECTED = 'rejected';

class GPromise {
    constructor() {
        this._promiseStatus = PENDING;
        this._promiseValue;
        this.execute(executor);
    }

    execute(executor) {
        if( typeof executor != 'function') {
            throw new Error(`${executor} is not a function`);
        } else {
            try {
                executor( data => {
                    this._promiseStatus = RESOLVED;
                    this._promiseValue = data;
                }, data => {
                    this._promiseStatus = REJECTED;
                    this._promiseValue = data;
                });
            } catch (e) {
                this._promiseStatus = REJECTED;
                this._promiseValue = e;
            }
        }
    }

    then(onFulfilled, onRejected) {
        
    } 
}