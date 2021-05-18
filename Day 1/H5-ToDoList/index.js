function changeHeader() {
    const inputFieldValue = document.getElementById('input').value
    const headerValue = document.getElementById('header-main-id')
    return headerValue.textContent = inputFieldValue   
}

function addToList() {
    const inputFieldValue = document.getElementById('list-input').value
    if (inputFieldValue.length < 1)
        return
        const listItem = document.createElement('LI')
        const listItemText = document.createTextNode(inputFieldValue)
        listItem.append(listItemText)
        document.getElementById('list').appendChild(listItem)
}

function removeToList() {
    const currentListValue = document.getElementById('list')
    currentListValue.removeChild(currentListValue.lastElementChild)
}