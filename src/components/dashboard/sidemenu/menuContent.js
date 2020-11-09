import dashboard from '../../../assets/icons/dashboard.svg'
import courses from '../../../assets/icons/courses.svg'
import calender from '../../../assets/icons/calender.svg'
import messages from '../../../assets/icons/messages.svg'
import notes from '../../../assets/icons/notes.svg'
import account from '../../../assets/icons/account.svg'
import setting from '../../../assets/icons/setting.svg'


export const MenuData = [
    {
        name: 'Dashboard',
        icon: `${dashboard}`,
        isActive: true
    },
    {
        name: 'Courses',
        icon: `${courses}`,
        isActive: false
    },
    {
        name: 'Calender',
        icon: `${calender}`,
        isActive: false
    },
    {
        name: 'Messages',
        icon: `${messages}`,
        isActive: false
    },
    {
        name: 'Notes',
        icon: `${notes}`,
        isActive: false
    },
    {
        name: 'Account',
        icon: `${account}`,
        isActive: false
    },
    {
        name: 'Settings',
        icon: `${setting}`,
        isActive: false
    }
]