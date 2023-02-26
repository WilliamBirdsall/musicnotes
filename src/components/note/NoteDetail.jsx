import { useContext, useState } from 'react';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';

import { NoteContext } from './NoteContext';

import getNote from '../../queries/getNote';
import CreateSectionButton from '../section/CreateSectionButton';
import Section from '../section/Section';

const NoteDetail = (props) => {
    const { id } = useParams();

    const note = useQuery(['note', id], getNote).data;

    if(!note) return <>No note found :(</>

    const sections = Object.values(note.sections);

    return (
        <NoteContext.Provider value={note}>
            <div className="note-detail">
                <h1 className="note-detail__heading">
                    <span className="note-detail__title">{note.title}</span>
                    -
                    <span className="note-detail__artist">{note.artist}</span>
                </h1>
                <div className="note-detail__meta">
                    <span className="note-detail__genre">{note.genre}</span>
                    <span className="note-detail__bpm">{note.bpm}</span>
                    <span className="note-detail__key">{note.noteKey}</span>
                    <span className="note-detail__scale">{note.scale}</span>
                </div>
                <h2>Sections</h2>
                <CreateSectionButton note={note} />
                <div className="section-list">
                    {sections.map(s => <Section key={s.id} section={s} noteId={id} />)}
                </div>
            </div>
        </NoteContext.Provider>
    );
};

export default NoteDetail;
