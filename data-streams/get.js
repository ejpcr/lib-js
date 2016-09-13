/* Author: ... - Date: 2016/09/13 */

// Obtiene el valor de un parametro simulando el método 'GET'.
function getParameterByName(name) {
    // ...
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    // ... 
    regex = new RegExp("[\\?&]" + name + "=([^&#]*)");
    // ...
    results = regex.exec(location.search);
    // ...
    return results === null ? "" : decodeURIComponent(results[1]).replace(/\+/g, " ");
}
