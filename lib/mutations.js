"use strict";

const connectDb = require("./db");
const { ObjectID } = require("mongodb");

module.exports = {
  createCourse: async (root, { input }) => {
    const defaults = {
      teacher: "",
      topic: "",
    };

    const newCourse = Object.assign(defaults, input);
    let db;
    let course;
    try {
      db = await connectDb();
      course = await db.collection("courses").insertOne(newCourse);
      newCourse._id = course.insertedId;
    } catch (error) {
      console.log("Error => ", error);
    }

    return newCourse;
  },
  createStudent: async (root, { input }) => {
    // const newStudent = Object.assign(defaults, input);
    let db;
    let student;
    try {
      db = await connectDb();
      student = await db.collection("students").insertOne(input);
      input._id = student.insertedId;
    } catch (error) {
      console.log("Error => ", error);
    }

    return input;
  },
  editCourse: async (root, { _id, input }) => {
    let db;
    let course;
    try {
      db = await connectDb();
      await db
        .collection("courses")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      course = await db.collection("courses").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.log("Error => ", error);
    }
    return course;
  },
  editStudent: async (root, { _id, input }) => {
    let db;
    let student;
    try {
      db = await connectDb();
      await db
        .collection("students")
        .updateOne({ _id: ObjectID(_id) }, { $set: input });
      student = await db.collection("students").findOne({ _id: ObjectID(_id) });
    } catch (error) {
      console.log("Error => ", error);
    }
    return student;
  },
  deleteCourse: async (root, { _id }) => {
    let db;
    let message;
    try {
      db = await connectDb();
      const result = await db
        .collection("courses")
        .deleteOne({ _id: ObjectID(_id) });
      const { deletedCount } = result;

      if (deletedCount === 0) {
        message = {
          status: false,
          message: `the ${ObjectID(
            _id
          )} doesn't exist, please try with another ID`,
        };
      } else {
        message = {
          status: true,
          message: "Course deleted successfully",
        };
      }
    } catch (error) {
      message = {
        status: false,
        message: "there was an error to delete Course",
      };
    }
    return message;
  },
  deleteStudent: async (root, { _id }) => {
    let db;
    let message;
    try {
      db = await connectDb();
      const result = await db
        .collection("students")
        .deleteOne({ _id: ObjectID(_id) });
      const { deletedCount } = result;

      if (deletedCount === 0) {
        message = {
          status: false,
          message: `the ${ObjectID(
            _id
          )} doesn't exist, please try with another ID`,
        };
      } else {
        message = {
          status: true,
          message: "Student deleted successfully",
        };
      }
    } catch (error) {
      message = {
        status: false,
        message: "there was an error to delete Student",
      };
    }
    return message;
  },
};
