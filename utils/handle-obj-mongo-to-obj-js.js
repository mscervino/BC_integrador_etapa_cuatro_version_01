const handleObjMongoToObjJs = (elemento) => {
    console.dir(elemento)
    const objJS = JSON.parse(JSON.stringify(elemento)) // Transforma el objeto de Mongoose a un objeto de JS
    console.log(objJS)
    return objJS
}

export default handleObjMongoToObjJs
