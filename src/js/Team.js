export default class Team {
  constructor() {
    this.members = new Set();
  }

  addAll(...character) {
    character.forEach((elem) => this.members.add(elem));
  }

  * [Symbol.iterator]() {
    const persons = Array.from(this.members);
    let current = 0;
    const last = persons.length;
    while (current < last) {
      yield persons[current];
      current += 1;
    }
  }
}
