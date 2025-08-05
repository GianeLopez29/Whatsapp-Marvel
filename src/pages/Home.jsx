import { Link } from 'react-router-dom';
import './Home.css';

const users = [
    { id: '1', name: 'Iron Man' },
    { id: '2', name: 'Captain America' },
    { id: '3', name: 'Black Widow' }
];

export default function Home() {
    return (
    <div className="home">
    <h1>Whatsapp Marvel</h1>
    <ul>
    {users.map(user => (
        <li key={user.id}>
        <Link to={`/chat/${user.id}`}>{user.name}</Link>
        </li>
        ))}
        </ul>
        </div>
        );
}
