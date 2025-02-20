// lib/fetchMatches.ts
import { httpGet } from "@/lib/http";


export async function upcomingMatches() {

  const API_URL =  "https://rest.entitysport.com/exchange/matches?token=35f1701edeebeabc332e2a1825a022e7&status=1&per_page=10";

  


  const data = await httpGet(API_URL);
  const matches = data?.response?.items || [];
 
  console.log("coming from API upcoming_matches");
  return matches;
}

export async function liveMatches() {

  const API_URL = "https://rest.entitysport.com/exchange/matches?token=35f1701edeebeabc332e2a1825a022e7&status=3&per_page=10";

 

  
  const data = await httpGet(API_URL);
  const matches = data?.response?.items || [];
 
  console.log("coming from API live_matches");
  return matches;
}

export async function completedMatches() {

  const API_URL = "https://rest.entitysport.com/exchange/matches?token=35f1701edeebeabc332e2a1825a022e7&status=2&per_page=10";

  
  const data = await httpGet(API_URL);
  const matches = data?.response?.items || [];
 
  console.log("coming from API completed_matches");
  return matches;
}
