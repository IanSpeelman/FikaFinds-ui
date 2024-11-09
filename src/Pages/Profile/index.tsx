import { useNavigate } from "react-router-dom"
import { user } from "../../utils/types"
import { useEffect } from "react"
import Hero from "../../Components/Hero"

type ProfileProps = {
    user: user | null
}

export default function Profile({ user }: ProfileProps) {
    const navigate = useNavigate()


    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user])



    return (
        <div className="container">
            <Hero header='Profile' size="medium" />
        </div>
    )
}
