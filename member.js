function skillMemebers() {
    var members = [
        { name: 'John', age: 20 },
        { name: 'Steve', age: 24 },
        { name: 'Anna', age: 19 }
    ];

    this.getAllMembers = function () {
        return members;
    }
}