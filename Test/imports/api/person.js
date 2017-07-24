import {Mongo} from "meteor/mongo";
import {Meteor} from "meteor/meteor";
import { check } from 'meteor/check';

export const Persones = new Mongo.Collection("persones");


if (Meteor.isServer) {
    Meteor.publish('persones', function tasksPublication() {
        return Persones.find();
    });
}


Meteor.methods({
    'persones.update'(_id, name, phone, email){
        Persones.update(_id,{
            $set: { name, phoneNumber: phone, email }
        })
    }
})
