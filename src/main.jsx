import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(

    <><Auth0Provider
        domain="dev-73y3t7dwltn1cjsd.us.auth0.com"
        clientId="z46VI3VYvd464rPNtaWLl3AWhPROKTBX"
        authorizationParams={{
            redirect_uri: window.location.origin
        }}
    ></Auth0Provider><App /></>
)

