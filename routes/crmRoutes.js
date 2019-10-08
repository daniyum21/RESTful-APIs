import {
    addNewContact,
    deleteContactByEmail,
    getContactByEmail,
    getContacts,
    updateContactByEmail
} from "../controllers/crmController";

const routes = (app) =>{

    app.route('/contact')
        .get((req,res, next)=>
            {

                //middleware
                console.log(`This request has access. Look, ${req.originalUrl} and ${req.method}`);
               // res.send("GET request successfulllll");
                next();

            },
            getContacts
        )

        // POST endpoint
        .post(addNewContact);

    app.route('/contact/:contactEmail')
        .get(getContactByEmail)
        .put(updateContactByEmail)

        .delete(deleteContactByEmail);
}

export default routes;