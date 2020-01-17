module.exports = function parseStringAsArray(arrayAsString){
    try {
        return arrayAsString.split(',').map(item => item.trim());
    } catch (error) {
        return [];
    }
    
}