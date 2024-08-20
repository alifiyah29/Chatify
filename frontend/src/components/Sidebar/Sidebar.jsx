import SearchInput from '../../components/Sidebar/SearchInput'
import Conversations from './Conversations';

const Sidebar = () => {
  return (
    <div>
        <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
    </div>
  );
};

export default Sidebar;
