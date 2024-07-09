import {MultiChatSocket,MultiChatWindow,useMultiChatLogic} from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic('a7088ebd-9d69-4337-a65c-50bb00d44e56',props.user.username,props.user.secret);
  return (
    <div style={{height:'100vh'}}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height:'100vh'}}/>  
    </div>
  )
  };
  export default ChatsPage;