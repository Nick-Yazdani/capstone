import How from "../components/How";
import Landing from "../components/Landing";
import Layout from "../components/Layout";
import Project from "../components/Project";

const Home = () => {
    return (
        <Layout>
            <Landing />
            <How />
            <Project />
        </Layout>
    )
}

export default Home;