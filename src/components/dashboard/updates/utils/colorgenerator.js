
function colorGenerator(){
    return 'rgb(' + (Math.ceil(Math.random() * 256)) + ',' +
    (Math.ceil(Math.random() * 256)) + ',' +
    (Math.ceil(Math.random() * 256)) + ')';
}

export default colorGenerator