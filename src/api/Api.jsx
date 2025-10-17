import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function Cards() {

    const API_URL= import.meta.env.VITE_API_URL;

    const [users, setUsers] = useState([])
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    useEffect(()=>{
        fetch(`${API_URL}/users`)
        .then(response => response.json())
        .then(data => setUsers(data))
    }, [])