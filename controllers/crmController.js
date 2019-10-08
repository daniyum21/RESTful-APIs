import mongoose from 'mongoose'
import {ContactsSchema} from "../models/crmModels";

const Contact = mongoose.model('Contact', ContactsSchema);

export const addNewContact = (req, res) => {
let newContact = new Contact(req.body);
newContact.save((err, contact) =>{

    if(err)
    {
        res.send(err);
    }
    res.json(contact);
});
}

export const getContacts = (req, res) =>{

    Contact.find({}, (err, Contact) =>{
if(err)
{
    res.send(err);
}
res.json(Contact);
    });


}

export const getContactByEmail = (req, res) =>{
//console.log(req.params);
    //MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

    Contact.find({email: req.params.contactEmail}, (err, contact)=>{
        if(err)
            res.send(err);

        console.log(req.params.contactEmail);
        res.json(contact);

    });
}

export const updateContactByEmail = (req, res) =>{
//console.log(req.params);
    //MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

    Contact.findOneAndUpdate({email: req.params.contactEmail},req.body, {new: true}, (err, contact) =>{

        if(err)
            res.send(err);
        res.json(contact);
    });
}

export const deleteContactByEmail = (req, res) =>{
//console.log(req.params);
    //MyModel.find({ name: 'john', age: { $gte: 18 }}, function (err, docs) {});

    Contact.remove({email: req.params.contactEmail}, (err, contact) =>{

        if(err)
            res.send(err);
        res.json({message: `successfully removed contact with email  ${req.params.contactEmail}`});
    });
}
