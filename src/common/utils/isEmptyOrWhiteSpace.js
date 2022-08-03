/**
 * 
 * @param {string} str 
 * @returns {boolean}
 */

function isEmptyOrWhiteSpace(str) {
    return (str.match(/^\s*$/) || []).length > 0;
}

export default isEmptyOrWhiteSpace;