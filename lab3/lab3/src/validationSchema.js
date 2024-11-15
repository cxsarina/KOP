import * as yup from 'yup';

const validationSchema = yup.object().shape({
    nameSurname: yup.string().required('Це обов\'язкове питання.'),
    team: yup.string().required('Це обов\'язкове питання.'),
    favoriteTech: yup.string().required('Це обов\'язкове питання.'),
    techToLearn: yup.array().min(1, 'Це обов\'язкове питання.'),
    interested: yup.array().min(1, 'Це обов\'язкове питання.'),
    goals1: yup.string().required('Це обов\'язкове питання.'),
    goals2: yup.string().required('Це обов\'язкове питання.'),
    goals3: yup.string().required('Це обов\'язкове питання.'),
    wantWork: yup.string().required('Це обов\'язкове питання.'),
    wantSpeak: yup.string().required('Це обов\'язкове питання.'),
    topic: yup.array().min(1, 'Це обов\'язкове питання.'),
    meetup: yup.string().required('Це обов\'язкове питання.'),
    idea: yup.string().required('Це обов\'язкове питання.')
});

export default validationSchema;
