import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import { StyledComponentsProvider } from 'styled-components';

const steps = [
    {
        id: '0',
        message: 'Hey hello!',
 
        // This calls the next id
        // i.e. id 1 in this case
        trigger: '1',
    }, {
        id: '1',
 
        // This message appears in
        // the bot chat bubble
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
 
        // Here we want the user
        // to enter input
        user: true, 
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
             
            // When we need to show a number of
            // options to choose we create alist
            // like this
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];
 
// Creating our own theme
const theme = {
    background: '#e0e0e0',
    headerBgColor: '#313bac',
    headerFontSize: '20px',
    headerFontColor: 'white',
    botBubbleColor: '#0F3789',
    botFontColor: 'white',
    userBubbleColor: '#3498db',
    userFontColor: 'white',
};
 
// Set some properties of the bot
const config = {
    botAvatar: "/images/avatar/chatbot.png",
    userAvatar:"/images/avatar/hero-image-1.png",
    floating: true,
};
 

const SimpleChatBot = () => {
  return (
    <div>
         <ThemeProvider theme={theme}>
                <ChatBot
                    //className='fixed bottom-12 left-12 !important'
                    headerTitle="Bot"
                    steps={steps}
                    {...config}
                    floatingStyle={{
                        zIndex: '10',
                    }}
                />
            </ThemeProvider>
    </div>
  )
}

export default SimpleChatBot
