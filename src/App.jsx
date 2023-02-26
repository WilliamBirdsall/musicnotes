import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { ModalContext } from './components/template/ModalContext';

import About from './components/pages/About';
import CreateNote from './components/note/CreateNote.jsx';
import EditNote from './components/note/EditNote.jsx';
import Modal from './components/template/Modal.jsx';
import NoteDetail from './components/note/NoteDetail.jsx';
import Footer from './components/template/Footer';
import Header from './components/template/Header';
import Home from './components/pages/Home';


const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
});

        return (
            <BrowserRouter>
                <QueryClientProvider client={queryClient}>
                    <ModalContext.Provider value={[modalContext, setModalContext]}>
                        <Modal />
                        <Header />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/about" element={<About />} />
                                <Route path="/create" element={<CreateNote />} />
                                <Route path="/edit/:id" element={<EditNote />} />
                                <Route path="/notes/:id" element={<NoteDetail />} />
                            </Routes>
                        </main>
                        <Footer />
                    </ModalContext.Provider>
                </QueryClientProvider>
            </BrowserRouter>
        );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);
