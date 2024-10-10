function checkDate(date){

    var checkDate = new Date(date).getTime();

    if(checkDate < 1725840001 || checkDate >= 1726963199){
        return true;
    }
    else{
        return false;
    }
}

function checkName(name){

    const regex = /[^A-Za-z0-9]/;
    if (regex.test(name)){
        return false;
    }
        
    else{
        return true;
    }

}

module.exports = {
    checkDate,
    checkName
};