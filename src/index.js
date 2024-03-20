import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, RedirectFunction, BrowserRouter as Router, BrowserRouter, Redirect} from 'react-router-dom';
import { RoutesComponent } from 'routes';

import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import UserProvider from 'contexts/UserContext';
import './App.css'
import './interceptors/axios'


  

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<UserProvider>
					<RoutesComponent/>
				</UserProvider>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
