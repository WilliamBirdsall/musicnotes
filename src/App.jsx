import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import About from './About';
import Create from './Create';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import Note from './Note';
import NoteLink from './NoteLink';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

const App = function() {
        return (
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <Header />
                    <main>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/create" element={<Create />} />
                            <Route path="/notes/:id" element={<Note />} />
                        </Routes>
                    </main>
                    <Footer />
                </QueryClientProvider>
            </BrowserRouter>
        );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
