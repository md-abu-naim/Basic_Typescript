// Union |

type userRole = 'Admin' | 'User'

const getUser = (role: userRole) => {
    if(role == 'Admin') return 'Admin Dashboad'
    else if (role == 'User') return 'User Dashboad'
    return 'Guest Mode'
}

getUser('Admin')



// Intersection &

type Employee = {
    id: number,
    name: string,
    phone: string
}

type Manager = {
    designation: string,
    teamSize: number
}

type EmployeeManager = Employee & Manager

const naimSaheb: EmployeeManager = {
    id: 123,
    name: 'Naim Saheb',
    phone: '1235',
    designation: 'manager',
    teamSize: 12
}