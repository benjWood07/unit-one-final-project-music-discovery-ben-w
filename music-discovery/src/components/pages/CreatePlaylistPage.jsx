import { Link } from 'react-router';
import PlaylistForm from '../forms/PlaylistForm';
import '../styles/CreatePlaylistPage.css';

const CreatePlaylistPage = () => {
  return (
    <div>
      <h2>SoundScout</h2>
      <PlaylistForm />
    </div>
  );
}

export default CreatePlaylistPage;