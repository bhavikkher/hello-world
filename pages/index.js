import Form from '../components/Form/Form';
import Form2 from '../components/Form2/Form2';
import AdminLayout from '../components/layout/AdminLayout/AdminLayout';

function Home() {
	return (
		<>
			{/* <Form /> */}
			<Form2 />
		</>
	)
}
Home.Layout = AdminLayout
export default Home;