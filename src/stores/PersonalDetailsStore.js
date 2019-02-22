import { EventEmitter } from 'events';

import dispatcher from '../dispatcher';

class PersonalDetailsStore extends EventEmitter {
  constructor() {
    super()
    this.personalDetails = []
  }

  addPerson(data) {
    this.personalDetails.push({
      firstName: data.firstName,
      lastName: data.lastName,
      address: data.address,
      phone: data.phone
    });

    this.emit("change");
  }

  getAll() {
    return this.personalDetails
  }

  handleActions(action) {
    console.log('PersonalDetailsStore recived an action', action);
    if (action.type === "ADD_PERSON") {
      this.addPerson(action.data);
    }
  }

}

const personalDetailsStore = new PersonalDetailsStore();
dispatcher.register(personalDetailsStore.handleActions.bind(personalDetailsStore));

export default personalDetailsStore;