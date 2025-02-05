// "use client";
// import React, { useEffect, useState } from "react";

// const ChatComponent: React.FC = () => {
//   const [messages, setMessages] = useState<any>({});
//   const [message, setMessage] = useState<string>("");
//   const [ws, setWs] = useState<WebSocket | null>(null);

//   useEffect(() => {
//     const socket = new WebSocket(
//       "ws://webhook.entitysport.com:8087/connect?token=35f1701edeebeabc332e2a1825a022e7"
//     );

//     socket.onmessage = (event) => {
//       const newMessage = event.data;
//       console.log("Received:", JSON.parse(newMessage).response);
//       // setMessages((prevMessages) => [...prevMessages, newMessage]);
//       const parsedMessage = JSON.parse(newMessage).response;
//       // setMessages((prevMessages) => [...prevMessages, newMessage]);
//       setMessages((prevMessages) => JSON.parse(newMessage));

//     };

//     socket.onopen = () => {
//       console.log("WebSocket Connected");
//     };

//     socket.onclose = () => {
//       console.log("WebSocket Disconnected");
//     };

//     socket.onerror = (error) => {
//       console.error("WebSocket Error:", error);
//     };

//     setWs(socket);

//     return () => {
//       socket.close();
//     };
//   }, []);

//   const matchOdds = JSON.stringify(messages?.response?.live_odds);
//   const matchScore = JSON.stringify(messages?.response?.live?.live_score);
//   const matchStatus = JSON.stringify(messages?.response?.live?.status_note);
//   const matchBattingTeam = JSON.stringify(
//     messages?.response?.live?.live_inning.batting_team_id
//   );

//   return (
//     <div>
//       <p>{matchOdds}</p>
//       <p>{matchScore}</p>
//       <p>{matchStatus}</p>
//       <p>{matchBattingTeam}</p>
//     </div>
//   );
// };

// export default ChatComponent;

"use client";
import React, { Component } from "react";

interface MatchData {
  matchId: string;
  matchOdds: string;
  matchRuns: string;
  matchOvers: string;
  matchWikets: string;
  matchStatus: string;
  matchBattingTeam: string;
  aa:string;
}

class MatchWebSocket extends Component<{}, MatchData> {
  private socket: WebSocket | null = null;

  constructor(props: {}) {
    super(props);
    this.state = {
      matchId: "",
      matchOdds: "",
      matchRuns: "",
      matchOvers: "",
      matchWikets: "",
      matchStatus: "",
      matchBattingTeam: "",
      aa:""
    };
  }

  componentDidMount() {
    // Open WebSocket connection
    this.socket = new WebSocket(
      "ws://webhook.entitysport.com:8087/connect?token=35f1701edeebeabc332e2a1825a022e7"
    );

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data).response;
      if(data?.match_id !== undefined && data?.match_id !== '' && data?.live?.live_inning?.batting_team_id !== undefined && data?.live?.live_inning?.batting_team_id !== '' ){
      
      console.log('11',JSON.stringify(data?.live?.live_inning?.batting_team_id));
      console.log(JSON.stringify(data?.live?.live_score));
      this.setState({
        matchId: JSON.parse(JSON.stringify(data?.match_id)),
        matchOdds: JSON.stringify(data?.live_odds),
        aa: data,
        matchBattingTeam: JSON.stringify(data?.live?.live_inning?.batting_team_id),
        matchRuns: JSON.stringify(data?.live?.live_score?.runs),
        matchOvers: JSON.stringify(data?.live?.live_score?.overs),
        matchWikets: JSON.stringify(data?.live?.live_score?.wickets),
        matchStatus: JSON.stringify(data?.live?.status_note),
      });

      // Update div elements based on class
     console.log('state', this.state);
        this.updateDivElements();
      }
      
    };

    this.socket.onopen = () => console.log("✅ WebSocket Connected");
    this.socket.onclose = () => console.log("❌ WebSocket Disconnected");
  }

  componentWillUnmount() {
    // Close WebSocket when the component unmounts
    if (this.socket) {
      this.socket.close();
    }
  }

  // Function to update all div elements with a specific class
  
  updateDivElements = () => {
    
    const elements = document.querySelectorAll(`.match${this.state.matchId}-${this.state.matchBattingTeam}`); // Select elements with class `match-info`
    console.log("st1-",elements);
    elements.forEach((element) => {
      element.innerHTML = `
        
             
              <span className="font-semibold" style="font-weight: 600;">${this.state.matchRuns}/${this.state.matchWikets}</span>
              <span className="text-[#909090] text-[13px]">
                
                (${this.state.matchOvers})
              </span>
              
              <img src="/assets/img/home/bat.png" style="height:13px;" className="h-[13px]" alt="" />
            
      `;
    });

    const statuselements = document.querySelectorAll(`.statusNote${this.state.matchId}`); // Select elements with class `match-info`
    console.log("st2-",statuselements);
    statuselements.forEach((element) => {
      element.innerHTML = ` <p>${JSON.parse(this.state.matchStatus)}</p>`;
    });
  };

  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default MatchWebSocket;
