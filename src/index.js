import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/css/App.css';
import { HashRouter, Route, Switch, RedirectFunction, BrowserRouter as Router, BrowserRouter, Redirect} from 'react-router-dom';
import AdminLayout from 'layouts/admin';
import RtlLayout from 'layouts/rtl';
import { ChakraProvider } from '@chakra-ui/react';
import theme from 'theme/theme';
import { ThemeEditorProvider } from '@hypertheme-editor/chakra-ui';
import Login from 'layouts/login/Login';
import './App.css'
import './interceptors/axios'

ReactDOM.render(
	<ChakraProvider theme={theme}>
		<React.StrictMode>
			<ThemeEditorProvider>
				<BrowserRouter>
					<Switch>
						<Route path={`/admin`} component={AdminLayout} />
						<Route path={`/rtl`} component={RtlLayout} />
						<Route path={`/login`} component={Login} />
						<Redirect from='/' to='/admin' />
					</Switch>
				</BrowserRouter>
			</ThemeEditorProvider>
		</React.StrictMode>
	</ChakraProvider>,
	document.getElementById('root')
);
