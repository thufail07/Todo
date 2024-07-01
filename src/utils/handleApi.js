import axios from 'axios'

const baseUrl = "http://localhost:8000"

const getAllToDo = (setToDo) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)

        })
}

//save data
const addToDo = (text, setText, setToDo) => {

    if (!text.trim()) {
        console.log('Text field is empty');
        return;
    }

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))

}
//upadte data
const updateToDo = (toDoId, text, setToDo, setText, setIsUpdating) => {

    if (!text.trim()) {
        console.log('Text field is empty');
        return;
    }

    axios
        .post(`${baseUrl}/update`, { id: toDoId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

//delete data
const deleteToDo = (_id, setToDo) => {


    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllToDo(setToDo)
        })
        .catch((err) => console.log(err))
}

export { getAllToDo, addToDo, updateToDo, deleteToDo }