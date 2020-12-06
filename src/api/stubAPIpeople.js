class StubAPI {

constructor() {
    this.favoritePeoples = [];
}

add(people) {
    this.favoritePeoples.push(people);
}

getAll() {
    return this.favoritePeoples;
  }
}


export default new StubAPI();