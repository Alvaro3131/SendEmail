var mysql = require("mysql");

export const pool = mysql.createPool({
  host: "bcksr57xcqgo6rd5biz0-mysql.services.clever-cloud.com",
  user: "u28ffodxwossoemh",
  password: "BAA7hSN6KwqwaMSZGhOj",
  database: "bcksr57xcqgo6rd5biz0",
  port: 3306,
});
