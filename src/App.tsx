import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Layout} from 'antd';
import './App.css';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SpinPage} from "./components";

const { Header, Content } = Layout;

const Home = lazy(() => import('./pages/Home'));
const CharacterPage = lazy(() => import('./pages/CharacterPage'));

const App: React.FC = () => {
    const queryClient = new QueryClient()

    return (
        <QueryClientProvider client={queryClient}>
        <Router>
            <Layout className="App">
                <Header style={{ color: 'white', fontSize: '24px' }}>Star Wars Characters</Header>
                <Suspense fallback={<SpinPage />}>
                    <Content>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/character/:id" element={<CharacterPage />} />
                        </Routes>
                    </Content>
                </Suspense>
            </Layout>
        </Router>
        </QueryClientProvider>

    );
};

export default App;
