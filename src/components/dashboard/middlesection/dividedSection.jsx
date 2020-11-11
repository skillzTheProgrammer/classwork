import React from 'react'
import { DisplayButton, Displaytext, GeneralDiv, Profile, SmallText, Time } from '.'

function Course({name, course, text , session, status}) {

    // const [state, setstate] = useState("iclass")
    // const [age, setAge] = useState(1)

    // const login = async () => {
    //     let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${age}`)
    //     .then(res => res.json())

    //     console.log(response)
    //     setstate(response.title)
    // }

    // useEffect(() => {
    //     login()
    // }, [age])
    return (
        <GeneralDiv>
            <DisplayButton session={session}>{status}</DisplayButton>
            <Displaytext>{course}</Displaytext>
            <SmallText>{text}</SmallText>
            <Time>9:00 am to 5:00pm</Time>
            <Profile>
                <div></div>
                <p>{name}</p>
            </Profile>
            
        </GeneralDiv>
    )
}

export default Course
