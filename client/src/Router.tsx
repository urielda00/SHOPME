import { Route, Routes } from 'react-router-dom';

//Pages imports:
import CheckOut from './pages/CheckOut';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import UpdateItem from './pages/UpdateItem';
import DeleteItem from './pages/DeleteItem';
import CreateItem from './pages/CreateItem';
import ContactPage from './pages/ContactPage';
import NomatchPage from './pages/NomatchPage';
import RegisterPage from './pages/RegisterPage';
import ThankYouPage from './pages/ThankYouPage';
import ResetPassPage from './pages/ResetPassPage';
import ForgetPassPage from './pages/ForgetPassPage';
import SingleItemPage from './pages/SingleItemPage';
import ProductsListPage from './pages/ProductsListPage';
import ProtectedRoute from './components/ProtectedRoutes';
import AdminProtectedRoutes from './components/AdminProtectedRoutes';

const Router = () => {
	return (
		<Routes>
			<Route path='/' element={<HomePage />} />
			<Route path='/cart' element={<CartPage />} />
			<Route path='/login' element={<LoginPage />} />
			<Route path='/checkout' element={<CheckOut />} />
			<Route path='/contact' element={<ContactPage />} />
			<Route path='/register' element={<RegisterPage />} />
			<Route path='/thankYou' element={<ThankYouPage />} />
			<Route path='/forgetPass' element={<ForgetPassPage />} />
			<Route path='/productsList' element={<ProductsListPage />} />
			<Route path='/product/:productId' element={<SingleItemPage />} />
			<Route path='/resetPass/:id/:token' element={<ResetPassPage />} />
			<Route
				path='/user'
				element={
					<ProtectedRoute>
						<UserPage />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/createItem'
				element={
					<AdminProtectedRoutes>
						<CreateItem />
					</AdminProtectedRoutes>
				}
			/>
			<Route
				path='/updateItem'
				element={
					<AdminProtectedRoutes>
						<UpdateItem />
					</AdminProtectedRoutes>
				}
			/>
			<Route
				path='/deleteItem'
				element={
					<AdminProtectedRoutes>
						<DeleteItem />
					</AdminProtectedRoutes>
				}
			/>

			<Route path='*' element={<NomatchPage />} />
		</Routes>
	);
};

export default Router;
