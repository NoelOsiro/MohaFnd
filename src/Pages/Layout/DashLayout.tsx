import React, { useEffect, useState } from 'react';
import { Amplify} from 'aws-amplify';
import '@aws-amplify/ui-react/styles.css';
import { NavBar, ProfileCard, SideBar } from '../../ui-components';
import awsExports from '../../aws-exports';
Amplify.configure(awsExports);

interface Iprops {
    children:React.ReactNode
}

const NavStyles: React.CSSProperties = {
    position: "absolute",
    top: "0",
    right:"0",
    left:"385px",
    overflow:"hidden"

}
const SidStyles: React.CSSProperties = {
    position: "sticky",
    top: "0",
    left:"0",
    width: "385px"

}
const Mainstyles: React.CSSProperties = {
    position: "absolute",
    right: "0",
    width: "672px",
    top: "97px",
}

const DashLayout: React.FC<Iprops> = (props:Iprops) => {
  return (
    <>
    <div style={NavStyles}>
        <NavBar/>
    </div>
    <div style={SidStyles}>
        <SideBar />
    </div>
    <main style={Mainstyles}>
        {props.children}
    </main>
</>
    
  );
};



export default DashLayout;
