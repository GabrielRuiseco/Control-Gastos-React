export const generateID = () => {
    const random = Math.random().toString(36).substr(2)
    const date = Date.now().toString(36)
    return date + random
}

export const formateDate = date => {
    const newDate = new Date(date);
    const options = {
        year: 'numeric',
        month: 'long',
        day: '2-digit'
    }
    const data = newDate.toLocaleDateString('es-ES', options)
    console.log(data)
    return data
}