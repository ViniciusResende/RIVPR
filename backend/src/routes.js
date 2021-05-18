const express = require('express');

const OngController = require('./controllers/OngController');
const UserController = require('./controllers/UserController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const LoginController = require('./controllers/LoginController');
const PasswordChangeController = require('./controllers/PasswordChangeController');
const ReportController = require('./controllers/ReportController');
const ReportHistoryController = require('./controllers/ReportHistoryController');
const CommentController = require('./controllers/CommentController');
// const SearchReportController = require ('./controllers/SearchReportController');
const StatusController = require ('./controllers/StatusController');
const SignUpController = require ('./controllers/SignUpController');
const ReportConfimationController = require ('./controllers/ReportConfimationController');
const TypeController = require ('./controllers/TypeController');
const ConfirmationCountingController = require ('./controllers/ConfirmationCountingController');
const DisagreeCountingController = require ('./controllers/DisagreeCountingController')


const routes = express.Router();

routes.post('/sessions', SessionController.create)

routes.post('/logins', LoginController.create)

routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/users', UserController.index);
routes.post('/users', UserController.create);
routes.delete('/users/:id', UserController.delete);
routes.put('/users', UserController.update);

routes.post('/signUpVerification', SignUpController.index);

routes.put('/password', PasswordChangeController.update);

routes.get('/profile', ProfileController.index);

routes.get('/reports', ReportController.index);
routes.post('/reports', ReportController.create);
routes.delete('/reports/:id', ReportController.delete);

routes.get('/reportsHistory', ReportHistoryController.index);

routes.post('/reportsConfirmation', ReportConfimationController.create);

routes.get('/comment', CommentController.index);
routes.post('/comment', CommentController.create);

routes.get('/type', TypeController.index);
routes.post('/type', TypeController.create);

routes.get('/status', StatusController.index);
routes.post('/status', StatusController.create);
routes.put('/status', StatusController.update);

routes.get('/confirmStatusCounting', ConfirmationCountingController.index)

routes.get('/disagreeStatusCounting', DisagreeCountingController.index)

// routes.get('/search', SearchReportController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete)

module.exports = routes;
