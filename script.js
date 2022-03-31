let textArea = document.querySelector("#text-area");
const btn = document.querySelector("#button");
const noteContainer = document.querySelector(".note-container");

// This creates the html content for Task

function generateTask() {

    const div = document.createElement("div");
    div.classList.add('notebox');
    const paragraph = document.createElement("p");
    const textNode = document.createTextNode(`${textArea.value}`);
    paragraph.appendChild(textNode);
    div.appendChild(paragraph);
    const deleteBox = document.createElement('div');
    deleteBox.classList.add('delete-box');
    const deleteTxt = document.createTextNode('Delete');
    deleteBox.appendChild(deleteTxt);
    div.appendChild(deleteBox);
    noteContainer.appendChild(div);

    // Resets the TextArea

    textArea.value = "";

    // Delete Functinality

    if (noteContainer.hasChildNodes()) {

        deleteBox.addEventListener('click', () => {
            div.remove();
        });

    };
};


btn.addEventListener('click', generateTask);
window.addEventListener('keyup', (e) => {
    if (e.key == 'Enter') {
        generateTask();
    };
});





