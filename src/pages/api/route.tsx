import { Route, Routes } from 'react-router-dom';
import { DashBoard } from '../DashBoard';
import { Notice } from '../Notice';

export default function Router() {
	return (
		<Routes>
			<Route path='/' element={<DashBoard />} />
			<Route path='/Notice' element={<Notice />} />
		</Routes>
	);
}
