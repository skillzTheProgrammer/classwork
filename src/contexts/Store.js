const { default: Auth } = require("./Auth");
const { default: Student } = require("./User");

function Store({children}){
    return(
        <Auth>
        <Student>
            {children}
        </Student>
        </Auth>
    )
}

export default Store