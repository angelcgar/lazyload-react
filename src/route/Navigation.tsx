import {
	BrowserRouter,
	Navigate,
	NavLink,
	Route,
	Routes,
} from 'react-router-dom';

import { LogosVite } from '../assets/Logos';

export const Navigation = () => {
	return (
		<BrowserRouter>
			<div className="main-layout">
				<nav>
					<LogosVite />
					<ul>
						<li>
							<NavLink
								to={'/home'}
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/about'}
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								AboutHome
							</NavLink>
						</li>
						<li>
							<NavLink
								to={'/users'}
								className={({ isActive }) => (isActive ? 'nav-active' : '')}
							>
								Users
							</NavLink>
						</li>
					</ul>
				</nav>

				<Routes>
					<Route path="about" element={<h1>about</h1>} />
					<Route path="users" element={<h1>users</h1>} />
					<Route path="/home" element={<h1>unicio</h1>} />

					<Route path="/*" element={<Navigate to={'/home'} replace />} />
				</Routes>
			</div>
		</BrowserRouter>
	);
};
