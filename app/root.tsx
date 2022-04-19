import { useEffect } from 'react';
import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLocation, 
  useNavigate
} from "@remix-run/react";

import antdStyles from 'antd/dist/antd.css';
import styles from '~/styles/global.css';

export function links() {
  return [
    { rel: 'stylesheet', href: antdStyles },
    { rel: 'stylesheet', href: styles },
  ];
}

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "New Remix App",
  viewport: "width=device-width,initial-scale=1",
});


export default function App() {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    
    if(location.pathname === '/') {
      navigate("/home");
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
