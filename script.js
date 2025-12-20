const addNewTask = document.querySelector('.add-task-btn');
const formBackdrop = document.querySelector('.backdrop');
const formContainer = document.querySelector('.container');
const formClose = document.querySelector('.close-form');
const formSave = document.querySelector('.Save-form');
// form inputs
const titleInput = document.querySelector('.title-input');
const subtaskInput = document.querySelector('.subtask-input');
const taskDetails = document.querySelector('.taskDetails');
const subtaskDetails = document.querySelector('.subtaskDetails');
const dateInput = document.querySelector('.form-date');

function taskform() {
    let titleValue = titleInput.value;
    let subTaskValue = subtaskInput.value;
    let taskDetailsValue = taskDetails.value;
    let subTaskDetailsValue = subtaskDetails.value;
    let endDate = dateInput.value;
}

function resetValue() {
    titleInput.value = "";
    subtaskInput.value = "";
    taskDetails.value = "";
    subtaskDetails.value = "";
    dateInput.value = "";
}

addNewTask.addEventListener('click', () => {
    formBackdrop.style.display = 'block';
    formContainer.style.display = 'block';


})
formClose.addEventListener('click', () => {
    resetValue()
    formBackdrop.style.display = 'none';
    formContainer.style.display = 'none';
    console.log('working');
})
formSave.addEventListener('click', () => {
    taskform()
    formBackdrop.style.display = 'none';
    formContainer.style.display = 'none';
    resetValue()
    console.log('working');

})

