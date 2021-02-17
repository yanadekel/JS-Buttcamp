const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  findPerson: function (type, id) {
    return type === "teachers"
      ? school.teachers.find((t) => t.id === id)
      : school.students.find((t) => t.id === id);
  },
    
    assignStudent: function (id, subject) {
      const student = this.findPerson("students", id)
      const result = this.teachers.find((t) => {
          return t.subjects.includes(subject) && t.capacityLeft > 0
      })
​
​
      if (!result || !student) {
       return "Sorry, no available teachers left";
      }
​
      result.students.push(student);
      result.capacityLeft--;
​
      return result;
​

  }
};

console.log(school.findPerson("students", 13));

