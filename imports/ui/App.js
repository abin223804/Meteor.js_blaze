import {Template} from 'meteor/templating';
import {TaskCollection} from'../api/TaskCollection';



import './App.html';

Template.mainContainer.helpers({
    // tasks:[
    //     {
    //         text:"This is task 1"
    //     },
    //     {
    //        text:'This is task 2'
    //     },
    //     {
    //         text:'This is task 3'
    //     } 
    // ]


tasks(){
    return TaskCollection.find({},{sort:{createdAt:-1}})
},
}

);

Template.form.events({
    "submit .task-form"(event){
        event.preventDefault();

        const target=event.target;
        const text=target.text.value;

        TaskCollection.insert({
            text,
            createdAt: new Date()
        })
        target.text.value=""
    }
})

Template.mainContainer.helpers({
    tasks(){
        return TaskCollection.find({},{sort:{createdAt:-1}})
    },
})

Template.form.events({})