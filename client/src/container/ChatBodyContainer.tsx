
import { User } from '../types/UserTypes'
import { Message } from '../types/MessageTypes'

import { ChatBody } from '../components/Chat/ChatBody'

interface Props {
  loading: boolean,
  user: User,
  messages: Message[]
}

export const ChatBodyContainer: React.FC<Props> = ({ loading, messages, user }) => {

  return (
    <>
      {
        loading ?
          'loading'
          :
          <ChatBody messages={messages} user={user}/>
      }
    </>
  );
};

