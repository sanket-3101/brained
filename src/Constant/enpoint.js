import { BASE_URL } from "./index";

//chapter
export const getChapter = `${BASE_URL}chapters`;
export const getChapterById = (id) => `${BASE_URL}chapter/${id}`;
export const postChapter = `${BASE_URL}chapter`;
export const putChapterById = (id) => `${BASE_URL}chapter/${id}`;
export const deleteChapterById = (id) => `${BASE_URL}chapter/${id}`;

//device
export const getDevice = `${BASE_URL}devices`;
export const getDeviceById = (id) => `${BASE_URL}device/${id}`;

//quiz
export const getQuiz = `${BASE_URL}getQuiz`;

//session
export const postSesssion = `${BASE_URL}sesssion`;

//Subject
export const getSubject = `${BASE_URL}subjects`;
export const getSubjectById = (id) => `${BASE_URL}subject/${id}`;
export const postSubject = `${BASE_URL}subject`;
export const putSubjectById = (id) => `${BASE_URL}subject/${id}`;
export const deleteSubjectById = (id) => `${BASE_URL}subject/${id}`;
