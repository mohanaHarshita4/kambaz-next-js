import { ReactNode } from "react"; 
export default function Highlight({ children }: { children: ReactNode }) { 
  return ( 
    <span id="wd-highlight" style={{ backgroundColor: "yellow", color: "red" }}> 
      {children} 
102 Copyright © 2025 Jose Annunziato. All rights reserved. 
    </span> 
  ); 
} 