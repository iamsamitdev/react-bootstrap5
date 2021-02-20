import MainLayout from "../../components/layouts/MainLayout"

const Home = () => {
    return (
        <MainLayout>
            <h1 className="display-5 mb-3">Home</h1>
            {[...Array(10)].map((val,index) =>
                <p key={index}>{index+1} Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel dicta non et dolor, totam repellat libero qui laudantium laborum optio consectetur eius quaerat nobis quam culpa autem quidem officiis quod totam repellat libero qui laudantium laborum optio consectetur eius quaerat nobis quam culpa autem quidem officiis quod totam repellat libero qui laudantium laborum optio consectetur eius quaerat nobis quam culpa autem quidem officiis quod</p>
            )}
        </MainLayout>
    )
}

export default Home
