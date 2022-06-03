import axios from 'axios'
import { useEffect, useState } from 'react'

export default function UserAPI(token) {
    const [isLogged, setIsLogged] = useState(false)
    const [isAdmin, setIsAdmin] = useState(false)
    const [saveJob, setSaveJob] = useState([])
    const [users, setUsers] = useState([])


    useEffect(() => {
        if (token) {
            const getUser = async () => {
                try {
                    const res = await axios.get('/user/infor', {
                        headers: { Authorization: token }
                    })

                    setIsLogged(true)
                    res.data.role === 1 ? setIsAdmin(true) : setIsAdmin(false)
                    // console.log(res)
                    // setCart(res.data.cart)
                } catch (err) {
                    alert(err.response.data.msg)
                }
            }

            getUser()

        }
    }, [token])

    const addSaveJobs = async (recruitNew) => {
        if (!isLogged) return alert("Please login to continue buying")

        const check = saveJob.every(item => {
            return item._id !== recruitNew._id
        })

        if (check) {
            setSaveJob([...saveJob, { ...recruitNew, quantity: 1 }])

            // await axios.patch('/user/addsaveJobs', {saveJobs: [...saveJobs, {...recruiteNew, quantity: 1}]}, {
            //     headers: {Authorization: token}
            // })

        } else {
            alert("This job posting has been saved to my jobs")
        }
    }

    useEffect(() => {
        const getUsers = async () => {
            const res = await axios.get('/user/users')
            setUsers(res.data)
            // console.log(res)
        }
        getUsers()
    }, [])


    return {
        isLogged: [isLogged, setIsLogged],
        isAdmin: [isAdmin, setIsAdmin],
        saveJob: [saveJob, setSaveJob],
        addSaveJobs: addSaveJobs,
        users: [users, setUsers]

    }
}
