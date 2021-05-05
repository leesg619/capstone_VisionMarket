import Dashboard from './Dashboard';
import Store from './Store';

function Chat() {
  return (
    <div className="Chat">
      <Store>
      <Dashboard />
      </Store>
    </div>
  );
}

export default Chat;