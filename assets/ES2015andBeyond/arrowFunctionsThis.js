const bob = {
  name: "Bob",

  friends: [],

  printFriends() {
    this.friends.forEach(friend => {
      console.log(this.name+" knows "+friend);
    })
  }
}
