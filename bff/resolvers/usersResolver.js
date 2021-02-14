const mongoose = require("mongoose");
const usersModel = require("./../database/Models/usersModel");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');

module.exports = {
  Mutation: {
    signUp: async (_, {input}) => {
      try {
        const duplicateUser = await usersModel.findOne({
          email: input.email,
        });
        if (duplicateUser) {
          throw new Error("User already exists");
        } else {
          const hashedPassword = await bcrypt.hash(input.password, 10);
          const newUser = usersModel({ ...input, password : hashedPassword});
          const createdUser = await newUser.save();
          return createdUser;
        }
      } catch (e) {
        throw e;
      }
    },

    login : async (_, {input}) => {
      try{
        const requiredUser = await usersModel.findOne({
          email: input.email,
        });

        if(!requiredUser){
          throw new Error("User not found");
        }

        const isPasswordvalid = await bcrypt.compare(input.password , requiredUser.password);

        if(!isPasswordvalid){
          throw new Error("Invalid credentials");
        }

        var token = jwt.sign({ email: input.email }, process.env.SECRET_KEY, { expiresIn: "1d" });
        return {token};

      }
      catch(e){
        console.log(e);
        throw e
      }
    }
  },
};
