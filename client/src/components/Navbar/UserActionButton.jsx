import React from 'react'

const UserActionButton = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        axios
            .get("http://localhost:5000/users")
            .then((res) => {
                setUser(res.data)
                setLoading(false)
            })
            .catch((err) => {
                setError("Error fetching users.")
                setLoading(false)
            })
    }, [])


    const handleLogout = () => {
        axios
            .post("http://localhost:5000/logout")
            .then((res) => {
                setUser(null)
                setLoading(false)
            })
            .catch((err) => {
                setError("Error logging out.")
                setLoading(false)
            })
    }

  return (
    <div>UserActionButton</div>
  )
}

export default UserActionButton