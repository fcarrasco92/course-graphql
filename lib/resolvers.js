"use strict";

const courses = [
  {
    _id: "anyid",
    title: "My title",
    teacher: "My teacher",
    description: "one description",
    topic: "programming",
  },
  {
    _id: "anyid",
    title: "My title 1",
    teacher: "My teacher",
    description: "one description",
    topic: "programming",
  },
  {
    _id: "anyid",
    title: "My title 2",
    teacher: "My teacher",
    description: "one description",
    topic: "programming",
  },
];

module.exports = {
  getCourses: () => {
    return courses;
  },
};
